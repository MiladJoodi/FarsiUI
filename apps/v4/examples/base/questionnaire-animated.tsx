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
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/bases/base/ui/questionnaire"

const items = [
  { name: "task", required: true },
  { name: "review", required: true },
  { name: "delivery", required: true },
] as const

const itemClassName =
  "data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-2 data-active:duration-300 motion-reduce:animate-none"

const taskLabels: Record<string, string> = {
  implement: "پیاده‌سازی تغییر درخواستی",
  debug: "اشکال‌زدایی رفتار فعلی",
  review: "بررسی پیاده‌سازی",
}

const reviewLabels: Record<string, string> = {
  targeted: "بررسی‌های هدفمند",
  complete: "مجموعهٔ کامل تست",
  manual: "تست‌ها و کنترل کیفیت دستی",
}

const deliveryLabels: Record<string, string> = {
  summary: "خلاصهٔ کوتاه",
  diff: "خلاصه و فایل‌های تغییر یافته",
  handoff: "تحویل بررسی جزئی",
}

export default function QuestionnaireAnimated() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("گردش‌کار عامل ذخیره شد", {
      description: `وظیفه: ${answerLabel(formData.get("task"), taskLabels)} · بررسی: ${answerLabel(formData.get("review"), reviewLabels)} · تحویل: ${answerLabel(formData.get("delivery"), deliveryLabels)}`,
    })
  }

  return (
    <div dir="rtl" className="mx-auto w-full max-w-md">
      <Questionnaire
        className="w-full"
        defaultItem="task"
        items={items}
        onSubmit={handleSubmit}
      >
        <QuestionnaireProgress />

        <QuestionnaireItem className={itemClassName} name="task" required>
          <QuestionnaireTitle>عامل چه کاری انجام دهد؟</QuestionnaireTitle>
          <QuestionnaireDescription>
            وظیفهٔ این اجرا را انتخاب کنید.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="implement">
              پیاده‌سازی تغییر درخواستی
            </QuestionnaireChoice>
            <QuestionnaireChoice value="debug">
              اشکال‌زدایی رفتار فعلی
            </QuestionnaireChoice>
            <QuestionnaireChoice value="review">
              بررسی پیاده‌سازی
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem className={itemClassName} name="review" required>
          <QuestionnaireTitle>
            کار چگونه بررسی شود؟
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            عمق تأیید را انتخاب کنید.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="targeted">
              بررسی‌های هدفمند
            </QuestionnaireChoice>
            <QuestionnaireChoice value="complete">
              مجموعهٔ کامل تست
            </QuestionnaireChoice>
            <QuestionnaireChoice value="manual">
              تست‌ها و کنترل کیفیت دستی
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem className={itemClassName} name="delivery" required>
          <QuestionnaireTitle>
            نتیجه چگونه تحویل داده شود؟
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            قالب نهایی تحویل را انتخاب کنید.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="summary">
              خلاصهٔ کوتاه
            </QuestionnaireChoice>
            <QuestionnaireChoice value="diff">
              خلاصه و فایل‌های تغییر یافته
            </QuestionnaireChoice>
            <QuestionnaireChoice value="handoff">
              تحویل بررسی جزئی
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnairePrevious>قبلی</QuestionnairePrevious>
          <QuestionnaireNext>بعدی</QuestionnaireNext>
          <QuestionnaireSubmit>ذخیرهٔ گردش‌کار</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
