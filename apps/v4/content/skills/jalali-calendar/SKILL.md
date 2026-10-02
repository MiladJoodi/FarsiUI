---
name: jalali-calendar
description: >
  Handle dates and times for Iranian users: the Jalali / Solar Hijri calendar
  (تقویم شمسی، هجری خورشیدی), Saturday-first weeks, Tehran time
  (Asia/Tehran, UTC+03:30, no DST), Persian month and weekday names,
  formatting, storage, conversion, date ranges, reports, age calculations
  and holidays. Use whenever a date, time, calendar, date picker, deadline,
  booking, report period, age or holiday appears in a Persian (Farsi)
  product, or the user says تاریخ شمسی، تقویم فارسی، jalali، شنبه، نوروز.
---

# Jalali Calendar (تقویم شمسی)

Iranian users generally think about dates in the Solar Hijri (Jalali)
calendar. Dates appear in invoices, contracts, profiles, reports, bookings,
deadlines and everyday product interfaces.

A Persian product should distinguish between:

* how dates are **stored**
* how dates are **transported**
* how dates are **calculated**
* how dates are **displayed**

Do not treat a Jalali date as merely a different string format for a
Gregorian date.

## 1. The calendar in one table

| Month | Name     | Days                     |
| ----- | -------- | ------------------------ |
| 1     | فروردین  | 31                       |
| 2     | اردیبهشت | 31                       |
| 3     | خرداد    | 31                       |
| 4     | تیر      | 31                       |
| 5     | مرداد    | 31                       |
| 6     | شهریور   | 31                       |
| 7     | مهر      | 30                       |
| 8     | آبان     | 30                       |
| 9     | آذر      | 30                       |
| 10    | دی       | 30                       |
| 11    | بهمن     | 30                       |
| 12    | اسفند    | 29, or 30 in a leap year |

* The Jalali year starts at Nowruz (نوروز).
* The first day of the year falls around the March equinox and can be
  March 20 or March 21.
* Never assume that the Jalali year always begins on the same Gregorian date.
* Leap years do not follow a simple `% 4` rule.
* Use a tested Jalali/Gregorian conversion algorithm for leap-year handling.
* Do not implement leap-year logic from memory.

As a sanity check:

* `20 September 2026` = `۲۹ شهریور ۱۴۰۵`
* `21 March 2026` = `۱ فروردین ۱۴۰۵`

## 2. Week and weekend

* The week starts on **Saturday (شنبه)**.

* Calendar grids, date pickers, weekly reports and "this week" ranges should
  follow the Saturday-first convention.

* Weekday order:

  `شنبه، یکشنبه، دوشنبه، سه‌شنبه، چهارشنبه، پنجشنبه، جمعه`

* Friday is the standard weekend day.

* Working-day rules can vary by organization. Do not automatically assume
  Thursday is always a working day or always a holiday.

* When calculating business days, make the working-week configuration explicit
  when the product has organization-specific rules.

For Persian products, do not silently inherit a Monday-first calendar from an
English-oriented date picker.

## 3. Time zone

Iran uses the `Asia/Tehran` timezone.

* Timezone: `Asia/Tehran`
* Standard offset: `UTC+03:30`
* Daylight saving time is no longer observed.
* Do not apply a seasonal `+04:30` offset.
* Do not manually add or subtract `3.5` hours from timestamps.
* Always perform timezone conversion through the IANA timezone.

Example:

```ts
new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  dateStyle: "long",
  timeZone: "Asia/Tehran",
}).format(date);
```

The half-hour offset is important. Avoid code that assumes every timezone has
a whole-hour offset.

## 4. Storage and transport

Storage and presentation should remain separate.

### Database

Prefer storing an instant in a standard machine-readable representation:

* UTC ISO 8601
* Unix timestamp
* native database timestamp types

Do not use a Jalali display string as the primary source of truth for an
instant.

### API

Keep timestamps in the format required by the API, normally ISO 8601 or Unix
time.

Convert them to Jalali when presenting them to Persian users.

### Jalali form values

If a Jalali date must be sent as a form or query value, use an explicit,
predictable format such as:

```text
1405-06-29
```

Keep Latin digits in machine-readable values unless the API explicitly
requires another representation.

Validate the value by parsing and converting it rather than validating it as a
simple string pattern only.

### User-entered dates

If the user enters:

```text
۱۴۰۵/۰۶/۲۹
```

or:

```text
1405/06/29
```

normalize the input before parsing.

Do not reject a valid Persian-digit date simply because it is not ASCII.

