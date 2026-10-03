import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Separator } from "@/registry/base-lyra/ui/separator"

const RESULTS = [
  {
    title: "کامپوننت دکمه",
    snippet: "دکمه‌های راست‌چین با انواع و اندازه‌های مختلف",
  },
  {
    title: "فرم ورود",
    snippet: "ورود با ایمیل و رمز عبور به زبان فارسی",
  },
  {
    title: "جدول داده",
    snippet: "جدول با مرتب‌سازی، فیلتر و صفحه‌بندی",
  },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function SearchResultsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle>نتایج جستجو</CardTitle>
          <CardDescription className="tracking-normal">
            {toFa(RESULTS.length)} نتیجه برای «دکمه»
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {RESULTS.map((r, i) => (
            <div key={r.title}>
              {i > 0 && <Separator />}
              <div className="px-6 py-3">
                <p className="text-sm font-medium">{r.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {r.snippet}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
