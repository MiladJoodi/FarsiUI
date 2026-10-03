import { describe, expect, it } from "vitest"

import {
  formatNumber,
  formatPersianNumber,
  formatPersianText,
  isLatinLockedInputType,
  isNumericInputHint,
  normalizeDigits,
  resolveNumericLocale,
  resolvePersianDigitsEnabled,
  shouldSkipPersianDigitsProps,
  shouldSkipPersianDigitsTag,
  toPersianDigits,
} from "./digits"

describe("normalizeDigits", () => {
  it("leaves Latin free-form text digits as ASCII", () => {
    expect(normalizeDigits("من 31 سال دارم")).toBe("من 31 سال دارم")
    expect(normalizeDigits("MP3")).toBe("MP3")
    expect(normalizeDigits("shell32")).toBe("shell32")
  })

  it("converts Persian and Arabic-Indic digits to ASCII", () => {
    expect(normalizeDigits("۱۲۳")).toBe("123")
    expect(normalizeDigits("١٢٣")).toBe("123")
    expect(normalizeDigits("123")).toBe("123")
  })

  it("normalizes decimal and minus separators", () => {
    expect(normalizeDigits("۱۲۳٫۵۰")).toBe("123.50")
    expect(normalizeDigits("\u2212123")).toBe("-123")
    expect(normalizeDigits("-123.50")).toBe("-123.50")
  })
})

describe("formatPersianText", () => {
  it("1. converts a year in Persian prose", () => {
    expect(formatPersianText("این محصول در سال 2026 منتشر شد.")).toBe(
      "این محصول در سال ۲۰۲۶ منتشر شد."
    )
  })

  it("2. converts multiple numbers in Persian prose", () => {
    expect(formatPersianText("۳۱ درصد از ۱۰۰ نفر در سال 2026")).toBe(
      "۳۱ درصد از ۱۰۰ نفر در سال ۲۰۲۶"
    )
    expect(formatPersianText("از 1 تا 12 ماه")).toBe("از ۱ تا ۱۲ ماه")
  })

  it("3. converts phone numbers to Persian digits", () => {
    expect(formatPersianText("09121234567")).toBe("۰۹۱۲۱۲۳۴۵۶۷")
    expect(formatPersianText("تماس: 09121234567")).toBe("تماس: ۰۹۱۲۱۲۳۴۵۶۷")
  })

  it("4. dir=ltr does not change digit conversion (phone stays Persian)", () => {
    // Walker uses formatPersianText for text nodes; dir only affects layout.
    expect(formatPersianText("09121234567")).toBe("۰۹۱۲۱۲۳۴۵۶۷")
    expect(shouldSkipPersianDigitsProps({ dir: "ltr" })).toBe(false)
    expect(
      resolvePersianDigitsEnabled({
        type: "tel",
        dir: "ltr",
        lang: "fa",
      })
    ).toBe(true)
  })

  it("5. explicit data-persian-digits=false keeps Latin", () => {
    expect(
      shouldSkipPersianDigitsProps({ "data-persian-digits": "false" })
    ).toBe(true)
    expect(
      resolvePersianDigitsEnabled({
        lang: "fa",
        "data-persian-digits": "false",
      })
    ).toBe(false)
  })

  it("8. leaves URLs unchanged", () => {
    expect(formatPersianText("https://example.com/2026")).toBe(
      "https://example.com/2026"
    )
    expect(
      formatPersianText("ببینید https://example.com/2026 و 31 درصد")
    ).toBe("ببینید https://example.com/2026 و ۳۱ درصد")
  })

  it("9. leaves emails unchanged", () => {
    expect(formatPersianText("test2026@example.com")).toBe(
      "test2026@example.com"
    )
  })

  it("18. mixed Persian/English prose converts digits outside Latin words", () => {
    expect(formatPersianText("نسخه React 18 در سال 2026")).toBe(
      "نسخه React ۱۸ در سال ۲۰۲۶"
    )
  })
})

describe("toPersianDigits / formatPersianNumber", () => {
  it("maps digits without grouping for live input", () => {
    expect(toPersianDigits("123")).toBe("۱۲۳")
    expect(toPersianDigits("123.50")).toBe("۱۲۳.۵۰")
    expect(toPersianDigits("-123")).toBe("-۱۲۳")
    expect(toPersianDigits("125000")).toBe("۱۲۵۰۰۰")
  })

  it("formats grouped prices for labels", () => {
    expect(formatPersianNumber(125000)).toBe("۱۲۵٬۰۰۰")
    expect(formatNumber(125000, "fa")).toBe("۱۲۵٬۰۰۰")
    expect(formatNumber(123, "en")).toBe("123")
  })
})

