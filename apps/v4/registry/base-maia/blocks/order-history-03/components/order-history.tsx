"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import { Input } from "@/registry/base-maia/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-maia/ui/table"

const ORDERS = [
  {
    id: "#۱۴۰۴۰۷۲۱۰۱",
    date: "۲۱ مهر ۱۴۰۴",
    status: "تحویل‌شده",
    total: "۷٬۴۴۰٬۰۰۰",
    email: "sara@example.com",
  },
  {
    id: "#۱۴۰۴۰۷۱۸۰۴",
    date: "۱۸ مهر ۱۴۰۴",
    status: "در حال ارسال",
    total: "۸٬۹۰۰٬۰۰۰",
    email: "ali@example.com",
  },
  {
    id: "#۱۴۰۴۰۷۱۲۰۹",
    date: "۱۲ مهر ۱۴۰۴",
    status: "پرداخت‌شده",
    total: "۵٬۴۰۰٬۰۰۰",
    email: "mina@example.com",
  },
  {
    id: "#۱۴۰۴۰۷۰۵۱۱",
    date: "۵ مهر ۱۴۰۴",
    status: "لغو شده",
    total: "۱٬۸۵۰٬۰۰۰",
    email: "reza@example.com",
  },
  {
    id: "#۱۴۰۴۰۶۲۸۰۳",
    date: "۲۸ شهریور ۱۴۰۴",
    status: "تحویل‌شده",
    total: "۳٬۱۵۰٬۰۰۰",
    email: "negar@example.com",
  },
] as const

export function OrderHistoryFilterable() {
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("all")

  const filtered = ORDERS.filter((order) => {
    const matchStatus = status === "all" || order.status === status
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
            value={status}
            onValueChange={(value) => setStatus((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-44" dir="rtl">
              <SelectValue placeholder="وضعیت" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه وضعیت‌ها</SelectItem>
              <SelectItem value="تحویل‌شده">تحویل‌شده</SelectItem>
              <SelectItem value="در حال ارسال">در حال ارسال</SelectItem>
              <SelectItem value="پرداخت‌شده">پرداخت‌شده</SelectItem>
              <SelectItem value="لغو شده">لغو شده</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          سفارشی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border">
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
                  <TableCell>
                    <bdi dir="ltr" className="font-mono text-xs">
                      {order.id}
                    </bdi>
                  </TableCell>
                  <TableCell>
                    <span dir="ltr" className="inline-block text-start text-sm">
                      {order.email}
                    </span>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{order.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <bdi dir="ltr" className="tabular-nums">
                      {order.total}
                    </bdi>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {filtered.length > 0 && (
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm">
            خروجی اکسل
          </Button>
        </div>
      )}
    </section>
  )
}
