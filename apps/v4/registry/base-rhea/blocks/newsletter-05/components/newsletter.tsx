"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-rhea/ui/avatar"
import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import { Input } from "@/registry/base-rhea/ui/input"

const PERKS = [
  "بلاک و الگوی هفته",
  "نکتهٔ RTL و تایپ فارسی",
  "داستان تیم‌های محصول",
] as const

export function NewsletterShowcase() {
  const [done, setDone] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="overflow-hidden rounded-3xl border bg-card shadow-sm lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 border-b bg-muted/30 p-6 md:p-10 lg:border-b-0 lg:border-l">
          <div>
            <Badge variant="outline" className="mb-3">
              داخل هر نامه
            </Badge>
            <h3 className="text-xl font-bold tracking-tight">
              یک ایمیل، سه بخش کوتاه
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              خواندنش کمتر از پنج دقیقه طول می‌کشد
            </p>
          </div>
          <ul className="space-y-3">
            {PERKS.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-3 rounded-xl border bg-background px-4 py-3 text-sm"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckIcon className="size-3.5" />
                </span>
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center p-6 md:p-10">
          {done ? (
            <div className="space-y-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckIcon className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                عضو خبرنامه شدید
              </h2>
              <p className="text-muted-foreground">
                جمعهٔ آینده اولین نامه را می‌فرستیم. پوشهٔ پروموشن را هم چک
                کنید.
              </p>
              <Button variant="outline" onClick={() => setDone(false)}>
                عضویت با ایمیل دیگر
              </Button>
            </div>
          ) : (
            <>
              <Badge className="mb-3 w-fit">خبرنامهٔ هفتگی</Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                برای کسانی که فارسی می‌سازند
              </h2>
              <p className="mt-3 text-muted-foreground">
                بلاک تازه، نکتهٔ RTL و داستان تیم‌ها — یک ایمیل در هفته
              </p>

              <form
                className="mt-8 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  setDone(true)
                }}
              >
                <Input
                  type="email"
                  required
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
                <Button type="submit" className="w-full" size="lg">
                  عضویت رایگان
                </Button>
              </form>

              <div className="mt-8 flex items-center gap-3 border-t pt-6">
                <div className="flex -space-x-2 space-x-reverse">
                  {["01", "02", "03", "04"].map((id) => (
                    <Avatar
                      key={id}
                      className="size-8 border-2 border-background"
                    >
                      <AvatarImage src={`/avatars/${id}.png`} alt="" />
                      <AvatarFallback>{id}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <bdi
                    dir="ltr"
                    className="inline-block font-medium tracking-normal [letter-spacing:0] whitespace-nowrap text-foreground"
                  >
                    ۸٬۴۰۰+
                  </bdi>{" "}
                  مشترک فعال
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
