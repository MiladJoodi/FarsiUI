import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"

export default function CardImage() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0" dir="rtl">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="تصویر رویداد"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">ویژه</Badge>
        </CardAction>
        <CardTitle>دورهمی سیستم طراحی</CardTitle>
        <CardDescription>
          گفت‌وگویی کاربردی درباره API کامپوننت‌ها، دسترس‌پذیری و توسعه سریع‌تر.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">مشاهدهٔ رویداد</Button>
      </CardFooter>
    </Card>
  )
}
