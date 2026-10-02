"use client"

import * as React from "react"
import { cn } from "cn"
import { createPortal } from "react-dom"

export type PlateValue = {
  left: string
  letter: string
  middle: string
  region: string
}

export const EMPTY_PLATE: PlateValue = {
  left: "",
  letter: "",
  middle: "",
  region: "",
}

export const PLATE_LETTERS = [
  { letter: "الف", label: "دولتی" },
  { letter: "ب", label: "شخصی" },
  { letter: "پ", label: "پلیس" },
  { letter: "ت", label: "تاکسی" },
  { letter: "ث", label: "سپاه" },
  { letter: "ج", label: "شخصی" },
  { letter: "د", label: "شخصی" },
  { letter: "س", label: "شخصی" },
  { letter: "ش", label: "ارتش" },
  { letter: "ص", label: "شخصی" },
  { letter: "ط", label: "شخصی" },
  { letter: "ع", label: "عمومی" },
  { letter: "ف", label: "شخصی" },
  { letter: "ق", label: "شخصی" },
  { letter: "ک", label: "معلولین" },
  { letter: "گ", label: "گذر موقت" },
  { letter: "ل", label: "شخصی" },
  { letter: "م", label: "شخصی" },
  { letter: "ن", label: "شخصی" },
  { letter: "و", label: "شخصی" },
  { letter: "ه", label: "شخصی" },
  { letter: "ی", label: "شخصی" },
] as const

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

export function isPlate(value: PlateValue) {
  return (
    /^\d{2}$/.test(value.left) &&
    Boolean(value.letter) &&
    /^\d{3}$/.test(value.middle) &&
    /^\d{2}$/.test(value.region)
  )
}

export function stringifyPlate(value: PlateValue) {
  return `${value.left}${value.letter}${value.middle}-${value.region}`
}

export function parsePlate(raw: string): PlateValue {
  const normalized = toEnDigits(raw)
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/\s+/g, "")
    .replace(/ایران/g, "")
    .replace(/iran/gi, "")

  const match = normalized.match(
    /^(\d{0,2})([آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]{0,3})(\d{0,3})-?(\d{0,2})$/u
  )

  if (!match) return { ...EMPTY_PLATE }

  let letter = match[2] ?? ""
  if (letter === "ا" || letter === "آ") letter = "الف"

  return {
    left: match[1] ?? "",
    letter,
    middle: match[3] ?? "",
    region: match[4] ?? "",
  }
}

export function plateLetterFromKey(key: string) {
  const normalized = key
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/ا|آ/g, "الف")
  return PLATE_LETTERS.some((item) => item.letter === normalized)
    ? normalized
    : null
}

type Segment = "left" | "middle" | "region"
const LENGTH: Record<Segment, number> = { left: 2, middle: 3, region: 2 }
const COLS = 7

function typedInto(old: string, next: string, max: number) {
  if (next.length <= max || old.length < max) return next.slice(0, max)
  let i = 0
  while (i < old.length && old[i] === next[i]) i++
  return next.slice(i, i + next.length - old.length).slice(0, max)
}

export interface PlateInputProps {
  value?: PlateValue
  defaultValue?: PlateValue
  onChange?: (value: PlateValue, complete: boolean) => void
  /** Limit the picker, e.g. ["ت"] on a taxi form. */
  letters?: string[]
  /** Hidden input value like «12ب345-11» for plain HTML forms. */
  name?: string
  disabled?: boolean
  className?: string
  id?: string
}

/**
 * پلاک خودرو — خود پلاک LTR است (۱۲ ب ۳۴۵ | ایران ۱۱)،
 * و انتخاب حرف با پیکر RTL انجام می‌شود.
 */
