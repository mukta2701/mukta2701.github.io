import { useEffect, useRef, useState } from 'react'
import { ShieldAlert, Send } from 'lucide-react'
import { sayByte } from './Playful'

const start = [133, 205]
const idleCaption = 'Send an input through the review and see what happens.'

// The hero field note. Visitors can send a safe input or a prompt injection through it.
function HeroDiagram({ reducedMotion, children }) {
  const packetRef = useRef(null)
  const position = useRef(start)
  const runId = useRef(0)
  const [run, setRun] = useState({ kind: null, step: 'idle' })
  const [caption, setCaption] = useState(idleCaption)

  useEffect(() => () => { runId.current += 1 }, [])

  function place(point) {
    position.current = point
    packetRef.current?.setAttribute('cx', point[0])
    packetRef.current?.setAttribute('cy', point[1])
  }

  // Each step resolves false once a newer run has replaced this one.
  function move(to, ms, id) {
    return new Promise(resolve => {
      const from = position.current
      if (reducedMotion) { place(to); resolve(runId.current === id); return }
      const began = performance.now()
      const tick = (now) => {
        if (runId.current !== id) { resolve(false); return }
        const t = Math.min((now - began) / ms, 1)
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
        place([from[0] + (to[0] - from[0]) * eased, from[1] + (to[1] - from[1]) * eased])
        if (t < 1) requestAnimationFrame(tick)
        else resolve(true)
      }
      requestAnimationFrame(tick)
    })
  }

  function wait(ms, id) {
    return new Promise(resolve => window.setTimeout(() => resolve(runId.current === id), reducedMotion ? Math.min(ms, 1200) : ms))
  }

  async function send(kind) {
    const id = ++runId.current
    setRun({ kind, step: 'travel' })
    place(start)
    if (kind === 'safe') {
      setCaption('Checking the request at the trust boundary…')
      if (!await move([254, 205], 900, id)) return
      setRun({ kind, step: 'check' })
      setCaption('Inspected. Nothing suspicious here.')
      if (!await wait(650, id)) return
      setRun({ kind, step: 'travel' })
      if (!await move([427, 205], 900, id)) return
      setRun({ kind, step: 'done' })
      setCaption('Verified action. Evidence logged. ✓')
    } else {
      setCaption('“Ignore previous instructions and…” Hmm.')
      if (!await move([192, 205], 800, id)) return
      setRun({ kind, step: 'blocked' })
      setCaption('Blocked at the trust boundary!')
      sayByte('Nice try, sneaky prompt! 😤', 'cheer')
      if (!await move([152, 205], 350, id)) return
      if (!await wait(350, id)) return
      if (!await move([280, 326], 1000, id)) return
      setRun({ kind, step: 'review' })
      setCaption('Prompt injection stopped and sent for human review.')
    }
    if (!await wait(3200, id)) return
    setRun({ kind: null, step: 'idle' })
    setCaption(idleCaption)
  }

  function tilt(event) {
    if (reducedMotion || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--ry', `${((event.clientX - rect.left) / rect.width - 0.5) * 5}deg`)
    event.currentTarget.style.setProperty('--rx', `${((event.clientY - rect.top) / rect.height - 0.5) * -5}deg`)
  }

  function resetTilt(event) {
    event.currentTarget.style.setProperty('--rx', '0deg')
    event.currentTarget.style.setProperty('--ry', '0deg')
  }

  return (
    <div className="hero-art" onPointerMove={tilt} onPointerLeave={resetTilt}>
      <div className="diagram-heading"><span>FIELD NOTE 01</span><span>AI SYSTEM REVIEW</span></div>
      <svg className="review-diagram" data-step={run.step} data-kind={run.kind || 'none'} viewBox="0 0 560 410" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A security review maps input, trust boundaries, and safe action">
        <path className="diagram-line" d="M78 205H192M368 205H480M280 84V153M280 257V326" />
        <path className="diagram-dash" d="M196 205H364" />
        <circle className="diagram-ring" cx="280" cy="205" r="88" />
        <circle className="diagram-ring diagram-ring-inner" cx="280" cy="205" r="65" />
        {!reducedMotion && !run.kind && <>
          <circle className="diagram-packet" r="5"><animateMotion dur="3.6s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines=".45 0 .55 1" path="M133 205H427" /></circle>
          <circle className="diagram-packet diagram-packet-alt" r="4"><animateMotion dur="4.8s" begin="1.4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines=".45 0 .55 1" path="M280 86V326" /></circle>
        </>}
        <g className="diagram-float"><rect className="diagram-node node-input" x="25" y="171" width="108" height="68" rx="14" /><text className="diagram-label" x="79" y="200" textAnchor="middle">INPUT</text><text className="diagram-small" x="79" y="218" textAnchor="middle">intent</text></g>
        <g className="diagram-float" style={{ '--float-delay': '-1.5s' }}><rect className="diagram-node node-action" x="427" y="171" width="108" height="68" rx="14" /><text className="diagram-label" x="481" y="200" textAnchor="middle">ACTION</text><text className="diagram-small" x="481" y="218" textAnchor="middle">verified</text></g>
        <g className="diagram-float" style={{ '--float-delay': '-3s' }}><rect className="diagram-node node-observe" x="222" y="18" width="116" height="68" rx="14" /><text className="diagram-label" x="280" y="47" textAnchor="middle">TRUST BOUNDARY</text><text className="diagram-small" x="280" y="65" textAnchor="middle">inspect</text></g>
        <g className="diagram-float" style={{ '--float-delay': '-4.5s' }}><rect className="diagram-node node-control" x="222" y="326" width="116" height="68" rx="14" /><text className="diagram-label" x="280" y="355" textAnchor="middle">HUMAN REVIEW</text><text className="diagram-small" x="280" y="374" textAnchor="middle">approval</text></g>
        <g className="diagram-core-group"><path className="diagram-core" d="M280 177L306 191V220L280 234L254 220V191L280 177Z" /><path className="diagram-core-mark" d="M269 205L277 213L292 196" /></g>
        <text className="diagram-side-note" x="280" y="302" textAnchor="middle">evidence follows the action</text>
        {run.kind && <circle className={`demo-packet demo-packet-${run.kind}`} ref={packetRef} cx={start[0]} cy={start[1]} r="9" />}
      </svg>
      <div className="diagram-demo">
        <button type="button" className="demo-button" onClick={() => send('safe')}><Send size={13} aria-hidden="true" /> Send safe input</button>
        <button type="button" className="demo-button demo-button-attack" onClick={() => send('attack')}><ShieldAlert size={13} aria-hidden="true" /> Try a prompt injection</button>
      </div>
      <p className="diagram-caption" aria-live="polite">{caption}</p>
      <div className="diagram-foot"><span>Map the path.</span><span>Verify the control.</span></div>
      <span className="art-index" aria-hidden="true">01</span>
      {children}
    </div>
  )
}

export default HeroDiagram
