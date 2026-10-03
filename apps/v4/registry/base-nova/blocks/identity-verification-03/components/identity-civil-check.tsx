"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, IdCardIcon, ShieldCheckIcon } from "lucide-react"

import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-nova/ui/field"
import { Input } from "@/registry/base-nova/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/base-nova/ui/input-otp"

type Step = "info" | "otp" | "done"

const STEPS: Array<{ id: Step; label: string }> = [
  { id: "info", label: "اطلاعات" },
  { id: "otp", label: "تأیید" },
  { id: "done", label: "نتیجه" },
]

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

export function IdentityCivilCheck() {
  const [step, setStep] = React.useState<Step>("info")
  const [digits, setDigits] = React.useState("")
  const [mobile, setMobile] = React.useState("09121234567")
  const [otp, setOtp] = React.useState("")
  const stepIndex = STEPS.findIndex((item) => item.id === step)
  const canContinue = isValid(digits) && mobile.replace(/\D/g, "").length >= 10

  return (
    <Card>
      <CardHeader>
        <CardTitle>بررسی با ثبت‌احوال</CardTitle>
        <CardDescription>
          کد ملی و موبایل را وارد کنید؛ پس از تأیید OTP نتیجه اعلام می‌شود
        </CardDescription>
        <ol className="mt-4 flex items-center gap-2">
          {STEPS.map((item, index) => {
            const done = index < stepIndex
            const current = index === stepIndex
            return (
              <li key={item.id} className="flex flex-1 items-center gap-2">
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                    done && "bg-primary text-primary-foreground",
                    current && "bg-foreground text-background",
                    !done &&
                      !current &&
                      "bg-muted-foreground/15 text-muted-foreground"
                  )}
                >
                  {done ? (
                    <CheckIcon className="size-3.5" />
                  ) : (
                    toFa(String(index + 1))
                  )}
                </span>
                <span
                  className={cn(
                    "text-xs",
                    current
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
                {index < STEPS.length - 1 ? (
                  <span className="ms-auto h-px flex-1 bg-border" />
                ) : null}
              </li>
            )
          })}
        </ol>
      </CardHeader>
      <CardContent>
        {step === "info" ? (
          <form
            onSubmit={(event) => {
              event.preventDefault()
              if (canContinue) {
                setOtp("")
                setStep("otp")
              }
            }}
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="civil-nid">کد ملی</FieldLabel>
                <NationalIdField
                  id="civil-nid"
                  value={digits}
                  onChange={setDigits}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="civil-mobile">شماره موبایل</FieldLabel>
                <Input
                  id="civil-mobile"
                  type="tel"
                  inputMode="tel"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  dir="ltr"
                  className="text-start"
                  required
                />
                <FieldDescription>
                  کد تأیید به این شماره ارسال می‌شود
                </FieldDescription>
              </Field>
              <Button type="submit" className="w-full" disabled={!canContinue}>
                ارسال کد تأیید
              </Button>
            </FieldGroup>
          </form>
        ) : null}

        {step === "otp" ? (
          <div className="space-y-5">
            <p className="text-center text-sm text-muted-foreground">
              کد ۵ رقمی به{" "}
              <span
                dir="ltr"
                className="font-medium text-foreground tabular-nums"
              >
                {toFa(mobile.replace(/\D/g, ""))}
              </span>{" "}
              ارسال شد
            </p>
            <div className="flex justify-center" dir="ltr">
              <InputOTP maxLength={5} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="size-11 text-base" />
                  <InputOTPSlot index={1} className="size-11 text-base" />
                  <InputOTPSlot index={2} className="size-11 text-base" />
                  <InputOTPSlot index={3} className="size-11 text-base" />
                  <InputOTPSlot index={4} className="size-11 text-base" />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button
              className="w-full"
              disabled={otp.length !== 5}
              onClick={() => setStep("done")}
            >
              تأیید و ادامه
            </Button>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => setStep("info")}
            >
              بازگشت
            </Button>
          </div>
        ) : null}

        {step === "done" ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
              <ShieldCheckIcon className="size-6" />
            </div>
            <div className="space-y-1">
              <p className="font-medium">هویت شما تأیید شد</p>
              <p className="text-sm text-muted-foreground">
                اطلاعات با سامانهٔ ثبت‌احوال مطابقت دارد
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-2 w-full"
              onClick={() => {
                setStep("info")
                setOtp("")
              }}
            >
              بررسی مجدد
            </Button>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
