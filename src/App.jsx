import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy, Download, Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
import ProjectExplorer from './components/ProjectExplorer'
import HeroDiagram from './components/HeroDiagram'
import { BugCounter, HiddenBug, Marquee, Mascot, ScrollProgress, bugIds, burstConfetti, prefersReducedMotion, readFoundBugs, saveFoundBugs, sayByte, useKonami, useReveal, useSpotlight } from './components/Playful'
import { projects } from './data/projects'

const email = 'mchoudhury1004@gmail.com'
const cvUrl = '/cv/Mukta_Choudhury_CV.pdf'

const roles = [
  {
    company: 'Adtecher', role: 'Part-time AI Security & Compliance Analyst', date: 'Feb 2026 – now · Part-time', place: 'GenAI SaaS',
    points: [
      'Assess application and API security across tenant isolation, access control, secrets and cloud configuration. Turn findings into prioritised fixes and traceable control evidence.',
      'Evaluate agent workflows for prompt injection, sensitive-context disclosure, unsafe output rendering and human approval controls.',
      'Developed ComplianceHub into an internal tool for tracking controls, owners, evidence and remediation.',
      'Exercise GitHub integration recovery and replay paths, tracing notifications across provider events, application state and delivery queues.',
    ],
  },
  {
    company: 'Future Interns', role: 'Cyber Security Intern', date: 'Nov – Dec 2025', place: 'Application security',
    points: [
      'Assessed web applications with Burp Suite, OWASP ZAP and Nikto, translating SQL injection, XSS and access-control findings into remediation guidance.',
      'Analysed more than 1,000 authentication and network events in Splunk and built an AES-encrypted Flask file-handling module.',
    ],
  },
  {
    company: 'Vehere', role: 'Pre-Sales Intern', date: 'Mar – May 2025', place: 'Network security',
    points: ['Set up IDS/IPS demonstrations, explained detection behaviour and translated customer needs into documented technical actions.'],
  },
  {
    company: 'University of Sheffield', role: 'Student Support Worker', date: 'Sep 2024 – Jun 2025', place: 'Student support',
    points: ['Resolved accessibility and technical support needs, coordinated IT escalations and made technical guidance clear to non-technical users.'],
  },
]

const skillGroups = [
  {
    label: 'AI & application security',
    items: [
      'Adversarial testing',
      'Prompt injection',
      'Agent controls',
      'API security',
      'Privacy review',
      'Tenant isolation',
    ],
  },
  {
    label: 'Engineering',
    items: ['Python', 'TypeScript', 'Next.js', 'FastAPI', 'Flask', 'PostgreSQL', 'Docker', 'GitHub Actions'],
  },
  {
    label: 'Security & assurance',
    items: ['Burp Suite', 'OWASP ZAP', 'Splunk', 'Prowler integration', 'CVSS', 'EPSS', 'CISA KEV', 'STRIDE', 'ISO 27001 readiness'],
  },
]

const tickerItems = ['Prompt injection', 'Threat modelling', 'API security', 'Agent controls', 'Privacy review', 'Tenant isolation', 'Evidence trails', 'Human review', 'Python', 'TypeScript']

