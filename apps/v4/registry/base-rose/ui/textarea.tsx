"use client"

import * as React from "react"
import { cn } from "cn"

import { usePersianDigitsInput } from "@/registry/base-rose/hooks/use-persian-digits-input"
import { type PersianDigitsMode } from "@/registry/base-rose/lib/digits"

type TextareaProps = React.ComponentProps<"textarea"> & {
  /**
   * Display Persian digits while keeping the logical/submitted value in ASCII.
   * - `"auto"` (default): enabled in Persian/RTL contexts.
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
          "flex field-sizing-content min-h-16 w-full !rounded-[var(--radius-field)] rounded-lg border !border-[var(--field-border)] border-input !bg-[var(--field)] bg-transparent px-2.5 py-2 text-base text-[var(--foreground)] !shadow-[var(--field-shadow)] transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
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
