"use client"
import { Eye } from "lucide-react"

import * as React from "react"
import { cn } from "cn"
import { I18nProvider } from "react-aria-components"

import { ExampleDependencies } from "@/components/example-dependencies"
import {
  LanguageProvider,
  useTranslation,
  type Translations,
} from "@/components/language-selector"
import { PreviewThemeScope } from "@/components/preview-theme-scope"
import { DirectionProvider as BaseDirectionProvider } from "@/registry/bases/base/ui/direction"
import { DirectionProvider as RadixDirectionProvider } from "@/registry/bases/radix/ui/direction"
import { Button } from "@/registry/new-york-v4/ui/button"

export function ComponentPreviewTabs({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  sourcePreview,
  dependencies,
  direction = "ltr",
  styleName,
  ...props
}: React.ComponentProps<"div"> & {
  previewClassName?: string
  align?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  component: React.ReactNode
  source: React.ReactNode
  sourcePreview?: React.ReactNode
  dependencies?: string[]
  direction?: "ltr" | "rtl"
  styleName?: string
}) {
  const [isMobileCodeVisible, setIsMobileCodeVisible] = React.useState(false)
  const base = styleName?.match(/^(base|radix|aria)-/)?.[1] || "base"

  return (
    <div className="mt-4 mb-12">
      <div
        data-slot="component-preview"
        dir={direction}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border",
          className
        )}
        {...props}
      >
        {direction === "rtl" ? (
          <LanguageProvider defaultLanguage="ar">
            <PreviewWrapper
              align={align}
              chromeLessOnMobile={chromeLessOnMobile}
              previewClassName={previewClassName}
              styleName={styleName}
            >
              <DirectionProviderWrapper base={base}>
                {component}
              </DirectionProviderWrapper>
            </PreviewWrapper>
          </LanguageProvider>
        ) : (
          <DirectionProviderWrapper base={base} dir="ltr">
            <PreviewWrapper
              align={align}
              chromeLessOnMobile={chromeLessOnMobile}
              previewClassName={previewClassName}
              styleName={styleName}
              dir="ltr"
            >
              {component}
            </PreviewWrapper>
          </DirectionProviderWrapper>
        )}
        {!hideCode && (
          <div
            data-slot="code"
            data-not-typeset
            data-mobile-code-visible={isMobileCodeVisible}
            className="relative overflow-hidden **:data-[slot=copy-button]:right-4 **:data-[slot=copy-button]:hidden data-[mobile-code-visible=true]:**:data-[slot=copy-button]:flex [&_[data-rehype-pretty-code-figure]]:m-0! [&_[data-rehype-pretty-code-figure]]:rounded-t-none [&_[data-rehype-pretty-code-figure]]:border-t [&_pre]:max-h-72"
          >
            {isMobileCodeVisible ? (
              <>{source}</>
            ) : (
              <div className="relative">
                {sourcePreview}
                <div className="absolute inset-0 flex items-center justify-center pb-4">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, var(--color-code), color-mix(in oklab, var(--color-code) 60%, transparent), transparent)",
                    }}
                  />
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="relative z-10 gap-1.5 rounded-lg border border-border bg-white font-sans text-foreground shadow-none hover:bg-muted dark:bg-background dark:text-foreground dark:hover:bg-muted"
                    onClick={() => {
                      setIsMobileCodeVisible(true)
                    }}
                  >
                    <Eye className="size-4" />
                    مشاهده کد
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <ExampleDependencies dependencies={dependencies} />
    </div>
  )
}

const directionTranslations: Translations<Record<string, never>> = {
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

function PreviewWrapper({
  align,
  chromeLessOnMobile,
  previewClassName,
  styleName,
  dir: explicitDir,
  children,
}: {
  align: "center" | "start" | "end"
  chromeLessOnMobile: boolean
  previewClassName?: string
  styleName?: string
  dir?: "ltr" | "rtl"
  children: React.ReactNode
}) {
  // useTranslation handles the case when there's no LanguageProvider context.
  // It will fall back to local state with defaultLanguage.
  const translation = useTranslation(directionTranslations, "ar")
  const dir = explicitDir ?? translation.dir

  // Digit style is independent of direction: keep fa so LTR phone fields
  // can still show Persian digits unless explicitly opted out.
  const lang = "fa"

  return (
    <div data-slot="preview" dir={dir} lang={lang} data-lang={lang}>
      <PreviewThemeScope styleName={styleName}>
        <div
          data-align={align}
          data-chromeless={chromeLessOnMobile}
          className={cn(
            "preview relative flex h-72 w-full justify-center p-10 data-[align=center]:items-center data-[align=end]:items-start data-[align=start]:items-start data-[chromeless=true]:h-auto data-[chromeless=true]:p-0 sm:data-[align=end]:items-end",
            previewClassName
          )}
        >
          {children}
        </div>
      </PreviewThemeScope>
    </div>
  )
}

function DirectionProviderWrapper({
  base,
  dir: explicitDir,
  children,
}: {
  base?: string
  dir?: "ltr" | "rtl"
  children: React.ReactNode
}) {
  // useTranslation handles the case when there's no LanguageProvider context.
  // It will fall back to local state with defaultLanguage.
  const translation = useTranslation(directionTranslations, "ar")
  const dir = explicitDir ?? translation.dir

  if (base === "base") {
    return (
      <BaseDirectionProvider direction={dir}>{children}</BaseDirectionProvider>
    )
  }

  if (base === "aria") {
    return (
      <I18nProvider
        locale={
          explicitDir === "ltr"
            ? "en"
            : (translation.locale ?? translation.language)
        }
      >
        {children}
      </I18nProvider>
    )
  }

  return <RadixDirectionProvider dir={dir}>{children}</RadixDirectionProvider>
}
