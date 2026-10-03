/** Persian digits, Jalali dates, and shared chart copy for FarsiUI demos. */

export { toPersianDigits } from "@/lib/digits"

export function formatPersianNumber(value: number) {
  return value.toLocaleString("fa-IR")
}

export function formatJalaliDate(
  value: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  }
) {
  const date = value instanceof Date ? value : new Date(value)
  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", options).format(date)
}

export function abbreviatePersianMonth(month: string) {
  return month.slice(0, 3)
}

export const FA_CHART = {
  visitorsLast6Months: "نمایش مجموع بازدیدکنندگان ۶ ماه گذشته",
  visitorsLast3Months: "نمایش مجموع بازدیدکنندگان ۳ ماه گذشته",
  trendingUp: "رشد ۵٫۲٪ در این ماه",
  rangeFarvardinShahrivar: "فروردین — شهریور ۱۴۰۳",
  desktop: "دسکتاپ",
  mobile: "موبایل",
  other: "سایر",
  visitors: "بازدیدکنندگان",
  pageViews: "بازدید صفحات",
  last3Months: "۳ ماه گذشته",
  last30Days: "۳۰ روز گذشته",
  last7Days: "۷ روز گذشته",
  selectRange: "انتخاب بازه",
  chrome: "کروم",
  safari: "سافاری",
  firefox: "فایرفاکس",
  edge: "اِج",
  running: "دویدن",
  swimming: "شنا",
  activities: "فعالیت‌ها",
  calendarDays: "شنبه — پنج‌شنبه",
} as const

export const FA_MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
] as const

export const FA_WEEKDAYS = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
] as const
