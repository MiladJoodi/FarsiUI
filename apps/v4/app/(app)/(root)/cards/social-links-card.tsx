import {
  Camera01Icon,
  CloudUploadIcon,
  Globe02Icon,
  PlusSignCircleIcon,
  TelegramIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/styles/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/styles/base-rhea/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-rhea/ui/input-group"

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
      <InputGroup>
        <InputGroupAddon>
          <HugeiconsIcon icon={TelegramIcon} strokeWidth={2} />
        </InputGroupAddon>
        <InputGroupInput
          id="telegram-username"
          placeholder="@username"
          dir="ltr"
          className="text-left"
        />
      </InputGroup>
    </Field>

    <Field>
      <FieldLabel htmlFor="instagram-handle">اینستاگرام</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <HugeiconsIcon icon={Camera01Icon} strokeWidth={2} />
        </InputGroupAddon>
        <InputGroupInput
          id="instagram-handle"
          placeholder="@username"
          dir="ltr"
          className="text-left"
        />
      </InputGroup>
    </Field>

    <Field>
      <FieldLabel htmlFor="website-url">وب‌سایت</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
        </InputGroupAddon>
        <InputGroupInput
          id="website-url"
          placeholder="example.ir"
          dir="ltr"
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
