"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, IdCardIcon } from "lucide-react"

import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"

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
          "flex h-10 items-center gap-2 rounded-lg border bg-background px-3 shadow-xs focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/50",
          invalid ? "border-destructive" : "border-input"
        )}
        dir="ltr"
      >
        <IdCardIcon className="size-4 shrink-0 text-muted-foreground" />
        <input
          id={id}
          inputMode="numeric"
          value={format(value)}
          onChange={(e) => onChange(normalize(e.target.value))}
          placeholder="۰۰۱-۲۳۴۵۶۷-۸"
          maxLength={12}
          className="h-full min-w-0 flex-1 bg-transparent text-sm tabular-nums outline-none placeholder:text-muted-foreground/50"
        />
        {valid ? (
          <CheckIcon className="size-4 shrink-0 text-emerald-600" />
        ) : null}
      </div>
      <p className="text-[11px] text-muted-foreground">
        {valid
          ? "کد ملی معتبر است"
          : invalid
            ? "کد ملی معتبر نیست"
            : "ده رقم مطابق کارت ملی"}
      </p>
    </div>
  )
}

export function NationalIdProfileForm() {
  const [digits, setDigits] = React.useState("")
  const valid = isValid(digits)

  return (
    <Card>
      <CardHeader>
        <CardTitle>ثبت مشخصات هویتی</CardTitle>
        <CardDescription>
          نام و کد ملی را مطابق مدارک رسمی وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <Field className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="nid-first">نام</FieldLabel>
                <Input id="nid-first" placeholder="سارا" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="nid-last">نام خانوادگی</FieldLabel>
                <Input id="nid-last" placeholder="محمدی" required />
              </Field>
            </Field>
            <Field>
              <FieldLabel htmlFor="nid-03">کد ملی</FieldLabel>
              <NationalIdField
                id="nid-03"
                value={digits}
                onChange={setDigits}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="nid-birth">تاریخ تولد</FieldLabel>
              <Input
                id="nid-birth"
                placeholder="۱۳۷۲/۰۶/۱۵"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>مطابق کارت ملی، به صورت شمسی</FieldDescription>
            </Field>
            <Button type="submit" className="w-full" disabled={!valid}>
              ذخیره مشخصات
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
