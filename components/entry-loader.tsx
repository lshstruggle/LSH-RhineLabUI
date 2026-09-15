"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, SkipForward } from "lucide-react"

type BootPhase = "access" | "logo" | "auth" | "scan" | "welcome" | "leaving"
type EntryMode = "gate" | "loading" | "transition"
type BootFrame = { elapsed: number; progress: number; phase: BootPhase; logoProgress: number; sProgress: number; lettersProgress: number; scanProgress: number; welcomeOpacity: number; orbitOffset: number; orbitX: number; orbitY: number }

const TOTAL_DURATION = 9200
const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))
const smooth = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t) }
const reveal = (value: string, amount: number) => value.slice(0, Math.round(clamp(amount) * value.length))

function frameAt(elapsed: number): BootFrame {
  const t = clamp(elapsed / TOTAL_DURATION) * TOTAL_DURATION
  const phase: BootPhase = t < 1500 ? "access" : t < 3900 ? "logo" : t < 5700 ? "auth" : t < 7600 ? "scan" : t < TOTAL_DURATION ? "welcome" : "leaving"
  const orbitAngle = Math.max(0, (t - 2800) / 2400) * Math.PI * 2
  return { elapsed: t, progress: t / TOTAL_DURATION * 100, phase, logoProgress: smooth((t - 1500) / 1250), sProgress: smooth((t - 1900) / 1050), lettersProgress: smooth((t - 2750) / 700), scanProgress: smooth((t - 5700) / 800), welcomeOpacity: smooth((t - 7600) / 450), orbitOffset: (Math.max(0, (t - 2800) / 2400)) % 1, orbitX: 260 + 142 * Math.sin(orbitAngle), orbitY: 150 + 70 * Math.sin(orbitAngle) * Math.cos(orbitAngle) }
}

function PersonalMark({ frame, staticMark = false, className = "entry-mark-svg" }: { frame?: BootFrame; staticMark?: boolean; className?: string }) {
  const current = frame ?? frameAt(TOTAL_DURATION)
  const dash = (progress: number) => `${progress} ${1 - progress}`
  const logoProgress = staticMark ? 1 : current.logoProgress
  const sProgress = staticMark ? 1 : current.sProgress
  const lettersProgress = staticMark ? 1 : current.lettersProgress
  const traceOpacity = staticMark ? 0 : clamp((current.elapsed - 2600) / 650)
  const ring = "M70 150C70 82 150 45 210 82L260 118L310 82C370 45 450 82 450 150C450 218 370 255 310 218L260 182L210 218C150 255 70 218 70 150Z"
  return <svg className={className} viewBox="0 0 520 300" role="img" aria-label="LSH 环绕字母标志">
    <path className="entry-mark-track" pathLength="1" d={ring} />
    <path className="entry-mark-detail" pathLength="1" d={ring} style={{ strokeDasharray: dash(logoProgress), strokeDashoffset: 0 }} />
    <path className="entry-mark-trace" pathLength="1" d={ring} style={{ strokeDasharray: ".08 .92", strokeDashoffset: -current.orbitOffset, opacity: traceOpacity }} />
    <path className="entry-mark-detail entry-mark-letter" d="M135 104V198H193" style={{ opacity: staticMark ? 1 : clamp((current.elapsed - 1950) / 700) }} />
    <path className="entry-mark-detail entry-mark-letter" d="M326 104V198M384 104V198M326 151H384" style={{ opacity: staticMark ? 1 : clamp((current.elapsed - 2150) / 700) }} />
    <path className="entry-mark-accent" pathLength="1" d="M260 105C231 73 192 82 189 113C186 141 222 145 256 156C289 167 293 204 260 217C231 229 205 213 191 194" style={{ strokeDasharray: dash(sProgress), strokeDashoffset: 0 }} />
    <circle className="entry-mark-orbit-dot" cx={staticMark ? 260 : current.orbitX} cy={staticMark ? 150 : current.orbitY} r="7" style={{ opacity: traceOpacity }} />
    <circle className="entry-mark-node" cx="260" cy="150" r="8" style={{ opacity: staticMark ? 1 : sProgress }} />
    <text className="entry-mark-word" x="260" y="278" textAnchor="middle" style={{ opacity: lettersProgress }}>LSH</text>
  </svg>
}

