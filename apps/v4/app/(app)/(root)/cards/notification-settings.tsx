import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"

const NOTIFICATIONS = [
  {
    id: "transactions",
    label: "هشدار تراکنش‌ها",
    description: "واریز، برداشت و انتقال‌ها.",
    defaultChecked: true,
  },
  {
    id: "security",
    label: "هشدار امنیتی",
    description: "تلاش‌های ورود و تغییرات حساب.",
    defaultChecked: true,
  },
  {
    id: "goals",
    label: "نقاط عطف هدف",
    description: "به‌روزرسانی در ۲۵٪، ۵۰٪، ۷۵٪ و ۱۰۰٪.",
    defaultChecked: false,
  },
  {
    id: "market",
    label: "به‌روزرسانی بازار",
    description: "خلاصهٔ روزانهٔ پرتفوی و هشدار قیمت.",
    defaultChecked: false,
  },
]

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>اعلان‌ها</CardTitle>
        <CardDescription>
          انتخاب کنید کدام اعلان‌ها را از طریق ایمیل یا گوشی دریافت کنید.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          {NOTIFICATIONS.map((n) => (
            <Field key={n.id} orientation="horizontal">
              <Checkbox
                id={`notify-${n.id}`}
                defaultChecked={n.defaultChecked}
              />
              <FieldContent className="text-right">
                <FieldLabel htmlFor={`notify-${n.id}`}>{n.label}</FieldLabel>
                <FieldDescription>{n.description}</FieldDescription>
              </FieldContent>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">ذخیرهٔ ترجیحات</Button>
      </CardFooter>
    </Card>
  )
}
