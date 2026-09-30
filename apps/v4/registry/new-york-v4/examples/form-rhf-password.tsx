"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckIcon } from "lucide-react"
import { Controller, useForm, useWatch } from "react-hook-form"
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
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"
import { Progress } from "@/registry/new-york-v4/ui/progress"

const passwordRequirements = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (val: string) => val.length >= 8,
  },
  {
    id: "lowercase",
    label: "One lowercase letter",
    test: (val: string) => /[a-z]/.test(val),
  },
  {
    id: "uppercase",
    label: "One uppercase letter",
    test: (val: string) => /[A-Z]/.test(val),
  },
  { id: "number", label: "One number", test: (val: string) => /\d/.test(val) },
  {
    id: "special",
    label: "One special character",
    test: (val: string) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
  },
]

const formSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine(
      (val) => /[a-z]/.test(val),
      "Password must contain at least one lowercase letter"
    )
    .refine(
      (val) => /[A-Z]/.test(val),
      "Password must contain at least one uppercase letter"
    )
    .refine(
      (val) => /\d/.test(val),
      "Password must contain at least one number"
    )
    .refine(
      (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
      "Password must contain at least one special character"
    ),
})

export default function FormRhfPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  })

  const password = useWatch({
    control: form.control,
    name: "password",
  })

  // Calculate password strength.
  const metRequirements = passwordRequirements.filter((req) =>
    req.test(password || "")
  )
  const strengthPercentage =
    (metRequirements.length / passwordRequirements.length) * 100

  // Determine strength level and color.
  const getStrengthColor = () => {
    if (strengthPercentage === 0) return "bg-neutral-200"
    if (strengthPercentage <= 40) return "bg-red-500"
    if (strengthPercentage <= 80) return "bg-yellow-500"
    return "bg-green-500"
  }

  const allRequirementsMet =
    metRequirements.length === passwordRequirements.length

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md gap-4 py-4" dir="rtl">
      <CardHeader className="border-b px-4 pb-3">
        <CardTitle>ایجاد رمز عبور</CardTitle>
        <CardDescription>
          یک رمز عبور قوی برای امنیت حساب خود انتخاب کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form id="form-rhf-password" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="gap-4">
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-password-input">
                    رمز عبور
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="form-rhf-password-input"
                      type="password"
                      placeholder="رمز عبور خود را وارد کنید"
                      aria-invalid={fieldState.invalid}
                      autoComplete="new-password"
                    />
                    <InputGroupAddon align="inline-end">
                      <CheckIcon
                        className={
                          allRequirementsMet
                            ? "text-green-500"
                            : "text-muted-foreground"
                        }
                      />
                    </InputGroupAddon>
                  </InputGroup>

                  {/* Password strength meter. */}
                  <div className="space-y-2">
                    <Progress
                      value={strengthPercentage}
                      className={getStrengthColor()}
                    />

                    {/* Requirements list. */}
                    <div className="space-y-1.5">
                      {passwordRequirements.map((requirement) => {
                        const isMet = requirement.test(password || "")
                        return (
                          <div
                            key={requirement.id}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckIcon
                              className={
                                isMet
                                  ? "size-4 text-green-500"
                                  : "size-4 text-muted-foreground"
                              }
                            />
                            <span
                              className={
                                isMet
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              }
                            >
                              {requirement.label}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="border-t px-4 pt-3">
        <Field orientation="horizontal" className="justify-end">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            بازنشانی
          </Button>
          <Button type="submit" form="form-rhf-password">
            ایجاد رمز عبور
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
