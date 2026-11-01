import { NextResponse } from "next/server"

import {
  contactFormSchema,
  flattenContactFieldErrors,
} from "@/lib/contact"
import {
  checkContactRateLimit,
  getClientIp,
} from "@/lib/contact-rate-limit"

function formatContactText(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  return [
    `نام: ${data.name}`,
    `ایمیل: ${data.email}`,
    `موضوع: ${data.subject}`,
    "",
    "پیام:",
    data.message,
  ].join("\n")
}

async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return { configured: false as const, ok: false as const }
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: `📩 تماس با ما\n\n${text}`,
        disable_web_page_preview: true,
      }),
    }
  )

  const payload = (await response.json().catch(() => null)) as {
    ok?: boolean
    description?: string
  } | null

  if (!response.ok || !payload?.ok) {
    console.error(
      "[contact] Telegram error:",
      payload?.description ?? response.status
    )
    return { configured: true as const, ok: false as const }
  }

  return { configured: true as const, ok: true as const }
}

export async function POST(request: Request) {
  const rate = checkContactRateLimit(getClientIp(request))
  if (!rate.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: "تعداد درخواست‌ها زیاد است. کمی بعد دوباره تلاش کنید.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rate.retryAfterSec ?? 60),
        },
      }
    )
  }

  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, message: "درخواست نامعتبر است." },
      { status: 400 }
    )
  }

  const parsed = contactFormSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "لطفاً خطاهای فرم را برطرف کنید.",
        fieldErrors: flattenContactFieldErrors(parsed.error),
      },
      { status: 400 }
    )
  }

  // Honeypot: pretend success for bots without notifying.
  if (parsed.data.website?.trim()) {
    return NextResponse.json({ ok: true })
  }

  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.error(
      "[contact] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variable."
    )
    return NextResponse.json(
      {
        ok: false,
        message:
          "ارسال پیام در حال حاضر در دسترس نیست. لطفاً کمی بعد دوباره تلاش کنید.",
      },
      { status: 503 }
    )
  }

  const { name, email, subject, message } = parsed.data
  const text = formatContactText({ name, email, subject, message })

  try {
    const telegram = await sendTelegramMessage(text)

    if (!telegram.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "ارسال پیام با مشکل روبه‌رو شد. لطفاً کمی بعد دوباره تلاش کنید.",
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[contact] Unexpected error:", error)
    return NextResponse.json(
      {
        ok: false,
        message:
          "ارسال پیام با مشکل روبه‌رو شد. لطفاً کمی بعد دوباره تلاش کنید.",
      },
      { status: 500 }
    )
  }
}
