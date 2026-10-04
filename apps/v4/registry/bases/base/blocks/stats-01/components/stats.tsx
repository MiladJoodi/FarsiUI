"use client"

import StatNumber from "@/registry/bases/base/blocks/stats-01/components/stat-number"

const STATS = [
  { value: "۱۲٬۴۸۰", label: "کاربر فعال" },
  { value: "۹۶٪", label: "رضایت مشتری" },
  { value: "۴٫۲٪", label: "نرخ تبدیل" },
] as const

export default function StatsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-16"
    >
      <div className="mb-12 max-w-lg text-center">
        <h2 className="text-3xl font-bold tracking-tight">اعدادی که حرف می‌زنند</h2>
        <p className="mt-2 text-muted-foreground">
          خلاصهٔ عملکرد FarsiUI در یک نگاه
        </p>
      </div>
      <div className="grid w-full max-w-4xl gap-10 sm:grid-cols-3 sm:gap-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold md:text-5xl">
              <StatNumber value={stat.value} />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
