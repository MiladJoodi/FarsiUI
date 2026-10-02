import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Separator } from "@/registry/base-lyra/ui/separator"

export function CheckoutSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>تسویه‌حساب</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="c1-name">نام و نام خانوادگی</FieldLabel>
                <Input id="c1-name" placeholder="مثلاً سارا محمدی" dir="rtl" />
              </Field>
              <Field>
                <FieldLabel htmlFor="c1-email">ایمیل</FieldLabel>
                <Input
                  id="c1-email"
                  type="email"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="c1-address">آدرس</FieldLabel>
                <Input
                  id="c1-address"
                  placeholder="خیابان، پلاک، واحد"
                  dir="rtl"
                />
              </Field>
            </FieldGroup>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">مبلغ قابل پرداخت</span>
              <span className="font-semibold">
                <bdi dir="ltr" className="tabular-nums">
                  ۷٬۴۴۰٬۰۰۰
                </bdi>{" "}
                تومان
              </span>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg">
            پرداخت
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
