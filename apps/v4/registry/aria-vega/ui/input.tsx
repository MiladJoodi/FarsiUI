"use client"

import * as React from "react"
import { cn } from "cn"
import {
  composeRenderProps,
  Input as InputPrimitive,
} from "react-aria-components"

import { usePersianDigitsInput } from "@/registry/aria-vega/hooks/use-persian-digits-input"
import { type PersianDigitsMode } from "@/registry/aria-vega/lib/digits"

type InputProps = React.ComponentProps<typeof InputPrimitive> & {
  /**
   * Display Persian digits while keeping the logical/submitted value in ASCII.
   * - `"auto"` (default): enabled in Persian contexts for text/numeric/tel.
   *   Skipped for email/password/url/file and when `data-persian-digits="false"`
   *   or `lang="en"`. `dir="ltr"` does NOT disable Persian digits.
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
  ...props
}: InputProps) {
  const dataPersianDigits =
    typeof (props as Record<string, unknown>)["data-persian-digits"] ===
    "string"
      ? String((props as Record<string, unknown>)["data-persian-digits"])
      : null

  const { setInputRef, inputProps, hiddenInput, formatPlaceholder } =
    usePersianDigitsInput({
      persianDigits,
      type,
      inputMode,
      dir: typeof dir === "string" ? dir : undefined,
      lang,
      name,
      value,
      defaultValue,
      onChange: onChange as
        | React.ChangeEventHandler<HTMLInputElement>
        | undefined,
      "data-persian-digits": dataPersianDigits,
    })

  return (
    <>
      {hiddenInput ? <input {...hiddenInput} readOnly tabIndex={-1} /> : null}
      <InputPrimitive
        data-slot="input"
        className={composeRenderProps(className, (className) =>
          cn(
            "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
            className
          )
        )}
        {...props}
        {...inputProps}
        placeholder={formatPlaceholder(
          typeof placeholder === "string" ? placeholder : undefined
        )}
        ref={(node) => {
          setInputRef(node as HTMLInputElement | null)
        }}
      />
    </>
  )
}

export { Input }
export type { InputProps }