function EntryGate({ onEnter }: { onEnter: () => void }) {
  return <motion.main className="entry-gate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .45 }}><div className="entry-gate-mark"><PersonalMark staticMark /><span>LSH / PERSONAL ARCHIVE</span></div><div className="entry-gate-status">PERSONAL ARCHIVE / READY</div><div className="entry-gate-rule" /><button className="entry-gate-enter" type="button" onClick={onEnter}>点击进入 <ArrowRight size={22} aria-hidden="true" /></button><p>点击按钮或按 Enter 开始</p></motion.main>
}

function ParticleTransitionGraphic() {
  const outerParticles = [[260, 42, 6], [365, 78, 4], [438, 150, 7], [365, 222, 4], [260, 258, 6], [155, 222, 4], [82, 150, 7], [155, 78, 4]]
  const innerParticles = [[260, 94, 4], [316, 112, 3], [316, 188, 4], [260, 206, 3], [204, 188, 4], [204, 112, 3]]
  return <svg className="entry-particle-animation" viewBox="0 0 520 520" role="img" aria-label="旋转粒子过渡动画">
    <circle className="entry-particle-halo" cx="260" cy="260" r="116" />
    <circle className="entry-particle-ring entry-particle-ring-outer" cx="260" cy="260" r="190" />
    <circle className="entry-particle-ring entry-particle-ring-inner" cx="260" cy="260" r="112" />
    <g className="entry-particle-orbit entry-particle-orbit-outer">{outerParticles.map(([cx, cy, r], index) => <circle key={`outer-${index}`} cx={cx} cy={cy} r={r} />)}</g>
    <g className="entry-particle-orbit entry-particle-orbit-inner">{innerParticles.map(([cx, cy, r], index) => <circle key={`inner-${index}`} cx={cx} cy={cy} r={r} />)}</g>
    <circle className="entry-particle-core" cx="260" cy="260" r="12" />
    <circle className="entry-particle-core-glint" cx="256" cy="256" r="4" />
  </svg>
}

function EntryTransition() {
  return <motion.main className="entry-transition" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3.35, times: [0, .1, .9, 1], ease: "easeInOut" }}><ParticleTransitionGraphic /><div className="entry-transition-copy"><strong>OPENING PERSONAL ARCHIVE</strong><span>SESSION / 2026 · LSH</span></div></motion.main>
}

