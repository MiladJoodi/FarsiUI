"use client"

import { Badge } from "@/registry/base-aether/ui/badge"
import { Button } from "@/registry/base-aether/ui/button"

export default function CtaDual() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-6 py-16 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--muted)_0%,transparent_55%)]"
      />
      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        <Badge variant="secondary">آماده‌اید؟</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          رابط فارسی را همین الان امتحان کنید
        </h2>
        <p className="mt-3 text-muted-foreground md:text-lg">
          بدون کارت بانکی شروع کنید؛ هر وقت خواستید ارتقا دهید
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">شروع کنید</Button>
          <Button size="lg" variant="outline">
            مشاهدهٔ دمو
          </Button>
        </div>
      </div>
    </section>
  )
}
