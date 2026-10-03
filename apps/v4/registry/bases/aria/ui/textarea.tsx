"use client"

import * as React from "react"
import { cn } from "cn"
import {
  composeRenderProps,
  TextArea as TextareaPrimitive,
} from "react-aria-components"

import { type PersianDigitsMode } from "@/registry/bases/aria/lib/digits"
import { usePersianDigitsInput } from "@/registry/bases/aria/hooks/use-persian-digits-input"

type TextareaProps = React.ComponentProps<typeof TextareaPrimitive> & {
  /**
   * Display Persian digits while keeping the logical/submitted value in ASCII.
   * - `"auto"` (default): enabled in Persian contexts.
   * - `true` / `false`: force on or off
   * - Or set `data-persian-digits="false"` on the element.
   */
  persianDigits?: PersianDigitsMode
}

function Textarea({
  className,
  dir,
  lang,
  name,
  value,
  defaultValue,
  onChange,
  placeholder,
  persianDigits = "auto",
  ...props
}: TextareaProps) {
  const dataPersianDigits =
    typeof (props as Record<string, unknown>)["data-persian-digits"] ===
    "string"
      ? String((props as Record<string, unknown>)["data-persian-digits"])
      : null

  const { setFieldRef, textareaProps, hiddenInput, formatPlaceholder } =
    usePersianDigitsInput({
      persianDigits,
      dir: typeof dir === "string" ? dir : undefined,
      lang,
      name,
      value,
      defaultValue,
      onChange: onChange as React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
      >,
      "data-persian-digits": dataPersianDigits,
    })

  return (
    <>
      {hiddenInput ? <input {...hiddenInput} readOnly tabIndex={-1} /> : null}
      <TextareaPrimitive
        data-slot="textarea"
        className={composeRenderProps(className, (className) =>
          cn(
            "cn-textarea flex field-sizing-content min-h-16 w-full outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className
          )
        )}
        {...props}
        {...textareaProps}
        placeholder={formatPlaceholder(
          typeof placeholder === "string" ? placeholder : undefined
        )}
        ref={(node) => {
          setFieldRef(node as HTMLTextAreaElement | null)
        }}
      />
    </>
  )
}

export { Textarea }
export type { TextareaProps }
