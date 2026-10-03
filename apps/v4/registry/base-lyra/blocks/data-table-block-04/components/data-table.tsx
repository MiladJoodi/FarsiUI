"use client"

import * as React from "react"
import { Columns3Icon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import { Checkbox } from "@/registry/base-lyra/ui/checkbox"
import { Label } from "@/registry/base-lyra/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-lyra/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-lyra/ui/table"

const ROWS = [
  {
    id: "۱۲۰۱",
    customer: "سارا محمدی",
    email: "sara@example.com",
    amount: "۴٬۲۰۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "۱۲۰۲",
    customer: "علی رضایی",
    email: "ali@example.com",
    amount: "۱٬۱۵۰٬۰۰۰",
    status: "در انتظار",
  },
  {
    id: "۱۲۰۳",
    customer: "مینا کریمی",
    email: "mina@example.com",
    amount: "۸٬۹۰۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "۱۲۰۴",
    customer: "رضا نوری",
    email: "reza@example.com",
    amount: "۶۵۰٬۰۰۰",
    status: "لغو شده",
  },
  {
    id: "۱۲۰۵",
    customer: "نگار احمدی",
    email: "negar@example.com",
    amount: "۳٬۳۰۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "۱۲۰۶",
    customer: "حسین کاظمی",
    email: "hossein@example.com",
    amount: "۲٬۷۵۰٬۰۰۰",
    status: "در انتظار",
  },
  {
    id: "۱۲۰۷",
    customer: "لیلا موسوی",
    email: "leila@example.com",
    amount: "۵٬۱۰۰٬۰۰۰",
    status: "پرداخت‌شده",
  },
  {
    id: "۱۲۰۸",
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

const PAGE_SIZE_ITEMS = [
  { value: "3", label: "۳ ردیف" },
  { value: "5", label: "۵ ردیف" },
  { value: "8", label: "۸ ردیف" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function DataTablePaginated() {
  const [pageSize, setPageSize] = React.useState("5")
  const [page, setPage] = React.useState(0)
  const [colsOpen, setColsOpen] = React.useState(false)
  const [visible, setVisible] = React.useState<Record<ColKey, boolean>>({
    id: true,
    customer: true,
    email: true,
    amount: true,
    status: true,
  })

  const size = Number(pageSize) || 5
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
          <Popover open={colsOpen} onOpenChange={setColsOpen}>
            <PopoverTrigger
              render={
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto"
                />
              }
            >
              <Columns3Icon className="size-4" />
              ستون‌ها
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="end"
              className="w-44 space-y-3 p-3"
            >
              <p className="text-sm font-medium">نمایش ستون</p>
              {(Object.keys(COL_LABELS) as ColKey[]).map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <Checkbox
                    id={`col-${key}`}
                    checked={visible[key]}
                    onCheckedChange={(checked) =>
                      setVisible((prev) => ({ ...prev, [key]: !!checked }))
                    }
                  />
                  <Label htmlFor={`col-${key}`} className="font-normal">
                    {COL_LABELS[key]}
                  </Label>
                </div>
              ))}
            </PopoverContent>
          </Popover>
          <Select
            items={[...PAGE_SIZE_ITEMS]}
            value={pageSize}
            onValueChange={(value) => {
              if (PAGE_SIZE_ITEMS.some((item) => item.value === value)) {
                setPageSize(value as string)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-36" dir="rtl">
              <SelectValue>
                {(value: string | null) =>
                  PAGE_SIZE_ITEMS.find((item) => item.value === value)?.label ??
                  "۵ ردیف"
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
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-card">
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
                  <TableCell className="text-start tracking-normal">
                    {row.id}
                  </TableCell>
                )}
                {visible.customer && (
                  <TableCell className="text-start font-medium">
                    {row.customer}
                  </TableCell>
                )}
                {visible.email && (
                  <TableCell>
                    <span
                      dir="ltr"
                      className="block text-start text-sm tracking-normal"
                    >
                      {row.email}
                    </span>
                  </TableCell>
                )}
                {visible.amount && (
                  <TableCell className="text-start tracking-normal">
                    {row.amount}
                  </TableCell>
                )}
                {visible.status && (
                  <TableCell className="text-start">
                    <Badge variant="secondary">{row.status}</Badge>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm tracking-normal text-muted-foreground">
          صفحه {toFa(safePage + 1)} از {toFa(pageCount)}
        </p>
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
    </section>
  )
}
