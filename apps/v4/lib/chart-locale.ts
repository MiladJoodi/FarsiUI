/** Persian digits, Jalali dates, toman, and shared Iranian chart copy for FarsiUI demos. */

export {
  formatPersianNumber,
  toPersianDigits,
} from "@/lib/digits"

import { formatPersianNumber } from "@/lib/digits"

export function formatJalaliDate(
  value: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  }
) {
  const date = value instanceof Date ? value : new Date(value)
  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", options).format(date)
}

/** Short Jalali month label for dense axes (e.g. فروردین → فرور). */
export function abbreviatePersianMonth(month: string) {
  if (month.length <= 4) return month
  return month.slice(0, 3)
}

/** Full month name passthrough for formatters that already receive FA_MONTHS. */
export function formatPersianMonthTick(month: string) {
  return month
}

/**
 * Format a number as Iranian toman with Persian digits.
 * Pass values already in toman (not rial).
 */
export function formatToman(
  value: number | string,
  options: { compact?: boolean; suffix?: boolean } = {}
) {
  const { compact = false, suffix = true } = options
  const n =
    typeof value === "number" ? value : Number(String(value).replace(/,/g, ""))
  if (!Number.isFinite(n)) {
    return formatPersianNumber(value)
  }

  let formatted: string
  if (compact && Math.abs(n) >= 1_000_000_000) {
    formatted = `${formatPersianNumber(n / 1_000_000_000, { useGrouping: true })} میلیارد`
  } else if (compact && Math.abs(n) >= 1_000_000) {
    formatted = `${formatPersianNumber(n / 1_000_000, { useGrouping: true })} میلیون`
  } else if (compact && Math.abs(n) >= 1_000) {
    formatted = `${formatPersianNumber(n / 1_000, { useGrouping: true })} هزار`
  } else {
    formatted = formatPersianNumber(n)
  }

  return suffix ? `${formatted} تومان` : formatted
}

/** Axis tick formatter for toman scales (compact, no suffix on every tick). */
export function formatTomanAxis(value: number | string) {
  return formatToman(value, { compact: true, suffix: false })
}

export const FA_CHART = {
  // Footers / trends
  salesLast6Months: "مجموع فروش ۶ ماه گذشته",
  salesLast3Months: "مجموع فروش ۳ ماه گذشته",
  visitorsLast6Months: "مجموع فروش ۶ ماه گذشته",
  visitorsLast3Months: "مجموع فروش ۳ ماه گذشته",
  trendingUp: "رشد ۵٫۲٪ در این ماه",
  rangeFarvardinShahrivar: "فروردین — شهریور ۱۴۰۳",

  // Channel series (replaces desktop / mobile)
  store: "فروش حضوری",
  online: "فروش آنلاین",
  desktop: "فروش حضوری",
  mobile: "فروش آنلاین",

  // Metric labels
  sales: "فروش",
  revenue: "درآمد",
  orders: "سفارش‌ها",
  visitors: "فروش",
  pageViews: "تعداد سفارش",

  // Provinces (replaces browser segments)
  tehran: "تهران",
  isfahan: "اصفهان",
  fars: "فارس",
  khorasan: "خراسان رضوی",
  other: "سایر",
  chrome: "تهران",
  safari: "اصفهان",
  firefox: "فارس",
  edge: "خراسان رضوی",

  // Payment methods
  card: "کارت بانکی",
  cash: "نقدی",
  gateway: "درگاه آنلاین",
  wallet: "کیف پول",

  // Branches
  branchTehran: "شعبه تهران",
  branchIsfahan: "شعبه اصفهان",
  branchShiraz: "شعبه شیراز",

  // Interactive ranges
  last3Months: "۳ ماه گذشته",
  last30Days: "۳۰ روز گذشته",
  last7Days: "۷ روز گذشته",
  selectRange: "انتخاب بازه",

  // Delivery / ops series (replaces running / swimming)
  delivery: "ارسال پیک",
  pickup: "تحویل حضوری",
  running: "ارسال پیک",
  swimming: "تحویل حضوری",
  activities: "کانال‌های فروش",
  calendarDays: "شنبه — پنج‌شنبه",

  // Titles
  titleMonthlySales: "فروش ماهانه شعب",
  titleSalesTrend: "روند فروش شمسی",
  titleProvinceShare: "سهم استان‌ها از فروش",
  titlePaymentShare: "سهم روش‌های پرداخت",
} as const

/** Six Jalali months used across most demos. */
export const FA_MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
] as const

/** Full Jalali calendar months. */
export const FA_MONTHS_FULL = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
] as const

export const FA_WEEKDAYS = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
] as const

/** Shared monthly sales sample (toman, compact scale for demos). */
export const FA_MONTHLY_SALES = [
  { month: FA_MONTHS[0], store: 186_000_000, online: 80_000_000 },
  { month: FA_MONTHS[1], store: 305_000_000, online: 200_000_000 },
  { month: FA_MONTHS[2], store: 237_000_000, online: 120_000_000 },
  { month: FA_MONTHS[3], store: 73_000_000, online: 190_000_000 },
  { month: FA_MONTHS[4], store: 209_000_000, online: 130_000_000 },
  { month: FA_MONTHS[5], store: 214_000_000, online: 140_000_000 },
] as const

/** Province share sample for pie / mixed bar demos. */
export const FA_PROVINCE_SALES = [
  { province: "tehran", sales: 275, fill: "var(--color-tehran)" },
  { province: "isfahan", sales: 200, fill: "var(--color-isfahan)" },
  { province: "fars", sales: 187, fill: "var(--color-fars)" },
  { province: "khorasan", sales: 173, fill: "var(--color-khorasan)" },
  { province: "other", sales: 90, fill: "var(--color-other)" },
] as const

/** Payment method share sample. */
export const FA_PAYMENT_SHARE = [
  { method: "card", sales: 320, fill: "var(--color-card)" },
  { method: "gateway", sales: 250, fill: "var(--color-gateway)" },
  { method: "cash", sales: 140, fill: "var(--color-cash)" },
  { method: "wallet", sales: 95, fill: "var(--color-wallet)" },
  { method: "other", sales: 45, fill: "var(--color-other)" },
] as const
