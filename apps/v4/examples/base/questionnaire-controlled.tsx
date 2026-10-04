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
  { name: "scope", required: true },
  { name: "checks", required: true },
  { name: "output", required: true },
] as const

const itemLabels: Record<string, string> = {
  scope: "محدودهٔ تغییر",
  checks: "تأیید",
  output: "خروجی نهایی",
}

const scopeLabels: Record<string, string> = {
  component: "فقط کامپوننت هدف",
  tests: "کامپوننت و تست‌های مرتبط",
  feature: "کل محدودهٔ ویژگی",
}

const checksLabels: Record<string, string> = {
  targeted: "تست‌های هدفمند",
  package: "تست‌های پکیج و بررسی نوع",
  full: "راستی‌آزمایی کامل فضای کاری",
}

const outputLabels: Record<string, string> = {
  summary: "خلاصهٔ کوتاه",
  diff: "خلاصه با فایل‌های تغییر یافته",
  handoff: "تحویل جزئیات پیاده‌سازی",
}

export default function QuestionnaireControlled() {
  const [item, setItem] = React.useState("scope")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("گردش‌کار عامل پیکربندی شد", {
      description: `محدوده: ${answerLabel(formData.get("scope"), scopeLabels)} · تأیید: ${answerLabel(formData.get("checks"), checksLabels)} · خروجی: ${answerLabel(formData.get("output"), outputLabels)}`,
    })
  }

  return (
    <div dir="rtl" className="relative mx-auto flex w-full max-w-md flex-col gap-3">
      <p className="text-sm text-muted-foreground" role="status">
        نقطهٔ بررسی فعلی: {itemLabels[item]}
      </p>

      <Questionnaire
        item={item}
        items={items}
        onItemChange={setItem}
        onSubmit={handleSubmit}
      >
        <QuestionnaireProgress />

        <QuestionnaireItem name="scope" required>
          <QuestionnaireTitle>عامل مجاز به تغییر چه چیزی است؟</QuestionnaireTitle>
          <QuestionnaireDescription>
            میزبان نقطهٔ بررسی فعال را نگه می‌دارد و Questionnaire ناوبری می‌کند.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="component">
              فقط کامپوننت هدف
            </QuestionnaireChoice>
            <QuestionnaireChoice value="tests">
              کامپوننت و تست‌های مرتبط
            </QuestionnaireChoice>
            <QuestionnaireChoice value="feature">
              کل محدودهٔ ویژگی
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="checks" required>
          <QuestionnaireTitle>
            کدام سطح تأیید را به‌کار ببرد؟
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="targeted">
              تست‌های هدفمند
            </QuestionnaireChoice>
            <QuestionnaireChoice value="package">
              تست‌های پکیج و بررسی نوع
            </QuestionnaireChoice>
            <QuestionnaireChoice value="full">
              راستی‌آزمایی کامل فضای کاری
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="output" required>
          <QuestionnaireTitle>
            عامل پس از اتمام چه چیزی برگرداند؟
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="summary">
              خلاصهٔ کوتاه
            </QuestionnaireChoice>
            <QuestionnaireChoice value="diff">
              خلاصه با فایل‌های تغییر یافته
            </QuestionnaireChoice>
            <QuestionnaireChoice value="handoff">
              تحویل جزئیات پیاده‌سازی
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
