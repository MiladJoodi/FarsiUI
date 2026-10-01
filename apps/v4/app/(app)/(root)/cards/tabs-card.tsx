"use client"

import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/styles/base-rhea/ui/tabs"

export function TabsCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <Tabs defaultValue="overview" className="w-full" dir="rtl">
          <TabsList className="w-full">
            <TabsTrigger value="overview">نمای کلی</TabsTrigger>
            <TabsTrigger value="analytics">تحلیل‌ها</TabsTrigger>
            <TabsTrigger value="reports">گزارش‌ها</TabsTrigger>
          </TabsList>
          <TabsContent
            value="overview"
            className="mt-3 text-sm text-muted-foreground"
          >
            ۱۲ پروژهٔ فعال و ۳ وظیفهٔ در انتظار دارید.
          </TabsContent>
          <TabsContent
            value="analytics"
            className="mt-3 text-sm text-muted-foreground"
          >
            بازدید صفحات نسبت به ماه قبل ۲۵٪ بیشتر شده است.
          </TabsContent>
          <TabsContent
            value="reports"
            className="mt-3 text-sm text-muted-foreground"
          >
            ۵ گزارش آماده و قابل خروجی دارید.
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
