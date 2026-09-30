"use client"

import * as React from "react"
import type { QuestionnaireItemStatus } from "@farsiui/react/questionnaire"
import { toast } from "sonner"

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
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/styles/base-nova/ui/questionnaire"

const items = [
  { name: "task", required: true },
  { name: "constraints" },
  { name: "review", required: true },
] as const

export function QuestionnaireSkipExample() {
  const [constraintStatus, setConstraintStatus] =
    React.useState<QuestionnaireItemStatus>("unanswered")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const answers = {
      task: formData.get("task"),
      constraints: formData.get("constraints"),
      constraintStatus,
      review: formData.get("review"),
    }

    toast("خلاصهٔ عامل ارسال شد", {
      description: `کار: ${answers.task ?? "هیچ"} · محدودیت‌ها: ${
        answers.constraintStatus === "skipped"
          ? "رد شده"
          : (answers.constraints ?? "هیچ")
      } · بازبینی: ${answers.review ?? "هیچ"}`,
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

        <QuestionnaireItem name="task" required>
          <QuestionnaireTitle>این چه نوع تغییری است؟</QuestionnaireTitle>
          <QuestionnaireDescription>
            دسته‌ای را انتخاب کنید که بهترین توصیف کار باشد.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="feature">ویژگی جدید</QuestionnaireChoice>
            <QuestionnaireChoice value="fix">رفع باگ</QuestionnaireChoice>
            <QuestionnaireChoice value="refactor">بازآرایی</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem
          name="constraints"
          onStatusChange={setConstraintStatus}
        >
          <QuestionnaireTitle>
            آیا محدودیت پیاده‌سازی وجود دارد؟
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            در صورت نیاز پاسخ دهید، یا این سؤال را عمداً رد کنید.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="no-dependencies">
              وابستگی اضافه نشود
            </QuestionnaireChoice>
            <QuestionnaireChoice value="no-migrations">
              پایگاه داده تغییر نکند
            </QuestionnaireChoice>
            <QuestionnaireChoice value="preserve-api">
              API عمومی حفظ شود
            </QuestionnaireChoice>
            <QuestionnaireInput
              aria-label="محدودیت پیاده‌سازی دیگر"
              placeholder="محدودیت دیگری توصیف کنید…"
            />
          </QuestionnaireChoices>
        </QuestionnaireItem>

        <QuestionnaireItem name="review" required>
          <QuestionnaireTitle>
            کار چگونه باید بازبینی شود؟
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            بررسی‌هایی را انتخاب کنید که عامل قبل از تحویل انجام دهد.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="tests">
              اجرای مجموعهٔ تست‌ها
            </QuestionnaireChoice>
            <QuestionnaireChoice value="diff">
              بازبینی دیف نهایی
            </QuestionnaireChoice>
            <QuestionnaireChoice value="both">
              تست‌ها و بازبینی دیف
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnairePrevious>قبلی</QuestionnairePrevious>
          <QuestionnaireSkip>رد کردن</QuestionnaireSkip>
          <QuestionnaireNext>بعدی</QuestionnaireNext>
          <QuestionnaireSubmit>ارسال خلاصه</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
