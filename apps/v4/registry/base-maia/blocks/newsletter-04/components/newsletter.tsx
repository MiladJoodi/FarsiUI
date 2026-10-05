"use client"

import * as React from "react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"

const TOPICS = [
  {
    id: "blocks",
    title: "بلوک‌های جدید",
    desc: "هر وقت الگوی تازه‌ای منتشر شد",
    defaultChecked: true,
  },
  {
    id: "tips",
    title: "نکته‌های RTL",
    desc: "ترفندهای راست‌چین و تایپ فارسی",
    defaultChecked: true,
  },
  {
    id: "product",
    title: "اخبار محصول",
    desc: "به‌روزرسانی‌های بزرگ FarsiUI",
    defaultChecked: false,
  },
] as const

export default function NewsletterTopics() {
  const [done, setDone] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-center justify-center bg-background px-6 py-16"
    >
      <div className="w-full max-w-lg rounded-2xl border bg-card p-6 shadow-sm md:p-8">
        {done ? (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold">ترجیحات ذخیره شد</h2>
            <p className="text-muted-foreground">
              فقط موضوع‌هایی که انتخاب کردید برایتان می‌آید
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setDone(false)}
            >
              ویرایش
            </Button>
          </div>
        ) : (
          <>
            <Badge variant="outline" className="mb-3">
              شخصی‌سازی
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight">
              چه چیزی برایتان بفرستیم؟
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              موضوع‌ها را انتخاب کنید، بعد ایمیلتان را وارد کنید
            </p>

            <div className="mt-6 space-y-0">
              {TOPICS.map((topic, index) => (
                <React.Fragment key={topic.id}>
                  {index > 0 ? <Separator /> : null}
                  <div className="flex items-center justify-between gap-4 py-3">
                    <div className="space-y-0.5">
                      <Label htmlFor={topic.id}>{topic.title}</Label>
                      <p className="text-sm text-muted-foreground">
                        {topic.desc}
                      </p>
                    </div>
                    <Switch
                      id={topic.id}
                      defaultChecked={topic.defaultChecked}
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>

            <form
              className="mt-4 space-y-3"
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
              <Button type="submit" className="w-full">
                ذخیره و عضویت
              </Button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}
