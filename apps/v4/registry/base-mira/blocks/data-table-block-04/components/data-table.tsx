"use client"

import * as React from "react"
import { Columns3Icon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-mira/ui/dropdown-menu"
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

const ROWS = [
  {
    id: "ORD-۱۲۰۱",
    customer: "سارا محمدی",
    email: "sara@example.com",
    amount: "۴٬۲۰۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "ORD-۱۲۰۲",
    customer: "علی رضایی",
    email: "ali@example.com",
    amount: "۱٬۱۵۰٬۰۰۰",
    status: "در انتظار",
  },
  {
    id: "ORD-۱۲۰۳",
    customer: "مینا کریمی",
    email: "mina@example.com",
    amount: "۸٬۹۰۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "ORD-۱۲۰۴",
    customer: "رضا نوری",
    email: "reza@example.com",
    amount: "۶۵۰٬۰۰۰",
    status: "لغو شده",
  },
  {
    id: "ORD-۱۲۰۵",
    customer: "نگار احمدی",
    email: "negar@example.com",
    amount: "۳٬۳۰۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "ORD-۱۲۰۶",
    customer: "حسین کاظمی",
    email: "hossein@example.com",
    amount: "۲٬۷۵۰٬۰۰۰",
    status: "در انتظار",
  },
  {
    id: "ORD-۱۲۰۷",
    customer: "لیلا موسوی",
    email: "leila@example.com",
    amount: "۵٬۱۰۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "ORD-۱۲۰۸",
    customer: "امیر حسینی",
    email: "amir@example.com",
    amount: "۹۸۰٬۰۰۰",
    status: "بازگشت وجه",
  },
] as const

type ColKey = "id" | "customer" | "email" | "amount" | "status"

const COL_LABELS: Record<ColKey, string> = {
  id: "شناسه",
  customer: "مشتری",
  email: "ایمیل",
  amount: "مبلغ",
  status: "وضعیت",
}

export function DataTablePaginated() {
  const [pageSize, setPageSize] = React.useState("5")
  const [page, setPage] = React.useState(0)
  const [visible, setVisible] = React.useState<Record<ColKey, boolean>>({
    id: true,
    customer: true,
    email: true,
    amount: true,
    status: true,
  })

  const size = Number(pageSize)
  const pageCount = Math.max(1, Math.ceil(ROWS.length / size))
  const safePage = Math.min(page, pageCount - 1)
  const slice = ROWS.slice(safePage * size, safePage * size + size)

  React.useEffect(() => {
    setPage(0)
  }, [pageSize])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            سفارش‌ها با صفحه‌بندی
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            ستون‌های قابل نمایش و تعداد ردیف در هر صفحه
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full sm:w-auto" />}
            >
              <Columns3Icon className="size-4" />
              ستون‌ها
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              className="w-44"
            >
              <DropdownMenuLabel>نمایش ستون</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {(Object.keys(COL_LABELS) as ColKey[]).map((key) => (
                <DropdownMenuCheckboxItem
                  key={key}
                  checked={visible[key]}
                  onCheckedChange={(checked) =>
                    setVisible((prev) => ({ ...prev, [key]: !!checked }))
                  }
                >
                  {COL_LABELS[key]}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Select
            value={pageSize}
            onValueChange={(value) => setPageSize((value as string) ?? "5")}
          >
            <SelectTrigger className="w-full sm:w-36" dir="rtl">
              <SelectValue placeholder="تعداد ردیف" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="3">۳ ردیف</SelectItem>
              <SelectItem value="5">۵ ردیف</SelectItem>
              <SelectItem value="8">۸ ردیف</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              {visible.id && (
                <TableHead className="text-start">شناسه</TableHead>
              )}
              {visible.customer && (
                <TableHead className="text-start">مشتری</TableHead>
              )}
              {visible.email && (
                <TableHead className="text-start">ایمیل</TableHead>
              )}
              {visible.amount && (
                <TableHead className="text-start">مبلغ (تومان)</TableHead>
              )}
              {visible.status && (
                <TableHead className="text-start">وضعیت</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {slice.map((row) => (
              <TableRow key={row.id}>
                {visible.id && (
                  <TableCell>
                    <bdi dir="ltr" className="font-mono text-xs">
                      {row.id}
                    </bdi>
                  </TableCell>
                )}
                {visible.customer && (
                  <TableCell className="font-medium">{row.customer}</TableCell>
                )}
                {visible.email && (
                  <TableCell>
                    <span dir="ltr" className="inline-block text-start text-sm">
                      {row.email}
                    </span>
                  </TableCell>
                )}
                {visible.amount && (
                  <TableCell>
                    <bdi dir="ltr" className="tabular-nums">
                      {row.amount}
                    </bdi>
                  </TableCell>
                )}
                {visible.status && (
                  <TableCell>
                    <Badge variant="secondary">{row.status}</Badge>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          صفحه <bdi dir="ltr">{safePage + 1}</bdi> از{" "}
          <bdi dir="ltr">{pageCount}</bdi>
        </p>
        <div className="flex gap-2">
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
    </section>
  )
}
