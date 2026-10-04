"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function NewsletterCentered() {
  const [status, setStatus] = React.useState<"idle" | "done">("idle")

  return (
    <div dir="rtl" lang="fa" className="flex flex-col gap-6">
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
        {status === "done" ? (
          <div className="space-y-3 text-center">
            <h1 className="text-xl font-bold">خوش آمدید</h1>
            <p className="text-sm text-muted-foreground">
              ایمیل تأیید را بررسی کنید تا عضویت کامل شود
            </p>
            <Button variant="outline" className="w-full" onClick={() => setStatus("idle")}>
              بازگشت
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setStatus("done")
            }}
          >
            <FieldGroup>
              <div className="space-y-2 text-center">
                <h1 className="text-xl font-bold">خبرنامه FarsiUI</h1>
                <FieldDescription>
                  یک ایمیل در هفته، بدون اسپم
                </FieldDescription>
              </div>
              <Field>
                <FieldLabel htmlFor="nl4-email">ایمیل</FieldLabel>
                <Input
                  id="nl4-email"
                  type="email"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                  required
                />
              </Field>
              <Button type="submit" className="w-full">
                عضویت رایگان
              </Button>
            </FieldGroup>
          </form>
        )}
      </div>
    </div>
  )
}
