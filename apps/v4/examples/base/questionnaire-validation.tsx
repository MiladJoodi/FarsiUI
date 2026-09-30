"use client"

import * as React from "react"
import { toast } from "sonner"
import { z } from "zod"

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/styles/base-nova/ui/card"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/styles/base-nova/ui/questionnaire"

const items = [
  { name: "detail", required: true },
  { name: "audience", required: true },
] as const

const questionnaireSchema = z
  .object({
    detail: z.enum(["summary", "complete"]),
    audience: z.enum(["team", "public"]),
  })
  .superRefine((answers, context) => {
    if (answers.audience === "public" && answers.detail === "summary") {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "پاسخ‌های عمومی به زمینهٔ کافی نیاز دارند. پاسخ کامل را انتخاب کنید.",
        path: ["detail"],
      })
    }
  })

type QuestionnaireItemName = keyof z.infer<typeof questionnaireSchema>
type QuestionnaireErrors = Partial<Record<QuestionnaireItemName, string>>

function ValidationProgress() {
  return (
    <QuestionnaireProgress
      className="min-w-0"
      render={(props, state) => (
        <div {...props}>
          {state.current} / {state.total}
        </div>
      )}
    />
  )
}

export function QuestionnaireValidation() {
  const [item, setItem] = React.useState("detail")
  const [errors, setErrors] = React.useState<QuestionnaireErrors>({})

  function clearError(name: QuestionnaireItemName) {
    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const result = questionnaireSchema.safeParse(
      Object.fromEntries(new FormData(event.currentTarget))
    )

    if (result.success) {
      setErrors({})
      toast("پاسخ عامل پیکربندی شد", {
        description: `جزئیات: ${result.data.detail} · مخاطب: ${result.data.audience}`,
      })
      return
    }

    const nextErrors: QuestionnaireErrors = {}

    for (const issue of result.error.issues) {
      const name = issue.path[0]

      if ((name === "detail" || name === "audience") && !nextErrors[name]) {
        nextErrors[name] = issue.message
      }
    }

    const firstInvalidItem = result.error.issues[0]?.path[0]

    setErrors(nextErrors)

    if (firstInvalidItem === "detail" || firstInvalidItem === "audience") {
      setItem(firstInvalidItem)
    }
  }

  return (
    <div dir="rtl">
      <Questionnaire
        className="mx-auto max-w-md"
        item={item}
        items={items}
        onItemChange={setItem}
        onSubmit={handleSubmit}
      >
        <Card className="w-full">
          <QuestionnaireItem
            invalid={Boolean(errors.detail)}
            name="detail"
            required
          >
            <CardHeader>
              <QuestionnaireTitle>
                پاسخ باید چقدر جزئیات داشته باشد؟
              </QuestionnaireTitle>
              <QuestionnaireDescription>
                عمق پاسخ را انتخاب کنید.
              </QuestionnaireDescription>
              <CardAction>
                <ValidationProgress />
              </CardAction>
            </CardHeader>
            <CardContent>
              <QuestionnaireChoices>
                <QuestionnaireChoice
                  value="summary"
                  onChange={() => clearError("detail")}
                >
                  خلاصهٔ مختصر
                </QuestionnaireChoice>
                <QuestionnaireChoice
                  value="complete"
                  onChange={() => clearError("detail")}
                >
                  پاسخ کامل
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError>{errors.detail}</QuestionnaireError>
            </CardContent>
          </QuestionnaireItem>

          <QuestionnaireItem
            invalid={Boolean(errors.audience)}
            name="audience"
            required
          >
            <CardHeader>
              <QuestionnaireTitle>چه کسی پاسخ را می‌خواند؟</QuestionnaireTitle>
              <QuestionnaireDescription>
                پاسخ‌های عمومی به زمینهٔ کامل نیاز دارند.
              </QuestionnaireDescription>
              <CardAction>
                <ValidationProgress />
              </CardAction>
            </CardHeader>
            <CardContent>
              <QuestionnaireChoices>
                <QuestionnaireChoice
                  value="team"
                  onChange={() => clearError("audience")}
                >
                  تیم من
                </QuestionnaireChoice>
                <QuestionnaireChoice
                  value="public"
                  onChange={() => clearError("audience")}
                >
                  مخاطب عمومی
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError>{errors.audience}</QuestionnaireError>
            </CardContent>
          </QuestionnaireItem>

          <CardFooter>
            <QuestionnaireActions>
              <QuestionnairePrevious>قبلی</QuestionnairePrevious>
              <QuestionnaireNext>بعدی</QuestionnaireNext>
              <QuestionnaireSubmit>اعتبارسنجی پاسخ‌ها</QuestionnaireSubmit>
            </QuestionnaireActions>
          </CardFooter>
        </Card>
      </Questionnaire>
    </div>
  )
}
