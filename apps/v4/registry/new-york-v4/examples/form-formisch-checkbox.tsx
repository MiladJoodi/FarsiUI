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
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/new-york-v4/ui/field"

const tasks = [
  {
    id: "push",
    label: "اعلان Push",
  },
  {
    id: "email",
    label: "اعلان ایمیل",
  },
] as const

const FormSchema = v.object({
  responses: v.boolean(),
  tasks: v.pipe(
    v.array(v.string()),
    v.minLength(1, "حداقل یک نوع اعلان را انتخاب کنید."),
    v.check(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      "نوع اعلان نامعتبر انتخاب شده است."
    )
  ),
})

export default function FormFormischCheckbox() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      responses: true,
      tasks: [],
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
        <CardTitle>اعلان‌ها</CardTitle>
        <CardDescription>
          تنظیمات اعلان‌های خود را مدیریت کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <Form of={form} id="form-formisch-checkbox" onSubmit={handleSubmit}>
          <FieldGroup className="gap-3">
            <FormischField of={form} path={["responses"]}>
              {(field) => (
                <div>
                  <FieldSet data-invalid={field.errors !== null}>
                    <FieldLegend variant="label">پاسخ‌ها</FieldLegend>
                    <FieldDescription>
                      برای درخواست‌هایی که زمان بیشتری می‌برند، مثل تحقیق یا
                      تولید تصویر، اعلان دریافت کنید.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field orientation="horizontal">
                        <Checkbox
                          id="form-formisch-checkbox-responses"
                          checked={field.input ?? false}
                          onCheckedChange={(checked) =>
                            field.onChange(checked === true)
                          }
                          disabled
                        />
                        <FieldLabel
                          htmlFor="form-formisch-checkbox-responses"
                          className="font-normal"
                        >
                          اعلان Push
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </div>
              )}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["tasks"]}>
              {(field) => (
                <FieldGroup className="gap-3">
                  <FieldSet data-invalid={field.errors !== null}>
                    <FieldLegend variant="label">وظایف</FieldLegend>
                    <FieldDescription>
                      برای به‌روزرسانی وظایفی که ایجاد کرده‌اید، اعلان دریافت
                      کنید.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {tasks.map((task) => {
                        const current = field.input ?? []
                        return (
                          <Field
                            key={task.id}
                            orientation="horizontal"
                            data-invalid={field.errors !== null}
                          >
                            <Checkbox
                              id={`form-formisch-checkbox-${task.id}`}
                              aria-invalid={field.errors !== null}
                              checked={current.includes(task.id)}
                              onCheckedChange={(checked) => {
                                field.onChange(
                                  checked === true
                                    ? [...current, task.id]
                                    : current.filter(
                                        (value) => value !== task.id
                                      )
                                )
                              }}
                            />
                            <FieldLabel
                              htmlFor={`form-formisch-checkbox-${task.id}`}
                              className="font-normal"
                            >
                              {task.label}
                            </FieldLabel>
                          </Field>
                        )
                      })}
                    </FieldGroup>
                  </FieldSet>
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </FieldGroup>
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
          <Button type="submit" form="form-formisch-checkbox">
            ذخیره
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
