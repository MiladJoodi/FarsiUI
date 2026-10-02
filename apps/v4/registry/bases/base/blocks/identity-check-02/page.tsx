"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, ShieldCheckIcon } from "lucide-react"

import { NationalIdInput } from "@/registry/bases/base/blocks/identity-check-02/components/national-id-input"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Input } from "@/registry/bases/base/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/bases/base/ui/input-otp"
import { Label } from "@/registry/bases/base/ui/label"

type Step = "info" | "otp" | "done"

const steps: Array<{ id: Step; label: string }> = [
  { id: "info", label: "اطلاعات" },
  { id: "otp", label: "تأیید" },
  { id: "done", label: "نتیجه" },
]

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [step, setStep] = React.useState<Step>("info")
  const stepIndex = steps.findIndex((item) => item.id === step)

  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "bg-muted text-foreground flex min-h-[520px] items-center justify-center p-6",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>بررسی هویت</CardTitle>
          <CardDescription>
            در سه مرحله هویت خود را تأیید کنید
          </CardDescription>
          <ol className="mt-4 flex items-center gap-2">
            {steps.map((item, index) => {
              const done = index < stepIndex
              const current = index === stepIndex
              return (
                <li key={item.id} className="flex flex-1 items-center gap-2">
                  <span
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                      done && "bg-primary text-primary-foreground",
                      current && "bg-foreground text-background",
                      !done && !current && "bg-muted-foreground/15 text-muted-foreground"
                    )}
                  >
                    {done ? <CheckIcon className="size-3.5" /> : index + 1}
                  </span>
                  <span
                    className={cn(
                      "text-xs",
                      current ? "font-medium text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                  {index < steps.length - 1 ? (
                    <span className="ms-auto h-px flex-1 bg-border" />
                  ) : null}
                </li>
              )
            })}
          </ol>
        </CardHeader>
        <CardContent>
          {step === "info" ? (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="check-national-id">کد ملی</Label>
                <NationalIdInput id="check-national-id" name="nationalId" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="check-mobile">شماره موبایل</Label>
                <Input
                  id="check-mobile"
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  dir="ltr"
                  className="text-start"
                />
              </div>
              <Button type="button" className="w-full" onClick={() => setStep("otp")}>
                ارسال کد تأیید
              </Button>
            </div>
          ) : null}

          {step === "otp" ? (
            <div className="grid gap-4">
              <p className="text-sm text-muted-foreground">
                کد ۶ رقمی ارسال‌شده به موبایل را وارد کنید
              </p>
              <div className="flex justify-center" dir="ltr">
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="size-10 text-base" />
                    <InputOTPSlot index={1} className="size-10 text-base" />
                    <InputOTPSlot index={2} className="size-10 text-base" />
                    <InputOTPSlot index={3} className="size-10 text-base" />
                    <InputOTPSlot index={4} className="size-10 text-base" />
                    <InputOTPSlot index={5} className="size-10 text-base" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="grid gap-2">
                <Button type="button" className="w-full" onClick={() => setStep("done")}>
                  تأیید و ادامه
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full"
                  onClick={() => setStep("info")}
                >
                  بازگشت
                </Button>
              </div>
            </div>
          ) : null}

          {step === "done" ? (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <ShieldCheckIcon className="size-6" />
              </div>
              <div className="grid gap-1">
                <p className="font-medium">هویت شما تأیید شد</p>
                <p className="text-sm text-muted-foreground">
                  اطلاعات با سامانهٔ ثبت‌احوال مطابقت دارد
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="mt-2 w-full"
                onClick={() => setStep("info")}
              >
                بررسی مجدد
              </Button>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  )
}
