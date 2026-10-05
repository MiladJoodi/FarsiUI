"use client"

import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

import { usePersianDigitsInput } from "@/registry/base-lyra/hooks/use-persian-digits-input"
import { type PersianDigitsMode } from "@/registry/base-lyra/lib/digits"

type InputProps = React.ComponentProps<"input"> & {
  /**
   * Display Persian digits while keeping the logical/submitted value in ASCII.
   * - `"auto"` (default): enabled in Persian contexts for text/numeric/tel.
   *   Skipped for email/password/url/file and when `data-persian-digits="false"`
   *   or `lang="en"`. `dir="ltr"` does NOT disable Persian digits.
   * - `true` / `false`: force on or off
   */
  persianDigits?: PersianDigitsMode
  onValueChange?: (value: string, eventDetails: unknown) => void
}

function Input({
  className,
  type,
  inputMode,
  dir,
  lang,
  name,
  value,
  defaultValue,
  onChange,
  onValueChange,
  placeholder,
  persianDigits = "auto",
  ref,
  ...props
}: InputProps & { ref?: React.Ref<HTMLElement> }) {
  const dataPersianDigits =
    typeof props["data-persian-digits"] === "string"
      ? props["data-persian-digits"]
      : null

  const {
    enabled,
    isNumeric,
    setInputRef,
    inputProps,
    hiddenInput,
    formatPlaceholder,
    toLatinValue,
  } = usePersianDigitsInput({
    persianDigits,
    type,
    inputMode,
    dir,
    lang,
    name,
    value,
    defaultValue,
    onChange,
    "data-persian-digits": dataPersianDigits,
  })

  const composedRef = React.useCallback(
    (node: HTMLElement | null) => {
      setInputRef(node as HTMLInputElement | null)
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ;(ref as React.MutableRefObject<HTMLElement | null>).current = node
      }
    },
    [ref, setInputRef]
  )

  return (
    <>
      {hiddenInput ? <input {...hiddenInput} readOnly tabIndex={-1} /> : null}
      <InputPrimitive
        data-slot="input"
        className={cn(
          "h-8 w-full min-w-0 rounded-none border border-input bg-transparent px-2.5 py-1 text-xs transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-xs dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        )}
        {...props}
        {...inputProps}
        placeholder={formatPlaceholder(placeholder)}
        ref={composedRef}
        onValueChange={(next, eventDetails) => {
          const latin =
            enabled || isNumeric
              ? toLatinValue(String(next ?? ""))
              : String(next ?? "")
          onValueChange?.(latin, eventDetails)
        }}
      />
    </>
  )
}

export { Input }
export type { InputProps }
