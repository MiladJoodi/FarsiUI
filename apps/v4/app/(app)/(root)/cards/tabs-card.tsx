import { Card, CardContent } from "@/registry/bases/base/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export function TabsCard() {
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
              <div className="text-2xl font-semibold tracking-tight text-primary">
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
      </CardContent>
    </Card>
  )
}
