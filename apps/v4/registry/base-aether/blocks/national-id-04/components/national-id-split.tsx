"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, IdCardIcon } from "lucide-react"

import { Button } from "@/registry/base-aether/ui/button"
import { Card, CardContent } from "@/registry/base-aether/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-aether/ui/field"

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

export default function NationalIdSplit() {
  const [digits, setDigits] = React.useState("")
  const [done, setDone] = React.useState(false)
  const complete = digits.length === 10
  const valid = isValid(digits)
  const invalid = complete && !valid

  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="grid p-0 md:grid-cols-2">
        <div className="p-6 md:p-8">
          {done ? (
            <div className="flex h-full flex-col justify-center gap-4">
              <div className="space-y-2 text-center md:text-start">
                <h1 className="text-2xl font-bold">کد ملی تأیید شد</h1>
                <p className="text-muted-foreground">
                  <span
                    dir="ltr"
                    className="font-medium text-foreground tabular-nums"
                  >
                    {format(digits)}
                  </span>
                </p>
              </div>
              <Button variant="outline" onClick={() => setDone(false)}>
                تغییر کد ملی
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (valid) setDone(true)
              }}
            >
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-start">
                  <h1 className="text-2xl font-bold">کد ملی</h1>
                  <p className="text-balance text-muted-foreground">
                    برای ادامه، کد ملی ۱۰ رقمی خود را وارد کنید
                  </p>
                </div>
                <Field>
                  <FieldLabel htmlFor="nid-04">کد ملی</FieldLabel>
                  <div
                    className={cn(
                      "flex h-10 items-center gap-2 rounded-lg border bg-background px-3 shadow-xs focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/50",
                      invalid ? "border-destructive" : "border-input"
                    )}
                    dir="ltr"
                  >
                    <IdCardIcon className="size-4 shrink-0 text-muted-foreground" />
                    <input
                      id="nid-04"
                      inputMode="numeric"
                      value={format(digits)}
                      onChange={(e) => setDigits(normalize(e.target.value))}
                      placeholder="۰۰۱-۲۳۴۵۶۷-۸"
                      maxLength={12}
                      className="h-full min-w-0 flex-1 bg-transparent text-sm tabular-nums outline-none placeholder:text-muted-foreground/50"
                    />
                    {valid ? (
                      <CheckIcon className="size-4 text-emerald-600" />
                    ) : null}
                  </div>
                </Field>
                <Field>
                  <Button type="submit" className="w-full" disabled={!valid}>
                    تأیید کد ملی
                  </Button>
                </Field>
                <FieldDescription className="text-center md:text-start">
                  اطلاعات فقط برای احراز هویت استفاده می‌شود
                </FieldDescription>
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
