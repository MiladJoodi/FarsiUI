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

const FormSchema = v.object({
  plan: v.pipe(
    v.string(),
    v.minLength(1, "لطفاً یک پلن اشتراک انتخاب کنید."),
    v.check(
      (value) => value === "basic" || value === "pro",
      "انتخاب پلن نامعتبر است. پایه یا حرفه‌ای را انتخاب کنید."
    )
  ),
  billingPeriod: v.pipe(
    v.string(),
    v.minLength(1, "لطفاً دوره پرداخت را انتخاب کنید.")
  ),
  addons: v.pipe(
    v.array(v.string()),
    v.minLength(1, "حداقل یک افزونه را انتخاب کنید."),
    v.maxLength(3, "حداکثر ۳ افزونه می‌توانید انتخاب کنید."),
    v.check(
      (value) => value.every((addon) => addons.some((a) => a.id === addon)),
      "یک افزونهٔ نامعتبر انتخاب شده است."
    )
  ),
  emailNotifications: v.boolean(),
})

export default function FormFormischComplex() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      plan: "basic",
      billingPeriod: "",
      addons: [],
      emailNotifications: false,
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
    <Card className="w-full max-w-sm gap-3 py-3" dir="rtl">
      <CardHeader className="border-b px-4 pb-3">
        <CardTitle>تقریباً تمام شد!</CardTitle>
        <CardDescription>
          پلن اشتراک و دوره پرداخت خود را انتخاب کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <Form of={form} id="form-formisch-complex" onSubmit={handleSubmit}>
          <FieldGroup className="gap-3">
            <FormischField of={form} path={["plan"]}>
              {(field) => (
                <FieldSet data-invalid={field.errors !== null}>
                  <FieldLegend variant="label">پلن اشتراک</FieldLegend>
                  <FieldDescription>
                    پلن اشتراک خود را انتخاب کنید.
                  </FieldDescription>
                  <RadioGroup
                    value={field.input ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                    aria-invalid={field.errors !== null}
                    dir="rtl"
                  >
                    <FieldLabel htmlFor="form-formisch-complex-basic">
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldTitle>پایه</FieldTitle>
                          <FieldDescription>
                            برای افراد و تیم‌های کوچک
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem
                          value="basic"
                          id="form-formisch-complex-basic"
                        />
                      </Field>
                    </FieldLabel>
                    <FieldLabel htmlFor="form-formisch-complex-pro">
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldTitle>حرفه‌ای</FieldTitle>
                          <FieldDescription>
                            برای کسب‌وکارهایی با نیاز بیشتر
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem
                          value="pro"
                          id="form-formisch-complex-pro"
                        />
                      </Field>
                    </FieldLabel>
                  </RadioGroup>
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </FieldSet>
              )}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["billingPeriod"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="form-formisch-complex-billingPeriod">
                    دوره پرداخت
                  </FieldLabel>
                  <Select
                    value={field.input ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger
                      id="form-formisch-complex-billingPeriod"
                      aria-invalid={field.errors !== null}
                      dir="rtl"
                    >
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
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </Field>
              )}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["addons"]}>
              {(field) => {
                const current = field.input ?? []
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
                          data-invalid={field.errors !== null}
                        >
                          <Checkbox
                            id={`form-formisch-complex-${addon.id}`}
                            aria-invalid={field.errors !== null}
                            checked={current.includes(addon.id)}
                            onCheckedChange={(checked) => {
                              field.onChange(
                                checked === true
                                  ? [...current, addon.id]
                                  : current.filter(
                                      (value) => value !== addon.id
                                    )
                              )
                            }}
                          />
                          <FieldContent>
                            <FieldLabel
                              htmlFor={`form-formisch-complex-${addon.id}`}
                            >
                              {addon.title}
                            </FieldLabel>
                            <FieldDescription>
                              {addon.description}
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      ))}
                    </FieldGroup>
                    {field.errors && (
                      <FieldError
                        errors={field.errors.map((message) => ({ message }))}
                      />
                    )}
                  </FieldSet>
                )
              }}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["emailNotifications"]}>
              {(field) => (
                <Field
                  orientation="horizontal"
                  data-invalid={field.errors !== null}
                >
                  <FieldContent>
                    <FieldLabel htmlFor="form-formisch-complex-emailNotifications">
                      اعلان ایمیل
                    </FieldLabel>
                    <FieldDescription>
                      دریافت ایمیل‌های مربوط به اشتراک
                    </FieldDescription>
                  </FieldContent>
                  <Switch
                    id="form-formisch-complex-emailNotifications"
                    checked={field.input ?? false}
                    onCheckedChange={(checked) => field.onChange(checked)}
                    aria-invalid={field.errors !== null}
                    dir="ltr"
                  />
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
      <CardFooter className="border-t px-4 pt-3">
        <Field orientation="horizontal" className="justify-end">
          <Button type="submit" form="form-formisch-complex">
            ذخیره تنظیمات
          </Button>
          <Button type="button" variant="outline" onClick={() => reset(form)}>
            بازنشانی
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
