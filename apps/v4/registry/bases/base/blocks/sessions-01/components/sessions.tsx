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

export function SessionsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>نشست فعال</CardTitle>
          <CardDescription>دستگاهی که الان وارد شده‌اید</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-muted-foreground">دستگاه</span>
            <span>Chrome روی ویندوز</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-muted-foreground">مکان</span>
            <span>تهران</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-muted-foreground">وضعیت</span>
            <Badge variant="secondary">همین دستگاه</Badge>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full" variant="outline">
            خروج از این نشست
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
