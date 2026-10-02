"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/base-luma/ui/accordion"
import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-luma/ui/dropdown-menu"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"

const QUESTIONS = [
  {
    q: "چطور اولین بلاک را نصب کنم؟",
    a: "از صفحهٔ بلاک دکمهٔ کپی را بزنید، فایل‌ها را در پروژه قرار دهید و registry:build را یک بار اجرا کنید.",
    category: "شروع",
  },
  {
    q: "آیا با Tailwind v4 کار می‌کند؟",
    a: "بله. v4 از Tailwind v4 و متغیرهای @theme استفاده می‌کند.",
    category: "فنی",
  },
  {
    q: "ایمیل پشتیبانی چیست؟",
    a: "برای پاسخ سریع‌تر از فرم پایین استفاده کنید؛ تیم support@farsiui.example را هم می‌بیند.",
    category: "حساب",
  },
  {
    q: "تخفیف سالانه دارید؟",
    a: "برای پلن سازمانی با پرداخت سالانه تا ۲۰٪ تخفیف اعمال می‌شود.",
    category: "صورتحساب",
  },
  {
    q: "چطور placeholder فارسی بگذارم؟",
    a: 'روی Input فارسی dir="rtl" و className="text-start" بگذارید؛ برای ایمیل dir="ltr".',
    category: "فنی",
  },
  {
    q: "آیا SSR و RSC پشتیبانی می‌شود؟",
    a: 'بلاک‌های بدون state سرور‌اند؛ برای تعامل client از "use client" در همان فایل استفاده شده.',
    category: "فنی",
  },
  {
    q: "چند کاربر هم‌زمان در پلن تیمی؟",
    a: "پلن تیم تا ۱۵ صندلی دارد؛ برای بیشتر با فروش صحبت کنید.",
    category: "صورتحساب",
  },
  {
    q: "داده‌هایم کجا ذخیره می‌شود؟",
    a: "FarsiUI فقط UI است؛ داده در backend شما می‌ماند. ما محتوای فرم تماس را ذخیره نمی‌کنیم.",
    category: "حساب",
  },
] as const

const CATEGORIES = ["همه", "شروع", "حساب", "صورتحساب", "فنی"] as const

type SortKey = "popular" | "newest" | "alpha"

const SORT_LABELS: Record<SortKey, string> = {
  popular: "پرطرفدار",
  newest: "جدیدترین",
  alpha: "الفبایی",
}

export function FaqSearch() {
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("همه")
  const [sort, setSort] = React.useState<SortKey>("popular")

  const filtered = React.useMemo(() => {
    let list = QUESTIONS.filter((item) => {
      const matchCat = category === "همه" || item.category === category
      const matchQuery =
        !query ||
        item.q.includes(query) ||
        item.a.includes(query) ||
        item.category.includes(query)
      return matchCat && matchQuery
    })
    if (sort === "alpha") {
      list = [...list].sort((a, b) => a.q.localeCompare(b.q, "fa"))
    } else if (sort === "newest") {
      list = [...list].reverse()
    }
    return list
  }, [query, category, sort])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            پشتیبانی
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">پرسش‌های متداول</h2>
          <p className="mt-2 text-muted-foreground">
            جستجو کنید یا دسته را فیلتر کنید
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در پرسش و پاسخ…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            value={category}
            onValueChange={(value) => setCategory((value as string) ?? "همه")}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="دسته" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full sm:w-auto" />}
            >
              مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              className="w-44"
            >
              <DropdownMenuLabel>نمایش بر اساس</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort((v as SortKey) ?? "popular")}
              >
                {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                  <DropdownMenuRadioItem key={key} value={key}>
                    {SORT_LABELS[key]}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          پرسشی با این فیلتر پیدا نشد. عبارت یا دستهٔ دیگری را امتحان کنید.
        </p>
      ) : (
        <Accordion
          type="single"
          collapsible
          dir="rtl"
          lang="fa"
          className="w-full rounded-xl border bg-card px-1"
        >
          {filtered.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="px-4 text-start">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="space-y-2 px-4 text-start text-muted-foreground">
                <Badge variant="outline" className="font-normal">
                  {item.category}
                </Badge>
                <p>{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">هنوز جواب نگرفتید؟</CardTitle>
          <CardDescription>
            ایمیل بزنید؛ معمولاً در کمتر از ۲۴ ساعت پاسخ می‌دهیم
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              required
              placeholder="name@example.com"
              dir="ltr"
              className="text-start sm:flex-1"
            />
            <Button type="submit" className="sm:shrink-0">
              ارسال پرسش
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
