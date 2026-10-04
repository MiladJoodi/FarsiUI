"use client"

import * as React from "react"
import { cn } from "cn"
import {
  composeRenderProps,
  TextArea as TextareaPrimitive,
} from "react-aria-components"

import { usePersianDigitsInput } from "@/registry/aria-mira/hooks/use-persian-digits-input"
import { type PersianDigitsMode } from "@/registry/aria-mira/lib/digits"

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
            "flex field-sizing-content min-h-16 w-full resize-none rounded-md border border-input bg-input/20 px-2 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
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