For birth dates, contract dates and other important dates, convert the input
to a reliable internal representation and preserve the original Jalali value
only when there is a legitimate display or audit requirement.

## 5. Display formats

Use the format that matches the context.

| Context         | Format                | Example                      |
| --------------- | --------------------- | ---------------------------- |
| Short numeric   | `yyyy/mm/dd`          | `۱۴۰۵/۰۶/۲۹`                 |
| Long            | day, month name, year | `۲۹ شهریور ۱۴۰۵`             |
| With weekday    | weekday first         | `یکشنبه ۲۹ شهریور ۱۴۰۵`      |
| Time            | 24-hour               | `۱۴:۳۰`                      |
| Date and time   | date + time           | `۲۹ شهریور ۱۴۰۵، ساعت ۱۴:۳۰` |
| Relative        | Persian words         | `۲ ساعت پیش`                 |
| Relative future | Persian words         | `۳ روز دیگر`                 |
| Range           | `از … تا …`           | `از ۱ مهر تا ۱۵ مهر ۱۴۰۵`    |
| Month           | month + year          | `مهر ۱۴۰۵`                   |

Rules:

* Use Persian digits where the user reads the date.
* Use `٬` as the Persian thousands separator when needed.
* Use `٫` as the Persian decimal separator.
* Use `٪` for percentages.
* Month names must use the Persian names from the calendar.
* Do not transliterate month names.
* Do not show English month names in a Persian-only interface.
* Keep machine-readable values in their appropriate technical format.

Avoid displaying:

```text
Sep 20, 2026
```

to a Persian user unless the product is intentionally bilingual or the
Gregorian date is specifically relevant.

## 6. Using `Intl` correctly

`Intl.DateTimeFormat` can format Persian calendar dates:

```ts
new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  dateStyle: "long",
  timeZone: "Asia/Tehran",
}).format(date);
```

For Latin digits when needed:

```ts
new Intl.DateTimeFormat("fa-IR-u-ca-persian-nu-latn", {
  dateStyle: "short",
  timeZone: "Asia/Tehran",
}).format(date);
```

However, `Intl` formatting should not be confused with calendar arithmetic.

For operations such as:

* extracting Jalali year/month/day
* validating a Jalali date
* calculating leap years
* adding or subtracting Jalali months
* generating a month grid
* calculating Jalali date ranges
* comparing Jalali dates
* calculating age

use a tested calendar conversion implementation.

Do not build calendar arithmetic by manipulating formatted strings.

## 7. Date pickers

A Jalali date picker should behave like a Persian calendar, not simply display
Persian month names on top of a Gregorian grid.

* Week starts on Saturday.
* The month header uses Persian month names.
* The current Jalali year is shown.
* Previous and next navigation follow RTL.
* Previous-month navigation points right.
* Next-month navigation points left.
* Today, selected, disabled and unavailable states must remain visually
  distinguishable without relying on color alone.
* Keyboard navigation must remain functional.
* Focus state must remain visible.
* The selected date should have an accessible textual representation.
* Min/max dates must be calculated from actual dates rather than UI strings.
* Disabled dates should come from data when possible.

Example header:

```text
‹    مهر ۱۴۰۵    ›
```

The visual direction should be RTL even if the underlying date library uses
Gregorian dates internally.

## 8. Date ranges

Range selection must work with actual date values rather than comparing
formatted Jalali strings.

Use:

* `از تاریخ`
* `تا تاریخ`

for Persian range controls.

Common presets can include:

* `امروز`
* `۷ روز گذشته`
* `۳۰ روز گذشته`
* `این ماه`
* `ماه گذشته`
* `این سال`

Presets must be calculated using the correct calendar and timezone.

For example, "this month" in a Jalali report should refer to the current
Jalali month, not the current Gregorian month.

## 9. Reports and charts

When a Persian product reports dates by month, use Jalali months when the
business context is based on the Iranian calendar.

Examples:

```text
فروردین
اردیبهشت
خرداد
```

For yearly reports:

```text
۱۴۰۲
۱۴۰۳
۱۴۰۴
۱۴۰۵
```

For quarterly reports, use:

* بهار
* تابستان
* پاییز
* زمستان

Do not group a Persian business report by Gregorian months simply because the
database stores Gregorian timestamps.

When a chart crosses a year boundary, include the year with the month to avoid
ambiguity:

```text
اسفند ۱۴۰۴
فروردین ۱۴۰۵
```

## 10. Fiscal periods

Do not assume every organization uses the same fiscal calendar.

