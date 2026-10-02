import { type Metadata } from "next"
import Link from "next/link"

import { getVisibleBlocksNav } from "@/lib/blocks-nav"
import { Button } from "@/registry/new-york-v4/ui/button"

export const dynamic = "force-dynamic"
export const revalidate = false

export const metadata: Metadata = {
  alternates: {
    canonical: "/blocks",
  },
}

export default async function BlocksPage() {
  const categories = getVisibleBlocksNav()

  return (
    <div className="container-wrapper">
      <div
        dir="rtl"
        lang="fa"
        className="container flex flex-col items-center gap-8 py-16 text-center md:py-24"
      >
        <div className="flex max-w-lg flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">بلاک‌ها</h1>
          <p className="text-muted-foreground text-balance text-sm md:text-base">
            بخش ویژه خالی است. برای دیدن نمونه‌ها از دسته‌بندی‌های سایدبار
            استفاده کنید؛ مثلاً نوار کناری، ورود یا اطلاعات شخصی.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.slice(0, 6).map((category) => {
            const first = category.items[0]
            if (!first) return null
            return (
              <Button key={category.slug} asChild variant="outline" size="sm">
                <Link href={first.href}>{category.title}</Link>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
