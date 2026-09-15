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
                        人工智能专业 <span className="text-rose font-medium">（GPA 3.3 / 5.0）</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-ink/50 md:text-right shrink-0">2023/09 - 2027/06</span>
                </div>

                <div className="border-t border-ink/10 pt-6">
                  <h4 className="text-sm font-semibold text-ink/50 uppercase tracking-wider mb-4">获奖经历</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-sky/5 border border-sky/10">
                      <Award className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-ink">腾讯开悟 AI 应用创新与实践赛</div>
                        <div className="text-xs text-ink/50">全国二等奖</div>
                      </div>
                    </div>
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
          <SectionHeading title="专业技能与个人优势" subtitle="我的能力矩阵" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <SkillBadge name="AI Agent 与应用工程" level={95} />
            <SkillBadge name="全栈开发技术" level={93} />
            <SkillBadge name="RAG / 知识库工程" level={91} />
            <SkillBadge name="数据与基础设施" level={88} />
            <SkillBadge name="安全工程与可观测性" level={86} />
            <SkillBadge name="AI Coding 与交付" level={92} />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassmorphicCard>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-sky" />
                  <h3 className="text-lg font-bold text-ink">AI Agent 与应用工程</h3>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">
                  掌握 Agent Loop、LangGraph、Tool Calling、Tool Registry、分层记忆与 RAG 检索增强；熟悉 Plan-and-Execute、Prompt 工程、MCP 工具封装、Embedding 链路和企业级知识库落地，也具备 TTS 模型训练部署经验。
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-rose" />
                  <h3 className="text-lg font-bold text-ink">全栈开发技术</h3>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">
                  后端掌握 Python（FastAPI、SQLAlchemy、Django）、Go（Gin、GORM）与 JavaScript / TypeScript；前端掌握 React、Vite、React Flow，具备 REST API、SSE、BFF、异步任务调度和管理后台的全链路交付能力。
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-sky" />
                  <h3 className="text-lg font-bold text-ink">数据与基础设施</h3>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">
                  熟悉 PostgreSQL、pgvector、Alembic、MySQL、MongoDB GeoJSON 与 Redis，掌握事务、行级锁、向量检索、任务队列、限流、TTL 和 Docker Compose 服务编排，能够完成数据建模到部署上线。
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-rose" />
                  <h3 className="text-lg font-bold text-ink">工程化与 AI Coding</h3>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed">
                  熟练使用 Codex、Claude Code、GitHub Copilot 辅助需求拆解、架构设计、调试与测试；熟悉 HTTP、Git、Linux、指数退避、状态机、单元 / 集成 / 边界测试、Fuzz Test 与 OpenTelemetry，重视 AI 输出审查和交付质量。
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
