import {
  AlertCircleIcon,
  ArrowRight01Icon,
  SquareLock02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"

export function AccountAccess() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>دسترسی حساب</CardTitle>
        <CardDescription>
          اطلاعات ورود را به‌روز کنید یا دوباره احراز هویت کنید.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email-address">آدرس ایمیل</FieldLabel>
            <Input
              id="email-address"
              type="email"
              placeholder="artist@studio.ir"
              dir="ltr"
              className="text-left"
            />
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="current-password">رمز عبور فعلی</FieldLabel>
              <button
                type="button"
                className="text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                فراموش کردید؟
              </button>
            </div>
            <Input
              id="current-password"
              type="password"
              placeholder="••••••••••••••••••••••••"
            />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full">
          <HugeiconsIcon icon={SquareLock02Icon} strokeWidth={2} />
          به‌روزرسانی امنیت
        </Button>
        <Item
          variant="muted"
          render={<button type="button" className="w-full text-start" />}
        >
          <ItemMedia variant="icon">
            <HugeiconsIcon
              icon={AlertCircleIcon}
              className="text-destructive"
              strokeWidth={2}
            />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>منطقهٔ خطر</ItemTitle>
            <ItemDescription className="line-clamp-1">
              بایگانی حساب و حذف کاتالوگ
            </ItemDescription>
          </ItemContent>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="size-4 rtl:rotate-180"
            strokeWidth={2}
          />
        </Item>
      </CardFooter>
    </Card>
  )
}
