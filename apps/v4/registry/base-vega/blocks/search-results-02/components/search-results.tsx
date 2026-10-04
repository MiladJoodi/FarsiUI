import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Input } from "@/registry/base-vega/ui/input"
import { Separator } from "@/registry/base-vega/ui/separator"

const RESULTS = [
  {
    title: "کامپوننت دکمه",
    path: "components/button",
    type: "کامپوننت",
    snippet: "دکمه‌های راست‌چین با انواع اصلی، خطی و شبح",
  },
  {
    title: "فرم ورود",
    path: "blocks/login",
    type: "بلوک",
    snippet: "ورود با ایمیل چپ‌چین و برچسب‌های فارسی",
  },
  {
    title: "جدول داده",
    path: "components/data-table",
    type: "کامپوننت",
    snippet: "جدول با مرتب‌سازی و انتخاب ردیف",
  },
  {
    title: "راهنمای راست‌چین",
    path: "docs/rtl",
    type: "مستند",
    snippet: "نحوهٔ پیاده‌سازی جهت راست‌چین",
  },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function SearchResultsCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>نتایج جستجو</CardTitle>
          <CardDescription className="tracking-normal">
            {toFa(RESULTS.length)} نتیجه برای «دکمه و فرم»
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              defaultValue="دکمه و فرم"
              placeholder="جستجو مجدد…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <div className="space-y-0 overflow-hidden rounded-lg border">
            {RESULTS.map((r, i) => (
              <div key={r.path}>
                {i > 0 && <Separator />}
                <div className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{r.title}</p>
                    <Badge variant="outline" className="border">
                      {r.type}
                    </Badge>
                  </div>
                  <p className="mt-0.5 text-xs tracking-normal text-muted-foreground">
                    <span dir="ltr" className="inline-block text-start">
                      {r.path}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {r.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button type="button" variant="outline" className="w-full">
            نتایج بیشتر
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
