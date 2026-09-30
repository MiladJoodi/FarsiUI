import { Tabs, TabsList, TabsTrigger } from "@/styles/base-nova/ui/tabs"

export function TabsLine() {
  return (
    <Tabs defaultValue="overview" dir="rtl">
      <TabsList variant="line">
        <TabsTrigger value="overview">نمای کلی</TabsTrigger>
        <TabsTrigger value="analytics">تحلیل‌ها</TabsTrigger>
        <TabsTrigger value="reports">گزارش‌ها</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
