"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, IdCardIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-maia/ui/field"
import { Separator } from "@/registry/base-maia/ui/separator"

const FA = "۰۱۲۳۴۵۶۷۸۹"
const EN = "0123456789"

function toFa(value: string) {
  return value.replace(/\d/g, (d) => FA[Number(d)] ?? d)
}

function toEn(value: string) {
  return value.replace(/[۰-۹]/g, (d) => {
    const i = FA.indexOf(d)
    return i >= 0 ? EN[i]! : d
  })
}

function normalize(value: string) {
  return toEn(value).replace(/\D/g, "").slice(0, 10)
}

function format(digits: string) {
  const d = normalize(digits)
  const a = d.slice(0, 3)
  const b = d.slice(3, 9)
  const c = d.slice(9, 10)
  let out = a
  if (b) out += `-${b}`
  if (c) out += `-${c}`
  return toFa(out)
}

function isValid(digits: string) {
  const d = normalize(digits)
  if (!/^\d{10}$/.test(d) || /^(\d)\1{9}$/.test(d)) return false
  let sum = 0
  for (let i = 0; i < 9; i++) sum += Number(d[i]) * (10 - i)
  const rem = sum % 11
  const check = Number(d[9])
  return rem < 2 ? check === rem : check === 11 - rem
}

export function NationalIdValidator() {
  const [digits, setDigits] = React.useState("")
  const complete = digits.length === 10
  const valid = isValid(digits)
  const invalid = complete && !valid

  return (
    <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardHeader>
          <CardTitle>اعتبارسنجی کد ملی</CardTitle>
          <CardDescription>
            با وارد کردن رقم‌ها، وضعیت اعتبار به‌صورت لحظه‌ای نمایش داده می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="nid-02">کد ملی</FieldLabel>
              <div
                className={cn(
                  "flex h-10 items-center gap-2 rounded-lg border bg-background px-3 shadow-xs focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/50",
                  invalid ? "border-destructive" : "border-input"
                )}
                dir="ltr"
              >
                <IdCardIcon className="size-4 shrink-0 text-muted-foreground" />
                <input
                  id="nid-02"
                  inputMode="numeric"
                  value={format(digits)}
                  onChange={(e) => setDigits(normalize(e.target.value))}
                  placeholder="۰۰۱-۲۳۴۵۶۷-۸"
                  maxLength={12}
                  className="h-full min-w-0 flex-1 bg-transparent text-sm tabular-nums outline-none placeholder:text-muted-foreground/50"
                />
                {valid ? (
                  <CheckIcon className="size-4 text-emerald-600" />
                ) : invalid ? (
                  <XIcon className="size-4 text-destructive" />
                ) : null}
              </div>
            </Field>
            <Button
              type="button"
              variant="outline"
              disabled={!digits}
              onClick={() => setDigits("")}
            >
              پاک کردن
            </Button>
          </FieldGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-base">نتیجه بررسی</CardTitle>
            <Badge
              variant={
                valid ? "default" : invalid ? "destructive" : "secondary"
              }
            >
              {valid ? "معتبر" : invalid ? "نامعتبر" : "ناقص"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <Row
            label="تعداد رقم"
            value={`${toFa(String(digits.length))} از ۱۰`}
          />
          <Separator />
          <Row label="نمایش کارت" value={digits ? format(digits) : "—"} ltr />
          <Separator />
          <Row
            label="رقم کنترل"
            value={!complete ? "پس از ۱۰ رقم" : valid ? "صحیح" : "خطا"}
          />
          <p className="pt-2 text-xs leading-relaxed text-muted-foreground">
            الگوریتم استاندارد کد ملی ایران روی ده رقم اعمال می‌شود؛ رقم آخر رقم
            کنترل است.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function Row({
  label,
  value,
  ltr,
}: {
  label: string
  value: string
  ltr?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium tabular-nums" dir={ltr ? "ltr" : undefined}>
        {value}
      </span>
    </div>
  )
}
