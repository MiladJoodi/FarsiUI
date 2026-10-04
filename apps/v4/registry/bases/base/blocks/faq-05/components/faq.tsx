"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

const QUESTIONS = [
  {
    q: "چطور اولین بلوک را نصب کنم؟",
    a: "از صفحهٔ بلوک دکمهٔ کپی را بزنید، فایل‌ها را در پروژه قرار دهید و یک‌بار ساخت رجیستری را اجرا کنید.",
    category: "شروع",
  },
  {
    q: "با ابزارهای استایل جدید کار می‌کند؟",
    a: "بله. نسخهٔ فعلی با تنظیمات تم مدرن و متغیرهای رنگ هماهنگ است.",
    category: "فنی",
  },
  {
    q: "چطور با پشتیبانی تماس بگیرم؟",
    a: "از فرم پایین همین صفحه پیام بفرستید؛ معمولاً در کمتر از یک روز کاری پاسخ می‌دهیم.",
    category: "حساب",
  },
  {
    q: "تخفیف سالانه دارید؟",
    a: "برای پلن سازمانی با پرداخت سالانه تا بیست درصد تخفیف اعمال می‌شود.",
    category: "صورتحساب",
  },
  {
    q: "چطور متن راهنمای فارسی بگذارم؟",
    a: "برای فیلدهای فارسی جهت راست‌به‌چپ و تراز شروع متن را نگه دارید؛ برای ایمیل جهت چپ‌به‌راست مناسب‌تر است.",
    category: "فنی",
  },
  {
    q: "روی سرور و مرورگر هر دو کار می‌کند؟",
    a: "بلوک‌های بدون حالت تعاملی روی سرور رندر می‌شوند؛ برای بخش‌های تعاملی همان فایل به‌صورت کلاینت علامت‌گذاری شده است.",
    category: "فنی",
  },
  {
    q: "چند کاربر هم‌زمان در پلن تیمی؟",
    a: "پلن تیم تا پانزده صندلی دارد؛ برای بیشتر با فروش صحبت کنید.",
    category: "صورتحساب",
  },
  {
    q: "داده‌هایم کجا ذخیره می‌شود؟",
    a: "این کتابخانه فقط رابط کاربری است؛ داده در سرویس خودتان می‌ماند و محتوای فرم تماس را ذخیره نمی‌کنیم.",
    category: "حساب",
  },
] as const

const CATEGORIES = ["همه", "شروع", "حساب", "صورتحساب", "فنی"] as const

const SORT_ITEMS = [
  { value: "popular", label: "پرطرفدار" },
  { value: "newest", label: "جدیدترین" },
  { value: "alpha", label: "الفبایی" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

export default function FaqSearch() {
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
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-3xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div className="mb-8 space-y-4">
          <div>
            <Badge variant="secondary" className="mb-3">
              پشتیبانی
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              پرسش‌های متداول
            </h2>
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
              items={CATEGORIES.map((cat) => ({ value: cat, label: cat }))}
              value={category}
              onValueChange={(value) => {
                if (typeof value === "string") setCategory(value)
              }}
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
                render={
                  <Button variant="outline" className="w-full sm:w-auto" />
                }
              >
                مرتب‌سازی
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="end" className="w-44">
                <DropdownMenuLabel>نمایش بر اساس</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(v) => {
                    if (v === "popular" || v === "newest" || v === "alpha") {
                      setSort(v)
                    }
                  }}
                >
                  {SORT_ITEMS.map((item) => (
                    <DropdownMenuRadioItem key={item.value} value={item.value}>
                      {item.label}
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
              پیام بفرستید؛ معمولاً در کمتر از یک روز پاسخ می‌دهیم
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
                placeholder="ایمیل شما"
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
    </div>
  )
}
