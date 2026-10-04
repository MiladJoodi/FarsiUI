"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, IdCardIcon } from "lucide-react"

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹"
const EN_DIGITS = "0123456789"

function toFaDigits(value: string) {
  return value.replace(/\d/g, (digit) => FA_DIGITS[Number(digit)] ?? digit)
}

function toEnDigits(value: string) {
  return value.replace(/[۰-۹]/g, (digit) => {
    const index = FA_DIGITS.indexOf(digit)
    return index >= 0 ? EN_DIGITS[index] : digit
  })
}

/** Keep only Latin digits, max 10 (leading zero preserved as string). */
export function normalizeNationalId(value: string) {
  return toEnDigits(value).replace(/\D/g, "").slice(0, 10)
}

/** 3-6-1 grouping as printed on the card: ۰۰۱-۲۳۴۵۶۷-۸ */
export function formatNationalId(digits: string) {
  const d = normalizeNationalId(digits)
  const a = d.slice(0, 3)
  const b = d.slice(3, 9)
  const c = d.slice(9, 10)
  let out = a
  if (b) out += `-${b}`
  if (c) out += `-${c}`
  return toFaDigits(out)
}

/** Iranian national ID checksum (10 digits). */
export function isNationalId(digits: string) {
  const d = normalizeNationalId(digits)
  if (!/^\d{10}$/.test(d)) return false
  if (/^(\d)\1{9}$/.test(d)) return false

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += Number(d[i]) * (10 - i)
  }
  const rem = sum % 11
  const check = Number(d[9])
  return rem < 2 ? check === rem : check === 11 - rem
}

export interface NationalIdInputProps {
  value?: string
  /** Receives the 10 raw digits (Latin, may start with 0) and validity. */
  onChange?: (digits: string, valid: boolean) => void
  className?: string
  id?: string
  name?: string
  autoFocus?: boolean
  disabled?: boolean
}

/**
 * کد ملی — ارقام فارسی با گروه‌بندی ۳-۶-۱ کارت ملی،
 * اعتبارسنجی checksum فقط وقتی ۱۰ رقم کامل شد.
 */
export default function NationalIdInput({
  value,
  onChange,
  className,
  id,
  name,
  autoFocus,
  disabled,
}: NationalIdInputProps) {
  const [internal, setInternal] = React.useState("")
  const digits = normalizeNationalId(value ?? internal)
  const complete = digits.length === 10
  const valid = isNationalId(digits)
  const invalid = complete && !valid

  function set(next: string) {
    const d = normalizeNationalId(next)
    if (value === undefined) setInternal(d)
    onChange?.(d, isNationalId(d))
  }

  return (
    <div className={cn("space-y-1.5", className)}>
      <div
        className={cn(
          "flex h-10 items-center gap-2 rounded-lg border bg-background px-3 shadow-xs transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/50",
          invalid ? "border-destructive" : "border-input",
          disabled && "opacity-50"
        )}
        dir="ltr"
      >
        <IdCardIcon className="size-4 shrink-0 text-muted-foreground" />
        <input
          id={id}
          name={name}
          inputMode="numeric"
          autoComplete="off"
          autoFocus={autoFocus}
          disabled={disabled}
          value={formatNationalId(digits)}
          onChange={(event) => set(event.target.value)}
          placeholder="۰۰۱-۲۳۴۵۶۷-۸"
          maxLength={12}
          className="h-full min-w-0 flex-1 bg-transparent text-sm tabular-nums outline-none placeholder:text-muted-foreground/50 disabled:cursor-not-allowed"
          aria-invalid={invalid ? true : undefined}
          aria-describedby={id ? `${id}-hint` : undefined}
        />
        {valid ? (
          <CheckIcon className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
        ) : null}
      </div>
      <p
        id={id ? `${id}-hint` : undefined}
        className="text-[11px] text-muted-foreground"
        aria-live="polite"
      >
        {valid ? (
          "کد ملی معتبر است"
        ) : invalid ? (
          <span className="text-destructive">
            کد ملی معتبر نیست؛ رقم‌ها را دوباره بررسی کنید
          </span>
        ) : (
          "ده رقم، همان‌طور که روی کارت ملی چاپ شده"
        )}
      </p>
    </div>
  )
}
