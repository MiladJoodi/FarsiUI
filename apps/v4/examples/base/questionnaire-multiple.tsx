"use client"

import * as React from "react"
import { toast } from "sonner"

import { answerLabels } from "@/examples/base/questionnaire-answer-label"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/bases/base/ui/questionnaire"

const items = [
  {
    choices: [
      { value: "source" },
      { value: "tests" },
      { value: "docs" },
      { value: "history" },
    ],
    name: "context",
    required: true,
  },
] as const

const contextLabels: Record<string, string> = {
  source: "فایل‌های منبع مرتبط",
  tests: "تست‌های موجود",
  docs: "مستندات معماری",
  history: "تاریخچهٔ اخیر کامیت‌ها",
}

export default function QuestionnaireMultiple() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const context = new FormData(event.currentTarget).getAll("context")

    toast("زمینه انتخاب شد", {
      description: `زمینه: ${answerLabels(context, contextLabels)}`,
    })
  }

  return (
    <div dir="rtl" className="mx-auto w-full max-w-md">
      <Questionnaire
        className="w-full"
        items={items}
        shortcuts="letters"
        onSubmit={handleSubmit}
      >
        <QuestionnaireItem name="context" multiple required>
          <QuestionnaireTitle>
            عامل باید کدام زمینه‌ها را بررسی کند؟
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            هر منبعی که ممکن است روی پیاده‌سازی اثر بگذارد را انتخاب کنید.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="source">
              فایل‌های منبع مرتبط
            </QuestionnaireChoice>
            <QuestionnaireChoice value="tests">
              تست‌های موجود
            </QuestionnaireChoice>
            <QuestionnaireChoice value="docs">
              مستندات معماری
            </QuestionnaireChoice>
            <QuestionnaireChoice value="history">
              تاریخچهٔ اخیر کامیت‌ها
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnaireSubmit>اشتراک زمینه</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
