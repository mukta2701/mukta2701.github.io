import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const confettiColors = ['#d8f36a', '#718519', '#f5f1e8', '#20241f', '#ffb4a2', '#9ad1d4']

// Bursts small paper shapes from a point on the screen. Purely decorative.
export function burstConfetti(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 28) {
  if (prefersReducedMotion()) return
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span')
    piece.className = 'confetti-piece'
    piece.setAttribute('aria-hidden', 'true')
    const angle = Math.random() * Math.PI * 2
    const distance = 60 + Math.random() * 140
    piece.style.left = `${x}px`
    piece.style.top = `${y}px`
    piece.style.background = confettiColors[i % confettiColors.length]
    piece.style.setProperty('--dx', `${Math.cos(angle) * distance}px`)
    piece.style.setProperty('--dy', `${Math.sin(angle) * distance - 60}px`)
    piece.style.setProperty('--spin', `${Math.random() * 720 - 360}deg`)
    if (i % 3 === 0) piece.style.borderRadius = '50%'
    document.body.appendChild(piece)
    piece.addEventListener('animationend', () => piece.remove())
  }
}

export function ScrollProgress() {
  const barRef = useRef(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      barRef.current?.style.setProperty('--progress', max > 0 ? String(window.scrollY / max) : '0')
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame) }
  }, [])
  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />
}

export function Marquee({ items }) {
  const row = items.map(item => <span key={item}>{item}<i>✦</i></span>)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{row}{row}</div>
    </div>
  )
}

