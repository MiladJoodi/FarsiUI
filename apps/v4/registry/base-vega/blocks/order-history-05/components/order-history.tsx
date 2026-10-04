"use client"

import * as React from "react"
import { MoreHorizontalIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Input } from "@/registry/base-vega/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-vega/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"
import { Separator } from "@/registry/base-vega/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-vega/ui/table"

type Order = {
  id: string
  date: string
  status: string
  total: string
  totalNum: number
  email: string
  customer: string
}

const ORDERS: Order[] = [
  {
    id: "#۱۴۰۵۰۷۲۱۰۱",
    date: "۲۱ مهر ۱۴۰۵",
    status: "تحویل‌شده",
    total: "۷٬۴۴۰٬۰۰۰",
    totalNum: 7440000,
    email: "sara@example.com",
    customer: "سارا محمدی",
  },
  {
    id: "#۱۴۰۵۰۷۱۸۰۴",
    date: "۱۸ مهر ۱۴۰۵",
    status: "در حال ارسال",
    total: "۸٬۹۰۰٬۰۰۰",
    totalNum: 8900000,
    email: "ali@example.com",
    customer: "علی رضایی",
  },
  {
    id: "#۱۴۰۵۰۷۱۲۰۹",
    date: "۱۲ مهر ۱۴۰۵",
    status: "پرداخت‌شده",
    total: "۵٬۴۰۰٬۰۰۰",
    totalNum: 5400000,
    email: "mina@example.com",
    customer: "مینا کریمی",
  },
  {
    id: "#۱۴۰۵۰۷۰۵۱۱",
    date: "۵ مهر ۱۴۰۵",
    status: "لغو شده",
    total: "۱٬۸۵۰٬۰۰۰",
    totalNum: 1850000,
    email: "reza@example.com",
    customer: "رضا نوری",
  },
  {
    id: "#۱۴۰۵۰۶۲۸۰۳",
    date: "۲۸ شهریور ۱۴۰۵",
    status: "تحویل‌شده",
    total: "۳٬۱۵۰٬۰۰۰",
    totalNum: 3150000,
    email: "negar@example.com",
    customer: "نگار احمدی",
  },
  {
    id: "#۱۴۰۵۰۶۲۰۱۵",
    date: "۲۰ شهریور ۱۴۰۵",
    status: "در حال ارسال",
    total: "۴٬۲۹۰٬۰۰۰",
    totalNum: 4290000,
    email: "hossein@example.com",
    customer: "حسین کاظمی",
  },
  {
    id: "#۱۴۰۵۰۶۱۲۰۸",
    date: "۱۲ شهریور ۱۴۰۵",
    status: "پرداخت‌شده",
    total: "۹۶۰٬۰۰۰",
    totalNum: 960000,
    email: "leila@example.com",
    customer: "لیلا موسوی",
  },
  {
    id: "#۱۴۰۵۰۶۰۱۰۲",
    date: "۱ شهریور ۱۴۰۵",
    status: "تحویل‌شده",
    total: "۱۲٬۵۰۰٬۰۰۰",
    totalNum: 12500000,
    email: "amir@example.com",
    customer: "امیر حسینی",
  },
]

const STATUS_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "تحویل‌شده", label: "تحویل‌شده" },
  { value: "در حال ارسال", label: "در حال ارسال" },
  { value: "پرداخت‌شده", label: "پرداخت‌شده" },
  { value: "لغو شده", label: "لغو شده" },
] as const

const SORT_ITEMS = [
  { value: "تاریخ", label: "تاریخ" },
  { value: "مبلغ", label: "مبلغ" },
  { value: "وضعیت", label: "وضعیت" },
  { value: "مشتری", label: "مشتری" },
] as const

