/* eslint-disable react/no-children-prop */
"use client"

import * as React from "react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardFooter } from "@/registry/new-york-v4/ui/card"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/registry/new-york-v4/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Switch } from "@/registry/new-york-v4/ui/switch"

const addons = [
  {
    id: "analytics",
    title: "تحلیل",
    description: "تحلیل و گزارش‌گیری پیشرفته",
  },
  {
    id: "backup",
    title: "پشتیبان‌گیری",
    description: "پشتیبان‌گیری خودکار روزانه",
  },
  {
    id: "support",
    title: "پشتیبانی ویژه",
    description: "پشتیبانی ویژه ۲۴ ساعته",
  },
] as const

const formSchema = z.object({
  plan: z
    .string({
      required_error: "لطفاً یک پلن اشتراک انتخاب کنید.",
    })
    .min(1, "لطفاً یک پلن اشتراک انتخاب کنید.")
    .refine((value) => value === "basic" || value === "pro", {
      message: "انتخاب پلن نامعتبر است. پایه یا حرفه‌ای را انتخاب کنید.",
    }),
  billingPeriod: z
    .string({
      required_error: "لطفاً دوره پرداخت را انتخاب کنید.",
    })
    .min(1, "لطفاً دوره پرداخت را انتخاب کنید."),
  addons: z
    .array(z.string())
    .min(1, "حداقل یک افزونه را انتخاب کنید.")
    .max(3, "حداکثر ۳ افزونه می‌توانید انتخاب کنید.")
    .refine(
      (value) => value.every((addon) => addons.some((a) => a.id === addon)),
      {
        message: "یک افزونهٔ نامعتبر انتخاب شده است.",
      }
    ),
  emailNotifications: z.boolean(),
})

export default function FormTanstackComplex() {
  const form = useForm({
    defaultValues: {
      plan: "basic",
      billingPeriod: "monthly",
      addons: [] as string[],
      emailNotifications: false,
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
    <Card className="w-full max-w-sm gap-3 py-3" dir="rtl">
      <CardContent className="px-4">
        <form
          id="subscription-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup className="gap-3">
            <form.Field
              name="plan"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <FieldSet>
                    <FieldLegend>پلن اشتراک</FieldLegend>
                    <FieldDescription>
                      پلن اشتراک خود را انتخاب کنید.
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                      dir="rtl"
                    >
                      <FieldLabel htmlFor="basic">
                        <Field
                          orientation="horizontal"
                          data-invalid={isInvalid}
                        >
                          <FieldContent>
                            <FieldTitle>پایه</FieldTitle>
                            <FieldDescription>
                              برای افراد و تیم‌های کوچک
                            </FieldDescription>
                          </FieldContent>
                          <RadioGroupItem
                            value="basic"
                            id="basic"
                            aria-invalid={isInvalid}
                          />
                        </Field>
                      </FieldLabel>
                      <FieldLabel htmlFor="pro">
                        <Field
                          orientation="horizontal"
                          data-invalid={isInvalid}
                        >
                          <FieldContent>
                            <FieldTitle>حرفه‌ای</FieldTitle>
                            <FieldDescription>
                              برای کسب‌وکارهایی با نیاز بیشتر
                            </FieldDescription>
                          </FieldContent>
                          <RadioGroupItem
                            value="pro"
                            id="pro"
                            aria-invalid={isInvalid}
                          />
                        </Field>
                      </FieldLabel>
                    </RadioGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldSet>
                )
              }}
            />
            <FieldSeparator />
            <form.Field
              name="billingPeriod"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>دوره پرداخت</FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                      aria-invalid={isInvalid}
                    >
                      <SelectTrigger id={field.name} dir="rtl">
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent dir="rtl">
                        <SelectItem value="monthly">ماهانه</SelectItem>
                        <SelectItem value="yearly">سالانه</SelectItem>
                      </SelectContent>
                    </Select>
                    <FieldDescription>
                      دوره پرداخت را انتخاب کنید.
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <FieldSeparator />
            <form.Field
              name="addons"
              mode="array"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <FieldSet>
                    <FieldLegend>افزونه‌ها</FieldLegend>
                    <FieldDescription>
                      قابلیت‌های بیشتری را که می‌خواهید استفاده کنید انتخاب
                      کنید.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {addons.map((addon) => (
                        <Field
                          key={addon.id}
                          orientation="horizontal"
                          data-invalid={isInvalid}
                        >
                          <Checkbox
                            id={addon.id}
                            name={field.name}
                            aria-invalid={isInvalid}
                            checked={field.state.value.includes(addon.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                field.pushValue(addon.id)
                              } else {
                                const index = field.state.value.indexOf(
                                  addon.id
                                )
                                if (index > -1) {
                                  field.removeValue(index)
                                }
                              }
                            }}
                          />
                          <FieldContent>
                            <FieldLabel htmlFor={addon.id}>
                              {addon.title}
                            </FieldLabel>
                            <FieldDescription>
                              {addon.description}
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      ))}
                    </FieldGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldSet>
                )
              }}
            />
            <FieldSeparator />
            <form.Field
              name="emailNotifications"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field orientation="horizontal" data-invalid={isInvalid}>
                    <FieldContent>
                      <FieldLabel htmlFor={field.name}>
                        اعلان ایمیل
                      </FieldLabel>
                      <FieldDescription>
                        دریافت ایمیل‌های مربوط به اشتراک
                      </FieldDescription>
                    </FieldContent>
                    <Switch
                      id={field.name}
                      name={field.name}
                      checked={field.state.value}
                      onCheckedChange={field.handleChange}
                      aria-invalid={isInvalid}
                      dir="ltr"
                    />
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
          <Button type="submit" form="subscription-form">
            ذخیره تنظیمات
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
