import { BookmarkIcon, LinkIcon, Share2Icon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-rhea/ui/avatar"
import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import { Separator } from "@/registry/base-rhea/ui/separator"

const TAGS = ["تایپوگرافی", "RTL", "وبلاگ"] as const

const PARAGRAPHS = [
  "کاور مقاله باید حس موضوع را بدهد، نه اینکه فقط یک مستطیل رنگی باشد. نسبت عریض و گوشهٔ نرم برای وبلاگ محصول معمولاً کافی است؛ نیازی به کارت شناور روی تصویر نیست.",
  "دکمه‌های اشتراک‌گذاری کنار عنوان قرار می‌گیرند تا بعد از خواندن چند خط در دسترس باشند. لینک کپی و ذخیره برای مخاطب فارسی رایج‌تر از دکمه‌های شبکهٔ اجتماعی شلوغ است.",
  "برچسب‌ها در پایین سربرگ کمک می‌کنند نوشته در فهرست و جستجو پیدا شود. سه برچسب معمولاً بهتر از ده بج کوچک است.",
] as const

export function ArticleCover() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <article className="w-full max-w-3xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div
          className="mb-8 aspect-16/9 w-full rounded-2xl bg-primary/10"
          aria-hidden
        />
        <header className="mb-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge className="w-fit">محصول</Badge>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" aria-label="اشتراک‌گذاری">
                <Share2Icon className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="کپی لینک">
                <LinkIcon className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="ذخیره">
                <BookmarkIcon className="size-4" />
              </Button>
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            کاور، اشتراک و برچسب در یک صفحهٔ خواندنی
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage src="/avatars/03.png" alt="سارا کریمی" />
                <AvatarFallback>س‌ک</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">سارا کریمی</p>
                <p className="text-muted-foreground">
                  ۱ مهر ۱۴۰۵ · ۸ دقیقه مطالعه
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </header>
        <Separator className="mb-8" />
        <div className="space-y-5 text-base leading-8 text-foreground/90">
          {PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </article>
    </div>
  )
}
