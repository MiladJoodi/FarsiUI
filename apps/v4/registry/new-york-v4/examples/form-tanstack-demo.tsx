/* eslint-disable react/no-children-prop */
"use client"

import * as React from "react"
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/new-york-v4/ui/input-group"

const formSchema = z.object({
  title: z
    .string()
    .min(5, "عنوان باگ باید حداقل ۵ کاراکتر باشد.")
    .max(32, "عنوان باگ باید حداکثر ۳۲ کاراکتر باشد."),
  description: z
    .string()
    .min(20, "توضیحات باید حداقل ۲۰ کاراکتر باشد.")
    .max(100, "توضیحات باید حداکثر ۱۰۰ کاراکتر باشد."),
})

function toPersianDigits(value: number | string) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]!)
}

export default function BugReportForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
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
        <CardTitle>گزارش باگ</CardTitle>
        <CardDescription>
          با گزارش باگ‌هایی که با آن‌ها مواجه می‌شوید، به بهبود پروژه کمک کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form
          id="bug-report-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup className="gap-3">
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>عنوان باگ</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="دکمهٔ ورود در موبایل کار نمی‌کند"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>توضیحات</FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="با دکمهٔ ورود در موبایل مشکل دارم."
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={isInvalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="gap-1">
                          <span dir="ltr">
                            {`${toPersianDigits(field.state.value.length)}/${toPersianDigits(100)}`}
                          </span>
                          <span>کاراکتر</span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      مراحل بازتولید مشکل، رفتار مورد انتظار و اتفاقی که در عمل
                      رخ داده است را بنویسید.
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
          <Button type="submit" form="bug-report-form">
            ارسال
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
