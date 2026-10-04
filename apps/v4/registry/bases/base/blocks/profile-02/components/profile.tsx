import { MapPinIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

const STATS = [
  { label: "پروژه", value: "۲۴" },
  { label: "دنبال‌کننده", value: "۱٬۲۸۰" },
  { label: "دنبال‌شونده", value: "۱۸۶" },
] as const

export default function ProfileCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="justify-items-center text-center">
          <Avatar className="size-20">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
              alt="سارا محمدی"
            />
            <AvatarFallback>س‌م</AvatarFallback>
          </Avatar>
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-center gap-2">
              <CardTitle>سارا محمدی</CardTitle>
              <Badge variant="secondary">تأییدشده</Badge>
            </div>
            <CardDescription className="flex items-center justify-center gap-1">
              <MapPinIcon className="size-3.5" />
              تهران، ایران
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-sm text-muted-foreground">
            طراح محصول در FarsiUI · تمرکز روی کامپوننت‌های دسترس‌پذیر
          </p>
          <Separator />
          <div className="grid grid-cols-3 gap-2 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-semibold tracking-normal">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2 border-t">
          <Button variant="outline">پیام</Button>
          <Button>دنبال کردن</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
