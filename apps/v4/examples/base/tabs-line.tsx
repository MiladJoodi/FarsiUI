import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export default function TabsLine() {
  return (
    <Tabs defaultValue="details" className="w-full max-w-md gap-4" dir="rtl">
      <TabsList variant="line">
        <TabsTrigger value="details">مشخصات</TabsTrigger>
        <TabsTrigger value="reviews">نظرات</TabsTrigger>
        <TabsTrigger value="faq">پرسش‌ها</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="text-sm text-muted-foreground">
        جنس پارچه، سایزبندی و راهنمای نگهداری محصول.
      </TabsContent>
      <TabsContent value="reviews" className="text-sm text-muted-foreground">
        ۱۲۸ نظر ثبت شده؛ میانگین امتیاز ۴٫۶ از ۵.
      </TabsContent>
      <TabsContent value="faq" className="text-sm text-muted-foreground">
        ارسال، مرجوعی و گارانتی را در این بخش ببینید.
      </TabsContent>
    </Tabs>
  )
}
