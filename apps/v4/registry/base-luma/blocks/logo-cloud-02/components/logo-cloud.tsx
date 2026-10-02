"use client"

import {
  LogoImage,
  LOGOS,
} from "@/registry/base-luma/blocks/logo-cloud-01/components/logos"

export function LogoCloudGrid() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          کنار بهترین‌ها دیده می‌شوید
        </h2>
        <p className="mt-2 text-muted-foreground">
          برندهایی که رابط فارسی را با FarsiUI می‌سازند
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {LOGOS.map((logo) => (
          <div
            key={logo.src}
            className="flex h-24 items-center justify-center rounded-xl border bg-card px-4 shadow-sm"
          >
            <LogoImage {...logo} size="md" imgClassName="opacity-80" />
          </div>
        ))}
      </div>
    </section>
  )
}
