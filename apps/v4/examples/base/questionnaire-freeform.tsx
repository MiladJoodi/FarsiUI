"use client"

import * as React from "react"
import { toast } from "sonner"

import { answerLabel } from "@/examples/base/questionnaire-answer-label"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/bases/base/ui/questionnaire"

const items = [
  {
    choices: [
      { value: "incremental" },
      { value: "module" },
      { value: "rewrite" },
    ],
    name: "approach",
    required: true,
  },
] as const

const approachLabels: Record<string, string> = {
  incremental: "کوچک‌ترین تغییر امن را اعمال کند",
  module: "هر بار یک ماژول را بازآرایی کند",
  rewrite: "پیاده‌سازی را به‌طور کامل جایگزین کند",
}

export default function QuestionnaireFreeform() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const approach = new FormData(event.currentTarget).get("approach")

    toast("رویکرد انتخاب شد", {
      description: `رویکرد: ${answerLabel(approach, approachLabels)}`,
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
        <QuestionnaireItem name="approach" required>
          <QuestionnaireTitle>
            عامل چگونه باید این بازآرایی را انجام دهد؟
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            یک استراتژی انتخاب کنید یا دستورالعمل دقیق‌تری بنویسید.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="incremental">
              کوچک‌ترین تغییر امن را اعمال کند
            </QuestionnaireChoice>
            <QuestionnaireChoice value="module">
              هر بار یک ماژول را بازآرایی کند
            </QuestionnaireChoice>
            <QuestionnaireChoice value="rewrite">
              پیاده‌سازی را به‌طور کامل جایگزین کند
            </QuestionnaireChoice>
            <QuestionnaireInput
              aria-label="رویکرد بازآرایی دیگر"
              placeholder="رویکرد دیگری توصیف کنید…"
            />
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnaireSubmit>استفاده از این رویکرد</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
