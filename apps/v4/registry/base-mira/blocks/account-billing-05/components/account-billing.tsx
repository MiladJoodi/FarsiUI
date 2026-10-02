"use client"

import * as React from "react"
import { cn } from "cn"
import { CreditCardIcon, MoreHorizontalIcon, ReceiptIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-mira/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import { Label } from "@/registry/base-mira/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"
import { Switch } from "@/registry/base-mira/ui/switch"

const NAV = [
  { id: "overview", label: "نمای کلی" },
  { id: "payment", label: "پرداخت" },
  { id: "invoices", label: "فاکتورها" },
  { id: "plans", label: "طرح‌ها" },
] as const

type NavId = (typeof NAV)[number]["id"]

const PLANS = [
  {
    id: "starter",
    name: "شروع",
    price: "۴۹۰٬۰۰۰",
    desc: "برای پروژه‌های کوچک",
  },
  {
    id: "pro",
    name: "حرفه‌ای",
    price: "۱٬۲۰۰٬۰۰۰",
    desc: "تیم‌های محصول",
    current: true,
  },
  {
    id: "biz",
    name: "سازمانی",
    price: "۳٬۵۰۰٬۰۰۰",
    desc: "پشتیبانی اختصاصی",
  },
] as const

export function AccountBillingHub() {
  const [section, setSection] = React.useState<NavId>("overview")
  const [plan, setPlan] = React.useState("pro")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            مرکز صورتحساب
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">صورتحساب حساب</h2>
          <p className="mt-2 text-muted-foreground">
            طرح، روش پرداخت، فاکتورها و تمدید خودکار
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="start">
            <DropdownMenuLabel>میان‌برها</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSection("invoices")}>
              فاکتورهای اخیر
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSection("plans")}>
              تغییر طرح
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              لغو اشتراک
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[12rem_1fr]">
        <aside className="border-b bg-muted/30 p-3 md:border-b-0 md:border-l">
          <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
            بخش‌ها
          </p>
          <nav className="flex gap-1 overflow-x-auto md:flex-col">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSection(item.id)}
                className={cn(
                  "rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-muted",
                  section === item.id && "bg-muted font-medium text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="p-5 md:p-6">
          {section === "overview" ? (
            <div className="space-y-6">
              <Header title="نمای کلی" description="وضعیت اشتراک و مبلغ بعدی" />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">طرح فعلی</p>
                  <p className="mt-1 text-lg font-semibold">حرفه‌ای ماهانه</p>
                  <Badge className="mt-2" variant="secondary">
                    فعال
                  </Badge>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">پرداخت بعدی</p>
                  <p className="mt-1 text-lg font-semibold tabular-nums">
                    <bdi dir="ltr">۱٬۳۲۰٬۰۰۰</bdi> تومان
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground tabular-nums">
                    <bdi dir="ltr">۱۴۰۴/۰۸/۱۲</bdi>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label htmlFor="ab5-auto">تمدید خودکار</Label>
                  <p className="text-sm text-muted-foreground">
                    شارژ در پایان هر دوره
                  </p>
                </div>
                <Switch id="ab5-auto" defaultChecked />
              </div>
            </div>
          ) : null}

          {section === "payment" ? (
            <div className="space-y-6">
              <Header
                title="روش پرداخت"
                description="کارت و اطلاعات صورتحساب"
              />
              <div className="flex items-center gap-3 rounded-lg border p-4">
                <CreditCardIcon className="size-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    <bdi dir="ltr">•••• 1234</bdi>
                  </p>
                  <p className="text-xs text-muted-foreground">پیش‌فرض</p>
                </div>
                <Button size="sm" variant="outline">
                  تغییر
                </Button>
              </div>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ab5-name">نام صورتحساب</FieldLabel>
                  <Input
                    id="ab5-name"
                    defaultValue="رضا کریمی"
                    placeholder="نام و نام خانوادگی"
                    dir="rtl"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ab5-email">ایمیل فاکتور</FieldLabel>
                  <Input
                    id="ab5-email"
                    type="email"
                    defaultValue="billing@example.com"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>
                    رسیدها به این آدرس می‌روند
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="ab5-addr">آدرس صورتحساب</FieldLabel>
                  <Input id="ab5-addr" placeholder="تهران، خیابان…" dir="rtl" />
                </Field>
              </FieldGroup>
              <Button>ذخیره پرداخت</Button>
            </div>
          ) : null}

          {section === "invoices" ? (
            <div className="space-y-6">
              <Header title="فاکتورها" description="فیلتر و دانلود" />
              <Field>
                <FieldLabel htmlFor="ab5-filter">وضعیت</FieldLabel>
                <Select defaultValue="all">
                  <SelectTrigger
                    id="ab5-filter"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="وضعیت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectItem value="all">همه</SelectItem>
                    <SelectItem value="paid">پرداخت‌شده</SelectItem>
                    <SelectItem value="pending">در انتظار</SelectItem>
                    <SelectItem value="failed">ناموفق</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <ul className="space-y-0 rounded-lg border">
                {[
                  ["INV-1404-07-12", "۱٬۳۲۰٬۰۰۰", "پرداخت‌شده"],
                  ["INV-1404-06-12", "۱٬۳۲۰٬۰۰۰", "پرداخت‌شده"],
                  ["INV-1404-05-12", "۱٬۳۲۰٬۰۰۰", "ناموفق"],
                ].map(([code, amount, status], i) => (
                  <li key={code}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center gap-3 px-4 py-3">
                      <ReceiptIcon className="size-4 shrink-0 text-muted-foreground" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">
                          <bdi dir="ltr">{code}</bdi>
                        </p>
                        <p className="text-xs text-muted-foreground tabular-nums">
                          <bdi dir="ltr">{amount}</bdi> تومان
                        </p>
                      </div>
                      <Badge
                        variant={
                          status === "ناموفق" ? "destructive" : "secondary"
                        }
                      >
                        {status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={<Button variant="ghost" size="icon-sm" />}
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent dir="rtl" lang="fa" align="start">
                          <DropdownMenuItem>دانلود PDF</DropdownMenuItem>
                          <DropdownMenuItem>ارسال ایمیل</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {section === "plans" ? (
            <div className="space-y-6">
              <Header title="طرح‌ها" description="طرح مناسب را انتخاب کنید" />
              <Field>
                <FieldLabel htmlFor="ab5-cycle">دوره</FieldLabel>
                <Select defaultValue="monthly">
                  <SelectTrigger
                    id="ab5-cycle"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="دوره" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectItem value="monthly">ماهانه</SelectItem>
                    <SelectItem value="yearly">سالانه (۲۰٪ تخفیف)</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <div className="grid gap-3 sm:grid-cols-3">
                {PLANS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlan(p.id)}
                    className={cn(
                      "rounded-lg border p-4 text-start transition-colors hover:bg-muted/50",
                      plan === p.id && "border-primary bg-muted/40"
                    )}
                  >
                    <p className="font-medium">{p.name}</p>
                    <p className="mt-1 text-sm tabular-nums">
                      <bdi dir="ltr">{p.price}</bdi>
                      <span className="text-muted-foreground"> /ماه</span>
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {p.desc}
                    </p>
                    {"current" in p && p.current ? (
                      <Badge className="mt-3" variant="secondary">
                        فعلی
                      </Badge>
                    ) : null}
                  </button>
                ))}
              </div>
              <Button>اعمال طرح</Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function Header({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
