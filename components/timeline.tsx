"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

interface TimelineItem {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: TimelineItem[] = [
  {
    title: "AI 全栈工程师",
    company: "小成功科技",
    period: "2025/06 - 2025/09",
    description: [
      "主导基于钉钉、飞书、企微多维表生态的 ToB 端 AI 应用全栈开发，针对立白集团、周大福、地方健康社区等领先企业和社区，设计并交付 AI 驱动的自动化解决方案。",
      "提出并实现「多表联动检索 + 云函数自动化任务编排」方案，将管理端操作由多步繁琐流程缩短至「一键点击实现海量任务分发」，执行效率提升 300%。",
      "基于 LangChain + LangGraph 构建智能 Agent，采用 Plan-and-Execute 模式，将复杂工作流的交付成功率提升了 40%。",
      "设计「全自动日报生成」工作流，实现从信息收集到决策汇报的全链路自动化。",
      "设计并重构支持动态配置参数的多租户接口，实现「一套接口驱动无限公司业务」的扩展性。",
    ],
  },
]

export function Timeline() {
  return (
    <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 md:before:left-8 before:border-l-2 before:border-sky/30 before:h-full before:z-0">
      {experiences.map((experience, index) => (
        <div key={index} className="relative z-10 flex items-start gap-6 md:gap-10">
          {/* 左侧圆点图标 */}
          <div className="shrink-0">
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-sky to-rose flex items-center justify-center shadow-lg shadow-rose/20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
          </div>

          {/* 右侧内容卡片 */}
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-6 md:p-8 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-ink">{experience.title}</h3>
                    <div className="text-ink/60 mt-1">{experience.company}</div>
                  </div>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-sky/10 text-sky shrink-0 self-start">
                    {experience.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-ink/70 text-sm leading-relaxed flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-rose mt-1.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
