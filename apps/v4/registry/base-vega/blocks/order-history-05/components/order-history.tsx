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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-vega/ui/dropdown-menu"
import { Input } from "@/registry/base-vega/ui/input"
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
    id: "#۱۴۰۴۰۷۲۱۰۱",
    date: "۲۱ مهر ۱۴۰۴",
    status: "تحویل‌شده",
    total: "۷٬۴۴۰٬۰۰۰",
    totalNum: 7440000,
    email: "sara@example.com",
    customer: "سارا محمدی",
  },
  {
    id: "#۱۴۰۴۰۷۱۸۰۴",
    date: "۱۸ مهر ۱۴۰۴",
    status: "در حال ارسال",
    total: "۸٬۹۰۰٬۰۰۰",
    totalNum: 8900000,
    email: "ali@example.com",
    customer: "علی رضایی",
  },
  {
    id: "#۱۴۰۴۰۷۱۲۰۹",
    date: "۱۲ مهر ۱۴۰۴",
    status: "پرداخت‌شده",
    total: "۵٬۴۰۰٬۰۰۰",
    totalNum: 5400000,
    email: "mina@example.com",
    customer: "مینا کریمی",
  },
  {
    id: "#۱۴۰۴۰۷۰۵۱۱",
    date: "۵ مهر ۱۴۰۴",
    status: "لغو شده",
    total: "۱٬۸۵۰٬۰۰۰",
    totalNum: 1850000,
    email: "reza@example.com",
    customer: "رضا نوری",
  },
  {
    id: "#۱۴۰۴۰۶۲۸۰۳",
    date: "۲۸ شهریور ۱۴۰۴",
    status: "تحویل‌شده",
    total: "۳٬۱۵۰٬۰۰۰",
    totalNum: 3150000,
    email: "negar@example.com",
    customer: "نگار احمدی",
  },
  {
    id: "#۱۴۰۴۰۶۲۰۱۵",
    date: "۲۰ شهریور ۱۴۰۴",
    status: "در حال ارسال",
    total: "۴٬۲۹۰٬۰۰۰",
    totalNum: 4290000,
    email: "hossein@example.com",
    customer: "حسین کاظمی",
  },
  {
    id: "#۱۴۰۴۰۶۱۲۰۸",
    date: "۱۲ شهریور ۱۴۰۴",
    status: "پرداخت‌شده",
    total: "۹۶۰٬۰۰۰",
    totalNum: 960000,
    email: "leila@example.com",
    customer: "لیلا موسوی",
  },
  {
    id: "#۱۴۰۴۰۶۰۱۰۲",
    date: "۱ شهریور ۱۴۰۴",
    status: "تحویل‌شده",
    total: "۱۲٬۵۰۰٬۰۰۰",
    totalNum: 12500000,
    email: "amir@example.com",
    customer: "امیر حسینی",
  },
]

type SortKey = "date" | "total" | "status" | "customer"

const SORT_LABELS: Record<SortKey, string> = {
  date: "تاریخ",
  total: "مبلغ",
  status: "وضعیت",
  customer: "مشتری",
}

export function OrderHistoryHub() {
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("all")
  const [sort, setSort] = React.useState<SortKey>("date")
  const [pageSize, setPageSize] = React.useState("5")
  const [page, setPage] = React.useState(0)
  const [orders, setOrders] = React.useState(ORDERS)

  const filtered = React.useMemo(() => {
    let list = orders.filter((order) => {
      const matchStatus = status === "all" || order.status === status
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
      if (sort === "total") return b.totalNum - a.totalNum
      return a[sort].localeCompare(b[sort], "fa")
    })
    return list
  }, [orders, query, status, sort])

  React.useEffect(() => {
    setPage(0)
  }, [query, status, pageSize])

  const size = Number(pageSize)
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
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>کل سفارش‌ها</CardDescription>
              <CardTitle className="text-2xl">
                <bdi dir="ltr">{orders.length}</bdi>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>تحویل‌شده</CardDescription>
              <CardTitle className="text-2xl">
                <bdi dir="ltr">{delivered}</bdi>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>در حال ارسال</CardDescription>
              <CardTitle className="text-2xl">
                <bdi dir="ltr">{shipping}</bdi>
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
            value={status}
            onValueChange={(value) => setStatus((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="وضعیت" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه</SelectItem>
              <SelectItem value="تحویل‌شده">تحویل‌شده</SelectItem>
              <SelectItem value="در حال ارسال">در حال ارسال</SelectItem>
              <SelectItem value="پرداخت‌شده">پرداخت‌شده</SelectItem>
              <SelectItem value="لغو شده">لغو شده</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full sm:w-auto" />}
            >
              مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              className="w-40"
            >
              <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort((v as SortKey) ?? "date")}
              >
                {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                  <DropdownMenuRadioItem key={key} value={key}>
                    {SORT_LABELS[key]}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          سفارشی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-start">شماره</TableHead>
                  <TableHead className="text-start">مشتری</TableHead>
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
                {slice.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <bdi dir="ltr" className="font-mono text-xs">
                        {order.id}
                      </bdi>
                    </TableCell>
                    <TableCell className="font-medium">
                      {order.customer}
                    </TableCell>
                    <TableCell>
                      <span
                        dir="ltr"
                        className="inline-block text-start text-sm"
                      >
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
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8"
                            />
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
                          <DropdownMenuItem>جزئیات</DropdownMenuItem>
                          <DropdownMenuItem>رسید PDF</DropdownMenuItem>
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
                            لغو
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Select
              value={pageSize}
              onValueChange={(value) => setPageSize((value as string) ?? "5")}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="تعداد" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="3">۳ ردیف</SelectItem>
                <SelectItem value="5">۵ ردیف</SelectItem>
                <SelectItem value="8">۸ ردیف</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-3">
              <p className="text-sm text-muted-foreground">
                صفحه <bdi dir="ltr">{safePage + 1}</bdi> از{" "}
                <bdi dir="ltr">{pageCount}</bdi>
              </p>
              <Button
                variant="outline"
                size="sm"
                disabled={safePage === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
              >
                قبلی
              </Button>
              <Button
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

      <Card dir="rtl" lang="fa">
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
