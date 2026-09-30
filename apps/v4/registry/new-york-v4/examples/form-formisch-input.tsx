"use client"

import * as React from "react"
import { Form, Field as FormischField, reset, useForm } from "@formisch/react"
import type { SubmitHandler } from "@formisch/react"
import { toast } from "sonner"
import * as v from "valibot"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"

const FormSchema = v.object({
  username: v.pipe(
    v.string(),
    v.minLength(3, "نام کاربری باید حداقل ۳ کاراکتر باشد."),
    v.maxLength(10, "نام کاربری باید حداکثر ۱۰ کاراکتر باشد."),
    v.regex(
      /^[a-zA-Z0-9_]+$/,
      "نام کاربری فقط می‌تواند شامل حروف، اعداد و Underscore باشد."
    )
  ),
})

export default function FormFormischInput() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      username: "",
    },
  })

  const handleSubmit: SubmitHandler<typeof FormSchema> = (output) => {
    toast("مقادیر فرم ارسال شد:", {
      description: (
        <pre
          className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground"
          dir="ltr"
        >
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      position: "bottom-left",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md gap-3 py-3" dir="rtl">
      <CardHeader className="px-4 pb-0">
        <CardTitle>تنظیمات پروفایل</CardTitle>
        <CardDescription>
          اطلاعات پروفایل خود را به‌روزرسانی کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <Form of={form} id="form-formisch-input" onSubmit={handleSubmit}>
          <FieldGroup className="gap-3">
            <FormischField of={form} path={["username"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="form-formisch-input-username">
                    نام کاربری
                  </FieldLabel>
                  <Input
                    {...field.props}
                    id="form-formisch-input-username"
                    value={field.input ?? ""}
                    aria-invalid={field.errors !== null}
                    placeholder="نام‌کاربری"
                    autoComplete="username"
                  />
                  <FieldDescription>
                    این نام به‌صورت عمومی در پروفایل شما نمایش داده می‌شود و باید
                    بین ۳ تا ۱۰ کاراکتر باشد و فقط شامل حروف، اعداد و Underscore
                    باشد.
                  </FieldDescription>
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </Field>
              )}
            </FormischField>
          </FieldGroup>
        </Form>
      </CardContent>
      <CardFooter className="px-4">
        <Field orientation="horizontal" className="justify-end">
          <Button type="button" variant="outline" onClick={() => reset(form)}>
            بازنشانی
          </Button>
          <Button type="submit" form="form-formisch-input">
            ذخیره
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