describe("skip helpers", () => {
  it("6–7. skips code-like tags (code/pre/kbd/samp)", () => {
    expect(shouldSkipPersianDigitsTag("code")).toBe(true)
    expect(shouldSkipPersianDigitsTag("pre")).toBe(true)
    expect(shouldSkipPersianDigitsTag("kbd")).toBe(true)
    expect(shouldSkipPersianDigitsTag("samp")).toBe(true)
    expect(shouldSkipPersianDigitsTag("span")).toBe(false)
  })

  it("16. skips contentEditable", () => {
    expect(shouldSkipPersianDigitsProps({ contentEditable: true })).toBe(true)
    expect(
      shouldSkipPersianDigitsProps({ contentEditable: "plaintext-only" })
    ).toBe(true)
  })

  it("17. nested opt-out via data-persian-digits protects descendants", () => {
    // Parent skip means walker returns the node unprocessed (descendants keep Latin).
    expect(
      shouldSkipPersianDigitsProps({
        "data-persian-digits": "false",
        lang: "fa",
      })
    ).toBe(true)
  })

  it("does not skip dir=ltr; does skip lang=en", () => {
    expect(shouldSkipPersianDigitsProps({ dir: "ltr" })).toBe(false)
    expect(shouldSkipPersianDigitsProps({ lang: "en" })).toBe(true)
    expect(shouldSkipPersianDigitsProps({ dir: "rtl", lang: "fa" })).toBe(
      false
    )
  })

  it("skips form control tags (input/textarea/select)", () => {
    expect(shouldSkipPersianDigitsTag("input")).toBe(true)
    expect(shouldSkipPersianDigitsTag("textarea")).toBe(true)
    expect(shouldSkipPersianDigitsTag("select")).toBe(true)
  })
})

describe("numeric detection and locale", () => {
  it("treats number/numeric/decimal as numeric, not tel", () => {
    expect(isNumericInputHint("number")).toBe(true)
    expect(isNumericInputHint(undefined, "numeric")).toBe(true)
    expect(isNumericInputHint(undefined, "decimal")).toBe(true)
    expect(isNumericInputHint("tel")).toBe(false)
    expect(isNumericInputHint("text")).toBe(false)
  })

  it("13–15. locks email/password/url; tel is NOT locked", () => {
    expect(isLatinLockedInputType("email")).toBe(true)
    expect(isLatinLockedInputType("password")).toBe(true)
    expect(isLatinLockedInputType("url")).toBe(true)
    expect(isLatinLockedInputType("tel")).toBe(false)
    expect(isLatinLockedInputType("text")).toBe(false)
    expect(isLatinLockedInputType("number")).toBe(false)
  })

  it("resolves locale; FarsiUI defaults to fa; English is explicit", () => {
    expect(resolveNumericLocale({ locale: "en" })).toBe("en")
    expect(resolveNumericLocale({ lang: "fa" })).toBe("fa")
    expect(resolveNumericLocale({ dir: "rtl" })).toBe("fa")
    expect(resolveNumericLocale({ dir: "ltr" })).toBe("fa")
    expect(resolveNumericLocale({ dir: "ltr", lang: "en" })).toBe("en")
    expect(resolveNumericLocale({})).toBe("fa")
  })

  it("10–12. Input/Textarea/numeric enable Persian in fa; password/email/url stay Latin", () => {
    // 10. Input (text)
    expect(
      resolvePersianDigitsEnabled({
        type: "text",
        lang: "fa",
      })
    ).toBe(true)

    // 11. Textarea (no type)
    expect(
      resolvePersianDigitsEnabled({
        lang: "fa",
      })
    ).toBe(true)

    // 12. numeric Input
    expect(
      resolvePersianDigitsEnabled({
        type: "number",
        lang: "fa",
      })
    ).toBe(true)

    // 13. password
    expect(
      resolvePersianDigitsEnabled({
        type: "password",
        lang: "fa",
      })
    ).toBe(false)

    // 14. email Input
    expect(
      resolvePersianDigitsEnabled({
        type: "email",
        lang: "fa",
      })
    ).toBe(false)

    // 15. URL Input
    expect(
      resolvePersianDigitsEnabled({
        type: "url",
        lang: "fa",
      })
    ).toBe(false)

    // tel + LTR phone: Persian digits
    expect(
      resolvePersianDigitsEnabled({
        type: "tel",
        dir: "ltr",
        lang: "fa",
      })
    ).toBe(true)

    // explicit Latin year
    expect(
      resolvePersianDigitsEnabled({
        type: "text",
        dir: "ltr",
        "data-persian-digits": "false",
      })
    ).toBe(false)

    // English locale
    expect(
      resolvePersianDigitsEnabled({
        type: "number",
        lang: "en",
      })
    ).toBe(false)
  })
})
