"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon } from "lucide-react"

import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Textarea } from "@/registry/base-sera/ui/textarea"

const STEPS = ["اطلاعات", "جزئیات", "بازبینی"] as const

export function SupportMultiStep() {
  const [step, setStep] = React.useState(0)
  const [data, setData] = React.useState({
    name: "رضا کریمی",
    email: "reza@example.com",
    subject: "tech",
    message: "پس از ورود، داشبورد خالی می‌ماند.",
  })

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader className="space-y-4">
        <div>
          <CardTitle>درخواست چندمرحله‌ای</CardTitle>
          <CardDescription>
            مرحله{" "}
            {String(step + 1).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)}{" "}
            از ۳
          </CardDescription>
        </div>
        <ol className="grid grid-cols-3 gap-2">
          {STEPS.map((label, index) => {
            const done = index < step
            const current = index === step
            return (
              <li
                key={label}
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
                    done && "border-primary bg-primary/10 text-primary"
                  )}
                >
                  {done ? <CheckIcon className="size-3.5" /> : index + 1}
                </span>
                {label}
              </li>
            )
          })}
        </ol>
      </CardHeader>
      <CardContent>
        {step === 0 ? (
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sp3-name">نام</FieldLabel>
              <Input
                id="sp3-name"
                value={data.name}
                onChange={(e) =>
                  setData((d) => ({ ...d, name: e.target.value }))
                }
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sp3-email">ایمیل</FieldLabel>
              <Input
                id="sp3-email"
                type="email"
                value={data.email}
                onChange={(e) =>
                  setData((d) => ({ ...d, email: e.target.value }))
                }
                dir="ltr"
                className="text-start"
              />
            </Field>
          </FieldGroup>
        ) : null}
        {step === 1 ? (
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sp3-subject">دسته</FieldLabel>
              <Select
                items={[
                  { value: "billing", label: "صورتحساب" },
                  { value: "tech", label: "مشکل فنی" },
                  { value: "account", label: "حساب کاربری" },
                ]}
                value={data.subject}
                onValueChange={(value) =>
                  setData((d) => ({
                    ...d,
                    subject: (value as string) ?? "tech",
                  }))
                }
              >
                <SelectTrigger id="sp3-subject" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  <SelectGroup>
                    <SelectItem value="billing">صورتحساب</SelectItem>
                    <SelectItem value="tech">مشکل فنی</SelectItem>
                    <SelectItem value="account">حساب کاربری</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="sp3-msg">توضیحات</FieldLabel>
              <Textarea
                id="sp3-msg"
                className="min-h-28"
                value={data.message}
                onChange={(e) =>
                  setData((d) => ({ ...d, message: e.target.value }))
                }
              />
            </Field>
          </FieldGroup>
        ) : null}
        {step === 2 ? (
          <div className="space-y-3 rounded-xl border bg-muted/30 p-4 text-sm">
            <Row label="نام" value={data.name} />
            <Row label="ایمیل" value={data.email} ltr />
            <Row
              label="دسته"
              value={
                data.subject === "billing"
                  ? "صورتحساب"
                  : data.subject === "account"
                    ? "حساب کاربری"
                    : "مشکل فنی"
              }
            />
            <Row label="توضیحات" value={data.message} />
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          قبلی
        </Button>
        {step < 2 ? (
          <Button
            type="button"
            onClick={() => setStep((s) => Math.min(2, s + 1))}
          >
            مرحله بعد
          </Button>
        ) : (
          <Button type="button">ثبت نهایی</Button>
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
    <div className="flex items-start justify-between gap-4">
      <span className="shrink-0 text-muted-foreground">{label}</span>
      <span className="text-end font-medium" dir={ltr ? "ltr" : undefined}>
        {value}
      </span>
    </div>
  )
}
