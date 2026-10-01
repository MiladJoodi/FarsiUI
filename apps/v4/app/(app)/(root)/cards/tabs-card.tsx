"use client"

import * as React from "react"

import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/styles/base-rhea/ui/pagination"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/styles/base-rhea/ui/tabs"

export function TabsCard() {
  const [page, setPage] = React.useState(2)

  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-4">
        <Tabs defaultValue="overview" className="w-full" dir="rtl">
          <TabsList variant="line" className="w-full justify-start">
            <TabsTrigger value="overview">نمای کلی</TabsTrigger>
            <TabsTrigger value="analytics">تحلیل‌ها</TabsTrigger>
            <TabsTrigger value="reports">گزارش‌ها</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 space-y-3">
            <div className="rounded-xl border bg-muted/40 p-3">
              <div className="text-2xl font-semibold tracking-tight">۱۲</div>
              <div className="text-sm text-muted-foreground">پروژهٔ فعال</div>
            </div>
            <p className="text-sm text-muted-foreground">
              ۳ وظیفهٔ در انتظار و ۱ بازبینی باز دارید.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4 space-y-3">
            <div className="rounded-xl border bg-muted/40 p-3">
              <div className="text-2xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">
                ٪۲۵+
              </div>
              <div className="text-sm text-muted-foreground">
                رشد بازدید نسبت به ماه قبل
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              اوج ترافیک در بازهٔ ۱۹ تا ۲۲ بوده است.
            </p>
          </TabsContent>
          <TabsContent value="reports" className="mt-4 space-y-3">
            <div className="rounded-xl border bg-muted/40 p-3">
              <div className="text-2xl font-semibold tracking-tight">۵</div>
              <div className="text-sm text-muted-foreground">
                گزارش آمادهٔ خروجی
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              آخرین گزارش فروش دیروز ساعت ۱۸ ساخته شد.
            </p>
          </TabsContent>
        </Tabs>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                text="قبلی"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.max(1, p - 1))
                }}
              />
            </PaginationItem>
            {[1, 2, 3].map((n) => (
              <PaginationItem key={n}>
                <PaginationLink
                  href="#"
                  isActive={page === n}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(n)
                  }}
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                text="بعدی"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.min(3, p + 1))
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  )
}
