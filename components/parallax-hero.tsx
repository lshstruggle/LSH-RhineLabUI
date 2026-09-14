"use client"

import Link from "next/link"
import { ArrowDown, ArrowUpRight, Github, Mail } from "lucide-react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import { CreativeHero } from "@/components/creative-hero"

export function ParallaxHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 })

  const copyY = useTransform(progress, [0, 1], [0, -180])
  const copyOpacity = useTransform(progress, [0, 0.6, 1], [1, 0.7, 0])
  const copyScale = useTransform(progress, [0, 1], [1, 0.92])
  const visualY = useTransform(progress, [0, 1], [0, -100])
  const visualScale = useTransform(progress, [0, 1], [1, 1.12])
  const gridY = useTransform(progress, [0, 1], [0, -44])
  const markerY = useTransform(progress, [0, 1], [0, 90])
  const lineScale = useTransform(progress, [0, 0.9], [0, 1])

  return (
    <section ref={sectionRef} className="relative h-[170vh] overflow-clip" aria-labelledby="hero-title">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="parallax-grid absolute inset-[-6%]" style={{ y: gridY }} aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(8,10,8,0.035)_50%,transparent_100%)]" aria-hidden="true" />

        <motion.div className="absolute left-[7vw] top-[13vh] h-2 w-2 bg-rose" style={{ y: markerY }} aria-hidden="true" />
        <motion.div className="absolute right-[8vw] top-[25vh] h-px w-[18vw] origin-left bg-ink/25" style={{ scaleX: lineScale }} aria-hidden="true" />

        <div className="container relative z-10 flex h-full items-center">
          <motion.div
            className="grid w-full grid-cols-1 items-center gap-10 py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] lg:gap-12"
            style={{ y: copyY, opacity: copyOpacity, scale: copyScale }}
          >
            <div className="max-w-2xl">
              <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-ink/55">
                <span className="inline-flex items-center gap-2 border-y border-ink/25 py-2">
                  <span className="h-1.5 w-1.5 bg-rose" />
                  Personal archive / ready
                </span>
                <span className="font-mono text-ink/35">LSH-00</span>
              </div>

              <h1 id="hero-title" className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-ink md:text-7xl lg:text-[clamp(4rem,7vw,7rem)]">
                你好，我是
                <span className="mt-2 block text-rose">刘松昊</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-ink/65 md:text-lg">
                AI 全栈工程师，专注于 Agent 工程化落地与 ToB 自动化解决方案。把复杂问题整理成可理解、可交付、可持续迭代的产品系统。
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  className="h-11 rounded-none border border-ink bg-ink px-5 text-sm text-cream shadow-none hover:bg-rose hover:text-white"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  读取项目档案
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <Button asChild variant="outline" className="h-11 rounded-none border-ink/35 bg-transparent px-5 text-sm text-ink hover:border-ink hover:bg-transparent">
                  <Link href="#contact">联系我</Link>
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-5 border-t border-ink/15 pt-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">External links</span>
                <Link href="https://github.com/lshstruggle" target="_blank" rel="noopener noreferrer" className="text-ink/55 transition-colors hover:text-rose" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
                <Link href="mailto:1509030471@qq.com" className="text-ink/55 transition-colors hover:text-rose" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </Link>
                <span className="ml-auto font-mono text-[10px] text-ink/40">SESSION / 2026</span>
              </div>
            </div>

            <motion.div className="relative min-h-[360px] lg:min-h-[520px]" style={{ y: visualY, scale: visualScale }}>
              <div className="absolute inset-x-[8%] top-[8%] h-[78%] border border-ink/15" aria-hidden="true" />
              <div className="absolute left-[14%] top-[15%] font-mono text-[10px] tracking-[0.2em] text-ink/45" aria-hidden="true">PROFILE / VISUAL ID</div>
              <CreativeHero />
              <div className="absolute bottom-[2%] right-[9%] text-right font-mono text-[10px] leading-5 tracking-[0.18em] text-ink/45" aria-hidden="true">
                AI PRODUCT /<br />SYSTEM DESIGN
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink/45" style={{ opacity: copyOpacity }}>
          <span className="font-mono text-[9px] uppercase tracking-[0.24em]">Scroll to access</span>
          <ArrowDown className="h-4 w-4 animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
