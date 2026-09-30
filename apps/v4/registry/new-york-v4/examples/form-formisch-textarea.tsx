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
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

const FormSchema = v.object({
  about: v.pipe(
    v.string(),
    v.minLength(10, "حداقل ۱۰ کاراکتر وارد کنید."),
    v.maxLength(200, "حداکثر ۲۰۰ کاراکتر مجاز است.")
  ),
})

export default function FormFormischTextarea() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      about: "",
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
        <CardTitle>شخصی‌سازی</CardTitle>
        <CardDescription>
          با وارد کردن اطلاعات بیشتر دربارهٔ خودتان، تجربهٔ کاربری را شخصی‌سازی
          کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <Form of={form} id="form-formisch-textarea" onSubmit={handleSubmit}>
          <FieldGroup className="gap-3">
            <FormischField of={form} path={["about"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="form-formisch-textarea-about">
                    دربارهٔ شما
                  </FieldLabel>
                  <Textarea
                    {...field.props}
                    id="form-formisch-textarea-about"
                    value={field.input ?? ""}
                    aria-invalid={field.errors !== null}
                    placeholder="من مهندس نرم‌افزار هستم..."
                    className="min-h-16"
                  />
                  <FieldDescription>
                    اطلاعات بیشتری دربارهٔ خودتان بنویسید. از این اطلاعات برای
                    شخصی‌سازی تجربهٔ شما استفاده خواهد شد.
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
          <Button type="submit" form="form-formisch-textarea">
            ذخیره
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
