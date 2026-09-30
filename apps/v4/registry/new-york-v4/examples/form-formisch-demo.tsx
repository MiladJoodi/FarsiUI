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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/new-york-v4/ui/input-group"

const FormSchema = v.object({
  title: v.pipe(
    v.string(),
    v.minLength(5, "عنوان باگ باید حداقل ۵ کاراکتر باشد."),
    v.maxLength(32, "عنوان باگ باید حداکثر ۳۲ کاراکتر باشد.")
  ),
  description: v.pipe(
    v.string(),
    v.minLength(20, "توضیحات باید حداقل ۲۰ کاراکتر باشد."),
    v.maxLength(100, "توضیحات باید حداکثر ۱۰۰ کاراکتر باشد.")
  ),
})

function toPersianDigits(value: number | string) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]!)
}

export default function BugReportForm() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      title: "",
      description: "",
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
        <CardTitle>گزارش باگ</CardTitle>
        <CardDescription>
          با گزارش باگ‌هایی که با آن‌ها مواجه می‌شوید، به بهبود پروژه کمک کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <Form of={form} id="form-formisch-demo" onSubmit={handleSubmit}>
          <FieldGroup className="gap-3">
            <FormischField of={form} path={["title"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="form-formisch-demo-title">
                    عنوان باگ
                  </FieldLabel>
                  <Input
                    {...field.props}
                    id="form-formisch-demo-title"
                    value={field.input ?? ""}
                    aria-invalid={field.errors !== null}
                    placeholder="دکمهٔ ورود در موبایل کار نمی‌کند"
                    autoComplete="off"
                  />
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </Field>
              )}
            </FormischField>
            <FormischField of={form} path={["description"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="form-formisch-demo-description">
                    توضیحات
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field.props}
                      id="form-formisch-demo-description"
                      value={field.input ?? ""}
                      placeholder="با دکمهٔ ورود در موبایل مشکل دارم."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={field.errors !== null}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="gap-1">
                        <span dir="ltr">
                          {`${toPersianDigits((field.input ?? "").length)}/${toPersianDigits(100)}`}
                        </span>
                        <span>کاراکتر</span>
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    مراحل بازتولید مشکل، رفتار مورد انتظار و اتفاقی که در عمل رخ
                    داده است را بنویسید.
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
          <Button type="submit" form="form-formisch-demo">
            ارسال
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
