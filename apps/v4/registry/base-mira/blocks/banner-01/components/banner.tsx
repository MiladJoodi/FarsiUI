"use client"

export function BannerSimple() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-start justify-center bg-background p-6 md:items-center"
    >
      <div className="w-full max-w-4xl rounded-lg border bg-muted/50 px-4 py-3 text-center text-sm md:px-6">
        نسخهٔ جدید FarsiUI منتشر شد.{" "}
        <a href="#" className="font-medium underline underline-offset-4">
          تغییرات را ببینید
        </a>
      </div>
    </div>
  )
}
