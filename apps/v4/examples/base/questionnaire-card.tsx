"use client"

import * as React from "react"
import { toast } from "sonner"

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
  {
    choices: [{ value: "fix" }, { value: "refactor" }, { value: "docs" }],
    name: "task",
    required: true,
  },
  {
    choices: [{ value: "summary" }, { value: "files" }, { value: "review" }],
    name: "output",
    required: true,
  },
] as const

export function QuestionnaireCard() {
  const taskTitleId = React.useId()
  const outputTitleId = React.useId()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("وظیفهٔ عامل ساخته شد", {
      description: `وظیفه: ${formData.get("task") ?? "هیچ"} · تحویل: ${formData.get("output") ?? "هیچ"}`,
    })
  }

  return (
    <div dir="rtl" className="mx-auto w-full max-w-md">
      <Questionnaire
        className="w-full"
        defaultItem="task"
        items={items}
        shortcuts="numbers"
        onSubmit={handleSubmit}
      >
        <Card className="w-full">
          <QuestionnaireItem aria-labelledby={taskTitleId} name="task" required>
            <CardHeader>
              <QuestionnaireTitle id={taskTitleId} render={<CardTitle className="text-balance" />}>
                عامل روی چه چیزی کار کند؟
              </QuestionnaireTitle>
              <QuestionnaireDescription render={<CardDescription className="text-pretty" />}>
                وظیفه‌ای را انتخاب کنید که باید بعداً انجام شود.
              </QuestionnaireDescription>
              <CardAction>
                <QuestionnaireProgress />
              </CardAction>
            </CardHeader>
            <CardContent>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="fix">
                  رفع تست‌های ناموفق
                </QuestionnaireChoice>
                <QuestionnaireChoice value="refactor">
                  بازآرایی لایهٔ داده
                </QuestionnaireChoice>
                <QuestionnaireChoice value="docs">
                  به‌روزرسانی راهنمای یکپارچه‌سازی
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </CardContent>
          </QuestionnaireItem>

          <QuestionnaireItem
            aria-labelledby={outputTitleId}
            name="output"
            required
          >
            <CardHeader>
              <QuestionnaireTitle id={outputTitleId} render={<CardTitle />}>
                تحویل نهایی چه چیزهایی داشته باشد؟
              </QuestionnaireTitle>
              <QuestionnaireDescription render={<CardDescription />}>
                سطح جزئیات لازم برای بررسی را انتخاب کنید.
              </QuestionnaireDescription>
              <CardAction>
                <QuestionnaireProgress />
              </CardAction>
            </CardHeader>
            <CardContent>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="summary">
                  فقط خلاصه
                </QuestionnaireChoice>
                <QuestionnaireChoice value="files">
                  خلاصه و فایل‌های تغییر یافته
                </QuestionnaireChoice>
                <QuestionnaireChoice value="review">
                  تحویل کامل بررسی
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </CardContent>
          </QuestionnaireItem>

          <CardFooter>
            <QuestionnaireActions className="w-full">
              <QuestionnairePrevious>قبلی</QuestionnairePrevious>
              <QuestionnaireNext>بعدی</QuestionnaireNext>
              <QuestionnaireSubmit>ایجاد وظیفه</QuestionnaireSubmit>
            </QuestionnaireActions>
          </CardFooter>
        </Card>
      </Questionnaire>
    </div>
  )
}
