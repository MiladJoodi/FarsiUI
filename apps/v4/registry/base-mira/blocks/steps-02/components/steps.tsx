import { Badge } from "@/registry/base-mira/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"

const STEPS = [
  {
    title: "ثبت‌نام",
    desc: "حساب کاربری فارسی بسازید و ایمیل را تأیید کنید.",
    badge: "شروع",
  },
  {
    title: "تنظیم تم",
    desc: "رنگ برند و فونت فارسی پروژه را اعمال کنید.",
    badge: "طراحی",
  },
  {
    title: "افزودن بلوک",
    desc: "Hero، فرم و ناوبری را از رجیستری بگیرید.",
    badge: "ساخت",
  },
  {
    title: "راه‌اندازی",
    desc: "روی استیج ببرید و بازخورد تیم را جمع کنید.",
    badge: "انتشار",
  },
] as const

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export default function StepsCards() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-5xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div className="mb-10 text-start">
          <h2 className="text-3xl font-bold tracking-tight">مسیر راه‌اندازی</h2>
          <p className="mt-2 text-muted-foreground">
            از حساب تا انتشار در چند کارت
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Card key={step.title}>
              <CardHeader className="gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-muted text-sm font-medium">
                    {toFa(i + 1)}
                  </span>
                  <Badge variant="outline">{step.badge}</Badge>
                </div>
                <CardTitle className="text-base">{step.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {step.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
