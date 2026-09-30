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
import { Switch } from "@/registry/new-york-v4/ui/switch"

const FormSchema = v.object({
  twoFactor: v.pipe(
    v.boolean(),
    v.check(
      (value) => value === true,
      "It is highly recommended to enable two-factor authentication."
    )
  ),
})

export default function FormFormischSwitch() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      twoFactor: false,
    },
  })

  const handleSubmit: SubmitHandler<typeof FormSchema> = (output) => {
    toast("مقادیر زیر ارسال شد:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
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
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>
          Manage your account security preferences.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <Form of={form} id="form-formisch-switch" onSubmit={handleSubmit}>
          <FieldGroup className="gap-3">
            <FormischField of={form} path={["twoFactor"]}>
              {(field) => (
                <Field
                  orientation="horizontal"
                  data-invalid={field.errors !== null}
                >
                  <FieldContent>
                    <FieldLabel htmlFor="form-formisch-switch-twoFactor">
                      Multi-factor authentication
                    </FieldLabel>
                    <FieldDescription>
                      Enable multi-factor authentication to secure your account.
                    </FieldDescription>
                    {field.errors && (
                      <FieldError
                        errors={field.errors.map((message) => ({ message }))}
                      />
                    )}
                  </FieldContent>
                  <Switch
                    id="form-formisch-switch-twoFactor"
                    checked={field.input ?? false}
                    onCheckedChange={(checked) => field.onChange(checked)}
                    aria-invalid={field.errors !== null}
                  />
                </Field>
              )}
            </FormischField>
          </FieldGroup>
        </Form>
      </CardContent>
      <CardFooter className="px-4">
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => reset(form)}>
            بازنشانی
          </Button>
          <Button type="submit" form="form-formisch-switch">ذخیره</Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
