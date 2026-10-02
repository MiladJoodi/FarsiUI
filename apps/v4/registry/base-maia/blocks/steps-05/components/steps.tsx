"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { cn } from "@/registry/base-maia/lib/utils"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-maia/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Textarea } from "@/registry/base-maia/ui/textarea"

const STEPS = [
  { id: 1, title: "اطلاعات" },
  { id: 2, title: "موضوع" },
  { id: 3, title: "جزئیات" },
  { id: 4, title: "تأیید" },
] as const

type Priority = "normal" | "high" | "urgent"

const PRIORITY_LABELS: Record<Priority, string> = {
  normal: "عادی",
  high: "بالا",
  urgent: "فوری",
}

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export function StepsWizard() {
  const [step, setStep] = React.useState(1)
  const [priority, setPriority] = React.useState<Priority>("normal")
  const [topic, setTopic] = React.useState("setup")
  const [done, setDone] = React.useState(false)

  const progress = (step / STEPS.length) * 100

  if (done) {
    return (
      <section
        dir="rtl"
        lang="fa"
        className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16"
      >
        <Card dir="rtl" lang="fa">
          <CardHeader className="text-start">
            <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckIcon className="size-5" />
            </div>
            <CardTitle>درخواست ثبت شد</CardTitle>
            <CardDescription>
              تیم ما مرحله‌ها را بررسی می‌کند و به ایمیل شما پاسخ می‌دهد
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setDone(false)
                setStep(1)
              }}
            >
              شروع دوباره
            </Button>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16"
    >
      <Card dir="rtl" lang="fa">
        <CardHeader className="space-y-4 text-start">
          <div className="flex items-start justify-between gap-3">
            <div>
              <CardTitle>درخواست چندمرحله‌ای</CardTitle>
              <CardDescription>
                مرحله {toFa(step)} از {toFa(STEPS.length)}
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
              const isDone = item.id < step
              const current = item.id === step
              return (
                <li
                  key={item.id}
                  className={cn(
                    "flex flex-col items-center gap-1 text-center text-xs",
                    current
                      ? "text-foreground"
                      : isDone
                        ? "text-primary"
                        : "text-muted-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-7 items-center justify-center rounded-full border text-[11px] font-medium",
                      current &&
                        "border-primary bg-primary text-primary-foreground",
                      isDone && "border-primary bg-primary/10 text-primary",
                      !current && !isDone && "border-border bg-background"
                    )}
                  >
                    {isDone ? (
                      <CheckIcon className="size-3.5" />
                    ) : (
                      toFa(item.id)
                    )}
                  </span>
                  <span className="hidden sm:block">{item.title}</span>
                </li>
              )
            })}
          </ol>
        </CardHeader>

        <CardContent>
          {step === 1 && (
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="sw-name">نام و نام خانوادگی</FieldLabel>
                <Input
                  id="sw-name"
                  placeholder="مریم رضایی"
                  dir="rtl"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="sw-email">ایمیل</FieldLabel>
                <Input
                  id="sw-email"
                  type="email"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="sw-company">نام شرکت</FieldLabel>
                <Input id="sw-company" placeholder="شرکت نمونه" dir="rtl" />
              </Field>
            </FieldGroup>
          )}

          {step === 2 && (
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="sw-topic">موضوع درخواست</FieldLabel>
                <Select
                  value={topic}
                  onValueChange={(value) =>
                    setTopic((value as string) ?? "setup")
                  }
                >
                  <SelectTrigger id="sw-topic" className="w-full" dir="rtl">
                    <SelectValue placeholder="موضوع را انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectItem value="setup">راه‌اندازی</SelectItem>
                    <SelectItem value="design">طراحی و تم</SelectItem>
                    <SelectItem value="support">پشتیبانی</SelectItem>
                    <SelectItem value="enterprise">سازمانی</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>اولویت</FieldLabel>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="outline" className="w-full" />}
                  >
                    اولویت: {PRIORITY_LABELS[priority]}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    dir="rtl"
                    lang="fa"
                    align="end"
                    className="w-44"
                  >
                    <DropdownMenuLabel>سطح اولویت</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={priority}
                      onValueChange={(v) =>
                        setPriority((v as Priority) ?? "normal")
                      }
                    >
                      {(Object.keys(PRIORITY_LABELS) as Priority[]).map(
                        (key) => (
                          <DropdownMenuRadioItem key={key} value={key}>
                            {PRIORITY_LABELS[key]}
                          </DropdownMenuRadioItem>
                        )
                      )}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Field>
            </FieldGroup>
          )}

          {step === 3 && (
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="sw-msg">توضیحات</FieldLabel>
                <Textarea
                  id="sw-msg"
                  placeholder="نیاز یا مشکل را شرح دهید…"
                  dir="rtl"
                  className="min-h-32"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="sw-phone">تلفن (اختیاری)</FieldLabel>
                <Input
                  id="sw-phone"
                  type="tel"
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
            </FieldGroup>
          )}

          {step === 4 && (
            <div className="space-y-3 rounded-xl border bg-muted/40 p-4 text-sm">
              <p>
                <span className="text-muted-foreground">موضوع: </span>
                {
                  {
                    setup: "راه‌اندازی",
                    design: "طراحی و تم",
                    support: "پشتیبانی",
                    enterprise: "سازمانی",
                  }[topic]
                }
              </p>
              <p>
                <span className="text-muted-foreground">اولویت: </span>
                {PRIORITY_LABELS[priority]}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                با تأیید، درخواست شما ثبت می‌شود و پاسخ به ایمیل ارسال خواهد شد.
              </p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between gap-2">
          <Button
            variant="outline"
            disabled={step === 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
          >
            قبلی
          </Button>
          {step < STEPS.length ? (
            <Button
              onClick={() => setStep((s) => Math.min(STEPS.length, s + 1))}
            >
              ادامه
            </Button>
          ) : (
            <Button onClick={() => setDone(true)}>ثبت نهایی</Button>
          )}
        </CardFooter>
      </Card>
    </section>
  )
}
