import { Tabs, TabsList, TabsTrigger } from "@/styles/base-nova/ui/tabs"

export function TabsVertical() {
  return (
    <Tabs defaultValue="account" orientation="vertical" dir="rtl">
      <TabsList>
        <TabsTrigger value="account">حساب</TabsTrigger>
        <TabsTrigger value="password">رمز عبور</TabsTrigger>
        <TabsTrigger value="notifications">اعلان‌ها</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
