"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, IdCardIcon } from "lucide-react"

import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-sera/ui/field"

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

function NationalIdField({
  id,
  value,
  onChange,
}: {
  id: string
  value: string
  onChange: (digits: string) => void
}) {
  const complete = value.length === 10
  const valid = isValid(value)
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
          name="nationalId"
          inputMode="numeric"
          autoComplete="off"
          value={format(value)}
          onChange={(e) => onChange(normalize(e.target.value))}
          placeholder="۰۰۱-۲۳۴۵۶۷-۸"
          maxLength={12}
          className="h-full min-w-0 flex-1 bg-transparent text-sm tabular-nums outline-none placeholder:text-muted-foreground/50"
          aria-invalid={invalid || undefined}
        />
        {valid ? (
          <CheckIcon className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
        ) : null}
      </div>
      <p className="text-[11px] text-muted-foreground">
        {valid ? (
          "کد ملی معتبر است"
        ) : invalid ? (
          <span className="text-destructive">کد ملی معتبر نیست</span>
        ) : (
          "ده رقم، همان‌طور که روی کارت ملی چاپ شده"
        )}
      </p>
    </div>
  )
}

export function NationalIdForm() {
  const [digits, setDigits] = React.useState("")
  const [done, setDone] = React.useState(false)
  const valid = isValid(digits)

  if (done) {
    return (
      <Card>
        <CardHeader className="text-center">
          <CardTitle>کد ملی ثبت شد</CardTitle>
          <CardDescription>
            <span
              dir="ltr"
              className="font-medium text-foreground tabular-nums"
            >
              {format(digits)}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setDone(false)
              setDigits("")
            }}
          >
            ویرایش مجدد
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>ورود کد ملی</CardTitle>
        <CardDescription>
          کد ملی را دقیقاً مطابق کارت ملی وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (valid) setDone(true)
          }}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="nid-01">کد ملی</FieldLabel>
              <NationalIdField
                id="nid-01"
                value={digits}
                onChange={setDigits}
              />
            </Field>
            <Field>
              <Button type="submit" className="w-full" disabled={!valid}>
                ادامه
              </Button>
              <FieldDescription className="text-center">
                کد ملی برای احراز هویت لازم است
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
