import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

import { DayPicker, faIR, getDateLib } from "./day-picker-persian"

describe("day-picker-persian (react-day-picker v10)", () => {
  it("builds a Jalali DateLib that formats Persian month/year", () => {
    const dateLib = getDateLib({ locale: faIR, numerals: "arabext" })
    // 2024-03-20 is 1403/01/01 in Jalali.
    const norooz = new Date(2024, 2, 20)
    const label = dateLib.formatMonthYear(norooz)

    expect(label).toMatch(/فروردین/)
    expect(label).toMatch(/۱۴۰۳|1403/)
  })

  it("advances months with Jalali calendar math", () => {
    const dateLib = getDateLib({ locale: faIR })
    const norooz = new Date(2024, 2, 20)
    const next = dateLib.addMonths(norooz, 1)

    expect(dateLib.format(next, "MMMM")).toMatch(/اردیبهشت/)
  })

  it("supports range-friendly week math across Jalali months", () => {
    const dateLib = getDateLib({ locale: faIR })
    const start = new Date(2024, 2, 20)
    const end = dateLib.addDays(start, 5)

    expect(dateLib.differenceInCalendarDays(end, start)).toBe(5)
  })

  it("respects timeZone + noonSafe overrides", () => {
    const dateLib = getDateLib({
      locale: faIR,
      timeZone: "Asia/Tehran",
      noonSafe: true,
    })
    const today = dateLib.today()

    expect(today.getHours()).toBe(12)
    expect(dateLib.options.timeZone).toBe("Asia/Tehran")
  })

  it("exports a DayPicker component with Persian defaults wired", () => {
    expect(typeof DayPicker).toBe("function")
    expect(faIR.code).toMatch(/^fa/)
    expect(faIR.labels?.labelNext).toContain("ماه")
  })

  it("does not import the removed /persian subpath", () => {
    const adapter = readFileSync(
      fileURLToPath(new URL("./day-picker-persian.tsx", import.meta.url)),
      "utf-8"
    )

    expect(adapter).not.toMatch(/from ["']react-day-picker\/persian["']/)
    expect(adapter).toContain('from "react-day-picker"')
    expect(adapter).toContain("date-fns-jalali")
    expect(adapter).toContain("DateLib")
  })
})
