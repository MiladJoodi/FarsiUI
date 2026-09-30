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
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/new-york-v4/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group"

const plans = [
  {
    id: "starter",
    title: "استارتر (۱۰۰ هزار توکن در ماه)",
    description: "برای استفادهٔ روزمره با امکانات پایه.",
  },
  {
    id: "pro",
    title: "حرفه‌ای (۱ میلیون توکن در ماه)",
    description: "برای استفادهٔ پیشرفته از هوش مصنوعی با امکانات بیشتر.",
  },
  {
    id: "enterprise",
    title: "سازمانی (توکن نامحدود)",
    description: "برای تیم‌های بزرگ و استفادهٔ سنگین.",
  },
] as const

const formSchema = z.object({
  plan: z.string().min(1, "برای ادامه باید یک پلن اشتراک انتخاب کنید."),
})

export default function FormTanstackRadioGroup() {
  const form = useForm({
    defaultValues: {
      plan: "",
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
        <CardTitle>پلن اشتراک</CardTitle>
        <CardDescription>
          قیمت و امکانات هر پلن را ببینید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form
          id="form-tanstack-radiogroup"
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
                    <FieldLegend>پلن</FieldLegend>
                    <FieldDescription>
                      هر زمان بخواهید می‌توانید پلن خود را ارتقا یا کاهش دهید.
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                      dir="rtl"
                    >
                      {plans.map((plan) => (
                        <FieldLabel
                          key={plan.id}
                          htmlFor={`form-tanstack-radiogroup-${plan.id}`}
                        >
                          <Field
                            orientation="horizontal"
                            data-invalid={isInvalid}
                          >
                            <FieldContent>
                              <FieldTitle>{plan.title}</FieldTitle>
                              <FieldDescription>
                                {plan.description}
                              </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem
                              value={plan.id}
                              id={`form-tanstack-radiogroup-${plan.id}`}
                              aria-invalid={isInvalid}
                            />
                          </Field>
                        </FieldLabel>
                      ))}
                    </RadioGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldSet>
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
          <Button type="submit" form="form-tanstack-radiogroup">
            ذخیره
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
