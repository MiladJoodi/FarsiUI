"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

const GENERAL = [
  {
    q: "برای چه پروژه‌هایی مناسب است؟",
    a: "نرم‌افزارهای فارسی، فروشگاه، داشبورد داخلی و صفحهٔ معرفی — هر جایی که راست‌چین و تجربهٔ بومی مهم است.",
  },
  {
    q: "با نسخه‌های جدید فریم‌ورک کار می‌کند؟",
    a: "نسخهٔ فعلی با ابزارهای رایج ساخت رابط کاربری تست شده؛ برای نسخه‌های قدیمی‌تر راهنمای سازگاری را ببینید.",
  },
  {
    q: "لایسنس چیست؟",
    a: "کد متن‌باز است؛ جزئیات را در فایل مجوز پروژه بخوانید.",
  },
] as const

const BILLING = [
  {
    q: "تفاوت پلن رایگان و سازمانی چیست؟",
    a: "رایگان شامل همهٔ بلاک‌ها و مستندات است. سازمانی پاسخ تضمینی، تم سفارشی و آموزش تیم را اضافه می‌کند.",
  },
  {
    q: "صورتحساب به تومان است؟",
    a: "بله. مبالغ با ارقام فارسی و بدون فاصلهٔ اضافه بین رقم‌ها نمایش داده می‌شوند.",
  },
  {
    q: "چطور اشتراک را لغو کنم؟",
    a: "از تنظیمات حساب، بخش صورتحساب، گزینهٔ لغو اشتراک را بزنید. دسترسی تا پایان دورهٔ پرداخت‌شده فعال می‌ماند.",
  },
] as const

const TECH = [
  {
    q: "منوی کشویی راست‌چین است؟",
    a: "بله. فهرست‌های بازشونده و انتخابگرها با متن فارسی و تراز راست باز می‌شوند.",
  },
  {
    q: "چطور فونت را عوض کنم؟",
    a: "فونت فعال پروژه را در تنظیمات فونت عوض کنید؛ همهٔ بلاک‌ها از همان فونت فارسی پیروی می‌کنند.",
  },
  {
    q: "وقتی ساخت رجیستری خطا می‌دهد چه کنم؟",
    a: "یک‌بار ساخت رجیستری را دوباره اجرا کنید و مطمئن شوید وابستگی‌های پروژه نصب و بیلد شده‌اند.",
  },
] as const

function QuestionList({
  items,
  idPrefix,
}: {
  items: readonly { q: string; a: string }[]
  idPrefix: string
}) {
  return (
    <Accordion type="single" collapsible dir="rtl" lang="fa" className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.q} value={`${idPrefix}-${index}`}>
          <AccordionTrigger className="text-start">{item.q}</AccordionTrigger>
          <AccordionContent className="text-start text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export function FaqTabs() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 text-start">
        <h2 className="text-3xl font-bold tracking-tight">مرکز راهنما</h2>
        <p className="mt-2 text-muted-foreground">
          موضوع را انتخاب کنید تا پاسخ‌های مرتبط را ببینید
        </p>
      </div>

      <Tabs defaultValue="general" dir="rtl" lang="fa" className="w-full">
        <TabsList className="grid w-full grid-cols-3" dir="rtl">
          <TabsTrigger value="general">عمومی</TabsTrigger>
          <TabsTrigger value="billing">صورتحساب</TabsTrigger>
          <TabsTrigger value="tech">فنی</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-6">
          <QuestionList items={GENERAL} idPrefix="gen" />
        </TabsContent>
        <TabsContent value="billing" className="mt-6">
          <QuestionList items={BILLING} idPrefix="bill" />
        </TabsContent>
        <TabsContent value="tech" className="mt-6">
          <QuestionList items={TECH} idPrefix="tech" />
        </TabsContent>
      </Tabs>

      <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:justify-center">
        <Button variant="outline">مستندات</Button>
        <Button>ارسال تیکت</Button>
      </div>
    </section>
  )
}