function readTheme() {
  try {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved === 'dark'
  } catch { /* Storage may be disabled. */ }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

function slugify(value) {
  return String(value || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function App() {
  const [dark, setDark] = useState(readTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [copied, setCopied] = useState(false)
  const [foundBugs, setFoundBugs] = useState(readFoundBugs)
  const [reducedMotion] = useState(prefersReducedMotion)
  const trailPathRef = useRef(null)
  const packetRef = useRef(null)
  const packetLength = useRef(0)
  const [stopPoints, setStopPoints] = useState([])

  useReveal()
  useSpotlight()
  useKonami(() => {
    burstConfetti(window.innerWidth / 2, window.innerHeight / 3, 60)
    sayByte('Access granted! You found the secret. 🔓', 'cheer')
  })

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#20241f' : '#f5f1e8')
    try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light') } catch { /* Storage may be disabled. */ }
  }, [dark])

  const trailProjects = Array.isArray(projects) ? projects.slice(0, 5) : []
  const currentProject = trailProjects[activeStep]
  const currentTitle = currentProject?.title || currentProject?.name || 'ComplianceHub'
  const currentSlug = currentProject?.slug || slugify(currentTitle)

  // Place each stop on the drawn path so the buttons and the line always agree.
  useLayoutEffect(() => {
    const path = trailPathRef.current
    if (!path || !trailProjects.length) return
    const total = path.getTotalLength()
    const last = Math.max(trailProjects.length - 1, 1)
    setStopPoints(trailProjects.map((_, index) => {
      const length = total * (index / last)
      const point = path.getPointAtLength(length)
      return { x: (point.x / 600) * 100, y: (point.y / 130) * 100, length }
    }))
  }, [trailProjects.length])

  // Glide the packet along the path to the active stop.
  useEffect(() => {
    const path = trailPathRef.current
    const packet = packetRef.current
    const target = stopPoints[activeStep]?.length
    if (!path || !packet || target === undefined) return
    const place = (length) => {
      const point = path.getPointAtLength(length)
      packet.style.left = `${(point.x / 600) * 100}%`
      packet.style.top = `${(point.y / 130) * 100}%`
      packetLength.current = length
    }
    const from = packetLength.current
    if (reducedMotion || from === target) { place(target); return }
    let frame = 0
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / 750, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      place(from + (target - from) * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [activeStep, stopPoints, reducedMotion])

  function catchBug(id, event) {
    if (foundBugs.includes(id)) return
    const next = [...foundBugs, id]
    setFoundBugs(next)
    saveFoundBugs(next)
    const rect = event.currentTarget.getBoundingClientRect()
    const left = bugIds.length - next.length
    if (left === 0) {
      burstConfetti(window.innerWidth / 2, window.innerHeight / 3, 80)
      sayByte('All five bugs caught! You’re a certified bug hunter. 🏅', 'cheer')
    } else {
      burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 14)
      sayByte(next.length === 1 ? `You caught a bug! ${left} more are hiding… 🐞` : `Nice catch! Only ${left} left.`, 'cheer')
    }
  }

  function resetBugs() {
    setFoundBugs([])
    saveFoundBugs([])
    sayByte('The bugs are back. Happy hunting! 🔍', 'search')
  }

  async function copyEmail(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    try {
      await navigator.clipboard.writeText(email)
      burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  function changeStep(next) {
    if (!trailProjects.length) return
    setActiveStep((next + trailProjects.length) % trailProjects.length)
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mukta Choudhury, home"><span className="wordmark-mark">MC</span><span>Mukta Choudhury</span></a>
        <button className="mobile-menu-toggle icon-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          <a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a>
          <a className="nav-cv" href={cvUrl} download><Download size={15} aria-hidden="true" /> CV</a>
        </nav>
        <button className="theme-toggle icon-button" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} title={`Switch to ${dark ? 'light' : 'dark'} theme`}>{dark ? <Sun /> : <Moon />}</button>
      </header>

      <main id="main">
        <section className="hero page-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> AI security · Application security · Assurance</p>
            <h1 id="hero-title">Making AI<br />safer to <em className="squiggle-word">use.<svg className="squiggle" viewBox="0 0 120 14" preserveAspectRatio="none" aria-hidden="true"><path d="M3 9C17 3 25 13 39 7S61 3 75 8 99 12 117 5" /></svg></em></h1>
            <p className="hero-intro">I investigate how AI and software behave under pressure, then turn what I learn into clear fixes, stronger controls and useful evidence.</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="text-link" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={15} /></a></div>
            <p className="hero-location">Based in Amersham, UK <span aria-hidden="true">·</span> Open to security opportunities</p>
          </div>
          <HeroDiagram reducedMotion={reducedMotion}><HiddenBug id="hero" found={foundBugs} onFind={catchBug} className="bug-hero" /></HeroDiagram>
        </section>

        <Marquee items={tickerItems} />

        <section className="trail-section" aria-labelledby="trail-title">
          <div className="page-wrap trail-layout">
            <div className="trail-intro"><p className="eyebrow">A guided project trail</p><h2 id="trail-title">Follow the<br /><em>evidence.</em></h2><p>Pick a stop to preview a piece of my work, then open its full project notes below.</p><div className="trail-controls"><button className="round-control" type="button" onClick={() => changeStep(activeStep - 1)} aria-label="Previous project"><ArrowLeft /></button><button className="round-control" type="button" onClick={() => changeStep(activeStep + 1)} aria-label="Next project"><ArrowRight /></button><span className="trail-count">{String(activeStep + 1).padStart(2, '0')} <i>/</i> {String(Math.max(trailProjects.length, 1)).padStart(2, '0')}</span></div></div>
            <div className="trail-card" data-reveal aria-live="polite"><HiddenBug id="trail" found={foundBugs} onFind={catchBug} className="bug-trail" />
              <div className="trail-map" aria-label="Choose a project stop">
                <svg viewBox="0 0 600 130" preserveAspectRatio="none" aria-hidden="true"><path className="trail-path" ref={trailPathRef} vectorEffect="non-scaling-stroke" d="M36 74C135 74 115 34 220 45S331 103 422 69S510 39 564 63" /></svg>
                <span className="trail-packet" ref={packetRef} aria-hidden="true" />
                {trailProjects.map((project, index) => <button key={project.slug || project.id || index} className={`trail-stop ${activeStep === index ? 'is-active' : ''}`} style={stopPoints[index] ? { left: `${stopPoints[index].x}%`, top: `${stopPoints[index].y}%` } : { '--stop-index': index }} type="button" aria-label={`Preview ${project.title || project.name || `project ${index + 1}`}`} aria-pressed={activeStep === index} onClick={() => setActiveStep(index)}><span>{String(index + 1).padStart(2, '0')}</span></button>)}
              </div>
              <div className="trail-detail"><div key={activeStep}><p className="eyebrow">Project stop {String(activeStep + 1).padStart(2, '0')}</p><h3>{currentTitle}</h3><p>{currentProject?.summary || currentProject?.description || 'Security work shaped around practical controls, clear evidence and safer software.'}</p></div><a className="round-link" href={`#project-${currentSlug}`} aria-label={`Jump to ${currentTitle} project details`}><ArrowUpRight /></a></div>
            </div>
          </div>
        </section>

        <section className="work-section page-wrap section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading" data-reveal><div><p className="eyebrow">Selected work <HiddenBug id="work" found={foundBugs} onFind={catchBug} className="bug-inline" /></p><h2 id="work-title">Projects with a<br /><em>security purpose.</em></h2></div><p>Builds and case studies across AI security, application security, privacy and assurance.</p></div>
          <ProjectExplorer />
        </section>

        <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
          <div className="page-wrap"><div className="section-heading" data-reveal><div><p className="eyebrow">Experience</p><h2 id="experience-title">Work shaped by<br /><em>curiosity.</em></h2></div><p>From hands-on testing to helping teams understand what to fix and why it matters.</p></div>
            <div className="experience-list">{roles.map((item, index) => <article className="experience-item" data-reveal style={{ '--reveal-delay': `${index * 70}ms` }} key={item.company}><div className="experience-number">0{index + 1}</div><div className="experience-main"><div className="experience-title-row"><div><h3>{item.role}</h3><p className="experience-company">{item.company}</p></div><span className="experience-date">{item.date}</span></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div><span className="experience-place">{item.place}</span></article>)}</div>
          </div>
        </section>

        <section className="about-section page-wrap section-pad" id="about" aria-labelledby="about-title">
          <div className="about-heading" data-reveal><p className="eyebrow">A little context</p><h2 id="about-title">Technical depth.<br /><em>Human clarity.</em></h2><p>I work across investigation, engineering and assurance. My focus is making security findings useful to the people who need to act on them.</p></div>
          <div className="about-details" data-reveal><div className="skills-block"><p className="eyebrow">Working toolkit</p>{skillGroups.map(group => <div className="skill-row" key={group.label}><h3>{group.label}</h3><p>{group.items.join(' · ')}</p></div>)}<p className="skills-note">Also familiar with AWS development workflows and AI-assisted software development.</p></div>
            <div className="education-block"><p className="eyebrow">Education & learning</p><article className="education-entry"><span className="education-year">2026</span><div><h3>PG Diploma, Cyber Security and Artificial Intelligence</h3><p>University of Sheffield</p></div></article><article className="education-entry"><span className="education-year">2023</span><div><h3>Bachelor of Computer Applications</h3><p>Amity University</p></div></article><div className="training-note"><HiddenBug id="about" found={foundBugs} onFind={catchBug} className="bug-about" /><h3>Current learning</h3><p>Azure Fundamentals training complete. AZ-900 exam not yet passed. TryHackMe Pre Security and SOC Level 1 learning paths, plus the AIG Shields Up Cybersecurity Job Simulation.</p><p>Preparing for CompTIA Security+ and AWS Certified Cloud Practitioner exams. Neither certification has been earned.</p></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="page-wrap contact-inner"><div><p className="eyebrow">Contact</p><h2 id="contact-title">Let’s make<br /><em>safer systems.</em></h2><p className="contact-copy">Interested in AI security, application security or a thoughtful conversation about risk? I’d be glad to hear from you.</p></div><div className="contact-card spotlight" data-reveal>{copied && <span className="copy-stamp" aria-hidden="true">Copied!</span>}<p>Reach me directly</p><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={18} /></a><div className="contact-actions"><button type="button" className="button button-lime" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Copied' : 'Copy email'}</button><a className="button button-outline" href={cvUrl} download><Download size={16} /> Download CV</a></div><div className="social-links"><a href="https://github.com/mukta2701" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/mukta-choudhury/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a></div></div></div></section>
      </main>
      <BugCounter found={foundBugs} onReset={resetBugs} />
      <Mascot dark={dark} />
      <footer className="site-footer"><div className="page-wrap footer-inner"><a className="wordmark" href="#top"><span className="wordmark-mark">MC</span><span>Mukta Choudhury</span></a><p>AI security & application security · Amersham, UK <span className="footer-hint">· psst, try ↑↑↓↓←→←→BA</span></p><HiddenBug id="footer" found={foundBugs} onFind={catchBug} className="bug-footer" /><a href="#top" className="back-top">Back to top ↑</a></div></footer>
    </div>
  )
}

export default App
