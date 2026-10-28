import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy, Download, Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
import ProjectExplorer from './components/ProjectExplorer'
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

function readTheme() {
  try { return localStorage.getItem('portfolio-theme') === 'dark' } catch { return false }
}

function slugify(value) {
  return String(value || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function App() {
  const [dark, setDark] = useState(readTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light') } catch { /* Storage may be disabled. */ }
  }, [dark])

  const trailProjects = Array.isArray(projects) ? projects.slice(0, 5) : []
  const currentProject = trailProjects[activeStep]
  const currentTitle = currentProject?.title || currentProject?.name || 'ComplianceHub'
  const currentSlug = currentProject?.slug || slugify(currentTitle)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
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
            <h1 id="hero-title">Making AI<br />safer to <em>use.</em></h1>
            <p className="hero-intro">I investigate how AI and software behave under pressure, then turn what I learn into clear fixes, stronger controls and useful evidence.</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="text-link" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={15} /></a></div>
            <p className="hero-location">Based in Amersham, UK <span aria-hidden="true">·</span> Open to security opportunities</p>
          </div>
          <div className="hero-art" aria-label="A security review maps input, trust boundaries, and safe action" role="img">
            <div className="diagram-heading"><span>FIELD NOTE 01</span><span>AI SYSTEM REVIEW</span></div>
            <svg className="review-diagram" viewBox="0 0 560 410" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path className="diagram-line" d="M78 205H192M368 205H480M280 84V153M280 257V326" />
              <path className="diagram-dash" d="M196 205H364" />
              <circle className="diagram-ring" cx="280" cy="205" r="88" />
              <circle className="diagram-ring diagram-ring-inner" cx="280" cy="205" r="65" />
              <rect className="diagram-node node-input" x="25" y="171" width="108" height="68" rx="14" />
              <rect className="diagram-node node-action" x="427" y="171" width="108" height="68" rx="14" />
              <rect className="diagram-node node-observe" x="222" y="18" width="116" height="68" rx="14" />
              <rect className="diagram-node node-control" x="222" y="326" width="116" height="68" rx="14" />
              <path className="diagram-core" d="M280 177L306 191V220L280 234L254 220V191L280 177Z" />
              <path className="diagram-core-mark" d="M269 205L277 213L292 196" />
              <text className="diagram-label" x="79" y="200" textAnchor="middle">INPUT</text><text className="diagram-small" x="79" y="218" textAnchor="middle">intent</text>
              <text className="diagram-label" x="481" y="200" textAnchor="middle">ACTION</text><text className="diagram-small" x="481" y="218" textAnchor="middle">verified</text>
              <text className="diagram-label" x="280" y="47" textAnchor="middle">TRUST BOUNDARY</text><text className="diagram-small" x="280" y="65" textAnchor="middle">inspect</text>
              <text className="diagram-label" x="280" y="355" textAnchor="middle">HUMAN REVIEW</text><text className="diagram-small" x="280" y="374" textAnchor="middle">approval</text>
              <text className="diagram-side-note" x="280" y="302" textAnchor="middle">evidence follows the action</text>
            </svg>
            <div className="diagram-foot"><span>Map the path.</span><span>Verify the control.</span></div>
            <span className="art-index" aria-hidden="true">01</span>
          </div>
        </section>

        <section className="trail-section" aria-labelledby="trail-title">
          <div className="page-wrap trail-layout">
            <div className="trail-intro"><p className="eyebrow">A guided project trail</p><h2 id="trail-title">Follow the<br /><em>evidence.</em></h2><p>Pick a stop to preview a piece of my work, then open its full project notes below.</p><div className="trail-controls"><button className="round-control" type="button" onClick={() => changeStep(activeStep - 1)} aria-label="Previous project"><ArrowLeft /></button><button className="round-control" type="button" onClick={() => changeStep(activeStep + 1)} aria-label="Next project"><ArrowRight /></button><span className="trail-count">{String(activeStep + 1).padStart(2, '0')} <i>/</i> {String(Math.max(trailProjects.length, 1)).padStart(2, '0')}</span></div></div>
            <div className="trail-card" aria-live="polite">
              <div className="trail-map" aria-label="Choose a project stop">
                <svg viewBox="0 0 600 130" role="img" aria-label="A path connecting project stops"><path className="trail-path" d="M36 74C135 74 115 34 220 45S331 103 422 69S510 39 564 63" /></svg>
                {trailProjects.map((project, index) => <button key={project.slug || project.id || index} className={`trail-stop ${activeStep === index ? 'is-active' : ''}`} style={{ '--stop-index': index }} type="button" aria-label={`Preview ${project.title || project.name || `project ${index + 1}`}`} aria-pressed={activeStep === index} onClick={() => setActiveStep(index)}><span>{String(index + 1).padStart(2, '0')}</span></button>)}
              </div>
              <div className="trail-detail"><div><p className="eyebrow">Project stop {String(activeStep + 1).padStart(2, '0')}</p><h3>{currentTitle}</h3><p>{currentProject?.summary || currentProject?.description || 'Security work shaped around practical controls, clear evidence and safer software.'}</p></div><a className="round-link" href={`#project-${currentSlug}`} aria-label={`Jump to ${currentTitle} project details`}><ArrowUpRight /></a></div>
            </div>
          </div>
        </section>

        <section className="work-section page-wrap section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 id="work-title">Projects with a<br /><em>security purpose.</em></h2></div><p>Builds and case studies across AI security, application security, privacy and assurance.</p></div>
          <ProjectExplorer />
        </section>

        <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
          <div className="page-wrap"><div className="section-heading"><div><p className="eyebrow">Experience</p><h2 id="experience-title">Work shaped by<br /><em>curiosity.</em></h2></div><p>From hands-on testing to helping teams understand what to fix and why it matters.</p></div>
            <div className="experience-list">{roles.map((item, index) => <article className="experience-item" key={item.company}><div className="experience-number">0{index + 1}</div><div className="experience-main"><div className="experience-title-row"><div><h3>{item.role}</h3><p className="experience-company">{item.company}</p></div><span className="experience-date">{item.date}</span></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div><span className="experience-place">{item.place}</span></article>)}</div>
          </div>
        </section>

        <section className="about-section page-wrap section-pad" id="about" aria-labelledby="about-title">
          <div className="about-heading"><p className="eyebrow">A little context</p><h2 id="about-title">Technical depth.<br /><em>Human clarity.</em></h2><p>I work across investigation, engineering and assurance. My focus is making security findings useful to the people who need to act on them.</p></div>
          <div className="about-details"><div className="skills-block"><p className="eyebrow">Working toolkit</p>{skillGroups.map(group => <div className="skill-row" key={group.label}><h3>{group.label}</h3><p>{group.items.join(' · ')}</p></div>)}<p className="skills-note">Also familiar with AWS development workflows and AI-assisted software development.</p></div>
            <div className="education-block"><p className="eyebrow">Education & learning</p><article className="education-entry"><span className="education-year">2026</span><div><h3>PG Diploma, Cyber Security and Artificial Intelligence</h3><p>University of Sheffield</p></div></article><article className="education-entry"><span className="education-year">2023</span><div><h3>Bachelor of Computer Applications</h3><p>Amity University</p></div></article><div className="training-note"><h3>Current learning</h3><p>Azure Fundamentals training complete. AZ-900 exam not yet passed. TryHackMe Pre Security and SOC Level 1 learning paths, plus the AIG Shields Up Cybersecurity Job Simulation.</p><p>Preparing for CompTIA Security+ and AWS Certified Cloud Practitioner exams. Neither certification has been earned.</p></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="page-wrap contact-inner"><div><p className="eyebrow">Contact</p><h2 id="contact-title">Let’s make<br /><em>safer systems.</em></h2><p className="contact-copy">Interested in AI security, application security or a thoughtful conversation about risk? I’d be glad to hear from you.</p></div><div className="contact-card"><p>Reach me directly</p><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={18} /></a><div className="contact-actions"><button type="button" className="button button-lime" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Copied' : 'Copy email'}</button><a className="button button-outline" href={cvUrl} download><Download size={16} /> Download CV</a></div><div className="social-links"><a href="https://github.com/mukta2701" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/mukta-choudhury/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="page-wrap footer-inner"><a className="wordmark" href="#top"><span className="wordmark-mark">MC</span><span>Mukta Choudhury</span></a><p>AI security & application security · Amersham, UK</p><a href="#top" className="back-top">Back to top ↑</a></div></footer>
    </div>
  )
}

export default App
