"use client"

import {
  LogoImage,
  LOGOS,
} from "@/registry/base-luma/blocks/logo-cloud-01/components/logos"

export function LogoCloudSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-16"
    >
      <p className="mb-10 text-center text-sm text-muted-foreground">
        مورد اعتماد تیم‌های محصول فارسی
      </p>
      <div className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-8">
        {LOGOS.slice(0, 6).map((logo) => (
          <LogoImage key={logo.src} {...logo} size="md" />
        ))}
      </div>
    </section>
  )
}
