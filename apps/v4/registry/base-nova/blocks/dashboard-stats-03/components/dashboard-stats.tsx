import StatNumber from "@/registry/base-nova/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Progress } from "@/registry/base-nova/ui/progress"

const GOALS = [
  { label: "هدف فروش ماه", current: "۶۸۰ میلیون", percent: 72 },
  { label: "بستن تیکت‌ها", current: "۱٬۲۴۰ از ۱٬۵۰۰", percent: 83 },
  { label: "فعال‌سازی کاربر جدید", current: "٪۶۱", percent: 61 },
] as const

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

const KPIS = [
  { label: "جلسات امروز", value: "۴٬۸۲۰" },
  { label: "خطای سرور", value: "۰٫۰۴٪" },
  { label: "تأخیر رابط", value: "۱۱۲ میلی‌ثانیه" },
] as const

export default function DashboardStatsGoals() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="secondary" className="mb-3">
            اهداف
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">پیشرفت تیم</h2>
          <p className="mt-2 text-muted-foreground">
            KPI زنده کنار اهداف ماهانه
          </p>
        </div>
        <Button variant="outline">گزارش کامل</Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {KPIS.map((kpi) => (
            <Card key={kpi.label}>
              <CardHeader>
                <CardDescription>{kpi.label}</CardDescription>
                <CardTitle className="text-xl">
                  <StatNumber value={kpi.value} />
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="text-start">
            <CardTitle className="text-lg">اهداف این ماه</CardTitle>
            <CardDescription>وضعیت نسبت به برنامه</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {GOALS.map((goal) => (
              <div key={goal.label} className="space-y-2">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium">{goal.label}</span>
                  <span className="text-muted-foreground">
                    <StatNumber value={goal.current} />
                  </span>
                </div>
                <Progress value={goal.percent} />
                <p className="text-xs text-muted-foreground">
                  <StatNumber value={`٪${toFa(goal.percent)}`} /> تکمیل شده
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
