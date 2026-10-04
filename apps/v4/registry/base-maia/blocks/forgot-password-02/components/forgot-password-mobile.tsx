"use client"

import * as React from "react"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/base-maia/ui/input-otp"

const RESEND_SECONDS = 60

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export default function ForgotPasswordMobile() {
  const [step, setStep] = React.useState<"phone" | "otp">("phone")
  const [phone, setPhone] = React.useState("09121234567")
  const [otp, setOtp] = React.useState("")
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    if (seconds <= 0) return
    const id = window.setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => window.clearTimeout(id)
  }, [seconds])

  function sendCode() {
    setStep("otp")
    setSeconds(RESEND_SECONDS)
    setOtp("")
  }

  if (step === "otp") {
    return (
      <Card>
        <CardHeader className="text-center">
          <CardTitle>کد بازیابی را وارد کنید</CardTitle>
          <CardDescription>
            کد ۵ رقمی به شماره{" "}
            <span
              dir="ltr"
              className="font-medium text-foreground tabular-nums"
            >
              {phone.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)}
            </span>{" "}
            ارسال شد
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
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
          <Button className="w-full" disabled={otp.length !== 5}>
            تأیید و ادامه
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            {seconds > 0 ? (
              <span>ارسال مجدد تا {toFa(seconds)} ثانیه دیگر</span>
            ) : (
              <Button variant="link" className="h-auto p-0" onClick={sendCode}>
                ارسال مجدد کد
              </Button>
            )}
          </div>
          <Button
            variant="ghost"
            className="w-full"
            onClick={() => setStep("phone")}
          >
            تغییر شماره موبایل
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>بازیابی با موبایل</CardTitle>
        <CardDescription>
          شماره موبایل ثبت‌شده در حساب را وارد کنید تا کد بازیابی برایتان ارسال
          شود
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            sendCode()
          }}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="forgot-mobile">شماره موبایل</FieldLabel>
              <Input
                id="forgot-mobile"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <Button type="submit" className="w-full">
                دریافت کد بازیابی
              </Button>
              <FieldDescription className="text-center">
                ترجیح می‌دهید با ایمیل بازیابی کنید؟{" "}
                <a href="#">بازیابی با ایمیل</a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
