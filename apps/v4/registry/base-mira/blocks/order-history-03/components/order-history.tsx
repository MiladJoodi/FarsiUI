"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import { Input } from "@/registry/base-mira/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-mira/ui/table"

const ORDERS = [
  {
    id: "#۱۴۰۵۰۷۲۱۰۱",
    date: "۲۱ مهر ۱۴۰۵",
    status: "تحویل‌شده",
    total: "۷٬۴۴۰٬۰۰۰",
    email: "sara@example.com",
  },
  {
    id: "#۱۴۰۵۰۷۱۸۰۴",
    date: "۱۸ مهر ۱۴۰۵",
    status: "در حال ارسال",
    total: "۸٬۹۰۰٬۰۰۰",
    email: "ali@example.com",
  },
  {
    id: "#۱۴۰۵۰۷۱۲۰۹",
    date: "۱۲ مهر ۱۴۰۵",
    status: "پرداخت‌شده",
    total: "۵٬۴۰۰٬۰۰۰",
    email: "mina@example.com",
  },
  {
    id: "#۱۴۰۵۰۷۰۵۱۱",
    date: "۵ مهر ۱۴۰۵",
    status: "لغو شده",
    total: "۱٬۸۵۰٬۰۰۰",
    email: "reza@example.com",
  },
  {
    id: "#۱۴۰۵۰۶۲۸۰۳",
    date: "۲۸ شهریور ۱۴۰۵",
    status: "تحویل‌شده",
    total: "۳٬۱۵۰٬۰۰۰",
    email: "negar@example.com",
  },
] as const

const STATUS_ITEMS = [
  { value: "همه", label: "همه وضعیت‌ها" },
  { value: "تحویل‌شده", label: "تحویل‌شده" },
  { value: "در حال ارسال", label: "در حال ارسال" },
  { value: "پرداخت‌شده", label: "پرداخت‌شده" },
  { value: "لغو شده", label: "لغو شده" },
] as const

export function OrderHistoryFilterable() {
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("همه")

  const filtered = ORDERS.filter((order) => {
    const matchStatus = status === "همه" || order.status === status
    const q = query.trim().toLowerCase()
    const matchQuery =
      !q ||
      order.id.includes(query) ||
      order.email.toLowerCase().includes(q) ||
      order.date.includes(query) ||
      order.status.includes(query)
    return matchStatus && matchQuery
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            جستجو در سفارش‌ها
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            فیلتر وضعیت با Select راست‌چین
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو شماره، ایمیل یا تاریخ…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            items={[...STATUS_ITEMS]}
            value={status}
            onValueChange={(value) => {
              if (STATUS_ITEMS.some((item) => item.value === value)) {
                setStatus(value as string)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-44" dir="rtl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {STATUS_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed bg-card px-6 py-16 text-center text-sm text-muted-foreground">
          سفارشی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-start">شماره</TableHead>
                <TableHead className="text-start">ایمیل</TableHead>
                <TableHead className="text-start">تاریخ</TableHead>
                <TableHead className="text-start">وضعیت</TableHead>
                <TableHead className="text-start">مبلغ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="tracking-normal">{order.id}</TableCell>
                  <TableCell>
                    <span
                      dir="ltr"
                      className="block text-start text-sm tracking-normal"
                    >
                      {order.email}
                    </span>
                  </TableCell>
                  <TableCell className="tracking-normal">
                    {order.date}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border">
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="tracking-normal">
                    {order.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {filtered.length > 0 && (
        <div className="mt-4 flex justify-end">
          <Button type="button" variant="outline" size="sm">
            خروجی اکسل
          </Button>
        </div>
      )}
    </section>
  )
}
