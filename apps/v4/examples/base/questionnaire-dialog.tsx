"use client"

import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/styles/base-nova/ui/dialog"
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

const items = [
  { name: "scope", required: true },
  { name: "tests", required: true },
] as const

export function QuestionnaireDialog() {
  const [open, setOpen] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    setOpen(false)
    toast("توضیح ارسال شد", {
      description: `محدوده: ${formData.get("scope") ?? "هیچ"} · تأیید: ${formData.get("tests") ?? "هیچ"}`,
    })
  }

  return (
    <div dir="rtl">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="outline" />}>
          باز کردن توضیح
        </DialogTrigger>
        <DialogContent>
          <Questionnaire
            defaultItem="scope"
            items={items}
            onSubmit={handleSubmit}
          >
            <QuestionnaireItem name="scope" required>
              <DialogHeader>
                <QuestionnaireProgress />
                <QuestionnaireTitle render={<DialogTitle />}>
                  کدام فایل‌ها در محدوده هستند؟
                </QuestionnaireTitle>
                <QuestionnaireDescription render={<DialogDescription />}>
                  مشخص کنید عامل تا چه حد می‌تواند فضای کاری را به‌روز کند.
                </QuestionnaireDescription>
              </DialogHeader>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="component">
                  فقط کامپوننت
                </QuestionnaireChoice>
                <QuestionnaireChoice value="feature">
                  کل پوشهٔ ویژگی
                </QuestionnaireChoice>
                <QuestionnaireChoice value="workspace">
                  هر فایل مرتبط فضای کاری
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>

            <QuestionnaireItem name="tests" required>
              <DialogHeader>
                <QuestionnaireProgress />
                <QuestionnaireTitle render={<DialogTitle />}>
                  چقدر تأیید لازم است؟
                </QuestionnaireTitle>
                <QuestionnaireDescription render={<DialogDescription />}>
                  بررسی‌هایی را انتخاب کنید که عامل قبل از تحویل اجرا کند.
                </QuestionnaireDescription>
              </DialogHeader>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="targeted">
                  تست‌های هدفمند
                </QuestionnaireChoice>
                <QuestionnaireChoice value="package">
                  تست‌های پکیج
                </QuestionnaireChoice>
                <QuestionnaireChoice value="full">
                  راستی‌آزمایی کامل فضای کاری
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>

            <DialogFooter>
              <DialogClose render={<Button type="button" variant="outline" />}>
                لغو
              </DialogClose>
              <QuestionnaireActions>
                <QuestionnairePrevious>قبلی</QuestionnairePrevious>
                <QuestionnaireNext>بعدی</QuestionnaireNext>
                <QuestionnaireSubmit>ارسال پاسخ</QuestionnaireSubmit>
              </QuestionnaireActions>
            </DialogFooter>
          </Questionnaire>
        </DialogContent>
      </Dialog>
    </div>
  )
}
