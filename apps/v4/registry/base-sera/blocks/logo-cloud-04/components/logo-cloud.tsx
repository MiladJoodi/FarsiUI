"use client"

import LogoImage, {
  LOGOS,
} from "@/registry/base-sera/blocks/logo-cloud-01/components/logos"
import { Badge } from "@/registry/base-sera/ui/badge"

export default function LogoCloudSplit() {
  const primary = LOGOS.slice(0, 4)
  const secondary = LOGOS.slice(4)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-10 px-6 py-16 md:px-10"
    >
      <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <Badge variant="secondary" className="mb-3">
            مشتریان
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            لوگوی شما اینجاست
          </h2>
          <p className="mt-2 max-w-lg text-muted-foreground">
            فایل‌های PNG را در{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs" dir="ltr">
              /farsiui/companies
            </code>{" "}
            عوض کنید؛ فاصله‌ها و خاکستری‌سازی از قبل تنظیم شده
          </p>
        </div>
        <p className="text-sm text-muted-foreground md:text-end">
          <span className="text-2xl font-bold tracking-normal [letter-spacing:0] text-foreground">
            <bdi dir="ltr">۱٬۲۰۰+</bdi>
          </span>
          <br />
          تیم فعال
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {primary.map((logo) => (
            <div
              key={logo.src}
              className="flex h-28 items-center justify-center rounded-2xl border bg-card px-5"
            >
              <LogoImage {...logo} size="lg" imgClassName="opacity-80" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {secondary.map((logo) => (
            <div
              key={logo.src}
              className="flex h-24 items-center justify-center rounded-2xl border border-dashed bg-muted/30 px-5"
            >
              <LogoImage {...logo} size="md" imgClassName="opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
