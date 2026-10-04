"use client"

import * as React from "react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"
import { Slider } from "@/registry/bases/aria/ui-rtl/slider"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {},
  },
  ar: {
    dir: "rtl",
    values: {},
  },
  he: {
    dir: "rtl",
    values: {},
  },
}

export default function SliderRtl() {
  const { dir } = useTranslation(translations, "ar")

  return (
    <Slider
      aria-label="RTL slider"
      defaultValue={[75]}
      maxValue={100}
      step={1}
      className="mx-auto w-full max-w-xs"
      dir={dir}
    />
  )
}
