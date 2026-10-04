"use client"

import * as React from "react"
import { CreditCardIcon, MoreHorizontalIcon, ReceiptIcon } from "lucide-react"

import { cn } from "@/registry/base-nova/lib/utils"
import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-nova/ui/field"
import { Input } from "@/registry/base-nova/ui/input"
import { Label } from "@/registry/base-nova/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-nova/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-nova/ui/select"
import { Separator } from "@/registry/base-nova/ui/separator"
import { Switch } from "@/registry/base-nova/ui/switch"

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

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "پرداخت‌شده", label: "پرداخت‌شده" },
  { value: "در انتظار", label: "در انتظار" },
  { value: "ناموفق", label: "ناموفق" },
] as const

const CYCLE_ITEMS = [
  { value: "ماهانه", label: "ماهانه" },
  { value: "سالانه", label: "سالانه (۲۰٪ تخفیف)" },
] as const

const INVOICE_ROWS = [
  {
    id: "1",
    code: "فاکتور-۱۴۰۵-۰۷-۱۲",
    amount: "۱٬۳۲۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "2",
    code: "فاکتور-۱۴۰۵-۰۶-۱۲",
    amount: "۱٬۳۲۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "3",
    code: "فاکتور-۱۴۰۵-۰۵-۱۲",
    amount: "۱٬۳۲۰٬۰۰۰",
    status: "ناموفق",
  },
] as const

export default function AccountBillingHub() {
  const [section, setSection] = React.useState<NavId>("overview")
  const [plan, setPlan] = React.useState("pro")
  const [filter, setFilter] = React.useState("همه")
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const filteredInvoices = INVOICE_ROWS.filter(
    (inv) => filter === "همه" || inv.status === filter
  )

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
        <Popover open={moreOpen} onOpenChange={setMoreOpen}>
          <PopoverTrigger
            render={<Button type="button" variant="outline" size="sm" />}
          >
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </PopoverTrigger>
          <PopoverContent
            dir="rtl"
            lang="fa"
            align="start"
            className="w-48 space-y-1 p-2"
          >
            <p className="px-2 py-1.5 text-sm font-medium">میان‌برها</p>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setSection("invoices")
                setMoreOpen(false)
              }}
            >
              فاکتورهای اخیر
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setSection("plans")
                setMoreOpen(false)
              }}
            >
              تغییر طرح
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start text-destructive hover:text-destructive"
              onClick={() => setMoreOpen(false)}
            >
              لغو اشتراک
            </Button>
          </PopoverContent>
        </Popover>
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
                  <Badge className="mt-2 border" variant="outline">
                    فعال
                  </Badge>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">پرداخت بعدی</p>
                  <p className="mt-1 text-lg font-semibold tracking-normal">
                    ۱٬۳۲۰٬۰۰۰ تومان
                  </p>
                  <p className="mt-2 text-xs tracking-normal text-muted-foreground">
                    ۱۴۰۵/۰۸/۱۲
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
                  <p className="text-sm font-medium tracking-normal">
                    •••• ۱۲۳۴
                  </p>
                  <p className="text-xs text-muted-foreground">پیش‌فرض</p>
                </div>
                <Button type="button" size="sm" variant="outline">
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
                  <FieldLabel htmlFor="ab5-card">شماره کارت</FieldLabel>
                  <Input
                    id="ab5-card"
                    inputMode="numeric"
                    defaultValue="۶۰۳۷-****-****-۱۲۳۴"
                    placeholder="۶۰۳۷-****-****-۱۲۳۴"
                    dir="rtl"
                    className="text-end tracking-normal"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ab5-addr">آدرس صورتحساب</FieldLabel>
                  <Input id="ab5-addr" placeholder="تهران، خیابان…" dir="rtl" />
                </Field>
              </FieldGroup>
              <Button type="button">ذخیره پرداخت</Button>
            </div>
          ) : null}

          {section === "invoices" ? (
            <div className="space-y-6">
              <Header title="فاکتورها" description="فیلتر و دانلود" />
              <Field>
                <FieldLabel htmlFor="ab5-filter">وضعیت</FieldLabel>
                <Select
                  items={[...FILTER_ITEMS]}
                  value={filter}
                  onValueChange={(value) => {
                    if (FILTER_ITEMS.some((item) => item.value === value)) {
                      setFilter(value as string)
                    }
                  }}
                >
                  <SelectTrigger
                    id="ab5-filter"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="وضعیت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {FILTER_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <ul className="space-y-0 rounded-lg border">
                {filteredInvoices.map((inv, i) => (
                  <li key={inv.id}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center gap-3 px-4 py-3">
                      <ReceiptIcon className="size-4 shrink-0 text-muted-foreground" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium tracking-normal">
                          {inv.code}
                        </p>
                        <p className="text-xs tracking-normal text-muted-foreground">
                          {inv.amount} تومان
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          inv.status === "ناموفق"
                            ? "border-destructive text-destructive"
                            : "border"
                        }
                      >
                        {inv.status}
                      </Badge>
                      <Popover
                        open={openId === inv.id}
                        onOpenChange={(open) => setOpenId(open ? inv.id : null)}
                      >
                        <PopoverTrigger
                          render={
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
                        </PopoverTrigger>
                        <PopoverContent
                          dir="rtl"
                          lang="fa"
                          align="start"
                          className="w-40 space-y-1 p-2"
                        >
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            دانلود PDF
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            ارسال ایمیل
                          </Button>
                        </PopoverContent>
                      </Popover>
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
                <Select items={[...CYCLE_ITEMS]} defaultValue="ماهانه">
                  <SelectTrigger
                    id="ab5-cycle"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="دوره" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {CYCLE_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
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
                    <p className="mt-1 text-sm tracking-normal">
                      {p.price}
                      <span className="text-muted-foreground"> /ماه</span>
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {p.desc}
                    </p>
                    {"current" in p && p.current ? (
                      <Badge className="mt-3 border" variant="outline">
                        فعلی
                      </Badge>
                    ) : null}
                  </button>
                ))}
              </div>
              <Button type="button">اعمال طرح</Button>
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
