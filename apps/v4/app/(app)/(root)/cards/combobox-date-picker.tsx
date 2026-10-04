import { Card, CardContent } from "@/registry/bases/base/ui/card"

const WEEKDAYS = ["ش", "ی", "د", "س", "چ", "پ", "ج"] as const
const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹"

function toFaDigits(value: number | string) {
  return String(value).replace(/\d/g, (digit) => FA_DIGITS[Number(digit)] ?? digit)
}

/** Build a decorative month grid that mirrors the real Calendar card. */
function buildDays() {
  // Visual match for a mid-month layout (empty lead cells + 31 days).
  const lead = 5
  const daysInMonth = 31
  const selected = 12
  const cells: Array<{ label: string; kind: "empty" | "day" | "selected" }> = []

  for (let i = 0; i < lead; i++) {
    cells.push({ label: "", kind: "empty" })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({
      label: toFaDigits(d),
      kind: d === selected ? "selected" : "day",
    })
  }
  return cells
}

const DAYS = buildDays()

/** Static CSS calendar — same card chrome, no date-picker JS. */
export function CalendarCard() {
  return (
    <Card className="w-full overflow-hidden" dir="rtl" aria-hidden>
      <CardContent className="px-3 py-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-medium">فروردین ۱۴۰۳</span>
            <div className="flex gap-1">
              <span className="flex size-8 items-center justify-center rounded-md text-muted-foreground">
                ‹
              </span>
              <span className="flex size-8 items-center justify-center rounded-md text-muted-foreground">
                ›
              </span>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
            {WEEKDAYS.map((day) => (
              <span key={day} className="flex h-8 items-center justify-center">
                {day}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {DAYS.map((cell, index) => {
              if (cell.kind === "empty") {
                return <span key={`e-${index}`} className="size-10" />
              }
              return (
                <span
                  key={cell.label}
                  className={
                    cell.kind === "selected"
                      ? "flex size-10 items-center justify-center rounded-md bg-primary font-medium text-primary-foreground"
                      : "flex size-10 items-center justify-center rounded-md text-foreground"
                  }
                >
                  {cell.label}
                </span>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
