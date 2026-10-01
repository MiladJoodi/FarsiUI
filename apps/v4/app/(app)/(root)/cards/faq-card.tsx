"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/styles/base-rhea/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/styles/base-rhea/ui/card"

const QUESTIONS = [
  {
    value: "secure",
    q: "اطلاعات مالی من چقدر امن است؟",
    a: "از رمزنگاری سطح بانکی و دسترسی فقط‌خواندنی استفاده می‌کنیم. اطلاعات ورود شما ذخیره نمی‌شود.",
  },
  {
    value: "connect",
    q: "چطور حساب بانکی را وصل کنم؟",
    a: "از تنظیمات > حساب‌های متصل، مؤسسهٔ خود را جستجو کنید. بیش از ۱۲٬۰۰۰ بانک پشتیبانی می‌شود.",
  },
  {
    value: "export",
    q: "آیا می‌توانم داده را برای مالیات خروجی بگیرم؟",
    a: "بله. از گزارش‌ها > خروجی مالیاتی می‌توانید CSV یا PDF تراکنش‌ها و سود سهام را بگیرید.",
  },
]

export function FaqCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardHeader>
        <CardTitle>سوالات پرتکرار</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion dir="rtl" defaultValue={["secure"]} className="border-0">
          {QUESTIONS.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-start">{item.q}</AccordionTrigger>
              <AccordionContent className="text-start">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
