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

const formSchema = z.object({
  responses: z.boolean(),
  tasks: z
    .array(z.string())
    .min(1, "حداقل یک نوع اعلان را انتخاب کنید.")
    .refine(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      {
        message: "نوع اعلان نامعتبر انتخاب شده است.",
      }
    ),
})

export default function FormTanstackCheckbox() {
  const form = useForm({
    defaultValues: {
      responses: true,
      tasks: [] as string[],
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
        <CardTitle>اعلان‌ها</CardTitle>
        <CardDescription>
          تنظیمات اعلان‌های خود را مدیریت کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form
          id="form-tanstack-checkbox"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup className="gap-3">
            <form.Field
              name="responses"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <div>
                    <FieldSet>
                      <FieldLegend variant="label">پاسخ‌ها</FieldLegend>
                      <FieldDescription>
                        برای درخواست‌هایی که زمان بیشتری می‌برند، مثل تحقیق یا
                        تولید تصویر، اعلان دریافت کنید.
                      </FieldDescription>
                      <FieldGroup data-slot="checkbox-group">
                        <Field
                          orientation="horizontal"
                          data-invalid={isInvalid}
                        >
                          <Checkbox
                            id="form-tanstack-checkbox-responses"
                            name={field.name}
                            checked={field.state.value}
                            onCheckedChange={(checked) =>
                              field.handleChange(checked === true)
                            }
                            disabled
                          />
                          <FieldLabel
                            htmlFor="form-tanstack-checkbox-responses"
                            className="font-normal"
                          >
                            اعلان Push
                          </FieldLabel>
                        </Field>
                      </FieldGroup>
                    </FieldSet>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </div>
                )
              }}
            />
            <FieldSeparator />
            <form.Field
              name="tasks"
              mode="array"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <FieldGroup className="gap-3">
                    <FieldSet data-invalid={isInvalid}>
                      <FieldLegend variant="label">وظایف</FieldLegend>
                      <FieldDescription>
                        برای به‌روزرسانی وظایفی که ایجاد کرده‌اید، اعلان دریافت
                        کنید.
                      </FieldDescription>
                      <FieldGroup data-slot="checkbox-group">
                        {tasks.map((task) => (
                          <Field
                            key={task.id}
                            orientation="horizontal"
                            data-invalid={isInvalid}
                          >
                            <Checkbox
                              id={`form-tanstack-checkbox-${task.id}`}
                              name={field.name}
                              aria-invalid={isInvalid}
                              checked={field.state.value.includes(task.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.pushValue(task.id)
                                } else {
                                  const index = field.state.value.indexOf(
                                    task.id
                                  )
                                  if (index > -1) {
                                    field.removeValue(index)
                                  }
                                }
                              }}
                            />
                            <FieldLabel
                              htmlFor={`form-tanstack-checkbox-${task.id}`}
                              className="font-normal"
                            >
                              {task.label}
                            </FieldLabel>
                          </Field>
                        ))}
                      </FieldGroup>
                    </FieldSet>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldGroup>
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
          <Button type="submit" form="form-tanstack-checkbox">
            ذخیره
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
