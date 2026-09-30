"use client"

import * as React from "react"
import { toast } from "sonner"

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

export function QuestionnaireConditional() {
  const [runtime, setRuntime] = React.useState("local")
  const items = React.useMemo(
    () => [
      { name: "runtime", required: true },
      {
        disabled: runtime !== "cloud",
        name: "environment",
        required: true,
      },
      { name: "approval", required: true },
    ],
    [runtime]
  )

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("برنامهٔ اجرا ذخیره شد", {
      description: `زمان‌اجرا: ${formData.get("runtime") ?? "هیچ"} · محیط: ${formData.get("environment") ?? "غیرمرتبط"} · تأیید: ${formData.get("approval") ?? "هیچ"}`,
    })
  }

  return (
    <div dir="rtl">
      <Questionnaire
        className="mx-auto max-w-md"
        defaultItem="runtime"
        items={items}
        onSubmit={handleSubmit}
      >
        <QuestionnaireProgress />

        <QuestionnaireItem name="runtime" required>
          <QuestionnaireTitle>عامل کجا اجرا شود؟</QuestionnaireTitle>
          <QuestionnaireDescription>
            اجرای ابری یک سؤال محیط به این جریان اضافه می‌کند.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice
              checked={runtime === "local"}
              value="local"
              onChange={() => setRuntime("local")}
            >
              فضای کاری محلی
            </QuestionnaireChoice>
            <QuestionnaireChoice
              checked={runtime === "cloud"}
              value="cloud"
              onChange={() => setRuntime("cloud")}
            >
              فضای کاری ابری
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem
          disabled={runtime !== "cloud"}
          name="environment"
          required
        >
          <QuestionnaireTitle>
            کدام محیط ابری را به‌کار ببرد؟
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="preview">پیش‌نمایش</QuestionnaireChoice>
            <QuestionnaireChoice value="staging">استیجینگ</QuestionnaireChoice>
            <QuestionnaireChoice value="isolated">
              سندباکس ایزوله
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="approval" required>
          <QuestionnaireTitle>
            عامل چه زمانی تأیید بخواهد؟
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="writes">
              قبل از نوشتن فایل‌ها
            </QuestionnaireChoice>
            <QuestionnaireChoice value="commands">
              قبل از اجرای دستورها
            </QuestionnaireChoice>
            <QuestionnaireChoice value="sensitive">
              فقط برای اقدامات حساس
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnairePrevious>قبلی</QuestionnairePrevious>
          <QuestionnaireNext>بعدی</QuestionnaireNext>
          <QuestionnaireSubmit>ذخیرهٔ برنامهٔ اجرا</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
