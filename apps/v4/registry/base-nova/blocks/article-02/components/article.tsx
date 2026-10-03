import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-nova/ui/avatar"
import { Badge } from "@/registry/base-nova/ui/badge"
import { Separator } from "@/registry/base-nova/ui/separator"

const PARAGRAPHS = [
  "هر نوشته باید مشخص کند برای چه کسی نوشته شده. بج دسته و نام نویسنده این سیگنال را در همان نگاه اول می‌دهند بدون اینکه صفحه شلوغ شود.",
  "برای مخاطب ایرانی تاریخ شمسی و زمان مطالعه کافی است؛ نیازی به ردیف طولانی متادیتا نیست. آواتار کوچک کنار نام، حس انسانی می‌آورد و اعتماد می‌سازد.",
  "جداکنندهٔ ظریف بین سربرگ و بدنه کمک می‌کند چشم از معرفی به خواندن بلغزد — نه اینکه با کارت یا سایهٔ اضافه حواس‌پرتی بسازید.",
] as const

export function ArticleWithAuthor() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <article className="w-full max-w-2xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <header className="mb-8 space-y-5">
          <Badge variant="outline" className="w-fit">
            راهنما
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            معرفی نویسنده و دسته بدون شلوغی سربرگ
          </h1>
          <div className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarImage src="/avatars/01.png" alt="مریم رضایی" />
              <AvatarFallback>م‌ر</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">مریم رضایی</p>
              <p className="text-muted-foreground">
                ۲ مهر ۱۴۰۵ · ۶ دقیقه مطالعه
              </p>
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
