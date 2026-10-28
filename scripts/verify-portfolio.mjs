import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDir = path.resolve(projectRoot, process.argv[2] ?? 'dist')
const failures = []

function fail(message) {
  failures.push(message)
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(fullPath) : [fullPath]
  }))
  return files.flat()
}

function localReference(value) {
  if (!value || /^(?:[a-z]+:|\/\/|#)/i.test(value)) return null
  const pathname = decodeURIComponent(value.split(/[?#]/, 1)[0])
  return path.resolve(outputDir, pathname.replace(/^\//, ''))
}

try {
  const indexPath = path.join(outputDir, 'index.html')
  const index = await readFile(indexPath, 'utf8')
  const allFiles = await walk(outputDir)
  const fileSet = new Set(allFiles)
  const references = [...index.matchAll(/(?:src|href)=["']([^"']+)["']/gi)]
    .map((match) => match[1])
  const assetReferences = references.filter((value) => /\.(?:js|mjs|css)(?:[?#]|$)/i.test(value))

  if (assetReferences.length === 0) fail('index.html does not reference a built JavaScript or CSS asset')
  for (const reference of references) {
    const localPath = localReference(reference)
    if (localPath && !fileSet.has(localPath)) fail(`index.html references missing file: ${reference}`)
  }

  const faviconReferences = [...index.matchAll(/<link\b[^>]*\brel=["'][^"']*icon[^"']*["'][^>]*>/gi)]
    .map(([tag]) => tag.match(/\bhref=["']([^"']+)["']/i)?.[1])
    .filter(Boolean)
  if (!faviconReferences.length) fail('index.html has no favicon link')
  if (!faviconReferences.some((reference) => localReference(reference) && fileSet.has(localReference(reference)))) {
    fail('index.html has no favicon file in the build output')
  }

  const cvPath = path.join(outputDir, 'cv', 'Mukta_Choudhury_CV.pdf')
  try {
    const cv = await readFile(cvPath)
    if (cv.subarray(0, 5).toString('ascii') !== '%PDF-') fail('CV file does not have a valid PDF header')
  } catch {
    fail('CV is missing from dist/cv/Mukta_Choudhury_CV.pdf')
  }

  for (const file of allFiles) {
    if (!/\.(?:html|js|mjs|css)$/i.test(file)) continue
    const contents = await readFile(file, 'utf8')
    const relative = path.relative(outputDir, file)
    if (/\/src\/main\.jsx|@vite\/client|\/vite\.svg/.test(contents)) {
      fail(`development source reference found in ${relative}`)
    }
    if (/https?:\/\/fonts\.googleapis\.com|https?:\/\/fonts\.gstatic\.com/i.test(contents)) {
      fail(`external Google Fonts reference found in ${relative}`)
    }
  }

} catch (error) {
  if (error.code === 'ENOENT') fail(`build output is missing: ${outputDir}`)
  else throw error
}

if (failures.length) {
  console.error('Portfolio artifact verification failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Portfolio artifact verified: ${path.relative(projectRoot, outputDir)}`)
}
