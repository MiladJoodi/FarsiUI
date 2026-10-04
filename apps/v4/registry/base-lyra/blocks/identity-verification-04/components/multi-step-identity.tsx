"use client"

import * as React from "react"
import { CheckIcon, UploadIcon } from "lucide-react"

import NationalIdInput from "@/registry/base-lyra/blocks/identity-verification-04/components/national-id-input"
import { cn } from "@/registry/base-lyra/lib/utils"
import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"

const STEPS = [
  { id: 1, title: "اطلاعات شخصی" },
  { id: 2, title: "شماره موبایل" },
  { id: 3, title: "مدرک هویتی" },
  { id: 4, title: "تأیید نهایی" },
] as const

export default function MultiStepIdentity() {
  const [step, setStep] = React.useState(1)
  const [data, setData] = React.useState({
    firstName: "مریم",
    lastName: "حسینی",
    nationalId: "۰۰۱۳۵۴۷۰۸۹",
    mobile: "۰۹۱۹۸۷۶۵۴۳۲",
    hasDoc: false,
  })

  const progress = (step / STEPS.length) * 100

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle>احراز هویت چندمرحله‌ای</CardTitle>
            <CardDescription>
              مرحله{" "}
              {String(step).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)} از{" "}
              {String(STEPS.length).replace(
                /\d/g,
                (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!
              )}
            </CardDescription>
          </div>
          <Badge variant="secondary">{STEPS[step - 1]?.title}</Badge>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <ol className="grid grid-cols-4 gap-2">
          {STEPS.map((item) => {
            const done = item.id < step
            const current = item.id === step
            return (
              <li
                key={item.id}
                className={cn(
                  "flex flex-col items-center gap-1 text-center text-xs",
                  current
                    ? "text-foreground"
                    : done
                      ? "text-primary"
                      : "text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "flex size-7 items-center justify-center rounded-full border text-[11px] font-medium",
                    current &&
                      "border-primary bg-primary text-primary-foreground",
                    done && "border-primary bg-primary/10 text-primary",
                    !current && !done && "border-border bg-background"
                  )}
                >
                  {done ? (
                    <CheckIcon className="size-3.5" />
                  ) : (
                    String(item.id).replace(
                      /\d/g,
                      (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!
                    )
                  )}
                </span>
                <span className="hidden sm:block">{item.title}</span>
              </li>
            )
          })}
        </ol>
      </CardHeader>
      <CardContent>
        {step === 1 ? (
          <FieldGroup>
            <Field className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="ms-first">نام</FieldLabel>
                <Input
                  id="ms-first"
                  value={data.firstName}
                  onChange={(e) =>
                    setData((d) => ({ ...d, firstName: e.target.value }))
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="ms-last">نام خانوادگی</FieldLabel>
                <Input
                  id="ms-last"
                  value={data.lastName}
                  onChange={(e) =>
                    setData((d) => ({ ...d, lastName: e.target.value }))
                  }
                />
              </Field>
            </Field>
            <Field>
              <FieldLabel htmlFor="ms-nid">کد ملی</FieldLabel>
              <NationalIdInput id="ms-nid" name="nationalId" />
            </Field>
          </FieldGroup>
        ) : null}

        {step === 2 ? (
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="ms-mobile">شماره موبایل</FieldLabel>
              <Input
                id="ms-mobile"
                type="tel"
                value={data.mobile}
                onChange={(e) =>
                  setData((d) => ({ ...d, mobile: e.target.value }))
                }
                dir="ltr"
                className="text-start"
              />
            </Field>
            <p className="text-sm text-muted-foreground">
              در مرحله بعد کد تأیید به این شماره ارسال می‌شود. برای این نمونه
              فرض می‌کنیم شماره قبلاً تأیید شده است.
            </p>
          </FieldGroup>
        ) : null}

        {step === 3 ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              تصویر واضح از روی کارت ملی یا شناسنامه جدید بارگذاری کنید.
            </p>
            <Button
              type="button"
              variant={data.hasDoc ? "secondary" : "outline"}
              className="w-full"
              onClick={() => setData((d) => ({ ...d, hasDoc: true }))}
            >
              <UploadIcon />
              {data.hasDoc ? "مدرک انتخاب شد ✓" : "انتخاب تصویر مدرک"}
            </Button>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="space-y-3 rounded-xl border bg-muted/30 p-4 text-sm">
            <Row
              label="نام و نام خانوادگی"
              value={`${data.firstName} ${data.lastName}`}
            />
            <Row label="کد ملی" value={data.nationalId} ltr />
            <Row label="موبایل" value={data.mobile} ltr />
            <Row
              label="مدرک"
              value={data.hasDoc ? "بارگذاری شده" : "ثبت نشده"}
            />
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          disabled={step === 1}
          onClick={() => setStep((s) => Math.max(1, s - 1))}
        >
          قبلی
        </Button>
        {step < STEPS.length ? (
          <Button
            type="button"
            onClick={() => setStep((s) => Math.min(STEPS.length, s + 1))}
            disabled={step === 3 && !data.hasDoc}
          >
            مرحله بعد
          </Button>
        ) : (
          <Button type="button">ثبت درخواست</Button>
        )}
      </CardFooter>
    </Card>
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
    <div className="flex items-center justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium" dir={ltr ? "ltr" : undefined}>
        {value}
      </span>
    </div>
  )
}
