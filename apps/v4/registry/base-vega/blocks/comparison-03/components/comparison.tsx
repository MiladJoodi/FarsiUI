import { CheckIcon, MinusIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"

const COLS = ["قابلیت", "کیت عمومی", "قالب خارجی", "FarsiUI"] as const

const ROWS = [
  { label: "dir و lang فارسی", values: [false, true, true] },
  { label: "placeholder راست‌چین", values: [false, false, true] },
  { label: "منوی کشویی RTL", values: [false, false, true] },
  { label: "اعداد فارسی در آمار", values: [false, false, true] },
  { label: "مستندات فارسی", values: [false, true, true] },
  { label: "بلوک احراز هویت بومی", values: [false, false, true] },
] as const

export default function ComparisonMatrix() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-5xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div className="mb-10">
          <Badge variant="outline" className="mb-3">
            ابزارها
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            مقایسهٔ ابزار ساخت UI فارسی
          </h2>
          <p className="mt-2 text-muted-foreground">
            سه راهکار رایج؛ تمرکز روی قابلیت، نه پلن فروش
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[36rem] text-sm">
            <thead>
              <tr className="border-b bg-muted/40">
                {COLS.map((col, index) => (
                  <th
                    key={col}
                    className={`px-4 py-4 font-medium ${
                      index === 0 ? "text-start" : "text-center"
                    } ${index === 3 ? "bg-primary/5" : ""}`}
                  >
                    {col}
                    {index === 3 ? (
                      <Badge className="ms-2 align-middle">ما</Badge>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b last:border-0">
                  <td className="px-4 py-3.5 text-start font-medium">
                    {row.label}
                  </td>
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.label}-${index}`}
                      className={`px-4 py-3.5 text-center ${
                        index === 2 ? "bg-primary/5" : ""
                      }`}
                    >
                      {value ? (
                        <CheckIcon className="mx-auto size-4 text-primary" />
                      ) : (
                        <MinusIcon className="mx-auto size-4 text-muted-foreground" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
