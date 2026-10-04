"use client"

import * as React from "react"
import { toast } from "sonner"

import {
  answerLabel,
  answerLabels,
} from "@/examples/base/questionnaire-answer-label"
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

const questionnaireItems = [
  {
    choices: [
      {
        description: "نشان دهد عامل چه چیزی اجرا کرد و چه نتیجه‌ای برگشت.",
        label: "خط زمانی فراخوانی ابزار",
        value: "tool-calls",
      },
      {
        description: "قبل از اقدامات حساس یا مخرب بپرسد.",
        label: "نقاط تأیید",
        value: "approvals",
      },
      {
        description: "کارهای واگذارشده و نتایج را ساده‌تر دنبال کنید.",
        label: "تحویل به زیرعامل",
        value: "handoffs",
      },
    ],
    description: "یک مسیر انتخاب کنید یا کار دیگری توصیف کنید.",
    input: {
      label: "ویژگی دیگری برای عامل",
      placeholder: "ویژگی دیگری توصیف کنید…",
    },
    name: "direction",
    required: true,
    title: "عامل باید بعداً چه چیزی بسازد؟",
  },
  {
    choices: [
      { label: "پیشرفت", value: "progress" },
      { label: "تصمیم‌ها", value: "decisions" },
      { label: "ریسک‌ها", value: "risks" },
      { label: "گام بعدی", value: "next-step" },
    ],
    description: "همهٔ موارد مرتبط را انتخاب کنید، یا این سؤال را رد کنید.",
    multiple: true,
    name: "signals",
    required: false,
    title: "هر به‌روزرسانی پیشرفت باید چه چیزهایی داشته باشد؟",
  },
  {
    choices: [
      { label: "همین الان شروع شود", value: "now" },
      { label: "چرخهٔ توسعهٔ بعدی", value: "next-cycle" },
      { label: "به بک‌لاگ اضافه شود", value: "backlog" },
    ],
    description: "زمان شروع کار توسط عامل را انتخاب کنید.",
    name: "timing",
    required: true,
    title: "کار چه زمانی باید شروع شود؟",
  },
] as const

const directionLabels: Record<string, string> = {
  "tool-calls": "خط زمانی فراخوانی ابزار",
  approvals: "نقاط تأیید",
  handoffs: "تحویل به زیرعامل",
}

const signalLabels: Record<string, string> = {
  progress: "پیشرفت",
  decisions: "تصمیم‌ها",
  risks: "ریسک‌ها",
  "next-step": "گام بعدی",
}

const timingLabels: Record<string, string> = {
  now: "همین الان شروع شود",
  "next-cycle": "چرخهٔ توسعهٔ بعدی",
  backlog: "به بک‌لاگ اضافه شود",
}

export default function QuestionnaireDemo() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const answers = {
      direction: formData.get("direction"),
      signals: formData.getAll("signals"),
      timing: formData.get("timing"),
    }

    toast("برنامهٔ عامل ذخیره شد", {
      description: `مسیر: ${answerLabel(answers.direction, directionLabels)} · سیگنال‌های پیشرفت: ${answerLabels(answers.signals, signalLabels)} · زمان‌بندی: ${answerLabel(answers.timing, timingLabels)}`,
    })
  }

  return (
    <div dir="rtl" className="mx-auto w-full max-w-md">
      <Questionnaire
        className="w-full"
        defaultItem="direction"
        items={questionnaireItems}
        shortcuts="letters"
        onSubmit={handleSubmit}
      >
        <QuestionnaireProgress />
        {questionnaireItems.map((question) => (
          <QuestionnaireItem
            key={question.name}
            multiple={"multiple" in question && question.multiple}
            name={question.name}
            required={question.required}
          >
            <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
            <QuestionnaireDescription>
              {question.description}
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              {question.choices.map((choice) => (
                <QuestionnaireChoice key={choice.value} value={choice.value}>
                  <span className="font-medium">{choice.label}</span>
                  {"description" in choice ? (
                    <span className="text-muted-foreground">
                      {choice.description}
                    </span>
                  ) : null}
                </QuestionnaireChoice>
              ))}
              {"input" in question ? (
                <QuestionnaireInput
                  aria-label={question.input.label}
                  placeholder={question.input.placeholder}
                />
              ) : null}
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>
        ))}
        <QuestionnaireActions>
          <QuestionnairePrevious>قبلی</QuestionnairePrevious>
          <QuestionnaireSkip>رد کردن</QuestionnaireSkip>
          <QuestionnaireNext>بعدی</QuestionnaireNext>
          <QuestionnaireSubmit>ذخیرهٔ برنامه</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
