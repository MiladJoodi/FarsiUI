"use client"

import * as React from "react"

import {
  isNumericInputHint,
  normalizeDigits,
  readLocaleContext,
  resolvePersianDigitsEnabled,
  toPersianDigits,
  type PersianDigitsMode,
} from "@/registry/aria-mira/lib/digits"

type Selection = { start: number | null; end: number | null }

type DigitFieldElement = HTMLInputElement | HTMLTextAreaElement

export type UsePersianDigitsInputOptions = {
  persianDigits?: PersianDigitsMode
  type?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]
  dir?: string
  lang?: string
  locale?: string
  name?: string
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  onChange?: React.ChangeEventHandler<DigitFieldElement>
  "data-persian-digits"?: string | null
}

function toStringValue(
  value: string | number | readonly string[] | undefined
): string {
  if (value == null) {
    return ""
  }
  if (typeof value === "string" || typeof value === "number") {
    return String(value)
  }
  return value.join(",")
}

function patchChangeEvent<T extends DigitFieldElement>(
  event: React.ChangeEvent<T>,
  latinValue: string
): React.ChangeEvent<T> {
  const targetProxy = new Proxy(event.target, {
    get(target, prop, receiver) {
      if (prop === "value") {
        return latinValue
      }
      const next = Reflect.get(target, prop, receiver)
      return typeof next === "function" ? next.bind(target) : next
    },
  })

  return new Proxy(event, {
    get(target, prop, receiver) {
      if (prop === "target" || prop === "currentTarget") {
        return targetProxy
      }
      return Reflect.get(target, prop, receiver)
    },
  }) as React.ChangeEvent<T>
}

export function usePersianDigitsInput({
  persianDigits = "auto",
  type,
  inputMode,
  dir,
  lang,
  locale,
  name,
  value,
  defaultValue,
  onChange,
  "data-persian-digits": dataPersianDigits,
}: UsePersianDigitsInputOptions) {
  const fieldRef = React.useRef<DigitFieldElement | null>(null)
  const selectionRef = React.useRef<Selection | null>(null)
  const isControlled = value !== undefined
  const isNumeric = isNumericInputHint(type, inputMode)

  const [displayPersian, setDisplayPersian] = React.useState(() =>
    resolvePersianDigitsEnabled({
      persianDigits,
      type,
      inputMode,
      dir,
      lang,
      locale,
      "data-persian-digits": dataPersianDigits,
    })
  )

  const [uncontrolledLatin, setUncontrolledLatin] = React.useState(() => {
    const raw = toStringValue(defaultValue)
    return displayPersian || isNumeric ? normalizeDigits(raw) : raw
  })

  const resolveDisplayPersian = React.useCallback(
    (node: HTMLElement | null) => {
      const context = readLocaleContext(node, { dir, lang, locale })
      return resolvePersianDigitsEnabled({
        persianDigits,
        type,
        inputMode,
        dir: context.dir,
        lang: context.lang,
        locale: context.locale,
        "data-persian-digits": dataPersianDigits,
      })
    },
    [persianDigits, type, inputMode, dir, lang, locale, dataPersianDigits]
  )

  React.useEffect(() => {
    setDisplayPersian(resolveDisplayPersian(fieldRef.current))
  }, [resolveDisplayPersian])

  const latinValue = isControlled
    ? displayPersian || isNumeric
      ? normalizeDigits(toStringValue(value))
      : toStringValue(value)
    : uncontrolledLatin

  React.useLayoutEffect(() => {
    if (!displayPersian || !selectionRef.current || !fieldRef.current) {
      return
    }
    const { start, end } = selectionRef.current
    if (start == null) {
      return
    }
    fieldRef.current.setSelectionRange(start, end ?? start)
    selectionRef.current = null
  })

  const setFieldRef = React.useCallback(
    (node: DigitFieldElement | null) => {
      fieldRef.current = node
      if (node) {
        setDisplayPersian(resolveDisplayPersian(node))
      }
    },
    [resolveDisplayPersian]
  )

  // Back-compat alias used by Input.
  const setInputRef = setFieldRef

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<DigitFieldElement>) => {
      if (!displayPersian && !isNumeric) {
        onChange?.(event)
        return
      }

      const latin = normalizeDigits(event.target.value)
      if (displayPersian) {
        selectionRef.current = {
          start: event.target.selectionStart,
          end: event.target.selectionEnd,
        }
      }

      if (!isControlled) {
        setUncontrolledLatin(latin)
      }

      onChange?.(patchChangeEvent(event, latin))
    },
    [displayPersian, isNumeric, isControlled, onChange]
  )

  const resolvedType = isNumeric && type === "number" ? "text" : type
  const resolvedInputMode =
    isNumeric && type === "number" ? (inputMode ?? "decimal") : inputMode

  // Live typing: digit-map only (no grouping) to preserve caret.
  const displayValue = displayPersian
    ? toPersianDigits(latinValue)
    : isNumeric
      ? latinValue
      : undefined

  const fieldProps: Record<string, unknown> = {
    dir,
    lang,
    onChange: handleChange,
  }

  if (type !== undefined) {
    fieldProps.type = resolvedType
  }
  if (inputMode !== undefined || (isNumeric && type === "number")) {
    fieldProps.inputMode = resolvedInputMode
  }

  if (displayPersian || isNumeric) {
    fieldProps.value = displayValue ?? latinValue
    fieldProps.defaultValue = undefined
    if (isNumeric && name) {
      // Visible control must not submit Persian digits.
      fieldProps.name = undefined
    } else if (name != null) {
      fieldProps.name = name
    }
  } else {
    if (isControlled) {
      fieldProps.value = value
    } else {
      fieldProps.defaultValue = defaultValue
    }
    if (name != null) {
      fieldProps.name = name
    }
  }

  // Keep submitted FormData in ASCII while the visible field shows Persian.
  const useHiddenName = Boolean(name && displayPersian)

  if (useHiddenName) {
    fieldProps.name = undefined
  }

  return {
    enabled: displayPersian,
    isNumeric,
    latinValue,
    setFieldRef,
    setInputRef,
    inputProps: fieldProps as Partial<React.ComponentProps<"input">>,
    textareaProps: fieldProps as Partial<React.ComponentProps<"textarea">>,
    fieldProps,
    hiddenInput:
      useHiddenName && name
        ? ({
            type: "hidden" as const,
            name,
            value: latinValue,
          } satisfies React.ComponentProps<"input">)
        : null,
    formatPlaceholder(placeholder?: string) {
      if (!displayPersian || placeholder == null) {
        return placeholder
      }
      return toPersianDigits(placeholder)
    },
    toLatinValue(next: string) {
      return displayPersian || isNumeric ? normalizeDigits(next) : next
    },
  }
}
