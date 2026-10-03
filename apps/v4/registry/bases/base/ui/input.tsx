"use client"

import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

import { type PersianDigitsMode } from "@/registry/bases/base/lib/digits"
import { usePersianDigitsInput } from "@/registry/bases/base/hooks/use-persian-digits-input"

type InputProps = React.ComponentProps<"input"> & {
  /**
   * Display Persian digits while keeping the logical/submitted value in ASCII.
   * - `"auto"` (default): enabled for numeric inputs (`type="number"|"tel"` or
   *   `inputMode="numeric"|"decimal"`) in a Persian/RTL locale context
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
  const {
    enabled,
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
          "cn-input w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
        {...inputProps}
        placeholder={formatPlaceholder(placeholder)}
        ref={composedRef}
        onValueChange={(next, eventDetails) => {
          const latin = enabled
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
