import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import { Separator } from "@/styles/base-rhea/ui/separator"

const chartData = [
  { hour: "۶ ق.ظ", usage: 1.2 },
  { hour: "۸ ق.ظ", usage: 2.8 },
  { hour: "۱۰ ق.ظ", usage: 3.1 },
  { hour: "۱۲", usage: 2.4 },
  { hour: "۲ ب.ظ", usage: 3.4 },
  { hour: "۴ ب.ظ", usage: 2.9 },
  { hour: "۶ ب.ظ", usage: 3.8 },
  { hour: "۸ ب.ظ", usage: 3.2 },
]

export function PowerUsage() {
  const maxUsage = Math.max(...chartData.map((item) => item.usage))

  return (
    <Card>
      <CardHeader>
        <CardTitle>مصرف برق</CardTitle>
        <CardDescription>کل خانه</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex w-full flex-col gap-1.5" role="img" aria-label="مصرف برق بر اساس ساعت">
          <div className="flex h-[120px] w-full items-end gap-2">
            {chartData.map((item) => (
              <div
                key={item.hour}
                className="min-h-2 flex-1 rounded-t bg-chart-2"
                style={{ height: `${(item.usage / maxUsage) * 100}%` }}
              />
            ))}
          </div>
          <div className="flex w-full gap-2">
            {chartData.map((item) => (
              <span
                key={item.hour}
                className="flex-1 text-center text-[10px] leading-none whitespace-nowrap text-muted-foreground"
              >
                {item.hour}
              </span>
            ))}
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-muted-foreground">مصرف فعلی</span>
            <span className="text-lg font-semibold tracking-normal">۳٫۴ کیلووات</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-muted-foreground">تولید خورشیدی</span>
            <span className="text-lg font-semibold tracking-normal">
              ۱٫۲+ کیلووات
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
