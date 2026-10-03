import { StatNumber } from "@/registry/base-maia/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-maia/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

const STEPS = [
  {
    label: "بازدید صفحهٔ فرود",
    display: "۱۰٬۰۰۰",
    width: 100,
    widthLabel: "٪۱۰۰",
  },
  { label: "شروع ثبت‌نام", display: "۴٬۲۰۰", width: 42, widthLabel: "٪۴۲" },
  { label: "تأیید ایمیل", display: "۳٬۱۰۰", width: 31, widthLabel: "٪۳۱" },
  { label: "اولین بلوک", display: "۱٬۸۰۰", width: 18, widthLabel: "٪۱۸" },
  { label: "پرداخت", display: "۶۴۰", width: 6.4, widthLabel: "٪۶٫۴" },
] as const

export function AnalyticsFunnel() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">
          قیف تبدیل
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          مسیر کاربر تا پرداخت
        </h2>
        <p className="mt-2 text-muted-foreground">
          هر پله افت تبدیل را نشان می‌دهد — متفاوت از کارت KPI
        </p>
      </div>

      <Card>
        <CardHeader className="text-start">
          <CardTitle className="text-lg">نرخ کل تبدیل</CardTitle>
          <CardDescription>
            <StatNumber value="٪۶٫۴" /> از بازدید تا پرداخت
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {STEPS.map((step, i) => (
            <div key={step.label} className="space-y-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-medium">
                  {toFa(i + 1)}. {step.label}
                </span>
                <StatNumber
                  value={step.display}
                  className="text-muted-foreground"
                />
              </div>
              <div className="h-9 overflow-hidden rounded-lg bg-muted">
                <div
                  className="flex h-full items-center rounded-lg bg-primary/80 px-3 text-xs font-medium text-primary-foreground"
                  style={{ width: `${Math.max(step.width, 8)}%` }}
                >
                  <StatNumber value={step.widthLabel} />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
