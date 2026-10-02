import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-vega/ui/avatar"
import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"

const LEAD = {
  name: "آزاده نوری",
  role: "مدیر طراحی · استودیو مهتاب",
  bio: "طراحی تجربهٔ فارسی را از روز اول جدی می‌گیریم؛ نه وصلهٔ آخر پروژه.",
  avatar: "/avatars/07.png",
  fallback: "آن",
} as const

const MEMBERS = [
  {
    name: "مریم رضایی",
    role: "مدیر محصول",
    avatar: "/avatars/01.png",
    fallback: "مر",
  },
  {
    name: "علی محمدی",
    role: "فرانت‌اند",
    avatar: "/avatars/02.png",
    fallback: "عم",
  },
  {
    name: "سارا کریمی",
    role: "طراح محصول",
    avatar: "/avatars/03.png",
    fallback: "سک",
  },
  {
    name: "نیما پورحسین",
    role: "بک‌اند",
    avatar: "/avatars/04.png",
    fallback: "نپ",
  },
] as const

export function TeamFeatured() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="secondary" className="mb-3">
            تیم اصلی
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">با ما آشنا شوید</h2>
          <p className="mt-2 text-muted-foreground">
            از طراحی تا مهندسی؛ یک تیم برای محصول فارسی
          </p>
        </div>
        <Button variant="outline">موقعیت‌های شغلی</Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="aspect-16/10 bg-muted">
            <img
              src={LEAD.avatar}
              alt={LEAD.name}
              className="size-full object-cover object-top"
            />
          </div>
          <div className="space-y-3 p-6 md:p-8">
            <h3 className="text-xl font-bold tracking-tight">{LEAD.name}</h3>
            <p className="text-sm text-muted-foreground">{LEAD.role}</p>
            <p className="leading-relaxed text-muted-foreground">{LEAD.bio}</p>
          </div>
        </article>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {MEMBERS.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm"
            >
              <Avatar className="size-11">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.fallback}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 text-sm">
                <p className="font-medium">{member.name}</p>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
