import { useEffect, useMemo, useState } from 'react'
import { projects } from '../data/projects.js'

const filters = [
  'All',
  'AI security',
  'Privacy',
  'Governance',
  'Threat intelligence',
  'Threat modelling',
  'Foundations',
]

const searchableText = (project) =>
  [
    project.title,
    project.category,
    project.summary,
    project.problem,
    project.contribution,
    project.scope,
    project.status,
    ...(project.technologies ?? []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLocaleLowerCase()

function ProjectExplorer() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const revealHashTarget = () => {
      const slug = window.location.hash.slice('#project-'.length)
      if (!window.location.hash.startsWith('#project-')) return
      if (!projects.some((project) => project.slug === slug)) return

      setActiveFilter('All')
      setQuery('')
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(`project-${slug}`)?.scrollIntoView()
        })
      })
    }

    revealHashTarget()
    window.addEventListener('hashchange', revealHashTarget)
    return () => window.removeEventListener('hashchange', revealHashTarget)
  }, [])

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()

    return projects
      .map((project, index) => ({ project, index }))
      .filter(({ project }) => {
        const matchesFilter =
          activeFilter === 'All' || project.category === activeFilter
        const matchesQuery =
          !normalizedQuery || searchableText(project).includes(normalizedQuery)

        return matchesFilter && matchesQuery
        })
  }, [activeFilter, query])

  return (
    <section className="project-explorer" aria-label="Project explorer">
      <div className="project-toolbar">
        <label className="search-field">
          <span>Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by project, topic, or technology"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')}>
              Clear search
            </button>
          )}
        </label>

        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => (
            <button
              key={filter}
              className="filter-button"
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="result-count" aria-live="polite" aria-atomic="true">
          {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}
        </p>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="project-grid">
          {visibleProjects.map(({ project, index }) => (
            <article
              className="project-card"
              id={`project-${project.slug}`}
              key={project.slug}
            >
              <div className="project-meta">
                <span className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="project-status">{project.status}</span>
              </div>

              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <ul className="project-tags" aria-label={`${project.title} topics`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              {project.links?.length > 0 && (
                <ul className="project-links">
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <a className="project-permalink" href={`#project-${project.slug}`}>
                Permalink
              </a>

              <details className="project-detail">
                <summary>Case study</summary>
                <div>
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                  <h4>Contribution</h4>
                  <p>{project.contribution}</p>
                  <h4>Scope</h4>
                  <p>{project.scope}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state" role="status">
          <p>No projects match your search and filters.</p>
          <button
            type="button"
            onClick={() => {
              setActiveFilter('All')
              setQuery('')
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectExplorer
