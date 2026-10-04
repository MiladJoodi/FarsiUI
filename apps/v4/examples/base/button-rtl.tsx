"use client"

import { ArrowRightIcon, PlusIcon } from "lucide-react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"
import { Button } from "@/registry/bases/base/ui/button"
import { Spinner } from "@/registry/bases/base/ui/spinner"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      button: "Button",
      submit: "Submit",
      delete: "Delete",
      loading: "Loading",
      add: "Add",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      button: "دکمه",
      submit: "ارسال",
      delete: "حذف",
      loading: "در حال بارگذاری",
      add: "افزودن",
    },
  },
  he: {
    dir: "rtl",
    values: {
      button: "دکمه",
      submit: "ارسال",
      delete: "حذف",
      loading: "در حال بارگذاری",
      add: "افزودن",
    },
  },
}

export default function ButtonRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row" dir={dir}>
      <Button variant="outline">{t.button}</Button>
      <Button variant="destructive">{t.delete}</Button>
      <Button variant="outline">
        {t.submit}{" "}
        <ArrowRightIcon className="rtl:rotate-180" data-icon="inline-end" />
      </Button>
      <Button variant="outline" size="icon" aria-label={t.add}>
        <PlusIcon />
      </Button>
      <Button variant="secondary" disabled>
        <Spinner data-icon="inline-start" /> {t.loading}
      </Button>
    </div>
  )
}
