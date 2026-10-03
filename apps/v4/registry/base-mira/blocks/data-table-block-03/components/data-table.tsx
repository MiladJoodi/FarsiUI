"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
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

const ROWS = [
  {
    name: "سارا محمدی",
    email: "sara@example.com",
    plan: "حرفه‌ای",
    status: "فعال",
  },
  {
    name: "علی رضایی",
    email: "ali@example.com",
    plan: "رایگان",
    status: "در انتظار",
  },
  {
    name: "مینا کریمی",
    email: "mina@example.com",
    plan: "تیمی",
    status: "فعال",
  },
  {
    name: "رضا نوری",
    email: "reza@example.com",
    plan: "حرفه‌ای",
    status: "معلق",
  },
  {
    name: "نگار احمدی",
    email: "negar@example.com",
    plan: "تیمی",
    status: "فعال",
  },
  {
    name: "حسین کاظمی",
    email: "hossein@example.com",
    plan: "رایگان",
    status: "بسته",
  },
] as const

const STATUS_ITEMS = [
  { value: "همه", label: "همه وضعیت‌ها" },
  { value: "فعال", label: "فعال" },
  { value: "در انتظار", label: "در انتظار" },
  { value: "معلق", label: "معلق" },
  { value: "بسته", label: "بسته" },
] as const

type Status = (typeof STATUS_ITEMS)[number]["value"]

export function DataTableFilterable() {
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState<Status>("همه")

  const filtered = ROWS.filter((row) => {
    const matchStatus = status === "همه" || row.status === status
    const q = query.trim().toLowerCase()
    const matchQuery =
      !q ||
      row.name.includes(query) ||
      row.email.toLowerCase().includes(q) ||
      row.plan.includes(query)
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
          <h2 className="text-2xl font-bold tracking-tight">جدول قابل فیلتر</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            جستجو و فیلتر وضعیت با Select راست‌چین
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو نام، ایمیل یا پلن…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            items={[...STATUS_ITEMS]}
            value={status}
            onValueChange={(value) => {
              if (STATUS_ITEMS.some((item) => item.value === value)) {
                setStatus(value as Status)
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
          ردیفی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-start">نام</TableHead>
                <TableHead className="text-start">ایمیل</TableHead>
                <TableHead className="text-start">پلن</TableHead>
                <TableHead className="text-start">وضعیت</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((row) => (
                <TableRow key={row.email}>
                  <TableCell className="text-start font-medium">
                    {row.name}
                  </TableCell>
                  <TableCell>
                    <span
                      dir="ltr"
                      className="block text-start text-sm tracking-normal"
                    >
                      {row.email}
                    </span>
                  </TableCell>
                  <TableCell className="text-start">{row.plan}</TableCell>
                  <TableCell className="text-start">
                    <Badge variant="secondary">{row.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </section>
  )
}
