import { CheckIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"

const OPTIONS = [
  {
    name: "ساخت از صفر",
    tag: "سنتی",
    pros: ["کنترل کامل کد", "بدون وابستگی خارجی"],
    cons: ["زمان زیاد برای RTL", "بازنویسی مکرر کامپوننت"],
    cta: "ادامه با ساخت دستی",
    highlight: false,
  },
  {
    name: "FarsiUI",
    tag: "پیشنهادی",
    pros: ["بلاک فارسی آماده", "Select و فرم با جهت درست", "تم روشن و تیره"],
    cons: ["نیاز به آشنایی با رجیستری"],
    cta: "شروع با بلاک‌ها",
    highlight: true,
  },
] as const

export function ComparisonCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10 text-start">
        <h2 className="text-3xl font-bold tracking-tight">کدام مسیر؟</h2>
        <p className="mt-2 text-muted-foreground">
          مقایسهٔ رویکرد — نه جدول قیمت پلن‌ها
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {OPTIONS.map((option) => (
          <Card
            key={option.name}
            className={option.highlight ? "border-primary shadow-sm" : ""}
          >
            <CardHeader className="gap-2">
              <Badge
                variant={option.highlight ? "default" : "outline"}
                className="w-fit"
              >
                {option.tag}
              </Badge>
              <CardTitle>{option.name}</CardTitle>
              <CardDescription>
                نقاط قوت و ضعف را کنار هم ببینید
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <ul className="space-y-2">
                {option.pros.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 text-muted-foreground">
                {option.cons.map((item) => (
                  <li key={item} className="flex gap-2">
                    <XIcon className="mt-0.5 size-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={option.highlight ? "default" : "outline"}
              >
                {option.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
