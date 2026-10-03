import { CheckIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"

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
    pros: ["بلوک فارسی آماده", "Select و فرم با جهت درست", "تم روشن و تیره"],
    cons: ["نیاز به آشنایی با رجیستری"],
    cta: "شروع با بلوک‌ها",
    highlight: true,
  },
] as const

export function ComparisonCards() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-4xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
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
    </div>
  )
}
