"use client"

import * as React from "react"
import { cn } from "cn"

import { type PersianDigitsMode } from "@/registry/bases/radix/lib/digits"
import { usePersianDigitsInput } from "@/registry/bases/radix/hooks/use-persian-digits-input"

type InputProps = React.ComponentProps<"input"> & {
  /**
   * Display Persian digits while keeping the logical/submitted value in ASCII.
   * - `"auto"` (default): enabled for numeric inputs (`type="number"|"tel"` or
   *   `inputMode="numeric"|"decimal"`) in a Persian/RTL locale context
   * - `true` / `false`: force on or off
   */
  persianDigits?: PersianDigitsMode
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
  placeholder,
  persianDigits = "auto",
  ref,
  ...props
}: InputProps) {
  const { setInputRef, inputProps, hiddenInput, formatPlaceholder } =
    usePersianDigitsInput({
      persianDigits,
      type,
      inputMode,
      dir,
      lang,
      name,
      value,
      defaultValue,
      onChange,
    })

  const composedRef = React.useCallback(
    (node: HTMLInputElement | null) => {
      setInputRef(node)
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    },
    [ref, setInputRef]
  )

  return (
    <>
      {hiddenInput ? <input {...hiddenInput} readOnly tabIndex={-1} /> : null}
      <input
        data-slot="input"
        className={cn(
          "cn-input w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
        {...inputProps}
        placeholder={formatPlaceholder(placeholder)}
        ref={composedRef}
      />
    </>
  )
}

export { Input }
export type { InputProps }
