/* eslint-disable react/no-children-prop */
"use client"

import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

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

const formSchema = z.object({
  username: z
    .string()
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد.")
    .max(10, "نام کاربری باید حداکثر ۱۰ کاراکتر باشد.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "نام کاربری فقط می‌تواند شامل حروف، اعداد و Underscore باشد."
    ),
})

export default function FormTanstackInput() {
  const form = useForm({
    defaultValues: {
      username: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("مقادیر زیر ارسال شد:", {
        description: (
          <pre
            className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground"
            dir="ltr"
          >
            <code>{JSON.stringify(value, null, 2)}</code>
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
    },
  })

  return (
    <Card className="w-full sm:max-w-md gap-3 py-3" dir="rtl">
      <CardHeader className="px-4 pb-0">
        <CardTitle>تنظیمات پروفایل</CardTitle>
        <CardDescription>
          اطلاعات پروفایل خود را به‌روزرسانی کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form
          id="form-tanstack-input"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup className="gap-3">
            <form.Field
              name="username"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="form-tanstack-input-username">
                      نام‌کاربری
                    </FieldLabel>
                    <Input
                      id="form-tanstack-input-username"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="نام‌کاربری"
                      autoComplete="username"
                    />
                    <FieldDescription>
                      این نام به‌صورت عمومی در پروفایل شما نمایش داده می‌شود و باید
                      بین ۳ تا ۱۰ کاراکتر باشد و فقط شامل حروف، اعداد و Underscore
                      باشد.
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="px-4">
        <Field orientation="horizontal" className="justify-end">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            بازنشانی
          </Button>
          <Button type="submit" form="form-tanstack-input">
            ذخیره
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
