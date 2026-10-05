"use client"

import * as React from "react"
import { DownloadIcon, MoreHorizontalIcon, PlusIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-maia/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "پرداخت‌شده", label: "پرداخت‌شده" },
  { value: "در انتظار", label: "در انتظار" },
  { value: "سررسید گذشته", label: "سررسید گذشته" },
  { value: "پیش‌نویس", label: "پیش‌نویس" },
] as const

type FilterValue = (typeof FILTER_ITEMS)[number]["value"]

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

const INVOICES = [
  {
    id: "فاکتور-۱۰۴۲",
    customer: "شرکت نوآوران",
    amount: "۹۲۵٬۴۱۰",
    status: "پرداخت‌شده" as const,
    date: new Date(Date.now() - 3 * 86400000),
  },
  {
    id: "فاکتور-۱۰۴۱",
    customer: "استودیو پگاه",
    amount: "۴۹۹٬۰۰۰",
    status: "در انتظار" as const,
    date: new Date(Date.now() - 8 * 86400000),
  },
  {
    id: "فاکتور-۱۰۴۰",
    customer: "گروه آریا",
    amount: "۱٬۲۰۰٬۰۰۰",
    status: "سررسید گذشته" as const,
    date: new Date(Date.now() - 20 * 86400000),
  },
  {
    id: "فاکتور-۱۰۳۹",
    customer: "مریم رضایی",
    amount: "۱۹۹٬۰۰۰",
    status: "پیش‌نویس" as const,
    date: new Date(Date.now() - 2 * 86400000),
  },
] as const

function statusVariant(
  status: (typeof INVOICES)[number]["status"]
): "default" | "secondary" | "outline" | "destructive" {
  if (status === "پرداخت‌شده") return "secondary"
  if (status === "سررسید گذشته") return "destructive"
  if (status === "پیش‌نویس") return "outline"
  return "default"
}

export default function InvoiceList() {
  const [filter, setFilter] = React.useState<FilterValue>("همه")
  const visible =
    filter === "همه" ? INVOICES : INVOICES.filter((i) => i.status === filter)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">فاکتورها</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            فهرست اسناد — تاریخ شمسی
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select
            items={[...FILTER_ITEMS]}
            value={filter}
            onValueChange={(value) => {
              if (FILTER_ITEMS.some((item) => item.value === value)) {
                setFilter(value as FilterValue)
              }
            }}
          >
            <SelectTrigger className="w-[150px]" dir="rtl" size="sm">
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
          <Button size="sm">
            <PlusIcon data-icon="inline-start" />
            فاکتور جدید
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="text-start">
          <CardTitle className="text-base">فهرست</CardTitle>
          <CardDescription className="tracking-normal">
            {toFa(visible.length)} مورد
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {visible.map((inv, i) => (
            <div key={inv.id}>
              {i > 0 ? <Separator /> : null}
              <div className="flex flex-wrap items-center gap-3 px-6 py-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium tracking-normal">
                      {inv.id}
                    </span>
                    <Badge
                      variant={statusVariant(inv.status)}
                      className="text-[10px]"
                    >
                      {inv.status}
                    </Badge>
                  </div>
                  <p className="mt-0.5 text-sm tracking-normal text-muted-foreground">
                    {inv.customer} · {formatJalali(inv.date)}
                  </p>
                </div>
                <span className="text-sm font-medium tracking-normal">
                  {inv.amount} تومان
                </span>
                <div className="flex gap-1">
                  <Button variant="outline" size="icon-sm" aria-label="دانلود">
                    <DownloadIcon />
                  </Button>
                  <Popover>
                    <PopoverTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          aria-label="عملیات"
                        />
                      }
                    >
                      <MoreHorizontalIcon />
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="w-40 p-1"
                      dir="rtl"
                    >
                      <button
                        type="button"
                        className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                      >
                        مشاهده
                      </button>
                      <button
                        type="button"
                        className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                      >
                        ارسال مجدد
                      </button>
                      <button
                        type="button"
                        className="flex w-full rounded-md px-2 py-1.5 text-sm text-destructive hover:bg-muted"
                      >
                        حذف
                      </button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          ))}
          {visible.length === 0 ? (
            <p className="px-6 py-10 text-center text-sm text-muted-foreground">
              فاکتوری با این فیلتر نیست
            </p>
          ) : null}
        </CardContent>
      </Card>
    </section>
  )
}
