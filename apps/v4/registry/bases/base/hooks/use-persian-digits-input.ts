"use client"

import * as React from "react"

import {
  type PersianDigitsMode,
  readLocaleContext,
  resolvePersianDigitsEnabled,
  toLatinDigits,
  toPersianDigits,
} from "@/registry/bases/base/lib/digits"

type Selection = { start: number | null; end: number | null }

export type UsePersianDigitsInputOptions = {
  persianDigits?: PersianDigitsMode
  type?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]
  dir?: string
  lang?: string
  name?: string
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  onChange?: React.ChangeEventHandler<HTMLInputElement>
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

function patchChangeEvent(
  event: React.ChangeEvent<HTMLInputElement>,
  latinValue: string
): React.ChangeEvent<HTMLInputElement> {
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
  }) as React.ChangeEvent<HTMLInputElement>
}

export function usePersianDigitsInput({
  persianDigits = "auto",
  type,
  inputMode,
  dir,
  lang,
  name,
  value,
  defaultValue,
  onChange,
}: UsePersianDigitsInputOptions) {
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const selectionRef = React.useRef<Selection | null>(null)
  const isControlled = value !== undefined

  const [uncontrolledLatin, setUncontrolledLatin] = React.useState(() =>
    toLatinDigits(toStringValue(defaultValue))
  )

  const [enabled, setEnabled] = React.useState(() =>
    resolvePersianDigitsEnabled({
      persianDigits,
      type,
      inputMode,
      dir,
      lang,
    })
  )

  React.useLayoutEffect(() => {
    const context = readLocaleContext(inputRef.current, { dir, lang })
    setEnabled(
      resolvePersianDigitsEnabled({
        persianDigits,
        type,
        inputMode,
        dir: context.dir,
        lang: context.lang,
      })
    )
  }, [persianDigits, type, inputMode, dir, lang])

  const latinValue = isControlled
    ? toLatinDigits(toStringValue(value))
    : uncontrolledLatin

  React.useLayoutEffect(() => {
    if (!enabled || !selectionRef.current || !inputRef.current) {
      return
    }
    const { start, end } = selectionRef.current
    if (start == null) {
      return
    }
    inputRef.current.setSelectionRange(start, end ?? start)
    selectionRef.current = null
  })

  const setInputRef = React.useCallback((node: HTMLInputElement | null) => {
    inputRef.current = node
  }, [])

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!enabled) {
        onChange?.(event)
        return
      }

      const latin = toLatinDigits(event.target.value)
      selectionRef.current = {
        start: event.target.selectionStart,
        end: event.target.selectionEnd,
      }

      if (!isControlled) {
        setUncontrolledLatin(latin)
      }

      onChange?.(patchChangeEvent(event, latin))
    },
    [enabled, isControlled, onChange]
  )

  const resolvedType = enabled && type === "number" ? "text" : type
  const resolvedInputMode =
    enabled && type === "number" ? (inputMode ?? "decimal") : inputMode

  const displayValue = enabled ? toPersianDigits(latinValue) : undefined

  return {
    enabled,
    latinValue,
    setInputRef,
    inputProps: {
      type: resolvedType,
      inputMode: resolvedInputMode,
      dir,
      lang,
      name: enabled && name ? undefined : name,
      value: enabled ? displayValue : isControlled ? value : undefined,
      defaultValue: enabled || isControlled ? undefined : defaultValue,
      onChange: handleChange,
    } satisfies Partial<React.ComponentProps<"input">>,
    hiddenInput:
      enabled && name
        ? ({
            type: "hidden" as const,
            name,
            value: latinValue,
          } satisfies React.ComponentProps<"input">)
        : null,
    formatPlaceholder(placeholder?: string) {
      if (!enabled || placeholder == null) {
        return placeholder
      }
      return toPersianDigits(placeholder)
    },
    toLatinValue(next: string) {
      return toLatinDigits(next)
    },
  }
}
