"use client"

import * as React from "react"
import { ImageIcon, UploadIcon, XIcon } from "lucide-react"

import { NationalIdInput } from "@/registry/bases/base/blocks/identity-verification-02/components/national-id-input"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Separator } from "@/registry/bases/base/ui/separator"

export function NationalCardUpload() {
  const [preview, setPreview] = React.useState<string | null>(null)
  const [fileName, setFileName] = React.useState<string | null>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    const url = URL.createObjectURL(file)
    setPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return url
    })
  }

  function clearFile() {
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null)
    setFileName(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  React.useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  return (
    <div dir="rtl" lang="fa" className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>احراز هویت با کارت ملی</CardTitle>
          <CardDescription>
            اطلاعات اولیه را وارد کنید و تصویر واضح از روی کارت ملی بارگذاری کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <FieldGroup>
              <Field className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="card-first-name">نام</FieldLabel>
                  <Input id="card-first-name" placeholder="علی" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="card-last-name">نام خانوادگی</FieldLabel>
                  <Input id="card-last-name" placeholder="رضایی" required />
                </Field>
              </Field>
              <Field>
                <FieldLabel htmlFor="card-national-id">کد ملی</FieldLabel>
                <NationalIdInput id="card-national-id" name="nationalId" />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-mobile">شماره موبایل</FieldLabel>
                <Input
                  id="card-mobile"
                  type="tel"
                  inputMode="tel"
                  placeholder="۰۹۳۵۱۲۳۴۵۶۷"
                  dir="ltr"
                  className="text-start"
                  required
                />
              </Field>
              <Separator />
              <Field>
                <FieldLabel>تصویر روی کارت ملی</FieldLabel>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="sr-only"
                  onChange={onFileChange}
                />
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => inputRef.current?.click()}
                  >
                    <UploadIcon />
                    انتخاب فایل
                  </Button>
                  {fileName ? (
                    <Button type="button" variant="ghost" onClick={clearFile}>
                      <XIcon />
                      حذف
                    </Button>
                  ) : null}
                </div>
                <p className="text-xs text-muted-foreground">
                  JPG یا PNG، حداکثر ۵ مگابایت. گوشه‌های کارت مشخص باشد.
                </p>
              </Field>
              <Button type="submit" className="w-full" disabled={!preview}>
                ارسال برای بررسی
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-base">پیش‌نمایش مدرک</CardTitle>
          <CardDescription>
            {fileName
              ? fileName
              : "هنوز تصویری انتخاب نشده است"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-xl border border-dashed bg-muted/40">
            {preview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={preview}
                alt="پیش‌نمایش کارت ملی"
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 px-6 text-center text-muted-foreground">
                <ImageIcon className="size-10 opacity-50" />
                <p className="text-sm">
                  تصویر کارت ملی اینجا نمایش داده می‌شود
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
