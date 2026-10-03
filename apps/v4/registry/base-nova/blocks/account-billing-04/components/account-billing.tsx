"use client"

import * as React from "react"
import { CreditCardIcon, DownloadIcon, MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-nova/ui/field"
import { Input } from "@/registry/base-nova/ui/input"
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

type Invoice = {
  id: string
  label: string
  amount: string
  date: string
  status: "پرداخت‌شده" | "در انتظار" | "ناموفق"
}

const INVOICES: Invoice[] = [
  {
    id: "1",
    label: "فاکتور-۱۴۰۵-۰۷-۱۲",
    amount: "۱٬۳۲۰٬۰۰۰",
    date: "۱۴۰۵/۰۷/۱۲",
    status: "پرداخت‌شده",
  },
  {
    id: "2",
    label: "فاکتور-۱۴۰۵-۰۶-۱۲",
    amount: "۱٬۳۲۰٬۰۰۰",
    date: "۱۴۰۵/۰۶/۱۲",
    status: "پرداخت‌شده",
  },
  {
    id: "3",
    label: "فاکتور-۱۴۰۵-۰۵-۱۲",
    amount: "۱٬۳۲۰٬۰۰۰",
    date: "۱۴۰۵/۰۵/۱۲",
    status: "ناموفق",
  },
]

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "پرداخت‌شده", label: "پرداخت‌شده" },
  { value: "در انتظار", label: "در انتظار" },
  { value: "ناموفق", label: "ناموفق" },
] as const

export function AccountBillingHistory() {
  const [filter, setFilter] = React.useState("همه")
  const [cardOpen, setCardOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = INVOICES.filter(
    (inv) => filter === "همه" || inv.status === filter
  )

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="space-y-6">
        <Card className="bg-card">
          <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
            <div>
              <CardTitle>روش پرداخت</CardTitle>
              <CardDescription>کارت ذخیره‌شده و ایمیل فاکتور</CardDescription>
            </div>
            <Popover open={cardOpen} onOpenChange={setCardOpen}>
              <PopoverTrigger
                render={
                  <Button type="button" variant="outline" size="icon-sm" />
                }
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="start"
                className="w-48 space-y-1 p-2"
              >
                <p className="px-2 py-1.5 text-sm font-medium">عملیات کارت</p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setCardOpen(false)}
                >
                  ویرایش کارت
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setCardOpen(false)}
                >
                  تنظیم به‌عنوان پیش‌فرض
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start text-destructive hover:text-destructive"
                  onClick={() => setCardOpen(false)}
                >
                  حذف کارت
                </Button>
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 rounded-lg border p-4">
              <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                <CreditCardIcon className="size-4 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium tracking-normal">•••• ۱۲۳۴</p>
                <p className="text-xs tracking-normal text-muted-foreground">
                  انقضا ۰۸/۰۷
                </p>
              </div>
              <Badge variant="outline" className="border">
                پیش‌فرض
              </Badge>
            </div>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="ab4-email">ایمیل فاکتور</FieldLabel>
                <Input
                  id="ab4-email"
                  type="email"
                  defaultValue="billing@example.com"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="ab4-name">نام صورتحساب</FieldLabel>
                <Input
                  id="ab4-name"
                  defaultValue="رضا کریمی"
                  placeholder="نام روی فاکتور"
                  dir="rtl"
                />
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
            <div>
              <CardTitle>تاریخچه فاکتور</CardTitle>
              <CardDescription>دانلود و فیلتر وضعیت</CardDescription>
            </div>
            <Select
              items={[...FILTER_ITEMS]}
              value={filter}
              onValueChange={(value) => {
                if (FILTER_ITEMS.some((item) => item.value === value)) {
                  setFilter(value as string)
                }
              }}
            >
              <SelectTrigger className="w-36" dir="rtl">
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
          </CardHeader>
          <CardContent className="space-y-0">
            {rows.map((inv, i) => (
              <div key={inv.id}>
                {i > 0 && <Separator />}
                <div className="flex items-center gap-3 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium tracking-normal">
                      {inv.label}
                    </p>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {inv.date} · {inv.amount} تومان
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
                        <Button type="button" variant="ghost" size="icon-sm" />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </PopoverTrigger>
                    <PopoverContent
                      dir="rtl"
                      lang="fa"
                      align="start"
                      className="w-44 space-y-1 p-2"
                    >
                      <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        <DownloadIcon className="size-4" />
                        دانلود PDF
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        ارسال مجدد ایمیل
                      </Button>
                      {inv.status === "ناموفق" ? (
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-8 w-full justify-start"
                          onClick={() => setOpenId(null)}
                        >
                          تلاش مجدد پرداخت
                        </Button>
                      ) : null}
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