export function PlateInput({
  value,
  defaultValue = EMPTY_PLATE,
  onChange,
  letters,
  name,
  disabled,
  className,
  id,
}: PlateInputProps) {
  const [internal, setInternal] = React.useState<PlateValue>(defaultValue)
  const plate = value ?? internal
  const options = React.useMemo(
    () =>
      letters
        ? PLATE_LETTERS.filter((item) => letters.includes(item.letter))
        : [...PLATE_LETTERS],
    [letters]
  )
  const allowed = React.useMemo(
    () => new Set(options.map((item) => item.letter)),
    [options]
  )

  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState(0)
  const [hovered, setHovered] = React.useState<string | null>(null)
  const [panelStyle, setPanelStyle] = React.useState<React.CSSProperties>({})
  const root = React.useRef<HTMLDivElement>(null)
  const panel = React.useRef<HTMLDivElement>(null)
  const refs = React.useRef<
    Record<Segment | "letter", HTMLInputElement | HTMLButtonElement | null>
  >({
    left: null,
    letter: null,
    middle: null,
    region: null,
  })
  const optionRefs = React.useRef<Array<HTMLButtonElement | null>>([])
  const listId = React.useId()

  function commit(next: PlateValue) {
    if (value === undefined) setInternal(next)
    onChange?.(next, isPlate(next))
  }

  const focus = (key: Segment | "letter") => refs.current[key]?.focus()

  function chooseLetter(letter: string) {
    commit({ ...plate, letter })
    setOpen(false)
    focus("middle")
  }

  function openList() {
    setActive(
      Math.max(
        0,
        options.findIndex((item) => item.letter === plate.letter)
      )
    )
    setHovered(null)
    setOpen(true)
  }

  function onDigits(
    key: Segment,
    raw: string,
    next: Segment | "letter" | null
  ) {
    const text = toEnDigits(raw)
    if (key === "left" && /[^\d]/.test(text)) {
      const parsed = parsePlate(text)
      if (parsed.letter || parsed.middle) {
        commit(parsed)
        focus(
          parsed.region.length === 2
            ? "region"
            : parsed.middle.length === 3
              ? "region"
              : parsed.letter
                ? "middle"
                : "letter"
        )
        return
      }
    }
    const digits = typedInto(plate[key], text.replace(/\D/g, ""), LENGTH[key])
    commit({ ...plate, [key]: digits })
    if (digits.length === LENGTH[key] && next) focus(next)
  }

  function onDigitsKey(
    event: React.KeyboardEvent<HTMLInputElement>,
    key: Segment,
    prev: Segment | "letter" | null
  ) {
    if (event.key === "Backspace" && !plate[key] && prev) {
      event.preventDefault()
      focus(prev)
    }
  }

  function onLetterKey(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Backspace") {
      event.preventDefault()
      if (plate.letter) commit({ ...plate, letter: "" })
      else focus("left")
      return
    }
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "ArrowDown" ||
      event.key === "ArrowUp"
    ) {
      event.preventDefault()
      openList()
      return
    }
    if (event.key.length === 1) {
      const letter = plateLetterFromKey(event.key)
      if (letter && allowed.has(letter)) {
        event.preventDefault()
        chooseLetter(letter)
      }
    }
  }

  function onListKey(event: React.KeyboardEvent<HTMLDivElement>) {
    const total = options.length
    const move = (index: number) => {
      event.preventDefault()
      setActive(((index % total) + total) % total)
    }

    switch (event.key) {
      case "ArrowLeft":
        return move(active + 1)
      case "ArrowRight":
        return move(active - 1)
      case "ArrowDown":
        return move(active + COLS)
      case "ArrowUp":
        return move(active - COLS)
      case "Home":
        return move(0)
      case "End":
        return move(total - 1)
      case "Enter":
      case " ":
        event.preventDefault()
        return chooseLetter(options[active].letter)
      case "Escape":
        event.preventDefault()
        setOpen(false)
        return focus("letter")
      case "Tab":
        return setOpen(false)
      default: {
        const letter =
          event.key.length === 1 ? plateLetterFromKey(event.key) : null
        if (letter && allowed.has(letter)) {
          event.preventDefault()
          chooseLetter(letter)
        }
      }
    }
  }

  React.useEffect(() => {
    if (!open) return
    const onDoc = (event: MouseEvent) => {
      const target = event.target as Node
      if (root.current?.contains(target) || panel.current?.contains(target)) {
        return
      }
      setOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [open])

  React.useEffect(() => {
    if (open) optionRefs.current[active]?.focus()
  }, [open, active])

  React.useLayoutEffect(() => {
    if (!open || !root.current) return
    const update = () => {
      const rect = root.current!.getBoundingClientRect()
      const width = 260
      const left = Math.min(
        Math.max(8, rect.left + rect.width / 2 - width / 2),
        window.innerWidth - width - 8
      )
      setPanelStyle({
        position: "fixed",
        top: rect.bottom + 8,
        left,
        width,
        zIndex: 80,
      })
    }
    update()
    window.addEventListener("resize", update)
    window.addEventListener("scroll", update, true)
    return () => {
      window.removeEventListener("resize", update)
      window.removeEventListener("scroll", update, true)
    }
  }, [open])

  const digitBox =
    "h-full min-w-0 bg-transparent text-center text-lg font-bold tabular-nums text-foreground outline-none placeholder:text-muted-foreground/40 disabled:cursor-not-allowed"
  const complete = isPlate(plate)
  const described = (hovered ?? options[active]?.letter) || plate.letter
  const describedLabel = options.find(
    (item) => item.letter === described
  )?.label

  const picker = open ? (
    <div
      ref={panel}
      id={listId}
      role="listbox"
      aria-label="حرف پلاک"
      dir="rtl"
      tabIndex={-1}
      style={panelStyle}
      onKeyDown={onListKey}
      onMouseLeave={() => setHovered(null)}
      className="rounded-xl border border-border bg-popover p-2.5 text-popover-foreground shadow-lg"
    >
      <div className="grid grid-cols-7 gap-1.5">
        {options.map((item, index) => {
          const selected = item.letter === plate.letter
          return (
            <button
              key={item.letter}
              ref={(el) => {
                optionRefs.current[index] = el
              }}
              id={`${listId}-${index}`}
              type="button"
              role="option"
              aria-selected={selected}
              aria-label={`${item.letter}، ${item.label}`}
              tabIndex={index === active ? 0 : -1}
              onClick={() => chooseLetter(item.letter)}
              onMouseEnter={() => setHovered(item.letter)}
              onFocus={() => setActive(index)}
              className={cn(
                "flex h-9 cursor-pointer items-center justify-center rounded-md text-sm font-semibold transition-colors focus:outline-none",
                selected
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent focus:bg-accent",
                item.label !== "شخصی" && !selected && "text-muted-foreground"
              )}
            >
              {item.letter}
            </button>
          )
        })}
      </div>
      <p
        className="mt-2.5 border-t border-border pt-2 text-[11px] leading-relaxed text-muted-foreground"
        aria-hidden
      >
        {describedLabel ? (
          <>
            {described}
            <span className="mx-1">·</span>
            {describedLabel}
          </>
        ) : (
          "حرف پلاک را انتخاب کنید"
        )}
      </p>
    </div>
  ) : null

  return (
    <div ref={root} className={cn("relative mx-auto block w-fit", className)}>
      <div
        role="group"
        aria-label="پلاک خودرو"
        dir="ltr"
        className={cn(
          "flex h-14 items-stretch overflow-hidden rounded-lg border border-input bg-background shadow-xs transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/50",
          disabled && "opacity-50"
        )}
      >
        <div
          aria-hidden
          className="flex w-8 shrink-0 flex-col items-center justify-center gap-0.5 bg-foreground text-background"
        >
          <span className="text-[7px] leading-none font-bold">I.R.</span>
          <span className="text-[7px] leading-none font-bold">IRAN</span>
        </div>

        <input
          ref={(el) => {
            refs.current.left = el
          }}
          id={id}
          aria-label="دو رقم اول"
          inputMode="numeric"
          autoComplete="off"
          disabled={disabled}
          value={toFaDigits(plate.left)}
          placeholder="۱۲"
          onChange={(event) => onDigits("left", event.target.value, "letter")}
          onKeyDown={(event) => onDigitsKey(event, "left", null)}
          onFocus={(event) => event.target.select()}
          className={cn(digitBox, "w-11")}
        />

        <button
          ref={(el) => {
            refs.current.letter = el
          }}
          type="button"
          aria-label={plate.letter ? `حرف پلاک: ${plate.letter}` : "حرف پلاک"}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          disabled={disabled}
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={onLetterKey}
          className={cn(
            "flex min-w-11 shrink-0 cursor-pointer items-center justify-center px-1.5 text-lg font-bold transition-colors hover:bg-accent focus:bg-accent focus:outline-none disabled:cursor-not-allowed",
            !plate.letter && "text-muted-foreground/40",
            open && "bg-accent"
          )}
        >
          {plate.letter || "ب"}
        </button>

        <input
          ref={(el) => {
            refs.current.middle = el
          }}
          aria-label="سه رقم"
          inputMode="numeric"
          autoComplete="off"
          disabled={disabled}
          value={toFaDigits(plate.middle)}
          placeholder="۳۴۵"
          onChange={(event) => onDigits("middle", event.target.value, "region")}
          onKeyDown={(event) => onDigitsKey(event, "middle", "letter")}
          onFocus={(event) => event.target.select()}
          className={cn(digitBox, "w-16")}
        />

        <div className="flex w-[3.75rem] shrink-0 flex-col items-center justify-between border-s border-input px-1 pt-1 pb-1">
          <span
            aria-hidden
            className="text-[10px] leading-none text-muted-foreground"
          >
            ایران
          </span>
          <input
            ref={(el) => {
              refs.current.region = el
            }}
            aria-label="کد شهر"
            inputMode="numeric"
            autoComplete="off"
            disabled={disabled}
            value={toFaDigits(plate.region)}
            placeholder="۱۱"
            onChange={(event) => onDigits("region", event.target.value, null)}
            onKeyDown={(event) => onDigitsKey(event, "region", "middle")}
            onFocus={(event) => event.target.select()}
            className={cn(digitBox, "h-7 w-full text-base leading-none")}
          />
        </div>
      </div>

      {name ? (
        <input
          type="hidden"
          name={name}
          value={complete ? stringifyPlate(plate) : ""}
        />
      ) : null}

      {typeof document !== "undefined" && picker
        ? createPortal(picker, document.body)
        : null}
    </div>
  )
}
