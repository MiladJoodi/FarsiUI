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
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"

const spokenLanguages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Italian", value: "it" },
  { label: "Chinese", value: "zh" },
  { label: "Japanese", value: "ja" },
] as const

const FormSchema = v.object({
  language: v.pipe(
    v.string(),
    v.minLength(1, "لطفاً زبان گفتاری خود را انتخاب کنید."),
    v.check(
      (value) => value !== "auto",
      "تشخیص خودکار مجاز نیست. لطفاً یک زبان مشخص انتخاب کنید."
    )
  ),
})

export default function FormFormischSelect() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      language: "",
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
    <Card className="w-full sm:max-w-lg gap-3 py-3" dir="rtl">
      <CardHeader className="px-4 pb-0">
        <CardTitle>تنظیمات زبان</CardTitle>
        <CardDescription>
          زبان گفتاری موردنظر خود را انتخاب کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <Form of={form} id="form-formisch-select" onSubmit={handleSubmit}>
          <FieldGroup className="gap-3">
            <FormischField of={form} path={["language"]}>
              {(field) => (
                <Field
                  orientation="responsive"
                  data-invalid={field.errors !== null}
                >
                  <FieldContent>
                    <FieldLabel htmlFor="form-formisch-select-language">
                      زبان گفتاری
                    </FieldLabel>
                    <FieldDescription>
                      برای دریافت نتیجهٔ بهتر، زبانی را انتخاب کنید که به آن
                      صحبت می‌کنید.
                    </FieldDescription>
                    {field.errors && (
                      <FieldError
                        errors={field.errors.map((message) => ({ message }))}
                      />
                    )}
                  </FieldContent>
                  <Select
                    value={field.input ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger
                      id="form-formisch-select-language"
                      aria-invalid={field.errors !== null}
                      className="min-w-[120px]"
                      dir="rtl"
                    >
                      <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned" dir="rtl">
                      <SelectItem value="auto">خودکار</SelectItem>
                      <SelectSeparator />
                      {spokenLanguages.map((language) => (
                        <SelectItem key={language.value} value={language.value}>
                          {language.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
          <Button type="submit" form="form-formisch-select">
            ذخیره
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
