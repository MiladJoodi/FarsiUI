"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"

type Order = {
  id: string
  date: string
  status: string
  total: string
  email: string
}

const INITIAL: Order[] = [
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
]

export function OrderHistoryActions() {
  const [orders, setOrders] = React.useState(INITIAL)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">مدیریت سفارش‌ها</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          منوی عملیات راست‌چین برای هر ردیف
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">شماره</TableHead>
              <TableHead className="text-start">ایمیل</TableHead>
              <TableHead className="text-start">تاریخ</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">مبلغ</TableHead>
              <TableHead className="w-12">
                <span className="sr-only">عملیات</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
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
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button variant="ghost" size="icon" className="size-8" />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">منوی سفارش</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      dir="rtl"
                      lang="fa"
                      align="end"
                      className="w-44"
                    >
                      <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>مشاهده جزئیات</DropdownMenuItem>
                      <DropdownMenuItem>دانلود رسید</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          setOrders((prev) =>
                            prev.map((o) =>
                              o.id === order.id
                                ? { ...o, status: "در حال ارسال" }
                                : o
                            )
                          )
                        }
                      >
                        علامت ارسال
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        variant="destructive"
                        onClick={() =>
                          setOrders((prev) =>
                            prev.map((o) =>
                              o.id === order.id
                                ? { ...o, status: "لغو شده" }
                                : o
                            )
                          )
                        }
                      >
                        لغو سفارش
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
