import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Label } from "@/registry/base-nova/ui/label"
import { Separator } from "@/registry/base-nova/ui/separator"
import { Switch } from "@/registry/base-nova/ui/switch"

export default function FiltersSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle>فیلترها</CardTitle>
          <CardDescription>گزینه‌های پایهٔ نمایش</CardDescription>
        </CardHeader>
        <CardContent className="space-y-0 py-0">
          <Row id="f1-stock" title="فقط موجود" defaultChecked />
          <Separator />
          <Row id="f1-sale" title="تخفیف‌دار" />
          <Separator />
          <Row id="f1-local" title="ارسال سریع" defaultChecked />
        </CardContent>
        <CardFooter className="gap-3 border-t py-4">
          <Button type="button" className="w-full">
            اعمال فیلتر
          </Button>
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
