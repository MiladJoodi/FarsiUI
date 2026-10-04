"use client"

import * as React from "react"
import { TZDate } from "@date-fns/tz"
import {
  DateLib,
  DayPicker as DayPickerComponent,
  type DateLibOptions,
  type DayPickerLocale,
  type DayPickerProps,
} from "react-day-picker"
import * as dateFnsJalali from "date-fns-jalali"
import {
  addDays as addDaysJalali,
  addMonths as addMonthsJalali,
  addWeeks as addWeeksJalali,
  addYears as addYearsJalali,
  differenceInCalendarDays as differenceInCalendarDaysJalali,
  differenceInCalendarMonths as differenceInCalendarMonthsJalali,
  eachMonthOfInterval as eachMonthOfIntervalJalali,
  eachYearOfInterval as eachYearOfIntervalJalali,
  endOfISOWeek as endOfISOWeekJalali,
  endOfMonth as endOfMonthJalali,
  endOfWeek as endOfWeekJalali,
  endOfYear as endOfYearJalali,
  getWeek as getWeekJalali,
  startOfISOWeek as startOfISOWeekJalali,
  startOfMonth as startOfMonthJalali,
  startOfWeek as startOfWeekJalali,
  startOfYear as startOfYearJalali,
} from "date-fns-jalali"
import { enUS as jalaliEnUS, faIR as jalaliFaIR } from "date-fns-jalali/locale"

/**
 * Persian/Jalali DayPicker adapter for react-day-picker v10.
 * Mirrors the official `@daypicker/persian` package using `DateLib` +
 * `date-fns-jalali` (v10 no longer ships a `/persian` subpath).
 *
 * @see https://daypicker.dev/docs/localization#persian-calendar
 */

export const faIRJalali: DayPickerLocale = {
  ...jalaliFaIR,
  labels: {
    labelDayButton: (date, modifiers, options, dateLib) => {
      const lib = dateLib ?? new DateLib(options, dateFnsJalali)
      let label = lib.format(date, "PPPP")
      if (modifiers.today) label = `امروز، ${label}`
      if (modifiers.selected) label = `${label}، انتخاب شده`
      return label
    },
    labelMonthDropdown: "ماه را انتخاب کنید",
    labelNext: "رفتن به ماه بعد",
    labelPrevious: "رفتن به ماه قبل",
    labelWeekNumber: (weekNumber) => `هفته ${weekNumber}`,
    labelYearDropdown: "سال را انتخاب کنید",
    labelGrid: (date, options, dateLib) =>
      (dateLib ?? new DateLib(options, dateFnsJalali)).formatMonthYear(date),
    labelGridcell: (date, modifiers, options, dateLib) => {
      const lib = dateLib ?? new DateLib(options, dateFnsJalali)
      let label = lib.format(date, "PPPP")
      if (modifiers?.today) label = `امروز، ${label}`
      return label
    },
    labelNav: "نوار ناوبری",
    labelWeekNumberHeader: "شماره هفته",
    labelWeekday: (date, options, dateLib) =>
      (dateLib ?? new DateLib(options, dateFnsJalali)).format(date, "cccc"),
  },
}

