"use client"

import { Button } from "@/registry/base-aether/ui/button"
import { Input } from "@/registry/base-aether/ui/input"

export default function NewsletterInline() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto w-full max-w-xl rounded-xl border bg-card p-6 shadow-sm"
    >
      <div className="space-y-2 text-center">
        <h2 className="text-xl font-bold">به‌روز بمانید</h2>
        <p className="text-sm text-muted-foreground">
          ایمیل خود را وارد کنید تا از انتشار کامپوننت‌های جدید باخبر شوید
        </p>
      </div>
      <form
        className="mt-5 flex flex-col gap-2 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="email"
          placeholder="name@example.com"
          dir="ltr"
          className="text-start sm:flex-1"
          required
          aria-label="ایمیل"
        />
        <Button type="submit" className="shrink-0">
          عضویت
        </Button>
      </form>
    </div>
  )
}