// Adds .is-visible to [data-reveal] elements as they scroll into view.
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    targets.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// Lets any element with .spotlight track the pointer through --mx/--my.
export function useSpotlight() {
  useEffect(() => {
    const onMove = (event) => {
      const card = event.target.closest?.('.spotlight')
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      card.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}

const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export function useKonami(onUnlock) {
  const callback = useRef(onUnlock)
  callback.current = onUnlock
  useEffect(() => {
    let position = 0
    const onKey = (event) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      position = key === konami[position] ? position + 1 : (key === konami[0] ? 1 : 0)
      if (position === konami.length) { position = 0; callback.current() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}

const byteLines = [
  'Hi! I’m Byte, Mukta’s security sidekick.',
  'Psst… five tiny bugs are hiding on this page.',
  'Try sending a prompt injection through the diagram!',
  'I guard trust boundaries. And snacks.',
  'Never paste secrets into a prompt!',
  'Least privilege, maximum cuddles.',
  'Hint: ↑ ↑ ↓ ↓ ← → ← → B A',
]

// Anything on the page can make Byte talk. Moods: happy, cheer, search.
export function sayByte(text, mood = 'happy') {
  window.dispatchEvent(new CustomEvent('byte:say', { detail: { text, mood } }))
}

const sleepAfter = 30000

export function Mascot({ dark }) {
  const [text, setText] = useState('')
  const [mood, setMood] = useState('idle')
  const [nextLine, setNextLine] = useState(0)
  const [bounce, setBounce] = useState(0)
  const [blink, setBlink] = useState(false)
  const [ducking, setDucking] = useState(false)
  const pupils = useRef(null)
  const bodyRef = useRef(null)
  const moodRef = useRef(mood)
  moodRef.current = mood

  function say(line, nextMood = 'happy') {
    setText(line)
    setMood(nextMood)
    setBounce(b => b + 1)
  }

  useEffect(() => {
    const onSay = (event) => say(event.detail.text, event.detail.mood)
    const onToggle = (event) => {
      if (event.target.matches?.('.project-detail') && event.target.open) say('Ooh, a case study! Good pick. ✨', 'cheer')
    }
    window.addEventListener('byte:say', onSay)
    document.addEventListener('toggle', onToggle, true)
    return () => { window.removeEventListener('byte:say', onSay); document.removeEventListener('toggle', onToggle, true) }
  }, [])

  // Speech and short moods fade back to idle. Sleep lasts until something wakes Byte.
  useEffect(() => {
    if (mood === 'sleep' || (!text && mood === 'idle')) return
    const timer = window.setTimeout(() => { setText(''); setMood('idle') }, 4200)
    return () => window.clearTimeout(timer)
  }, [text, mood, bounce])

  // Doze off when nobody has moved for a while.
  useEffect(() => {
    let timer
    const rest = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => { if (moodRef.current === 'idle') { setText(''); setMood('sleep') } }, sleepAfter)
    }
    const wake = () => {
      if (moodRef.current === 'sleep') say('Huh? I wasn’t sleeping! 👀', 'happy')
      rest()
    }
    const events = ['pointermove', 'keydown', 'scroll', 'touchstart']
    events.forEach(name => window.addEventListener(name, wake, { passive: true }))
    rest()
    return () => { window.clearTimeout(timer); events.forEach(name => window.removeEventListener(name, wake)) }
  }, [])

  // Duck out of the way during fast scrolling, then peek back in.
  useEffect(() => {
    if (prefersReducedMotion()) return
    let lastY = window.scrollY
    let lastTime = performance.now()
    let timer
    const onScroll = () => {
      const now = performance.now()
      const speed = Math.abs(window.scrollY - lastY) / Math.max(now - lastTime, 1)
      lastY = window.scrollY
      lastTime = now
      if (speed > 2.5) setDucking(true)
      window.clearTimeout(timer)
      timer = window.setTimeout(() => setDucking(false), 450)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); window.clearTimeout(timer) }
  }, [])

  useEffect(() => {
    const reduced = prefersReducedMotion()
    let frame = 0
    const onMove = (event) => {
      if (frame || reduced) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = bodyRef.current?.getBoundingClientRect()
        if (!rect) return
        const dx = event.clientX - (rect.left + rect.width / 2)
        const dy = event.clientY - (rect.top + rect.height / 2)
        const distance = Math.hypot(dx, dy) || 1
        const reach = Math.min(distance / 40, 1) * 2.6
        pupils.current?.setAttribute('transform', `translate(${(dx / distance) * reach} ${(dy / distance) * reach})`)
      })
    }
    let blinkTimer
    const scheduleBlink = () => {
      blinkTimer = window.setTimeout(() => {
        setBlink(true)
        window.setTimeout(() => setBlink(false), 140)
        scheduleBlink()
      }, 2600 + Math.random() * 3200)
    }
    if (!reduced) scheduleBlink()
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => { window.removeEventListener('pointermove', onMove); window.clearTimeout(blinkTimer); cancelAnimationFrame(frame) }
  }, [])

  function poke() {
    if (mood === 'sleep') { say('Wha—? I’m up, I’m up!', 'happy'); return }
    say(byteLines[nextLine])
    setNextLine((nextLine + 1) % byteLines.length)
  }

  const sleeping = mood === 'sleep'
  const cheering = mood === 'cheer'

  return (
    <div className={`mascot ${ducking ? 'is-ducking' : ''}`}>
      <p className={`mascot-bubble ${text ? 'is-open' : ''}`} role="status" aria-live="polite">{text}</p>
      <button type="button" className={`mascot-button ${sleeping ? 'is-sleeping' : ''}`} onClick={poke} aria-label={sleeping ? 'Wake up Byte, the sleeping site mascot' : 'Poke Byte, the site mascot, for a tip'}>
        <svg key={bounce} className={`mascot-body mood-${mood} ${bounce ? 'is-bouncing' : ''}`} ref={bodyRef} viewBox="0 0 64 70" aria-hidden="true">
          {cheering
            ? <g className="mascot-arms is-up"><path d="M10 32Q3 26 4 17" /><path d="M54 32Q61 26 60 17" /></g>
            : <g className="mascot-arms"><path d="M10 38Q4 41 5 47" /><path d="M54 38Q60 41 59 47" /></g>}
          <line className="mascot-antenna" x1="32" y1="14" x2="32" y2="5" />
          <circle className="mascot-antenna-tip" cx="32" cy="5" r="3.2" />
          <path className="mascot-shell" d="M32 12C42 12 52 15 56 19C56 42 47 58 32 65C17 58 8 42 8 19C12 15 22 12 32 12Z" />
          <ellipse className="mascot-cheek" cx="18" cy="41" rx="4.2" ry="2.6" />
          <ellipse className="mascot-cheek" cx="46" cy="41" rx="4.2" ry="2.6" />
          {sleeping
            ? <g className="mascot-sleepy"><path d="M18 34Q23 38 28 34" /><path d="M36 34Q41 38 46 34" /></g>
            : <g className={`mascot-eyes ${blink ? 'is-blinking' : ''}`}>
                <ellipse className="mascot-eye" cx="23" cy="33" rx="5.6" ry="6.4" />
                <ellipse className="mascot-eye" cx="41" cy="33" rx="5.6" ry="6.4" />
                <g ref={pupils}>
                  <g className="mascot-pupils">
                    <circle className="mascot-pupil" cx="23" cy="34" r="3" />
                    <circle className="mascot-pupil" cx="41" cy="34" r="3" />
                    <circle className="mascot-glint" cx="24.2" cy="32.6" r="1" />
                    <circle className="mascot-glint" cx="42.2" cy="32.6" r="1" />
                  </g>
                </g>
              </g>}
          {dark && !sleeping && <g className="mascot-shades"><rect x="15" y="27" width="16" height="11" rx="4" /><rect x="33" y="27" width="16" height="11" rx="4" /><path d="M31 31H33M15 30L9 27M49 30L55 27" /><path className="mascot-shades-shine" d="M18 30L21 30" /></g>}
          {cheering || mood === 'happy'
            ? <path className="mascot-mouth mascot-mouth-open" d="M27 44Q32 51 37 44Z" />
            : <path className="mascot-mouth" d={sleeping ? 'M30 46Q32 47.5 34 46' : 'M28.5 45Q32 48.5 35.5 45'} />}
          {mood === 'search' && <g className="mascot-magnifier"><circle cx="54" cy="52" r="7" /><path d="M49 57L43 64" /></g>}
          {cheering && <g className="mascot-sparkles"><path d="M4 8L5.5 11L9 12.5L5.5 14L4 17L2.5 14L-1 12.5L2.5 11Z" /><path d="M60 4L61 6.5L63.5 7.5L61 8.5L60 11L59 8.5L56.5 7.5L59 6.5Z" /></g>}
          {sleeping && <g className="mascot-zzz"><text x="46" y="10">z</text><text x="53" y="2">z</text><text x="60" y="-6">Z</text></g>}
        </svg>
      </button>
    </div>
  )
}

const bugStorageKey = 'portfolio-bugs-found'
export const bugIds = ['hero', 'trail', 'work', 'about', 'footer']

export function readFoundBugs() {
  try {
    const saved = JSON.parse(localStorage.getItem(bugStorageKey) || '[]')
    return Array.isArray(saved) ? saved.filter(id => bugIds.includes(id)) : []
  } catch { return [] }
}

export function saveFoundBugs(found) {
  try { localStorage.setItem(bugStorageKey, JSON.stringify(found)) } catch { /* Storage may be disabled. */ }
}

export function HiddenBug({ id, found, onFind, className = '' }) {
  if (found.includes(id)) return null
  return (
    <button type="button" className={`hidden-bug ${className}`} onClick={(event) => onFind(id, event)} aria-label="A tiny bug is hiding here. Catch it!">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g className="bug-legs"><path d="M8 10L3 8M8 13H2.5M8 16L3 19M16 10L21 8M16 13H21.5M16 16L21 19" /></g>
        <path className="bug-antennae" d="M10 5L8 2M14 5L16 2" />
        <ellipse className="bug-shell" cx="12" cy="13.5" rx="5" ry="6.5" />
        <circle className="bug-head" cx="12" cy="6" r="2.6" />
        <path className="bug-split" d="M12 8V19.5" />
        <circle className="bug-spot" cx="10" cy="12" r="1" /><circle className="bug-spot" cx="14" cy="15" r="1" />
      </svg>
    </button>
  )
}

export function BugCounter({ found, onReset }) {
  if (!found.length) return null
  const complete = found.length === bugIds.length
  return (
    <div className={`bug-counter ${complete ? 'is-complete' : ''}`} role="status">
      {complete
        ? <><span className="bug-badge" aria-hidden="true">★</span> Certified Bug Hunter <button type="button" onClick={onReset}>Hunt again</button></>
        : <><span className="bug-count-dot" aria-hidden="true" /> {found.length}/{bugIds.length} bugs caught</>}
    </div>
  )
}
