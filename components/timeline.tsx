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
    title: "AI 全栈开发实习生",
    company: "小成功科技有限公司",
    period: "2025/06 - 2025/09",
    description: [
      "独立交付越秀健康社区助手、海达销售助手、粤秀种草助手等 SaaS 产品，覆盖 React 前端、JavaScript BFF、后端联调与部署上线。",
      "设计 React → JavaScript BFF → 企业平台 API 三层架构，统一托管企业凭证，实现租户级 AppID 与密钥动态路由，并封装多维表 CRUD、分页、限流与重试能力。",
      "将批量推广派发抽象为可编排 Agent 工作流，串联参数解析、特征筛选、批量打标、接口调用和状态回写，内置定时巡检、超时终止与异常校验。",
      "基于 LangChain、Plan-and-Execute、企业私有知识库与 RAG 搭建领域智能体和通用 MCP 工具集，覆盖 80% 常规业务场景，减少 60% 重复接口开发；健康社区助手服务约 2000 名医生。",
    ],
  },
  {
    title: "Tool Execution Safety Guard 开源贡献者",
    company: "tRPC-Agent-Go / 腾讯犀牛鸟开源人才培养计划",
    period: "2026/07",
    description: [
      "面向 AI Agent Tool Use 的命令注入、敏感信息泄露和网络外连风险，参与构建工具安全扫描、权限拦截与全链路监控体系。",
      "实现策略驱动的 tool/safety 检查器，扫描命令、脚本、参数、工作目录、环境变量和工具元数据，输出 allow / deny / ask 决策与结构化 ScanReport。",
      "扩展 Shell 绕过防护，覆盖 eval、命令替换、变量展开、管道、重定向及 Git、awk、sed、find 等二级执行器；对无法安全解析的输入采用 fail-closed 策略。",
      "通过定向测试、竞态检测、Fuzz、Benchmark、go vet 和 Linux 交叉编译验证，500 条混合命令扫描耗时约 10ms，高危语料检出率 100%。",
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
