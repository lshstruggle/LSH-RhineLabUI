"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, SkipForward } from "lucide-react"

type BootPhase = "loading" | "access" | "identity" | "scan" | "welcome" | "leaving"
type EntryMode = "gate" | "loading" | "transition"
type BootFrame = { elapsed: number; progress: number; phase: BootPhase; logoProgress: number; welcomeOpacity: number }

const TOTAL_DURATION = 9000
// Empty until the internal resource manifest is added.
const RESOURCE_QUEUE_CONFIGURED = false
const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))
const smooth = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t) }
const reveal = (value: string, amount: number) => value.slice(0, Math.round(clamp(amount) * value.length))

function frameAt(elapsed: number): BootFrame {
  const t = clamp(elapsed / TOTAL_DURATION) * TOTAL_DURATION
  const phase: BootPhase = t < 1200 ? "loading" : t < 2500 ? "access" : t < 4200 ? "identity" : t < 6200 ? "scan" : t < 7800 ? "welcome" : "leaving"
  return { elapsed: t, progress: t / TOTAL_DURATION * 100, phase, logoProgress: smooth((t - 1200) / 1300), welcomeOpacity: smooth((t - 6200) / 500) }
}

function PersonalMark({ progress = 1, className = "entry-mark-svg" }: { progress?: number; className?: string }) {
  return <svg className={className} viewBox="0 0 300 180" role="img" aria-label="LSH 个人标志"><path className="entry-mark-track" d="M28 28V151H91M28 91H78M125 30C103 30 88 45 88 67C88 90 105 102 126 102C148 102 165 114 165 137C165 160 147 174 125 174C103 174 88 158 88 137M198 30L238 151M278 30L238 151M214 80H262" /><path className="entry-mark-detail" pathLength="1" d="M125 30C147 30 165 45 165 67C165 90 148 102 126 102C104 102 88 114 88 137" style={{ strokeDashoffset: 1 - progress }} /><circle className="entry-mark-node" cx="238" cy="151" r="5" style={{ opacity: progress }} /><circle className="entry-mark-node" cx="28" cy="28" r="5" style={{ opacity: progress }} /></svg>
}

function EntryGate({ onEnter }: { onEnter: () => void }) {
  return <motion.main className="entry-gate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .45 }}><div className="entry-gate-mark"><PersonalMark /><span>LSH / ∞ / BUILD</span></div><div className="entry-gate-status">PERSONAL ARCHIVE / READY</div><div className="entry-gate-rule" /><button className="entry-gate-enter" type="button" onClick={onEnter}>点击进入 <ArrowRight size={22} aria-hidden="true" /></button><p>点击按钮或按 Enter 开始</p></motion.main>
}

