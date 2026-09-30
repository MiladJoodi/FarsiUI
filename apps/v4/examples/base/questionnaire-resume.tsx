"use client"

import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/styles/base-nova/ui/questionnaire"

const items = [
  { name: "change", required: true },
  { name: "verification", required: true },
  { name: "notes" },
] as const

export function QuestionnaireResume() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const answers = {
      change: formData.get("change"),
      verification: formData.getAll("verification"),
      notes: formData.get("notes"),
    }

    toast("پیش‌نویس به‌روز شد", {
      description: `مهاجرت: ${answers.change ?? "هیچ"} · تأیید: ${answers.verification.join(", ") || "هیچ"} · یادداشت: ${answers.notes || "هیچ"}`,
    })
  }

  return (
    <div dir="rtl" className="mx-auto w-full max-w-md">
      <Questionnaire
        className="w-full"
        defaultItem="verification"
        items={items}
        onReset={() => toast("پاسخ‌های ذخیره‌شده بازگردانده شد")}
        onSubmit={handleSubmit}
      >
        <QuestionnaireProgress />

        <QuestionnaireItem name="change" required>
          <QuestionnaireTitle>این مهاجرت از چه نوعی است؟</QuestionnaireTitle>
          <QuestionnaireDescription>
            این پاسخ در نشست قبلی ذخیره شده بود.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="incremental" defaultChecked>
              مهاجرت تدریجی
            </QuestionnaireChoice>
            <QuestionnaireChoice value="cutover">
              قطع‌و‌وصل یک‌مرحله‌ای
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="verification" multiple required>
          <QuestionnaireTitle>
            مهاجرت چگونه باید تأیید شود؟
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            این بررسی‌ها در نشست قبلی انتخاب شده بودند.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="tests" defaultChecked>
              اجرای تست‌های مهاجرت
            </QuestionnaireChoice>
            <QuestionnaireChoice value="typecheck" defaultChecked>
              اجرای بررسی نوع
            </QuestionnaireChoice>
            <QuestionnaireChoice value="manual">
              تست دودی دستی
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="notes">
          <QuestionnaireTitle>
            چیز دیگری هست که عامل باید به‌خاطر بسپارد؟
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            این یادداشت همراه پیش‌نویس ذخیره شده بود.
          </QuestionnaireDescription>
          <QuestionnaireInput
            aria-label="یادداشت مهاجرت ذخیره‌شده"
            defaultValue="API عمومی موجود را پایدار نگه دار."
          />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <Button type="reset" variant="outline">
            بازگردانی تغییرات
          </Button>
          <QuestionnairePrevious>قبلی</QuestionnairePrevious>
          <QuestionnaireNext>بعدی</QuestionnaireNext>
          <QuestionnaireSubmit>به‌روزرسانی پیش‌نویس</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