export const enUSJalali: DayPickerLocale = {
  ...jalaliEnUS,
  labels: {
    labelDayButton: (date, modifiers, options, dateLib) => {
      const lib = dateLib ?? new DateLib(options, dateFnsJalali)
      let label = lib.format(date, "PPPP")
      if (modifiers.today) label = `Today, ${label}`
      if (modifiers.selected) label = `${label}, selected`
      return label
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (weekNumber) => `Week ${weekNumber}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (date, options, dateLib) =>
      (dateLib ?? new DateLib(options, dateFnsJalali)).formatMonthYear(date),
    labelGridcell: (date, modifiers, options, dateLib) => {
      const lib = dateLib ?? new DateLib(options, dateFnsJalali)
      let label = lib.format(date, "PPPP")
      if (modifiers?.today) label = `Today, ${label}`
      return label
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (date, options, dateLib) =>
      (dateLib ?? new DateLib(options, dateFnsJalali)).format(date, "cccc"),
  },
}

/** Persian (Iran) Jalali locale with DayPicker labels. */
export const faIR = faIRJalali
/** English (US) Jalali locale with DayPicker labels. */
export const enUS = enUSJalali

function createJalaliNoonOverrides(
  timeZone: string,
  options: {
    weekStartsOn?: DateLibOptions["weekStartsOn"]
    locale?: DayPickerLocale
  } = {}
) {
  const { weekStartsOn, locale } = options
  const fallbackWeekStartsOn = (weekStartsOn ??
    locale?.options?.weekStartsOn ??
    6) as NonNullable<DateLibOptions["weekStartsOn"]>

  const toNoonTZDate = (date: Date | number | string) => {
    const normalizedDate =
      typeof date === "number" || typeof date === "string"
        ? new Date(date)
        : date
    return new TZDate(
      normalizedDate.getFullYear(),
      normalizedDate.getMonth(),
      normalizedDate.getDate(),
      12,
      0,
      0,
      timeZone
    )
  }

  const toCalendarDate = (date: Date | number | string) => {
    const zoned = toNoonTZDate(date)
    return new Date(
      zoned.getFullYear(),
      zoned.getMonth(),
      zoned.getDate(),
      12,
      0,
      0,
      0
    )
  }

  return {
    today: () => toNoonTZDate(TZDate.tz(timeZone)),
    newDate: (year: number, monthIndex: number, date: number) =>
      new TZDate(year, monthIndex, date, 12, 0, 0, timeZone),
    startOfDay: (date: Date | number | string) => toNoonTZDate(date),
    startOfWeek: (
      date: Date | number | string,
      startOptions?: { weekStartsOn?: DateLibOptions["weekStartsOn"] }
    ) => {
      const weekStartsOnValue =
        startOptions?.weekStartsOn ?? fallbackWeekStartsOn
      const start = startOfWeekJalali(toCalendarDate(date), {
        weekStartsOn: weekStartsOnValue,
      })
      return toNoonTZDate(start)
    },
    startOfISOWeek: (date: Date | number | string) =>
      toNoonTZDate(startOfISOWeekJalali(toCalendarDate(date))),
    startOfMonth: (date: Date | number | string) =>
      toNoonTZDate(startOfMonthJalali(toCalendarDate(date))),
    startOfYear: (date: Date | number | string) =>
      toNoonTZDate(startOfYearJalali(toCalendarDate(date))),
    endOfWeek: (
      date: Date | number | string,
      endOptions?: { weekStartsOn?: DateLibOptions["weekStartsOn"] }
    ) => {
      const weekStartsOnValue = endOptions?.weekStartsOn ?? fallbackWeekStartsOn
      const end = endOfWeekJalali(toCalendarDate(date), {
        weekStartsOn: weekStartsOnValue,
      })
      return toNoonTZDate(end)
    },
    endOfISOWeek: (date: Date | number | string) =>
      toNoonTZDate(endOfISOWeekJalali(toCalendarDate(date))),
    endOfMonth: (date: Date | number | string) =>
      toNoonTZDate(endOfMonthJalali(toCalendarDate(date))),
    endOfYear: (date: Date | number | string) =>
      toNoonTZDate(endOfYearJalali(toCalendarDate(date))),
    eachMonthOfInterval: (interval: { start: Date; end: Date }) =>
      eachMonthOfIntervalJalali({
        start: toCalendarDate(interval.start),
        end: toCalendarDate(interval.end),
      }).map((date) => toNoonTZDate(date)),
    addDays: (date: Date | number | string, amount: number) =>
      toNoonTZDate(addDaysJalali(toCalendarDate(date), amount)),
    addWeeks: (date: Date | number | string, amount: number) =>
      toNoonTZDate(addWeeksJalali(toCalendarDate(date), amount)),
    addMonths: (date: Date | number | string, amount: number) =>
      toNoonTZDate(addMonthsJalali(toCalendarDate(date), amount)),
    addYears: (date: Date | number | string, amount: number) =>
      toNoonTZDate(addYearsJalali(toCalendarDate(date), amount)),
    eachYearOfInterval: (interval: { start: Date; end: Date }) =>
      eachYearOfIntervalJalali({
        start: toCalendarDate(interval.start),
        end: toCalendarDate(interval.end),
      }).map((date) => toNoonTZDate(date)),
    getWeek: (
      date: Date | number | string,
      weekOptions?: {
        weekStartsOn?: DateLibOptions["weekStartsOn"]
        firstWeekContainsDate?: DateLibOptions["firstWeekContainsDate"]
      }
    ) =>
      getWeekJalali(toCalendarDate(date), {
        weekStartsOn: weekOptions?.weekStartsOn ?? fallbackWeekStartsOn,
        firstWeekContainsDate:
          weekOptions?.firstWeekContainsDate ??
          locale?.options?.firstWeekContainsDate ??
          1,
      }),
    differenceInCalendarDays: (
      dateLeft: Date | number | string,
      dateRight: Date | number | string
    ) =>
      differenceInCalendarDaysJalali(
        toCalendarDate(dateLeft),
        toCalendarDate(dateRight)
      ),
    differenceInCalendarMonths: (
      dateLeft: Date | number | string,
      dateRight: Date | number | string
    ) =>
      differenceInCalendarMonthsJalali(
        toCalendarDate(dateLeft),
        toCalendarDate(dateRight)
      ),
  }
}

export function getDateLib(
  options?: DateLibOptions & {
    noonSafe?: boolean
    overrides?: DayPickerProps["dateLib"]
  }
) {
  const { noonSafe, overrides, ...dateLibOptions } = options ?? {}
  const baseOverrides =
    noonSafe && dateLibOptions.timeZone
      ? {
          ...dateFnsJalali,
          ...createJalaliNoonOverrides(dateLibOptions.timeZone, {
            weekStartsOn: dateLibOptions.weekStartsOn,
            locale: dateLibOptions.locale as DayPickerLocale | undefined,
          }),
        }
      : dateFnsJalali

  return new DateLib(dateLibOptions, {
    ...baseOverrides,
    ...overrides,
  } as Partial<typeof DateLib.prototype>)
}

export type PersianDayPickerProps = DayPickerProps & {
  locale?: DayPickerLocale
  noonSafe?: boolean
}

/**
 * Persian/Jalali DayPicker for react-day-picker v10.
 *
 * Defaults: `locale=faIR`, `dir=rtl`, `numerals=arabext`, Jalali `dateLib`.
 */
export function DayPicker(props: PersianDayPickerProps) {
  const {
    locale: localeProp,
    dir,
    dateLib: dateLibProp,
    numerals,
    noonSafe,
    ...restProps
  } = props

  const dateLib = getDateLib({
    locale: localeProp,
    weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone,
    numerals: numerals ?? "arabext",
    noonSafe,
    overrides: dateLibProp,
  })

  const locale = localeProp ?? faIR

  return (
    <DayPickerComponent
      {...restProps}
      locale={locale}
      numerals={numerals ?? "arabext"}
      dir={dir ?? "rtl"}
      dateLib={dateLib}
      formatters={{
        formatWeekdayName: (date, _options, lib) => {
          const activeLib = lib ?? dateLib
          const isPersian = activeLib.options.locale?.code?.startsWith("fa")
          return activeLib.format(date, isPersian ? "ccccc" : "cccccc")
        },
        ...props.formatters,
      }}
    />
  )
}
