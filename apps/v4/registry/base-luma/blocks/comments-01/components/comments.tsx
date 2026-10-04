import { Avatar, AvatarFallback } from "@/registry/base-luma/ui/avatar"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import { Textarea } from "@/registry/base-luma/ui/textarea"

const COMMENTS = [
  {
    name: "سارا محمدی",
    text: "عالی بود، مخصوصاً بخش تایپوگرافی فارسی.",
    time: "۲ ساعت پیش",
    initials: "س‌م",
  },
  {
    name: "علی رضایی",
    text: "آیا نسخهٔ تیره هم دارید؟",
    time: "دیروز",
    initials: "ع‌ر",
  },
] as const

export default function CommentsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle>دیدگاه‌ها</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 py-4">
          {COMMENTS.map((c) => (
            <div key={c.name} className="flex gap-3">
              <Avatar className="size-9">
                <AvatarFallback>{c.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium">{c.name}</p>
                  <span className="text-xs tracking-normal text-muted-foreground">
                    {c.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{c.text}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex-col gap-3 border-t py-4">
          <Textarea
            placeholder="دیدگاه خود را بنویسید…"
            dir="rtl"
            className="min-h-20 resize-none"
          />
          <Button type="button" className="w-full sm:w-auto sm:self-end">
            ارسال دیدگاه
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
