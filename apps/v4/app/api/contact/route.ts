import { NextResponse } from "next/server"
import { Resend } from "resend"

import {
  contactFormSchema,
  flattenContactFieldErrors,
} from "@/lib/contact"

const FROM_EMAIL = "FarsiUI <contact@farsiui.ir>"

export async function POST(request: Request) {
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

  // Honeypot: pretend success for bots without sending mail.
  if (parsed.data.website?.trim()) {
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !toEmail) {
    console.error(
      "[contact] Missing RESEND_API_KEY or CONTACT_EMAIL environment variable."
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

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [toEmail],
      replyTo: email,
      subject: `[تماس با ما] ${subject}`,
      text: [
        `نام: ${name}`,
        `ایمیل: ${email}`,
        `موضوع: ${subject}`,
        "",
        "پیام:",
        message,
      ].join("\n"),
    })

    if (error) {
      console.error("[contact] Resend error:", error)
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
