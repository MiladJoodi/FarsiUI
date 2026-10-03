"use client"

import * as React from "react"
import { UploadIcon } from "lucide-react"

import { Button } from "@/registry/base-sera/ui/button"
import { Card, CardContent } from "@/registry/base-sera/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"

export function DocumentSplitUpload() {
  const [fileName, setFileName] = React.useState<string | null>(null)
  const [done, setDone] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <Card dir="rtl" lang="fa" className="overflow-hidden p-0">
      <CardContent className="grid p-0 md:grid-cols-2">
        <div className="p-6 md:p-8">
          {done ? (
            <div className="flex h-full flex-col justify-center gap-4">
              <div className="space-y-2 text-center md:text-start">
                <h1 className="text-2xl font-bold">مدرک ارسال شد</h1>
                <p className="text-muted-foreground">
                  {fileName
                    ? `فایل «${fileName}» در صف بررسی قرار گرفت.`
                    : "مدرک شما دریافت شد."}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setDone(false)
                  setFileName(null)
                }}
              >
                بارگذاری مدرک دیگر
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (fileName) setDone(true)
              }}
            >
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-start">
                  <h1 className="text-2xl font-bold">تأیید مدارک</h1>
                  <p className="text-balance text-muted-foreground">
                    تصویر کارت ملی یا شناسنامه را بارگذاری کنید
                  </p>
                </div>
                <Field>
                  <FieldLabel htmlFor="doc-title">عنوان مدرک</FieldLabel>
                  <Input id="doc-title" placeholder="روی کارت ملی" required />
                </Field>
                <Field>
                  <FieldLabel>فایل</FieldLabel>
                  <input
                    ref={inputRef}
                    type="file"
                    accept="image/*,application/pdf"
                    className="sr-only"
                    onChange={(event) =>
                      setFileName(event.target.files?.[0]?.name ?? null)
                    }
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => inputRef.current?.click()}
                  >
                    <UploadIcon />
                    {fileName ? fileName : "انتخاب فایل"}
                  </Button>
                  <FieldDescription>
                    حداکثر ۵ مگابایت؛ گوشه‌های مدرک مشخص باشد
                  </FieldDescription>
                </Field>
                <Button type="submit" className="w-full" disabled={!fileName}>
                  ارسال برای بررسی
                </Button>
              </FieldGroup>
            </form>
          )}
        </div>
        <div className="relative hidden bg-muted md:block">
          <img
            src="/farsiui/parsian.jpg"
            alt="Parsian"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </CardContent>
    </Card>
  )
}
