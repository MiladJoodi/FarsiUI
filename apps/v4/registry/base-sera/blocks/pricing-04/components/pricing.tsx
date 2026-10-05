"use client"

import { CheckIcon, MinusIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"

const COLS = ["قابلیت", "پایه", "حرفه‌ای", "سازمانی"] as const

const ROWS = [
  { label: "پروژه", values: ["۱", "نامحدود", "نامحدود"] },
  { label: "اعضای تیم", values: ["۱", "۵", "نامحدود"] },
  { label: "بلوک‌ها", values: [true, true, true] },
  { label: "تم سفارشی", values: [false, true, true] },
  { label: "SSO", values: [false, false, true] },
  { label: "پشتیبانی اختصاصی", values: [false, false, true] },
] as const

export default function PricingCompare() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center bg-background px-6 py-16 md:px-10"
    >
      <div className="mb-10 text-center">
        <Badge variant="outline" className="mb-3">
          پلن‌ها
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          همهٔ پلن‌ها کنار هم
        </h2>
        <p className="mt-2 text-muted-foreground">
          ببینید در هر سطح چه چیزی دریافت می‌کنید
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
                  } ${index === 2 ? "bg-primary/5" : ""}`}
                >
                  {col}
                  {index === 2 ? (
                    <Badge className="ms-2 align-middle">پیشنهادی</Badge>
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
                      index === 1 ? "bg-primary/5" : ""
                    }`}
                  >
                    {typeof value === "boolean" ? (
                      value ? (
                        <CheckIcon className="mx-auto size-4 text-primary" />
                      ) : (
                        <MinusIcon className="mx-auto size-4 text-muted-foreground" />
                      )
                    ) : (
                      <span className="tabular-nums">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="px-4 py-4" />
              {["شروع", "انتخاب", "تماس"].map((label, index) => (
                <td
                  key={label}
                  className={`px-4 py-4 text-center ${
                    index === 1 ? "bg-primary/5" : ""
                  }`}
                >
                  <Button
                    size="sm"
                    variant={index === 1 ? "default" : "outline"}
                    className="w-full max-w-36"
                  >
                    {label}
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
