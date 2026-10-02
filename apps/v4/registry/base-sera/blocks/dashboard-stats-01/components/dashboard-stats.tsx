import { StatNumber } from "@/registry/base-sera/blocks/stats-01/components/stat-number"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"

const STATS = [
  { label: "کاربران آنلاین", value: "۱٬۲۴۸", hint: "الان" },
  { label: "درآمد امروز", value: "۱۸٬۴۰۰٬۰۰۰", hint: "تومان" },
  { label: "تیکت باز", value: "۳۷", hint: "پشتیبانی" },
  { label: "آپتایم", value: "۹۹٫۹٪", hint: "۳۰ روز" },
] as const

export function DashboardStatsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">آمار داشبورد</h2>
        <p className="mt-2 text-muted-foreground">
          چهار شاخص عملیاتی در یک نگاه
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl">
                <StatNumber value={stat.value} />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              {stat.hint}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
