import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/styles/base-nova/ui/tabs"

export default function TabsVertical() {
  return (
    <Tabs
      defaultValue="profile"
      orientation="vertical"
      className="w-full max-w-lg gap-4"
      dir="rtl"
    >
      <TabsList>
        <TabsTrigger value="profile">پروفایل</TabsTrigger>
        <TabsTrigger value="security">امنیت</TabsTrigger>
        <TabsTrigger value="billing">صورتحساب</TabsTrigger>
      </TabsList>
      <TabsContent
        value="profile"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        اطلاعات عمومی حساب و ترجیحات نمایش را تنظیم کنید.
      </TabsContent>
      <TabsContent
        value="security"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        ورود دومرحله‌ای و نشست‌های فعال را مدیریت کنید.
      </TabsContent>
      <TabsContent
        value="billing"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        طرح فعلی، فاکتورها و روش پرداخت را ببینید.
      </TabsContent>
    </Tabs>
  )
}