function EntryTransition() {
  return <motion.main className="entry-transition" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 1.35, times: [0, .12, .78, 1], ease: "easeInOut" }}><div className="entry-rotation-orbit" aria-hidden="true"><span className="entry-rotation-ring entry-rotation-ring-a" /><span className="entry-rotation-ring entry-rotation-ring-b" /><span className="entry-rotation-dot entry-rotation-dot-a" /><span className="entry-rotation-dot entry-rotation-dot-b" /><PersonalMark className="entry-transition-mark" /></div><div className="entry-transition-copy"><strong>OPENING PERSONAL ARCHIVE</strong><span>SESSION / 2026 · LSH</span></div></motion.main>
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
  const finish = useCallback(() => { if (mode !== "loading" || leavingRef.current) return; leavingRef.current = true; setMode("transition"); setFrame((current) => ({ ...current, phase: "leaving", progress: 100 })); finishTimer.current = setTimeout(() => { setVisible(false); document.body.style.overflow = "" }, 1350) }, [mode])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(media.matches)
    document.body.style.overflow = "hidden"
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Enter" && mode === "gate") begin(); else if ((event.key === "Escape" || event.key === "Enter") && mode === "loading") finish() }
    window.addEventListener("keydown", onKeyDown)
    if (mode !== "loading") return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = "" }
    if (media.matches) { setFrame({ ...frameAt(TOTAL_DURATION), phase: "welcome", progress: 100 }); const timer = window.setTimeout(finish, 650); return () => { window.clearTimeout(timer); window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = "" } }
    const tick = (now: number) => { if (startRef.current === null) startRef.current = now; const elapsed = now - startRef.current; setFrame(frameAt(elapsed)); if (elapsed >= TOTAL_DURATION) { finish(); return } rafRef.current = window.requestAnimationFrame(tick) }
    rafRef.current = window.requestAnimationFrame(tick)
    return () => { if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current); if (!leavingRef.current && finishTimer.current) window.clearTimeout(finishTimer.current); window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = "" }
  }, [begin, finish, mode])

  const accessText = reveal("访问权限请求", (frame.elapsed - 300) / 800)
  const identityText = reveal("正在读取个人资源", (frame.elapsed - 2600) / 650)
  const nameText = reveal("资源索引", (frame.elapsed - 3250) / 550)
  const requestText = reveal("资源请求已接收", (frame.elapsed - 3500) / 500)
  const processingText = reveal(RESOURCE_QUEUE_CONFIGURED ? "正在加载内部资源..." : "等待内部资源配置...", (frame.elapsed - 3900) / 300)
  const permissionText = RESOURCE_QUEUE_CONFIGURED ? `内部资源加载进度 ${String(Math.round(frame.progress)).padStart(3, "0")} %` : "内部资源加载进度 --"

  return <AnimatePresence>{visible && <motion.div data-entry-loader data-entry-mode={mode} data-entry-phase={frame.phase} className="entry-loader" role="dialog" aria-modal="true" aria-label="正在打开刘松昊的个人作品档案"><div className="entry-grid" aria-hidden="true" /><div className="entry-corner entry-corner-tl" aria-hidden="true" /><div className="entry-corner entry-corner-br" aria-hidden="true" />{mode === "gate" && <EntryGate onEnter={begin} />}{mode === "transition" && <EntryTransition />}{mode === "loading" && <><header className="entry-header"><div><strong>LSH / PERSONAL ARCHIVE</strong><span>AI FULL-STACK ENGINEER · SESSION 01</span></div><span>ONLINE / 2026</span></header><button className="entry-skip" type="button" onClick={finish} aria-label="跳过加载动画"><SkipForward size={13} aria-hidden="true" /> 跳过加载</button><motion.main className="entry-stage" animate={{ scale: .98, y: 0 }} transition={{ duration: .42, ease: [.76, 0, .24, 1] }}><div className="entry-kicker">PERSONAL ARCHIVE / INITIALIZING</div><div className="entry-mark-wrap" style={{ opacity: frame.logoProgress }}><PersonalMark progress={frame.logoProgress} /><span className="entry-mark-caption">LSH / ∞ / BUILD</span></div><div className="entry-copy" aria-live="polite"><div className="entry-copy-line entry-access">{accessText}</div><div className="entry-copy-line entry-identity">{identityText}<span className="entry-cursor" /></div><div className="entry-copy-name">{nameText}</div><div className="entry-copy-line entry-request">{requestText}</div><div className="entry-copy-line entry-processing">{processingText}</div><div className="entry-copy-line entry-permission">{permissionText}</div><div className="entry-welcome" style={{ opacity: frame.welcomeOpacity }}>欢迎进入</div><div className="entry-subtitle" style={{ opacity: frame.welcomeOpacity }}>刘松昊 / AI 全栈工程师</div><div className="entry-database" style={{ opacity: frame.welcomeOpacity }}>个人作品档案</div></div></motion.main><footer className="entry-footer"><div className="entry-status"><span>STATUS</span><strong>{RESOURCE_QUEUE_CONFIGURED ? (reducedMotion || frame.progress >= 100 ? "READY" : "LOADING") : "PENDING"}</strong></div><div className="entry-progress"><span>{RESOURCE_QUEUE_CONFIGURED ? "SEQUENCE" : "RESOURCE QUEUE"}</span><strong>{RESOURCE_QUEUE_CONFIGURED ? `${String(Math.round(frame.progress)).padStart(3, "0")} %` : "-- %"}</strong><i><b style={{ width: RESOURCE_QUEUE_CONFIGURED ? `${frame.progress}%` : "0%" }} /></i></div><button className="entry-enter" type="button" onClick={finish}>进入个人档案 <ArrowRight size={15} aria-hidden="true" /></button></footer></>}</motion.div>}</AnimatePresence>
}
