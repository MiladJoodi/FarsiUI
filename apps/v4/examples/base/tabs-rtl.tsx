import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/styles/base-nova/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/styles/base-nova/ui/tabs"

export default function TabsRtl() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-sm" dir="rtl">
      <TabsList>
        <TabsTrigger value="overview">نمای کلی</TabsTrigger>
        <TabsTrigger value="analytics">تحلیل‌ها</TabsTrigger>
        <TabsTrigger value="reports">گزارش‌ها</TabsTrigger>
        <TabsTrigger value="settings">تنظیمات</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>نمای کلی</CardTitle>
            <CardDescription>
              شاخص‌های کلیدی و فعالیت‌های اخیر پروژه‌ها را ببینید. پیشرفت همهٔ
              پروژه‌های فعال را دنبال کنید.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            ۱۲ پروژهٔ فعال و ۳ وظیفهٔ در انتظار دارید.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>تحلیل‌ها</CardTitle>
            <CardDescription>
              عملکرد و تعامل کاربران را پیگیری کنید. روندها را ببینید و فرصت‌های
              رشد را پیدا کنید.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            بازدید صفحات نسبت به ماه قبل ۲۵٪ بیشتر شده است.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>گزارش‌ها</CardTitle>
            <CardDescription>
              گزارش‌های تفصیلی بسازید و دانلود کنید. داده را در چند قالب برای
              تحلیل خروجی بگیرید.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            ۵ گزارش آماده و قابل خروجی دارید.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>تنظیمات</CardTitle>
            <CardDescription>
              ترجیحات و گزینه‌های حساب را مدیریت کنید. تجربه را مطابق نیازتان
              تنظیم کنید.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            اعلان‌ها، امنیت و تم را پیکربندی کنید.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
