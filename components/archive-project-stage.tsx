"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

import { asset } from "@/lib/asset"

type Project = {
  id: string
  category: string
  title: string
  shortTitle: string
  description: string
  tags: string[]
  image: string
  href?: string
  external?: string
}

const projects: Project[] = [
  { id: "P-001", category: "AI PRODUCT / IMMERSIVE EXPERIENCE", title: "《峡谷寻城记》", shortTitle: "峡谷寻城记", description: "电竞 IP × AI Agent × LBS 游戏化的沉浸式文旅伴游系统。", tags: ["AI Agent", "LBS", "多模态AI"], image: asset("/project-canyon.png"), href: "/projects/canyon" },
  { id: "P-002", category: "AI ENGINEERING / OPERATIONS", title: "交通枢纽智能检测系统", shortTitle: "智能交通检测", description: "结合 AI 视觉与高并发流处理的智能调度中枢，服务园区车辆监控与安全预警。", tags: ["AI视觉", "WebSocket", "Go/gRPC"], image: asset("/project-its.png"), external: "https://github.com/lshstruggle/Intelligent-Transportation-System" },
  { id: "P-003", category: "SYSTEM RESEARCH / GAME DESIGN", title: "《金铲铲之战》系统拆解", shortTitle: "金铲铲系统分析", description: "从经济、概率、战斗逻辑到变量机制，拆解自走棋系统并完成竞品对比。", tags: ["产品拆解", "竞品分析", "游戏策划"], image: asset("/project-tft.jpg"), href: "/projects/tft-analysis" },
] 

