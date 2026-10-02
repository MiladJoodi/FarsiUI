import { FileIcon, FolderIcon, LayoutDashboardIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"

const ITEMS = [
  {
    title: "نمای کلی داشبورد",
    path: "/blocks/dashboard",
    owner: "سارا محمدی",
    email: "sara@example.com",
    opened: "۱۰ دقیقه پیش",
    kind: "dashboard" as const,
  },
  {
    title: "راهنمای احراز هویت",
    path: "/docs/auth",
    owner: "علی رضایی",
    email: "ali@example.com",
    opened: "۱ ساعت پیش",
    kind: "doc" as const,
  },
  {
    title: "پروژه طراحی RTL",
    path: "/projects/rtl-kit",
    owner: "مینا کریمی",
    email: "mina@example.com",
    opened: "دیروز",
    kind: "folder" as const,
  },
  {
    title: "جدول کاربران",
    path: "/blocks/data-table-block",
    owner: "رضا نوری",
    email: "reza@example.com",
    opened: "۲ روز پیش",
    kind: "doc" as const,
  },
] as const

const ICONS = {
  dashboard: LayoutDashboardIcon,
  doc: FileIcon,
  folder: FolderIcon,
} as const

export function RecentItemsCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">کارت‌های موارد اخیر</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          مسیر فایل چپ‌چین؛ نام مالک راست‌چین
        </p>
      </div>

      <div className="grid gap-3">
        {ITEMS.map((item) => {
          const Icon = ICONS[item.kind]
          return (
            <Card key={item.path}>
              <CardHeader className="flex flex-row items-start gap-3 space-y-0 text-start">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted/40">
                  <Icon className="size-4 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <Badge variant="outline">{item.opened}</Badge>
                  </div>
                  <CardDescription>
                    <span dir="ltr" className="inline-block text-start font-mono text-xs">
                      {item.path}
                    </span>
                  </CardDescription>
                  <p className="text-xs text-muted-foreground">
                    {item.owner} ·{" "}
                    <span dir="ltr" className="inline-block text-start">
                      {item.email}
                    </span>
                  </p>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
