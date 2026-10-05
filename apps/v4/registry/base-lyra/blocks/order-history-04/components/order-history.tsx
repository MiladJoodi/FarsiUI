"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-lyra/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-lyra/ui/table"

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

export default function OrderHistoryActions() {
  const [orders, setOrders] = React.useState(INITIAL)
  const [openId, setOpenId] = React.useState<string | null>(null)

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

      <div className="overflow-x-auto rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">شماره</TableHead>
              <TableHead className="text-start">ایمیل</TableHead>
              <TableHead className="text-start">تاریخ</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">مبلغ</TableHead>
              <TableHead className="pe-4 text-start">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
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
                <TableCell className="tracking-normal">{order.date}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="border">
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="tracking-normal">{order.total}</TableCell>
                <TableCell className="pe-4">
                  <Popover
                    open={openId === order.id}
                    onOpenChange={(open) => setOpenId(open ? order.id : null)}
                  >
                    <PopoverTrigger
                      render={
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-8"
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">منوی سفارش</span>
                    </PopoverTrigger>
                    <PopoverContent
                      dir="rtl"
                      lang="fa"
                      align="end"
                      className="w-44 space-y-1 p-2"
                    >
                      <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        مشاهده جزئیات
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        دانلود رسید
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => {
                          setOrders((prev) =>
                            prev.map((o) =>
                              o.id === order.id
                                ? { ...o, status: "در حال ارسال" }
                                : o
                            )
                          )
                          setOpenId(null)
                        }}
                      >
                        علامت ارسال
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start text-destructive hover:text-destructive"
                        onClick={() => {
                          setOrders((prev) =>
                            prev.map((o) =>
                              o.id === order.id
                                ? { ...o, status: "لغو شده" }
                                : o
                            )
                          )
                          setOpenId(null)
                        }}
                      >
                        لغو سفارش
                      </Button>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
