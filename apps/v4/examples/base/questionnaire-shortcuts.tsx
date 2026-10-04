"use client"

import * as React from "react"
import { toast } from "sonner"

import { answerLabel } from "@/examples/base/questionnaire-answer-label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/styles/base-nova/ui/native-select"
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
} from "@/styles/base-nova/ui/questionnaire"

const items = [
  {
    choices: [{ value: "inspect" }, { value: "tests" }, { value: "patch" }],
    name: "action",
    required: true,
  },
] as const

const actionLabels: Record<string, string> = {
  inspect: "بررسی پیاده‌سازی",
  tests: "اجرای تست‌های مرتبط",
  patch: "آماده‌سازی پچ",
}

const shortcutLabels: Record<string, string> = {
  letters: "حروف",
  numbers: "اعداد",
}

type ShortcutMode = React.ComponentProps<typeof Questionnaire>["shortcuts"]

export default function QuestionnaireShortcuts() {
  const [shortcuts, setShortcuts] = React.useState<ShortcutMode>("letters")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const action = new FormData(event.currentTarget).get("action")

    toast("اقدام بعدی انتخاب شد", {
      description: `اقدام: ${answerLabel(action, actionLabels)} · میانبرها: ${
        shortcuts ? answerLabel(shortcuts, shortcutLabels) : "بدون میانبر"
      }`,
    })
  }

  return (
    <div dir="rtl" className="relative mx-auto flex w-full max-w-md flex-col gap-3">
      <NativeSelect
        aria-label="سبک میانبر"
        className="ms-auto w-fit"
        value={shortcuts ?? "none"}
        onChange={(event) => {
          const value = event.target.value
          setShortcuts(
            value === "letters" || value === "numbers" ? value : undefined
          )
        }}
      >
        <NativeSelectOption value="none">بدون میانبر</NativeSelectOption>
        <NativeSelectOption value="letters">حروف</NativeSelectOption>
        <NativeSelectOption value="numbers">اعداد</NativeSelectOption>
      </NativeSelect>

      <Questionnaire
        items={items}
        shortcuts={shortcuts}
        onSubmit={handleSubmit}
      >
        <QuestionnaireItem name="action" required>
          <QuestionnaireTitle>
            عامل باید بعداً چه کاری انجام دهد؟
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            از میانبر نمایش‌داده‌شده استفاده کنید یا با صفحه‌کلید جابه‌جا شوید.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="inspect">
              بررسی پیاده‌سازی
            </QuestionnaireChoice>
            <QuestionnaireChoice value="tests">
              اجرای تست‌های مرتبط
            </QuestionnaireChoice>
            <QuestionnaireChoice value="patch">
              آماده‌سازی پچ
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnaireSubmit>تأیید اقدام</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
