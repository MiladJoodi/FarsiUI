"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export function ForgotPasswordCentered() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "sent">(
    "idle"
  )

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus("loading")
    window.setTimeout(() => setStatus("sent"), 800)
  }

  return (
    <div className="flex flex-col gap-6">
      <a href="#" className="flex items-center gap-2 self-center font-medium">
        <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <IconPlaceholder
            lucide="GalleryVerticalEndIcon"
            tabler="IconLayoutRows"
            hugeicons="LayoutBottomIcon"
            phosphor="RowsIcon"
            remixicon="RiGalleryLine"
            className="size-4"
          />
        </div>
        FarsiUI
      </a>

      <div className="rounded-xl border bg-card p-6 shadow-sm">
        {status === "sent" ? (
          <div className="space-y-4 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
              <CheckIcon className="size-6" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-bold">لینک ارسال شد</h1>
              <p className="text-sm text-muted-foreground">
                ایمیل بازیابی به{" "}
                <span dir="ltr" className="font-medium text-foreground">
                  {email || "ایمیل شما"}
                </span>{" "}
                فرستاده شد.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setStatus("idle")}
            >
              تلاش مجدد
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-bold">رمز عبور را فراموش کردید؟</h1>
                <FieldDescription>
                  نگران نباشید؛ لینک بازیابی را برایتان می‌فرستیم
                </FieldDescription>
              </div>
              <Field>
                <FieldLabel htmlFor="centered-email">ایمیل</FieldLabel>
                <Input
                  id="centered-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                  required
                />
              </Field>
              <Field>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "در حال ارسال…" : "ارسال لینک بازیابی"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        )}
      </div>

      <FieldDescription className="text-center">
        <a href="#">بازگشت به صفحه ورود</a>
      </FieldDescription>
    </div>
  )
}
