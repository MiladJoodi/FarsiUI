import { Button } from "@/styles/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/styles/base-rhea/ui/field"
import { Input } from "@/styles/base-rhea/ui/input"

export function NewMilestone() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>تعیین نقطهٔ عطف جدید</CardTitle>
        <CardDescription>
          هدف مالی‌تان را مشخص کنید تا در زمان‌بندی پس‌انداز کمکتان کنیم.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="goal-name">نام هدف</FieldLabel>
            <Input
              id="goal-name"
              placeholder="مثلاً خودرو، پیش‌پرداخت مسکن"
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="target-amount">مبلغ هدف</FieldLabel>
              <Input id="target-amount" defaultValue="۱۵٬۰۰۰٬۰۰۰ تومان" />
            </Field>
            <Field>
              <FieldLabel htmlFor="target-date">تاریخ هدف</FieldLabel>
              <Input id="target-date" defaultValue="آذر ۱۴۰۴" />
            </Field>
          </div>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">ایجاد هدف</Button>
        <Button variant="outline" className="w-full">
          انصراف
        </Button>
      </CardFooter>
    </Card>
  )
}
