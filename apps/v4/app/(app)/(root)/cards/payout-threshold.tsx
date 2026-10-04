import { Cancel01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Progress } from "@/registry/bases/base/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const CURRENCIES = [
  { label: "تومان — ایران", value: "irr" },
  { label: "USD — دلار آمریکا", value: "usd" },
  { label: "EUR — یورو", value: "eur" },
  { label: "GBP — پوند انگلیس", value: "gbp" },
]

export function PayoutThreshold() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>آستانهٔ پرداخت</CardTitle>
        <CardDescription>
          حداقل موجودی لازم قبل از شروع پرداخت را تعیین کنید.
        </CardDescription>
        <CardAction>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="بستن آستانهٔ پرداخت"
          >
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="preferred-currency">ارز ترجیحی</FieldLabel>
            <Select items={CURRENCIES} defaultValue="irr">
              <SelectTrigger
                id="preferred-currency"
                className="w-full"
                dir="rtl"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  {CURRENCIES.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <div className="flex items-baseline justify-between">
              <FieldLabel id="min-payout-label">حداقل مبلغ پرداخت</FieldLabel>
              <span className="text-2xl font-semibold tracking-normal whitespace-nowrap">
                ۲٬۵۰۰٬۰۰۰ تومان
              </span>
            </div>
            <Progress
              value={25}
              aria-labelledby="min-payout-label"
              aria-valuetext="۲٬۵۰۰٬۰۰۰ از ۱۰٬۰۰۰٬۰۰۰ تومان"
            />
            <div className="flex items-center justify-between">
              <FieldDescription>۵۰٬۰۰۰ تومان (حداقل)</FieldDescription>
              <FieldDescription>۱۰٬۰۰۰٬۰۰۰ تومان (حداکثر)</FieldDescription>
            </div>
          </Field>
          <Field>
            <FieldLabel htmlFor="payout-notes">یادداشت‌ها</FieldLabel>
            <Textarea
              id="payout-notes"
              placeholder="هر نکته‌ای دربارهٔ این تنظیم پرداخت بنویسید…"
              className="min-h-[100px]"
            />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">ذخیرهٔ آستانه</Button>
      </CardFooter>
    </Card>
  )
}
