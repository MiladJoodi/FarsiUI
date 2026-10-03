"use client"

import * as React from "react"
import { cn } from "cn"

import { type PersianDigitsMode } from "@/registry/bases/radix/lib/digits"
import { usePersianDigitsInput } from "@/registry/bases/radix/hooks/use-persian-digits-input"

type TextareaProps = React.ComponentProps<"textarea"> & {
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
  ref,
  ...props
}: TextareaProps & { ref?: React.Ref<HTMLTextAreaElement> }) {
  const dataPersianDigits =
    typeof props["data-persian-digits"] === "string"
      ? props["data-persian-digits"]
      : null

  const { setFieldRef, textareaProps, hiddenInput, formatPlaceholder } =
    usePersianDigitsInput({
      persianDigits,
      dir,
      lang,
      name,
      value,
      defaultValue,
      onChange: onChange as React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
      >,
      "data-persian-digits": dataPersianDigits,
    })

  const composedRef = React.useCallback(
    (node: HTMLTextAreaElement | null) => {
      setFieldRef(node)
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    },
    [ref, setFieldRef]
  )

  return (
    <>
      {hiddenInput ? <input {...hiddenInput} readOnly tabIndex={-1} /> : null}
      <textarea
        data-slot="textarea"
        className={cn(
          "cn-textarea flex field-sizing-content min-h-16 w-full outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
        {...textareaProps}
        placeholder={formatPlaceholder(placeholder)}
        ref={composedRef}
      />
    </>
  )
}

export { Textarea }
export type { TextareaProps }