function ArchiveCard({ project, index, progress, activeIndex }: { project: Project; index: number; progress: ReturnType<typeof useSpring>; activeIndex: number }) {
  const x = useTransform(progress, (value) => String((index - value * (projects.length - 1)) * 31) + "vw")
  const y = useTransform(progress, (value) => String(Math.abs(index - value * (projects.length - 1)) * 5.5) + "vh")
  const scale = useTransform(progress, (value) => Math.max(0.72, 1 - Math.abs(index - value * (projects.length - 1)) * 0.13))
  const opacity = useTransform(progress, (value) => Math.max(0.22, 1 - Math.abs(index - value * (projects.length - 1)) * 0.38))
  const rotate = useTransform(progress, (value) => (index - value * (projects.length - 1)) * -7)

  return (
    <motion.article className="archive-card absolute left-1/2 top-1/2 w-[min(78vw,560px)] -translate-x-1/2 -translate-y-1/2" style={{ x, y, scale, opacity, rotate, zIndex: index === activeIndex ? 20 : 10 - index }} aria-label={project.id + " " + project.title}>
      <div className="relative overflow-hidden border border-ink/20 bg-[#eae5e1]/90 shadow-[0_22px_70px_rgba(8,10,8,0.14)]">
        <div className="absolute left-0 top-0 z-10 h-1 w-full bg-rose" />
        <div className="relative aspect-[1.55] overflow-hidden border-b border-ink/15">
          <img src={project.image} alt="" className="h-full w-full object-cover grayscale-[0.18] contrast-[0.95]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(234,229,225,0.06),rgba(8,10,8,0.22))]" />
          <div className="absolute left-5 top-5 font-mono text-[11px] tracking-[0.2em] text-white/80">{project.id}</div>
          <div className="absolute bottom-5 right-5 border border-white/60 px-2 py-1 font-mono text-[9px] tracking-[0.18em] text-white">ARCHIVE PREVIEW</div>
        </div>
        <div className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:p-7">
          <div>
            <div className="font-mono text-[9px] font-semibold tracking-[0.16em] text-ink/45">{project.category}</div>
            <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-ink md:text-3xl">{project.title}</h3>
            <p className="mt-3 max-w-lg text-sm leading-7 text-ink/62">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">{project.tags.map((tag) => <span key={tag} className="font-mono text-[10px] text-rose"># {tag}</span>)}</div>
          </div>
          <div className="flex items-end md:justify-end">
            {project.href ? <Link href={project.href} className="inline-flex items-center border-b border-ink pb-1 text-xs font-semibold tracking-[0.12em] text-ink transition-colors hover:border-rose hover:text-rose">ACCESS FILE <ArrowUpRight className="ml-2 h-3.5 w-3.5" /></Link> : <Link href={project.external ?? "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border-b border-ink pb-1 text-xs font-semibold tracking-[0.12em] text-ink transition-colors hover:border-rose hover:text-rose">VIEW SOURCE <ArrowUpRight className="ml-2 h-3.5 w-3.5" /></Link>}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function ArchiveProjectStage() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.5 })
  const [activeIndex, setActiveIndex] = useState(0)
  useMotionValueEvent(progress, "change", (value) => setActiveIndex(Math.min(projects.length - 1, Math.max(0, Math.round(value * (projects.length - 1))))))
  const headerY = useTransform(progress, [0, 1], [0, -26])
  const headerOpacity = useTransform(progress, [0, 0.2, 1], [1, 0.6, 1])
  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"])
  const active = projects[activeIndex]

  return (
    <section ref={sectionRef} id="projects" className="relative h-[235vh] border-y border-ink/10 bg-[#eae5e1]" aria-labelledby="archive-title">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="container relative z-10 flex h-full flex-col py-8 md:py-10">
          <motion.div className="flex items-start justify-between border-b border-ink/20 pb-5" style={{ y: headerY, opacity: headerOpacity }}>
            <div><div className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-ink/45">Project archive / 03 records</div><h2 id="archive-title" className="mt-2 text-3xl font-bold tracking-[-0.04em] text-ink md:text-5xl">项目档案</h2></div>
            <div className="hidden text-right font-mono text-[10px] leading-5 tracking-[0.14em] text-ink/45 md:block">SCROLL TO INSPECT<br />ACCESS FILE ↗</div>
          </motion.div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center">
            <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 md:block"><div className="font-mono text-[10px] tracking-[0.18em] text-ink/45">ARCHIVE / SELECT</div><div className="mt-2 flex items-end gap-2"><span className="text-6xl font-light tracking-[-0.06em] text-ink">{String(activeIndex + 1).padStart(2, "0")}</span><span className="mb-2 font-mono text-xs text-ink/40">/ 03</span></div><div className="mt-5 h-px w-24 bg-ink/25" /><div className="mt-4 flex gap-1.5" aria-hidden="true">{projects.map((project, index) => <span key={project.id} className={index === activeIndex ? "h-1.5 w-7 bg-rose" : "h-1.5 w-7 bg-ink/20"} />)}</div></div>
            <div className="archive-card-stage relative h-[min(64vh,650px)] w-full">{projects.map((project, index) => <ArchiveCard key={project.id} project={project} index={index} progress={progress} activeIndex={activeIndex} />)}</div>
            <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 font-mono text-[9px] tracking-[0.14em] text-ink/40 md:block">SCROLL TO NAVIGATE / ACCESS FILE</div>
          </div>
          <div className="border-t border-ink/20 pt-4 md:flex md:items-end md:justify-between"><div><div className="font-mono text-[9px] tracking-[0.18em] text-ink/45">CURRENT RECORD / {active.id}</div><div className="mt-1 text-lg font-semibold text-ink">{active.shortTitle}</div></div><div className="mt-4 flex items-center gap-4 md:mt-0"><span className="font-mono text-[9px] tracking-[0.16em] text-ink/45">{String(activeIndex + 1).padStart(2, "0")} / 03</span><div className="h-px w-24 bg-ink/20 md:w-40"><motion.div className="h-px bg-rose" style={{ width: progressWidth }} /></div><span className="font-mono text-[9px] tracking-[0.16em] text-ink/45">SESSION ACTIVE</span></div></div>
        </div>
      </div>
    </section>
  )
}
