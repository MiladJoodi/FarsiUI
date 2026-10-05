"use client"

import * as React from "react"
import { cn } from "cn"
import {
  CheckIcon,
  IdCardIcon,
  ImageIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-vega/ui/field"
import { Input } from "@/registry/base-vega/ui/input"
import { Separator } from "@/registry/base-vega/ui/separator"

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹"
const EN_DIGITS = "0123456789"

function toFaDigits(value: string) {
  return value.replace(/\d/g, (digit) => FA_DIGITS[Number(digit)] ?? digit)
}

function toEnDigits(value: string) {
  return value.replace(/[۰-۹]/g, (digit) => {
    const index = FA_DIGITS.indexOf(digit)
    return index >= 0 ? EN_DIGITS[index] : digit
  })
}

function normalizeNationalId(value: string) {
  return toEnDigits(value).replace(/\D/g, "").slice(0, 10)
}

function formatNationalId(digits: string) {
  const d = normalizeNationalId(digits)
  const a = d.slice(0, 3)
  const b = d.slice(3, 9)
  const c = d.slice(9, 10)
  let out = a
  if (b) out += `-${b}`
  if (c) out += `-${c}`
  return toFaDigits(out)
}

function isNationalId(digits: string) {
  const d = normalizeNationalId(digits)
  if (!/^\d{10}$/.test(d)) return false
  if (/^(\d)\1{9}$/.test(d)) return false

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += Number(d[i]) * (10 - i)
  }
  const rem = sum % 11
  const check = Number(d[9])
  return rem < 2 ? check === rem : check === 11 - rem
}

function NationalIdInput({ id, name }: { id?: string; name?: string }) {
  const [digits, setDigits] = React.useState("")
  const complete = digits.length === 10
  const valid = isNationalId(digits)
  const invalid = complete && !valid

  return (
    <div className="space-y-1.5">
      <div
        className={cn(
          "flex h-10 items-center gap-2 rounded-lg border bg-background px-3 shadow-xs transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/50",
          invalid ? "border-destructive" : "border-input"
        )}
        dir="ltr"
      >
        <IdCardIcon className="size-4 shrink-0 text-muted-foreground" />
        <input
          id={id}
          name={name}
          inputMode="numeric"
          autoComplete="off"
          value={formatNationalId(digits)}
          onChange={(event) =>
            setDigits(normalizeNationalId(event.target.value))
          }
          placeholder="۰۰۱-۲۳۴۵۶۷-۸"
          maxLength={12}
          className="h-full min-w-0 flex-1 bg-transparent text-sm tabular-nums outline-none placeholder:text-muted-foreground/50"
          aria-invalid={invalid ? true : undefined}
        />
        {valid ? (
          <CheckIcon className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
        ) : null}
      </div>
      <p className="text-[11px] text-muted-foreground">
        {valid ? (
          "کد ملی معتبر است"
        ) : invalid ? (
          <span className="text-destructive">
            کد ملی معتبر نیست؛ رقم‌ها را دوباره بررسی کنید
          </span>
        ) : (
          "ده رقم، همان‌طور که روی کارت ملی چاپ شده"
        )}
      </p>
    </div>
  )
}

export default function NationalCardUpload() {
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
            اطلاعات اولیه را وارد کنید و تصویر واضح از روی کارت ملی بارگذاری
            کنید
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
            {fileName ? fileName : "هنوز تصویری انتخاب نشده است"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-xl border border-dashed bg-muted/40">
            {preview ? (
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
