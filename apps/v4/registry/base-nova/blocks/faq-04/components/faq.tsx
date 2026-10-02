"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/base-nova/ui/accordion"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-nova/ui/tabs"

const GENERAL = [
  {
    q: "FarsiUI برای چه پروژه‌هایی مناسب است؟",
    a: "SaaS فارسی، فروشگاه، داشبورد داخلی و لندینگ بازاریابی — هر جایی که RTL و UX بومی مهم است.",
  },
  {
    q: "آیا نیاز به React 19 دارم؟",
    a: "نسخهٔ v4 با Next.js و React جدید تست شده؛ برای نسخه‌های قدیمی‌تر مستندات سازگاری را ببینید.",
  },
  {
    q: "لایسنس چیست؟",
    a: "کد منبع باز با همان شرایط shadcn/ui؛ برای جزئیات فایل LICENSE را بخوانید.",
  },
] as const

const BILLING = [
  {
    q: "تفاوت پلن رایگان و سازمانی چیست؟",
    a: "رایگان شامل همهٔ بلاک‌ها و مستندات است. سازمانی SLA، تم سفارشی و آموزش تیم را اضافه می‌کند.",
  },
  {
    q: "صورتحساب به تومان است؟",
    a: "بله. مبالغ با ارقام فارسی و بدون فاصلهٔ اضافه بین رقم‌ها نمایش داده می‌شوند.",
  },
  {
    q: "چطور اشتراک را لغو کنم؟",
    a: "از تنظیمات حساب > صورتحساب > لغو اشتراک. دسترسی تا پایان دورهٔ پرداخت‌شده فعال می‌ماند.",
  },
] as const

const TECH = [
  {
    q: "منوی کشویی راست‌چین است؟",
    a: 'DropdownMenu و Select با dir="rtl" و متن فارسی داخل پنل بازشونده تراز راست دارند.',
  },
  {
    q: "چطور فونت را عوض کنم؟",
    a: "در fonts.ts فونت فعال را تنظیم کنید یا متغیر --font-sans را در تم خود override کنید.",
  },
  {
    q: "خطای build رجیstry می‌گیرم",
    a: "pnpm registry:build را در apps/v4 اجرا کنید و مطمئن شوید وابستگی‌های farsiui بیلد شده‌اند.",
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
