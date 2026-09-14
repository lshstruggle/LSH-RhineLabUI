"use client"

import Link from "next/link"
import { Github, Mail, ExternalLink, Award, GraduationCap, Briefcase, Wrench, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ParallaxHero } from "@/components/parallax-hero"
import { ArchiveProjectStage } from "@/components/archive-project-stage"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      <ParallaxHero />
      {/* Legacy hero replaced by the parallax stage above. */}
      {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-ink/5 backdrop-blur-sm border border-ink/10 mb-4 mt-4">
                  <span className="relative z-10">AI 全栈工程师</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky/20 to-rose/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-ink">你好，我是</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky to-rose">
                刘松昊
              </span>
            </h1>
            <p className="text-xl text-ink/60 max-w-[600px]">
              专注于 AI Agent 工程化落地与 ToB 自动化解决方案，热衷于用产品思维与技术能力推动业务智能化升级。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-sky to-rose border-0 text-white"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center">
                  查看项目 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-rose to-sky opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-ink/20 text-rose hover:text-rose/80 hover:border-ink/40"
                asChild
              >
                <Link href="#contact">联系我</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/lshstruggle" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-ink/5 hover:bg-ink/10 text-ink/60 hover:text-ink"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://blog.csdn.net/2301_80170889?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-ink/5 hover:bg-ink/10 text-ink/60 hover:text-ink"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">CSDN</span>
                </Button>
              </Link>
              <Link href="mailto:1509030471@qq.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-ink/5 hover:bg-ink/10 text-ink/60 hover:text-ink"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-ink/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-ink/60 animate-pulse"></div>
          </div>
        </div>
      </section> */}

      {/* Education Section */}
      <section id="education" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="教育经历" subtitle="我的学术背景" />

          <div className="mt-16">
            <GlassmorphicCard>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-sky" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-ink">南华大学</h3>
                      <div className="text-lg text-ink/70">
                        人工智能专业 <span className="text-rose font-medium">（GPA 前 20%）</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-ink/50 md:text-right shrink-0">2023/09 - 2027/06</span>
                </div>

                <div className="border-t border-ink/10 pt-6">
                  <h4 className="text-sm font-semibold text-ink/50 uppercase tracking-wider mb-4">获奖经历</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-sky/5 border border-sky/10">
                      <Award className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-ink">服务外包创新创业大赛</div>
                        <div className="text-xs text-ink/50">中部区域三等奖</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-sky/5 border border-sky/10">
                      <Award className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-ink">计算机设计大赛</div>
                        <div className="text-xs text-ink/50">软件应用与开发中南地区二等奖</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-sky/5 border border-sky/10">
                      <Award className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-ink">大学生创新创业训练</div>
                        <div className="text-xs text-ink/50">省级立项两项</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="工作经验" subtitle="我的职业历程" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      <ArchiveProjectStage />

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="专业技能" subtitle="我的能力矩阵" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <SkillBadge name="产品策划与设计" level={95} />
            <SkillBadge name="AI Agent 工程化落地" level={90} />
            <SkillBadge name="ToB 自动化解决方案" level={90} />
            <SkillBadge name="技术产品化与架构视野" level={85} />
            <SkillBadge name="AI-Native 全生命周期研发" level={88} />
            <SkillBadge name="AI 辅助研发与原型构建" level={92} />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassmorphicCard>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-sky" />
                  <h3 className="text-lg font-bold text-ink">产品能力</h3>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">
                  具备敏锐的用户同理心与业务嗅觉，熟练掌握竞品分析、需求洞察及 MVP 敏捷交付策略；熟练使用 Figma 进行高保真交互原型设计，能独立撰写强商业逻辑与高落地性的产品需求文档（PRD）。
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-rose" />
                  <h3 className="text-lg font-bold text-ink">AI 工程化</h3>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">
                  熟练运用 LangChain / LangGraph 框架及 Plan-and-Execute 模式编排复杂工作流；熟练 Prompt Engineering 与多模态 AI（TTS/视觉引擎）的场景调优，熟悉腾讯元器等主流大模型工具的商业化应用。
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-sky" />
                  <h3 className="text-lg font-bold text-ink">ToB/SaaS</h3>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">
                  深入理解 ToB/SaaS 商业逻辑，精通基于钉钉、飞书、企微多维表的生态开发；擅长通过「多表联动检索 + 云函数自动化」等手段重构业务工作流，为企业客户交付高 ROI 的 AI 自动化解决方案。
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-rose" />
                  <h3 className="text-lg font-bold text-ink">技术架构</h3>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">
                  具备全栈开发经验与扎实的底层计算机基础；深入理解微服务架构（Go / gRPC）与高并发中间件（Kafka / Redis / WebSocket）的应用场景；能跨越技术边界与研发团队无缝对话。
                </p>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="联系我" subtitle="期待与您合作" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6 text-ink">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-sky" />
                  </div>
                  <div>
                    <div className="text-sm text-ink/50">邮箱</div>
                    <div className="font-medium text-ink">1509030471@qq.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose/20 flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-rose" />
                  </div>
                  <div>
                    <div className="text-sm text-ink/50">CSDN 博客</div>
                    <Link href="https://blog.csdn.net/2301_80170889?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer" className="font-medium text-ink hover:text-rose transition-colors">
                      blog.csdn.net/2301_80170889
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ink/10 flex items-center justify-center">
                    <Github className="h-5 w-5 text-ink" />
                  </div>
                  <div>
                    <div className="text-sm text-ink/50">GitHub</div>
                    <Link href="https://github.com/lshstruggle" target="_blank" rel="noopener noreferrer" className="font-medium text-ink hover:text-rose transition-colors">
                      github.com/lshstruggle
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-ink/10">
                <h4 className="text-lg font-medium mb-4 text-ink">当前状态</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-ink/70">积极寻找 AI 全栈工程师机会</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10 py-12 bg-cream">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky to-rose">刘松昊</span>
            </Link>
            <p className="text-sm text-ink/50 mt-2">
              &copy; {new Date().getFullYear()} 刘松昊. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/lshstruggle" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-ink/5 hover:bg-ink/10 text-ink/60 hover:text-ink"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://blog.csdn.net/2301_80170889?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-ink/5 hover:bg-ink/10 text-ink/60 hover:text-ink"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">CSDN</span>
              </Button>
            </Link>
            <Link href="mailto:1509030471@qq.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-ink/5 hover:bg-ink/10 text-ink/60 hover:text-ink"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
