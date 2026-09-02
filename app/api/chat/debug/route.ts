import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    if (process.env.ENABLE_CHAT_DEBUG !== "true") {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    const body = await req.json()
    const message = body.message
    const userId = body.userId || `user_${Date.now()}`

    const appId = process.env.YUANQI_APP_ID
    const token = process.env.YUANQI_TOKEN

    if (!appId || !token) {
      return new Response(JSON.stringify({ error: "Chat service is not configured" }), {
        status: 503,
        headers: { "Content-Type": "application/json" },
      })
    }

    const url = "https://open.hunyuan.tencent.com/openapi/v1/agent/chat/completions"

    const requestBody = JSON.stringify({
      assistant_id: appId,
      user_id: userId,
      stream: true,
      messages: [{ role: "user", content: message }],
    })

    // 1. 发送请求并收集完整响应
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "X-Source": "openapi",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: requestBody,
    })

    // 2. 收集完整响应体用于调试
    const fullBody = await response.text()

    // 3. 返回调试信息（非流式，方便查看）
    return new Response(
      JSON.stringify(
        {
          debug: true,
          request: { url, appId, userId, message, body: requestBody },
          response: {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
            // 截断避免过长
            bodyPreview:
              fullBody.length > 3000 ? fullBody.slice(0, 3000) + "\n... [TRUNCATED]" : fullBody,
            bodyLength: fullBody.length,
          },
          lines: fullBody.split("\n").filter((l) => l.trim()),
        },
        null,
        2
      ),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error), stack: error instanceof Error ? error.stack : null }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
