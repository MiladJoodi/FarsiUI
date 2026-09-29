"use client"

import * as React from "react"
import { cn } from "cn"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

export type Language = "en" | "ar" | "he"

export type Direction = "ltr" | "rtl"

export type Translations<
  T extends Record<string, string> = Record<string, string>,
> = Record<
  Language,
  {
    dir: Direction
    locale?: string
    values: T
  }
>

export const languageOptions = [
  { value: "fa", label: "فارسی", language: "ar" as Language },
  { value: "en", label: "English", language: "en" as Language },
] as const

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({
  children,
  defaultLanguage = "ar",
}: {
  children: React.ReactNode
  defaultLanguage?: Language
}) {
  const [language, setLanguage] = React.useState<Language>(defaultLanguage)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const context = React.useContext(LanguageContext)
  return context
}

export function useTranslation<T extends Record<string, string>>(
  translations: Translations<T>,
  defaultLanguage: Language = "ar"
) {
  const context = useLanguageContext()
  const [localLanguage, setLocalLanguage] =
    React.useState<Language>(defaultLanguage)

  const language = context?.language ?? localLanguage
  const setLanguage = context?.setLanguage ?? setLocalLanguage

  const { dir, locale, values: t } = translations[language]
  return { language, setLanguage, dir, locale, t }
}

export interface LanguageSelectorProps {
  value: Language
  onValueChange: (value: Language) => void
}

export function LanguageSelector({
  value,
  onValueChange,
  className,
}: LanguageSelectorProps & {
  className?: string
}) {
  const selectValue = value === "en" ? "en" : "fa"

  return (
    <Select
      items={languageOptions.map(({ value, label }) => ({ value, label }))}
      value={selectValue}
      onValueChange={(next) => {
        onValueChange(next === "en" ? "en" : "ar")
      }}
    >
      <SelectTrigger
        size="sm"
        className={cn(
          "w-28 flex-row-reverse justify-between gap-2",
          className
        )}
        dir="ltr"
        data-name="language-selector"
      >
        <SelectValue className="min-w-0 flex-1 justify-end text-right" />
      </SelectTrigger>
      <SelectContent
        dir="rtl"
        className="data-open:animate-none data-closed:animate-none"
      >
        <SelectGroup>
          {languageOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="justify-between pr-1.5 pl-8 [&_span.absolute]:right-auto [&_span.absolute]:left-2"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
