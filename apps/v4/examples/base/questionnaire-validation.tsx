"use client"

import * as React from "react"
import { toast } from "sonner"
import { z } from "zod"

import { answerLabel } from "@/examples/base/questionnaire-answer-label"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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

const detailLabels: Record<string, string> = {
  summary: "خلاصهٔ مختصر",
  complete: "پاسخ کامل",
}

const audienceLabels: Record<string, string> = {
  team: "تیم من",
  public: "مخاطب عمومی",
}

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

function toPersianDigits(value: number) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]!)
}

function ValidationProgress() {
  return (
    <QuestionnaireProgress
      className="min-w-0"
      render={(props, state) => (
        <div
          {...props}
          aria-valuetext={`سؤال ${toPersianDigits(state.current)} از ${toPersianDigits(state.total)}`}
        >
          {`${toPersianDigits(state.current)} / ${toPersianDigits(state.total)}`}
        </div>
      )}
    />
  )
}

export function QuestionnaireValidation() {
  const detailTitleId = React.useId()
  const audienceTitleId = React.useId()
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
        description: `جزئیات: ${answerLabel(result.data.detail, detailLabels)} · مخاطب: ${answerLabel(result.data.audience, audienceLabels)}`,
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
    <div dir="rtl" className="mx-auto w-full max-w-md">
      <Questionnaire
        className="w-full"
        item={item}
        items={items}
        onItemChange={setItem}
        onSubmit={handleSubmit}
      >
        <Card className="w-full">
          <QuestionnaireItem
            aria-labelledby={detailTitleId}
            invalid={Boolean(errors.detail)}
            name="detail"
            required
          >
            <CardHeader>
              <QuestionnaireTitle
                id={detailTitleId}
                render={<CardTitle />}
              >
                پاسخ باید چقدر جزئیات داشته باشد؟
              </QuestionnaireTitle>
              <QuestionnaireDescription render={<CardDescription />}>
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
            aria-labelledby={audienceTitleId}
            invalid={Boolean(errors.audience)}
            name="audience"
            required
          >
            <CardHeader>
              <QuestionnaireTitle
                id={audienceTitleId}
                render={<CardTitle />}
              >
                چه کسی پاسخ را می‌خواند؟
              </QuestionnaireTitle>
              <QuestionnaireDescription render={<CardDescription />}>
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
