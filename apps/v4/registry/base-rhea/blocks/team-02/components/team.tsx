import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-rhea/ui/avatar"
import { Badge } from "@/registry/base-rhea/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"

const MEMBERS = [
  {
    name: "مریم رضایی",
    role: "مدیر محصول",
    bio: "مسیر محصول فارسی را از ایده تا انتشار هماهنگ می‌کند.",
    avatar: "/avatars/01.png",
    fallback: "مر",
    dept: "محصول",
  },
  {
    name: "علی محمدی",
    role: "مهندس فرانت‌اند",
    bio: "کامپوننت‌های RTL و تم‌ها را نگه می‌دارد.",
    avatar: "/avatars/02.png",
    fallback: "عم",
    dept: "مهندسی",
  },
  {
    name: "سارا کریمی",
    role: "طراح محصول",
    bio: "سیستم طراحی و فاصله‌گذاری فارسی را می‌سازد.",
    avatar: "/avatars/03.png",
    fallback: "سک",
    dept: "طراحی",
  },
  {
    name: "نیما پورحسین",
    role: "مهندس بک‌اند",
    bio: "رجیستری و API تحویل بلاک‌ها را پایدار نگه می‌دارد.",
    avatar: "/avatars/04.png",
    fallback: "نپ",
    dept: "مهندسی",
  },
  {
    name: "هستی احمدی",
    role: "مدیر فنی",
    bio: "کیفیت کد و معماری بلاک‌ها را راهبری می‌کند.",
    avatar: "/avatars/05.png",
    fallback: "ها",
    dept: "مهندسی",
  },
  {
    name: "رضا کاظمی",
    role: "رشد محصول",
    bio: "با تیم‌های محصول فارسی حرف می‌زند و بازخورد می‌آورد.",
    avatar: "/avatars/06.png",
    fallback: "رک",
    dept: "رشد",
  },
] as const

export function TeamCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10 text-start">
        <h2 className="text-3xl font-bold tracking-tight">اعضای تیم</h2>
        <p className="mt-2 text-muted-foreground">
          نقش‌ها و مسئولیت‌ها در یک نگاه
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MEMBERS.map((member) => (
          <Card key={member.name}>
            <CardHeader className="gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="size-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <CardTitle className="text-base">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="w-fit">
                {member.dept}
              </Badge>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
