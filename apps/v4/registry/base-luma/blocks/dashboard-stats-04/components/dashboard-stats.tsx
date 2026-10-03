"use client"

import * as React from "react"

import { StatNumber } from "@/registry/base-luma/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-luma/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-luma/ui/table"

const DATA = {
  امروز: {
    hero: "۱۸٬۴۰۰٬۰۰۰",
    label: "درآمد",
    rows: [
      { channel: "وب", value: "۹٬۲۰۰٬۰۰۰", share: "٪۵۰" },
      { channel: "اپ", value: "۵٬۵۰۰٬۰۰۰", share: "٪۳۰" },
      { channel: "نمایندگی", value: "۳٬۷۰۰٬۰۰۰", share: "٪۲۰" },
    ],
  },
  هفته: {
    hero: "۹۶٬۰۰۰٬۰۰۰",
    label: "درآمد",
    rows: [
      { channel: "وب", value: "۴۸٬۰۰۰٬۰۰۰", share: "٪۵۰" },
      { channel: "اپ", value: "۲۸٬۸۰۰٬۰۰۰", share: "٪۳۰" },
      { channel: "نمایندگی", value: "۱۹٬۲۰۰٬۰۰۰", share: "٪۲۰" },
    ],
  },
  ماه: {
    hero: "۴۲۰٬۰۰۰٬۰۰۰",
    label: "درآمد",
    rows: [
      { channel: "وب", value: "۲۱۰٬۰۰۰٬۰۰۰", share: "٪۵۰" },
      { channel: "اپ", value: "۱۲۶٬۰۰۰٬۰۰۰", share: "٪۳۰" },
      { channel: "نمایندگی", value: "۸۴٬۰۰۰٬۰۰۰", share: "٪۲۰" },
    ],
  },
} as const

type Period = keyof typeof DATA

const PERIOD_ITEMS = (Object.keys(DATA) as Period[]).map((key) => ({
  value: key,
  label: key,
}))

export function DashboardStatsPeriod() {
  const [period, setPeriod] = React.useState<Period>("هفته")
  const current = DATA[period]

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="outline" className="mb-3">
            کانال‌ها
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            درآمد بر اساس کانال
          </h2>
          <p className="mt-2 text-muted-foreground">
            بازه را عوض کنید تا جدول به‌روز شود
          </p>
        </div>
        <Select
          items={PERIOD_ITEMS}
          value={period}
          onValueChange={(value) => {
            if (value && value in DATA) setPeriod(value as Period)
          }}
        >
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
            <SelectValue placeholder="بازه" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            {PERIOD_ITEMS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="mb-4">
        <CardHeader>
          <CardDescription>{current.label}</CardDescription>
          <CardTitle className="text-3xl">
            <StatNumber value={current.hero} />
            <span className="ms-2 text-base font-normal text-muted-foreground">
              تومان
            </span>
          </CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-start">کانال</TableHead>
                <TableHead className="text-start">مبلغ</TableHead>
                <TableHead className="text-start">سهم</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {current.rows.map((row) => (
                <TableRow key={row.channel}>
                  <TableCell className="font-medium">{row.channel}</TableCell>
                  <TableCell>
                    <StatNumber value={row.value} />
                  </TableCell>
                  <TableCell>
                    <StatNumber value={row.share} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}
