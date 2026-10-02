"use client"

import * as React from "react"
import { toast } from "sonner"

import { answerLabel } from "@/examples/base/questionnaire-answer-label"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/styles/base-nova/ui/questionnaire"

const items = [
  { name: "scope", required: true },
  { name: "strategy", required: true },
  { name: "tests", required: true },
  { name: "delivery", required: true },
] as const

const scopeLabels: Record<string, string> = {
  small: "پچ کوچک",
  medium: "تغییر در مقیاس ویژگی",
  large: "تغییر بین‌پکیجی",
}

const strategyLabels: Record<string, string> = {
  single: "یک کامیت",
  logical: "کامیت‌های منطقی",
  squash: "فشرده‌سازی قبل از بازبینی",
}

const testsLabels: Record<string, string> = {
  targeted: "تست‌های هدفمند",
  package: "مجموعهٔ پکیج",
  workspace: "کل فضای کاری",
}

const deliveryLabels: Record<string, string> = {
  patch: "فقط پچ",
  commit: "کامیت محلی",
  branch: "پوش شاخهٔ بررسی",
}

function toPersianDigits(value: number) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]!)
}

export function QuestionnaireProgressExample() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("برنامهٔ درخواست ادغام آماده است", {
      description: `محدوده: ${answerLabel(formData.get("scope"), scopeLabels)} · کامیت‌ها: ${answerLabel(formData.get("strategy"), strategyLabels)} · تست‌ها: ${answerLabel(formData.get("tests"), testsLabels)} · تحویل: ${answerLabel(formData.get("delivery"), deliveryLabels)}`,
    })
  }

  return (
    <div dir="rtl" className="mx-auto w-full max-w-md">
      <Questionnaire
        className="w-full"
        defaultItem="scope"
        items={items}
        onSubmit={handleSubmit}
      >
        <QuestionnaireProgress
          className="w-full"
          render={(props, state) => (
            <div
              {...props}
              aria-valuetext={`سؤال ${toPersianDigits(state.current)} از ${toPersianDigits(state.total)}`}
            >
              <div className="mb-2 flex gap-1.5" aria-hidden="true">
                {Array.from({ length: state.total }, (_, index) => (
                  <span
                    key={index}
                    className={
                      index < state.current
                        ? "h-1.5 flex-1 rounded-full bg-primary"
                        : "h-1.5 flex-1 rounded-full bg-muted"
                    }
                  />
                ))}
              </div>
              <span>
                {`نقطهٔ بررسی ${toPersianDigits(state.current)} از ${toPersianDigits(state.total)}`}
              </span>
            </div>
          )}
        />

        <QuestionnaireItem name="scope" required>
          <QuestionnaireTitle>اندازهٔ تغییر چقدر است؟</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="small">پچ کوچک</QuestionnaireChoice>
            <QuestionnaireChoice value="medium">
              تغییر در مقیاس ویژگی
            </QuestionnaireChoice>
            <QuestionnaireChoice value="large">
              تغییر بین‌پکیجی
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="strategy" required>
          <QuestionnaireTitle>
            کامیت‌ها چگونه سازماندهی شوند؟
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="single">
              یک کامیت
            </QuestionnaireChoice>
            <QuestionnaireChoice value="logical">
              کامیت‌های منطقی
            </QuestionnaireChoice>
            <QuestionnaireChoice value="squash">
              فشرده‌سازی قبل از بازبینی
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="tests" required>
          <QuestionnaireTitle>کدام تست‌ها اجرا شوند؟</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="targeted">
              تست‌های هدفمند
            </QuestionnaireChoice>
            <QuestionnaireChoice value="package">
              مجموعهٔ پکیج
            </QuestionnaireChoice>
            <QuestionnaireChoice value="workspace">
              کل فضای کاری
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="delivery" required>
          <QuestionnaireTitle>
            کار چگونه تحویل داده شود؟
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="patch">فقط پچ</QuestionnaireChoice>
            <QuestionnaireChoice value="commit">
              کامیت محلی
            </QuestionnaireChoice>
            <QuestionnaireChoice value="branch">
              پوش شاخهٔ بررسی
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnairePrevious>قبلی</QuestionnairePrevious>
          <QuestionnaireNext>بعدی</QuestionnaireNext>
          <QuestionnaireSubmit>پایان برنامه</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
