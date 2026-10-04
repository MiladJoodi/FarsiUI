import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md gap-4" dir="rtl">
      <TabsList>
        <TabsTrigger value="account">حساب</TabsTrigger>
        <TabsTrigger value="password">رمز عبور</TabsTrigger>
        <TabsTrigger value="notifications">اعلان‌ها</TabsTrigger>
      </TabsList>
      <TabsContent
        value="account"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        نام نمایشی، ایمیل و تصویر پروفایل را اینجا تغییر دهید.
      </TabsContent>
      <TabsContent
        value="password"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        برای امنیت بیشتر، رمز عبور را به‌صورت دوره‌ای عوض کنید.
      </TabsContent>
      <TabsContent
        value="notifications"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        اعلان ایمیل و پیامک را روشن یا خاموش کنید.
      </TabsContent>
    </Tabs>
  )
}
