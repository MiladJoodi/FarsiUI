"use client"

import * as React from "react"
import type { QuestionnaireItemStatus } from "@farsiui/react/questionnaire"
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
  { name: "permission", required: true },
  { name: "verification", required: true },
] as const

type ItemName = "permission" | "verification"

const permissionLabels: Record<string, string> = {
  files: "فایل‌های پروژه",
  tests: "فایل‌های پروژه و تست‌ها",
  config: "فایل‌ها، تست‌ها و پیکربندی",
}

const verificationLabels: Record<string, string> = {
  tests: "تست‌ها",
  types: "تست‌ها و تایپ‌ها",
  all: "تست‌ها، تایپ‌ها و کنترل کیفیت بصری",
}

export default function QuestionnaireNavigationState() {
  const [item, setItem] = React.useState<ItemName>("permission")
  const [statuses, setStatuses] = React.useState<
    Record<ItemName, QuestionnaireItemStatus>
  >({
    permission: "unanswered",
    verification: "unanswered",
  })
  const unanswered = statuses[item] === "unanswered"

  function setStatus(name: ItemName, status: QuestionnaireItemStatus) {
    setStatuses((current) => ({ ...current, [name]: status }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("مجوزها ذخیره شد", {
      description: `مجوز: ${answerLabel(formData.get("permission"), permissionLabels)} · تأیید: ${answerLabel(formData.get("verification"), verificationLabels)}`,
    })
  }

  return (
    <div dir="rtl" className="mx-auto w-full max-w-md">
      <Questionnaire
        className="w-full"
        item={item}
        items={items}
        onItemChange={(nextItem) => setItem(nextItem as ItemName)}
        onSubmit={handleSubmit}
      >
        <QuestionnaireProgress />

        <QuestionnaireItem
          name="permission"
          required
          onStatusChange={(status) => setStatus("permission", status)}
        >
          <QuestionnaireTitle>عامل مجاز به تغییر چه چیزی است؟</QuestionnaireTitle>
          <QuestionnaireDescription>
            دکمهٔ بعدی عمداً تا انتخاب پاسخ غیرفعال است.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="files">فایل‌های پروژه</QuestionnaireChoice>
            <QuestionnaireChoice value="tests">
              فایل‌های پروژه و تست‌ها
            </QuestionnaireChoice>
            <QuestionnaireChoice value="config">
              فایل‌ها، تست‌ها و پیکربندی
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem
          name="verification"
          required
          onStatusChange={(status) => setStatus("verification", status)}
        >
          <QuestionnaireTitle>
            قبل از اتمام چه چیزی باید بگذرد؟
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="tests">تست‌ها</QuestionnaireChoice>
            <QuestionnaireChoice value="types">
              تست‌ها و تایپ‌ها
            </QuestionnaireChoice>
            <QuestionnaireChoice value="all">
              تست‌ها، تایپ‌ها و کنترل کیفیت بصری
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnairePrevious>قبلی</QuestionnairePrevious>
          <QuestionnaireNext
            className="data-[status=unanswered]:opacity-50"
            disabled={unanswered}
            variant="secondary"
          >
            بعدی
          </QuestionnaireNext>
          <QuestionnaireSubmit disabled={unanswered}>
            ذخیرهٔ مجوزها
          </QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
