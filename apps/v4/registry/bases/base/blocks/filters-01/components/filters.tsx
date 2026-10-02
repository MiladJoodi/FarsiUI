import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Label } from "@/registry/bases/base/ui/label"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

export function FiltersSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>فیلترها</CardTitle>
          <CardDescription>گزینه‌های پایهٔ نمایش</CardDescription>
        </CardHeader>
        <CardContent className="space-y-0">
          <Row id="f1-stock" title="فقط موجود" defaultChecked />
          <Separator />
          <Row id="f1-sale" title="تخفیف‌دار" />
          <Separator />
          <Row id="f1-local" title="ارسال سریع" defaultChecked />
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">اعمال فیلتر</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

function Row({
  id,
  title,
  defaultChecked,
}: {
  id: string
  title: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <Label htmlFor={id}>{title}</Label>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  )
}
