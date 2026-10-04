"use client"

import * as React from "react"

import {
  contactFormSchema,
  flattenContactFieldErrors,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/lib/contact"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Spinner } from "@/registry/bases/base/ui/spinner"
import { Textarea } from "@/registry/bases/base/ui/textarea"

type FormStatus = "idle" | "loading" | "success" | "error"

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
}

export function ContactForm() {
  const formRef = React.useRef<HTMLFormElement>(null)
  const [values, setValues] = React.useState<ContactFormValues>(initialValues)
  const [fieldErrors, setFieldErrors] = React.useState<ContactFieldErrors>({})
  const [status, setStatus] = React.useState<FormStatus>("idle")
  const [formMessage, setFormMessage] = React.useState<string | null>(null)

  function updateField<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K]
  ) {
    setValues((current) => ({ ...current, [key]: value }))
    setFieldErrors((current) => {
      if (!current[key]) {
        return current
      }
      const next = { ...current }
      delete next[key]
      return next
    })
    if (status === "error" || status === "success") {
      setStatus("idle")
      setFormMessage(null)
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const parsed = contactFormSchema.safeParse(values)

    if (!parsed.success) {
      setFieldErrors(flattenContactFieldErrors(parsed.error))
      setStatus("error")
      setFormMessage("لطفاً خطاهای فرم را برطرف کنید.")
      return
    }

    setStatus("loading")
    setFormMessage(null)
    setFieldErrors({})

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      })

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean
        message?: string
        fieldErrors?: ContactFieldErrors
      } | null

      if (!response.ok || !data?.ok) {
        if (data?.fieldErrors) {
          setFieldErrors(data.fieldErrors)
        }
        setStatus("error")
        setFormMessage(
          data?.message ??
            "ارسال پیام با مشکل روبه‌رو شد. لطفاً کمی بعد دوباره تلاش کنید."
        )
        return
      }

      setValues(initialValues)
      formRef.current?.reset()
      setStatus("success")
      setFormMessage("پیام شما با موفقیت ارسال شد. به‌زودی با شما تماس می‌گیریم.")
    } catch {
      setStatus("error")
      setFormMessage(
        "ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید و دوباره تلاش کنید."
      )
    }
  }

  const isLoading = status === "loading"

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="relative w-full"
      dir="rtl"
      lang="fa"
    >
      <FieldGroup className="gap-3">
        {/* Honeypot — hidden from users */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-s-[-9999px] h-0 w-0 overflow-hidden opacity-0"
        >
          <label htmlFor="contact-website">وب‌سایت</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website ?? ""}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Field data-invalid={!!fieldErrors.name || undefined}>
            <FieldLabel htmlFor="contact-name">نام</FieldLabel>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="نام شما"
              value={values.name}
              disabled={isLoading}
              aria-invalid={!!fieldErrors.name || undefined}
              onChange={(event) => updateField("name", event.target.value)}
            />
            <FieldError>{fieldErrors.name}</FieldError>
          </Field>

          <Field data-invalid={!!fieldErrors.email || undefined}>
            <FieldLabel htmlFor="contact-email">ایمیل</FieldLabel>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
              value={values.email}
              disabled={isLoading}
              aria-invalid={!!fieldErrors.email || undefined}
              onChange={(event) => updateField("email", event.target.value)}
            />
            <FieldError>{fieldErrors.email}</FieldError>
          </Field>
        </div>

        <Field data-invalid={!!fieldErrors.subject || undefined}>
          <FieldLabel htmlFor="contact-subject">موضوع</FieldLabel>
          <Input
            id="contact-subject"
            name="subject"
            placeholder="باگ، پیشنهاد، همکاری…"
            value={values.subject}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.subject || undefined}
            onChange={(event) => updateField("subject", event.target.value)}
          />
          <FieldError>{fieldErrors.subject}</FieldError>
        </Field>

        <Field data-invalid={!!fieldErrors.message || undefined}>
          <FieldLabel htmlFor="contact-message">پیام</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            placeholder="پیامتان را بنویسید…"
            className="min-h-24 resize-none"
            value={values.message}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.message || undefined}
            onChange={(event) => updateField("message", event.target.value)}
          />
          <FieldError>{fieldErrors.message}</FieldError>
        </Field>

        {formMessage ? (
          <p
            role="status"
            aria-live="polite"
            className={
              status === "success"
                ? "text-sm text-foreground"
                : "text-sm text-destructive"
            }
          >
            {formMessage}
          </p>
        ) : null}

        <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
          {isLoading ? (
            <>
              <Spinner data-icon="inline-start" />
              در حال ارسال…
            </>
          ) : (
            "ارسال پیام"
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
