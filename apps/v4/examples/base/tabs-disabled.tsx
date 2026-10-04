import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="orders" className="w-full max-w-md gap-4" dir="rtl">
      <TabsList>
        <TabsTrigger value="orders">سفارش‌ها</TabsTrigger>
        <TabsTrigger value="returns">مرجوعی</TabsTrigger>
        <TabsTrigger value="export" disabled>
          خروجی اکسل
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        ۳ سفارش در حال آماده‌سازی دارید.
      </TabsContent>
      <TabsContent
        value="returns"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        درخواست مرجوعی باز ندارید.
      </TabsContent>
      <TabsContent
        value="export"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        خروجی اکسل فقط در طرح حرفه‌ای فعال است.
      </TabsContent>
    </Tabs>
  )
}