For products operating in an Iranian business context, the Jalali year may be
used as the reporting or fiscal year, but this should match the product's
actual business rules.

If the fiscal year is Jalali:

```text
۱ فروردین ۱۴۰۵ تا ۲۹/۳۰ اسفند ۱۴۰۵
```

Do not infer fiscal-year boundaries from the calendar alone when the product
has custom accounting rules.

## 11. Age and durations

Age should be calculated from reliable date values, not by simply subtracting
Jalali year numbers.

Example output:

```text
۲۴ سال
۲۴ سال و ۳ ماه
۲۴ سال و ۳ ماه و ۱۰ روز
```

For durations, calculate using actual timestamps or calendar dates first, then
format the result naturally in Persian.

Relative dates should also be localized:

```text
امروز
دیروز
فردا
۲ ساعت پیش
۳ روز دیگر
```

Do not calculate relative time using only the displayed Jalali date string.

## 12. Holidays

Do not hard-code a complete Iranian holiday list from memory.

Iranian holidays include both:

* fixed Solar Hijri dates
* holidays based on the Islamic lunar calendar

Therefore, holiday dates can change from year to year.

Holiday data should come from a maintained and trusted calendar source or an
API.

Store or map holidays to actual dates and keep their names available for:

* calendar tooltips
* disabled states
* accessibility labels
* reports
* business-day calculations

Example:

```ts
{
  date: "2026-03-21",
  name: "نوروز"
}
```

Do not assume that every holiday can be calculated from a Jalali month/day
alone.

## 13. Business days

When a product needs business-day calculations:

* Define the working days explicitly.
* Treat Friday as the default weekend day for Iranian contexts.
* Do not universally mark Thursday as a non-working day.
* Allow organizations to configure their own working calendar.
* Consider holidays separately from weekends.

For example:

```text
workingDays = [شنبه، یکشنبه، دوشنبه، سه‌شنبه، چهارشنبه، پنجشنبه]
```

may be appropriate for one organization, while another may use a
Saturday–Wednesday schedule.

## 14. Input and validation

Date inputs should accept common Persian user behavior.

Support when appropriate:

```text
۱۴۰۵/۰۶/۲۹
1405/06/29
۱۴۰۵-۰۶-۲۹
1405-06-29
```

Normalize:

* Persian digits
* Arabic-Indic digits
* separators
* surrounding whitespace

before validation.

After normalization:

1. Parse the Jalali date.
2. Validate the year, month and day.
3. Convert to a reliable internal representation.
4. Optionally convert back to Jalali to verify the conversion.

Do not validate dates with a regular expression alone.

## 15. Localization

Use Persian names consistently.

### Months

```text
فروردین
اردیبهشت
خرداد
تیر
مرداد
شهریور
مهر
آبان
آذر
دی
بهمن
اسفند
```

### Weekdays

```text
شنبه
یکشنبه
دوشنبه
سه‌شنبه
چهارشنبه
پنجشنبه
جمعه
```

Do not mix English and Persian names in the same Persian-only calendar.

## 16. Common mistakes

Avoid:

* Monday-first calendars
* Gregorian month names in Persian UI
* applying daylight saving time to Tehran
* manually adding `3.5` hours
* implementing leap years with `% 4`
* storing formatted Jalali strings as timestamps
* calculating age from displayed year numbers
* comparing dates lexically when formats differ
* hard-coding holiday lists
* using Gregorian month boundaries for Jalali reports
* assuming Thursday is always a holiday
* relying on `Intl` alone for calendar arithmetic
* showing Latin digits everywhere in user-facing dates
* reversing an entire component just to fix one RTL navigation icon

## 17. Checklist

Before returning date-related code:

1. User-facing dates use Jalali where appropriate.
2. Week starts on Saturday.
3. `Asia/Tehran` is used for Iranian local time when required.
4. No manual timezone offset calculations.
5. No daylight-saving adjustment is applied to Tehran.
6. Persian digits and Persian month names are used in visible dates.
7. Leap years use a tested algorithm.
8. Gregorian/UTC values remain the internal source of truth where appropriate.
9. Jalali input is normalized and validated correctly.
10. Date pickers use a Saturday-first grid.
11. RTL calendar navigation points in the correct direction.
12. Jalali month boundaries are used for Persian reports.
13. Age is calculated from actual date values.
14. Holidays come from maintained data.
15. Business-day rules are explicit rather than assumed.
16. Relative dates are natural Persian.
17. No English Gregorian formatting appears in Persian-only UI.
18. Date ranges and presets use the correct calendar and timezone.
