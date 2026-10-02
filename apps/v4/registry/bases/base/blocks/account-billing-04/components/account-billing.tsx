"use client"

import * as React from "react"
import {
  CreditCardIcon,
  DownloadIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

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
    label: "INV-1405-07-12",
    amount: "۱٬۳۲۰٬۰۰۰",
    date: "۱۴۰۵/۰۷/۱۲",
    status: "پرداخت‌شده",
  },
  {
    id: "2",
    label: "INV-1405-06-12",
    amount: "۱٬۳۲۰٬۰۰۰",
    date: "۱۴۰۵/۰۶/۱۲",
    status: "پرداخت‌شده",
  },
  {
    id: "3",
    label: "INV-1405-05-12",
    amount: "۱٬۳۲۰٬۰۰۰",
    date: "۱۴۰۵/۰۵/۱۲",
    status: "ناموفق",
  },
]

export function AccountBillingHistory() {
  const [filter, setFilter] = React.useState("all")

  const rows = INVOICES.filter(
    (inv) => filter === "all" || inv.status === filter
  )

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
            <div>
              <CardTitle>روش پرداخت</CardTitle>
              <CardDescription>
                کارت ذخیره‌شده و ایمیل فاکتور
              </CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="outline" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuLabel>عملیات کارت</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>ویرایش کارت</DropdownMenuItem>
                <DropdownMenuItem>تنظیم به‌عنوان پیش‌فرض</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  حذف کارت
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 rounded-lg border p-4">
              <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                <CreditCardIcon className="size-4 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">
                  <bdi dir="ltr">•••• 1234</bdi>
                </p>
                <p className="text-xs text-muted-foreground">
                  انقضا{" "}
                  <bdi dir="ltr" className="tabular-nums">
                    ۰۸/۰۷
                  </bdi>
                </p>
              </div>
              <Badge variant="secondary">پیش‌فرض</Badge>
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

        <Card>
          <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
            <div>
              <CardTitle>تاریخچه فاکتور</CardTitle>
              <CardDescription>دانلود و فیلتر وضعیت</CardDescription>
            </div>
            <Select
              value={filter}
              onValueChange={(v) => setFilter((v as string) ?? "all")}
            >
              <SelectTrigger className="w-36" dir="rtl">
                <SelectValue placeholder="وضعیت" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="پرداخت‌شده">پرداخت‌شده</SelectItem>
                <SelectItem value="در انتظار">در انتظار</SelectItem>
                <SelectItem value="ناموفق">ناموفق</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="space-y-0">
            {rows.map((inv, i) => (
              <div key={inv.id}>
                {i > 0 && <Separator />}
                <div className="flex items-center gap-3 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">
                      <bdi dir="ltr">{inv.label}</bdi>
                    </p>
                    <p className="text-xs text-muted-foreground tabular-nums">
                      <bdi dir="ltr">{inv.date}</bdi> ·{" "}
                      <bdi dir="ltr">{inv.amount}</bdi> تومان
                    </p>
                  </div>
                  <Badge
                    variant={
                      inv.status === "ناموفق" ? "destructive" : "secondary"
                    }
                  >
                    {inv.status}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button variant="ghost" size="icon-sm" />}
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent dir="rtl" lang="fa" align="start">
                      <DropdownMenuItem>
                        <DownloadIcon className="size-4" />
                        دانلود PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem>ارسال مجدد ایمیل</DropdownMenuItem>
                      {inv.status === "ناموفق" ? (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>تلاش مجدد پرداخت</DropdownMenuItem>
                        </>
                      ) : null}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