export function EntryLoader() {
  const [visible, setVisible] = useState(true)
  const [mode, setMode] = useState<EntryMode>("gate")
  const [reducedMotion, setReducedMotion] = useState(false)
  const [frame, setFrame] = useState<BootFrame>(() => frameAt(0))
  const startRef = useRef<number | null>(null)
  const leavingRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  const finishTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const begin = useCallback(() => { if (mode === "gate") { startRef.current = null; setFrame(frameAt(0)); setMode("loading") } }, [mode])
  const finish = useCallback(() => { if (mode !== "loading" || leavingRef.current) return; leavingRef.current = true; setMode("transition"); setFrame((current) => ({ ...current, phase: "leaving", progress: 100 })); finishTimer.current = setTimeout(() => { setVisible(false); document.body.style.overflow = "" }, 3350) }, [mode])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(media.matches); document.body.style.overflow = "hidden"
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Enter" && mode === "gate") begin(); else if ((event.key === "Escape" || event.key === "Enter") && mode === "loading") finish() }
    window.addEventListener("keydown", onKeyDown)
    if (mode !== "loading") return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = "" }
    if (media.matches) { setFrame({ ...frameAt(TOTAL_DURATION), phase: "welcome", progress: 100 }); const timer = window.setTimeout(finish, 650); return () => { window.clearTimeout(timer); window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = "" } }
    const tick = (now: number) => { if (startRef.current === null) startRef.current = now; const elapsed = now - startRef.current; setFrame(frameAt(elapsed)); if (elapsed >= TOTAL_DURATION) { finish(); return }; rafRef.current = window.requestAnimationFrame(tick) }
    rafRef.current = window.requestAnimationFrame(tick)
    return () => { if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current); if (!leavingRef.current && finishTimer.current) window.clearTimeout(finishTimer.current); window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = "" }
  }, [begin, finish, mode])

  const accessText = reveal("ACCESS PERMISSION REQUIRED", (frame.elapsed - 180) / 900)
  const identityText = reveal("ID CONFIRMED", (frame.elapsed - 3900) / 650)
  const nameText = reveal("LIU SONGHAO", (frame.elapsed - 4550) / 650)
  const requestText = reveal("REQUEST RECEIVED", (frame.elapsed - 5050) / 550)
  const processingText = reveal("START PROCESSING...", (frame.elapsed - 5300) / 450)
  const permissionText = frame.scanProgress > .58 ? "PERMISSION AUTHORIZED" : "SCANNING LOOP / LSH"

  return <AnimatePresence>{visible && <motion.div data-entry-loader data-entry-mode={mode} data-entry-phase={frame.phase} className="entry-loader" role="dialog" aria-modal="true" aria-label="正在打开刘松昊的个人作品档案"><div className="entry-grid" aria-hidden="true" /><div className="entry-corner entry-corner-tl" aria-hidden="true" /><div className="entry-corner entry-corner-br" aria-hidden="true" />{mode === "gate" && <EntryGate onEnter={begin} />}{mode === "transition" && <EntryTransition />}{mode === "loading" && <><header className="entry-header"><div><strong>LSH / PERSONAL ARCHIVE</strong><span>AI FULL-STACK ENGINEER · SESSION 01</span></div><span>ONLINE / 2026</span></header><button className="entry-skip" type="button" onClick={finish} aria-label="跳过加载动画"><SkipForward size={13} aria-hidden="true" /> 跳过加载</button><motion.main className="entry-stage" animate={{ scale: .98, y: 0 }} transition={{ duration: .42, ease: [.76, 0, .24, 1] }}><div className="entry-kicker">{frame.phase === "scan" ? "LOOP SCAN / ACTIVE" : "PERSONAL ARCHIVE / INITIALIZING"}</div><div className="entry-mark-wrap" style={{ opacity: frame.phase === "access" ? 0 : 1 }}><PersonalMark frame={frame} /><span className="entry-mark-caption">LSH / LOOP / BUILD</span></div><div className="entry-copy" aria-live="polite"><div className="entry-copy-line entry-access">{accessText}</div><div className="entry-copy-line entry-identity">{identityText}<span className="entry-cursor" /></div><div className="entry-copy-name">{nameText}</div><div className="entry-copy-line entry-request">{requestText}</div><div className="entry-copy-line entry-processing">{processingText}</div><div className="entry-copy-line entry-permission">{permissionText}</div><div className="entry-welcome" style={{ opacity: frame.welcomeOpacity }}>欢迎进入</div><div className="entry-subtitle" style={{ opacity: frame.welcomeOpacity }}>刘松昊 / AI 全栈工程师</div><div className="entry-database" style={{ opacity: frame.welcomeOpacity }}>个人作品档案</div></div></motion.main><footer className="entry-footer"><div className="entry-status"><span>STATUS</span><strong>{reducedMotion || frame.progress >= 100 ? "READY" : "LOADING"}</strong></div><div className="entry-progress"><span>SEQUENCE</span><strong>{String(Math.round(frame.progress)).padStart(3, "0")} %</strong><i><b style={{ width: `${frame.progress}%` }} /></i></div><button className="entry-enter" type="button" onClick={finish}>进入个人档案 <ArrowRight size={15} aria-hidden="true" /></button></footer></>}</motion.div>}</AnimatePresence>
}
