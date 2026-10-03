"use client"

import * as React from "react"
import { cn } from "cn"
import {
  composeRenderProps,
  Input as InputPrimitive,
} from "react-aria-components"

import { type PersianDigitsMode } from "@/registry/bases/aria/lib/digits"
import { usePersianDigitsInput } from "@/registry/bases/aria/hooks/use-persian-digits-input"

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
            "cn-input w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
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
