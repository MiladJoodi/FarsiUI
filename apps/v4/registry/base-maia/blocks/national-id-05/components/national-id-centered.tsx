"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, IdCardIcon } from "lucide-react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-maia/ui/field"

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

export function NationalIdCentered() {
  const [digits, setDigits] = React.useState("")
  const complete = digits.length === 10
  const valid = isValid(digits)
  const invalid = complete && !valid

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
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">کد ملی</h1>
                <Badge
                  variant={
                    valid ? "default" : invalid ? "destructive" : "secondary"
                  }
                >
                  {valid ? "معتبر" : invalid ? "نامعتبر" : "در انتظار"}
                </Badge>
              </div>
              <FieldDescription>
                کد ۱۰ رقمی روی کارت ملی را وارد کنید
              </FieldDescription>
            </div>
            <Field>
              <FieldLabel htmlFor="nid-05">کد ملی</FieldLabel>
              <div
                className={cn(
                  "flex h-10 items-center gap-2 rounded-lg border bg-background px-3 shadow-xs focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/50",
                  invalid ? "border-destructive" : "border-input"
                )}
                dir="ltr"
              >
                <IdCardIcon className="size-4 shrink-0 text-muted-foreground" />
                <input
                  id="nid-05"
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
            <Button type="submit" className="w-full" disabled={!valid}>
              تأیید و ادامه
            </Button>
          </FieldGroup>
        </form>
      </div>

      <FieldDescription className="text-center">
        {digits.length > 0 ? (
          <span dir="ltr" className="tabular-nums">
            {format(digits)}
          </span>
        ) : (
          "هنوز کدی وارد نشده است"
        )}
      </FieldDescription>
    </div>
  )
}
