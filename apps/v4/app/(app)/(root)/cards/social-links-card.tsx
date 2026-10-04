import {
  Camera01Icon,
  Globe02Icon,
  TelegramIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/bases/base/ui/input-group"

export function SocialLinksCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardHeader>
        <CardTitle>لینک‌های اجتماعی</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="telegram-username">تلگرام</FieldLabel>
            <InputGroup dir="ltr">
              <InputGroupAddon align="inline-start">
                <HugeiconsIcon icon={TelegramIcon} strokeWidth={2} />
              </InputGroupAddon>
              <InputGroupAddon align="inline-start">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                id="telegram-username"
                placeholder="username"
                className="text-left"
              />
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="instagram-handle">اینستاگرام</FieldLabel>
            <InputGroup dir="ltr">
              <InputGroupAddon align="inline-start">
                <HugeiconsIcon icon={Camera01Icon} strokeWidth={2} />
              </InputGroupAddon>
              <InputGroupAddon align="inline-start">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                id="instagram-handle"
                placeholder="username"
                className="text-left"
              />
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="website-url">وب‌سایت</FieldLabel>
            <InputGroup dir="ltr">
              <InputGroupAddon align="inline-start">
                <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
              </InputGroupAddon>
              <InputGroupInput
                id="website-url"
                placeholder="example.ir"
                className="text-left"
              />
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">ذخیرهٔ لینک‌ها</Button>
      </CardFooter>
    </Card>
  )
}