const PAGE_SIZE_ITEMS = [
  { value: "3", label: "۳ ردیف" },
  { value: "5", label: "۵ ردیف" },
  { value: "8", label: "۸ ردیف" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function OrderHistoryHub() {
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("همه")
  const [sort, setSort] = React.useState<SortKey>("تاریخ")
  const [pageSize, setPageSize] = React.useState("5")
  const [page, setPage] = React.useState(0)
  const [orders, setOrders] = React.useState(ORDERS)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const filtered = React.useMemo(() => {
    let list = orders.filter((order) => {
      const matchStatus = status === "همه" || order.status === status
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        order.id.includes(query) ||
        order.email.toLowerCase().includes(q) ||
        order.customer.includes(query) ||
        order.status.includes(query)
      return matchStatus && matchQuery
    })
    list = [...list].sort((a, b) => {
      if (sort === "مبلغ") return b.totalNum - a.totalNum
      if (sort === "وضعیت") return a.status.localeCompare(b.status, "fa")
      if (sort === "مشتری") return a.customer.localeCompare(b.customer, "fa")
      return a.date.localeCompare(b.date, "fa")
    })
    return list
  }, [orders, query, status, sort])

  React.useEffect(() => {
    setPage(0)
  }, [query, status, pageSize])

  const size = Number(pageSize) || 5
  const pageCount = Math.max(1, Math.ceil(filtered.length / size))
  const safePage = Math.min(page, pageCount - 1)
  const slice = filtered.slice(safePage * size, safePage * size + size)

  const delivered = orders.filter((o) => o.status === "تحویل‌شده").length
  const shipping = orders.filter((o) => o.status === "در حال ارسال").length

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            حساب کاربری
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            مرکز تاریخچه سفارش
          </h2>
          <p className="mt-2 text-muted-foreground">
            جستجو، فیلتر، مرتب‌سازی و ارسال رسید
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Card className="bg-card">
            <CardHeader className="pb-2">
              <CardDescription>کل سفارش‌ها</CardDescription>
              <CardTitle className="text-2xl tracking-normal">
                {toFa(orders.length)}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-card">
            <CardHeader className="pb-2">
              <CardDescription>تحویل‌شده</CardDescription>
              <CardTitle className="text-2xl tracking-normal">
                {toFa(delivered)}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-card">
            <CardHeader className="pb-2">
              <CardDescription>در حال ارسال</CardDescription>
              <CardTitle className="text-2xl tracking-normal">
                {toFa(shipping)}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو شماره، مشتری یا ایمیل…"
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
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
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
          <Select
            items={[...SORT_ITEMS]}
            value={sort}
            onValueChange={(value) => {
              if (SORT_ITEMS.some((item) => item.value === value)) {
                setSort(value as SortKey)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="مرتب‌سازی" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {SORT_ITEMS.map((item) => (
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
        <>
          <div className="overflow-x-auto rounded-xl border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-start">شماره</TableHead>
                  <TableHead className="text-start">مشتری</TableHead>
                  <TableHead className="text-start">ایمیل</TableHead>
                  <TableHead className="text-start">تاریخ</TableHead>
                  <TableHead className="text-start">وضعیت</TableHead>
                  <TableHead className="text-start">مبلغ</TableHead>
                  <TableHead className="pe-4 text-start">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {slice.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="tracking-normal">
                      {order.id}
                    </TableCell>
                    <TableCell className="font-medium">
                      {order.customer}
                    </TableCell>
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
                    <TableCell className="pe-4">
                      <Popover
                        open={openId === order.id}
                        onOpenChange={(open) =>
                          setOpenId(open ? order.id : null)
                        }
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
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            جزئیات
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            رسید PDF
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
                            لغو
                          </Button>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Select
                items={[...PAGE_SIZE_ITEMS]}
                value={pageSize}
                onValueChange={(value) => {
                  if (PAGE_SIZE_ITEMS.some((item) => item.value === value)) {
                    setPageSize(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-36" dir="rtl">
                  <SelectValue>
                    {(value: string | null) =>
                      PAGE_SIZE_ITEMS.find((item) => item.value === value)
                        ?.label ?? "۵ ردیف"
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {PAGE_SIZE_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm tracking-normal text-muted-foreground">
                صفحه {toFa(safePage + 1)} از {toFa(pageCount)}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={safePage === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
              >
                قبلی
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={safePage >= pageCount - 1}
                onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              >
                بعدی
              </Button>
            </div>
          </div>
        </>
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa" className="bg-card">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">ارسال رسید سفارش</CardTitle>
          <CardDescription>
            نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="text"
              placeholder="شماره سفارش"
              dir="rtl"
              className="sm:w-40"
            />
            <Input
              type="email"
              required
              placeholder="name@example.com"
              dir="ltr"
              className="text-start sm:flex-1"
            />
            <Button type="submit" className="sm:shrink-0">
              ارسال
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
