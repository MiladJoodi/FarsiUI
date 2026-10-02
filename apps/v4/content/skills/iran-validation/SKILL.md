---
name: iran-validation
description: >
  Validate and format Iranian identifiers correctly: national ID (کد ملی)
  checksum, legal entity ID (شناسه ملی), mobile numbers (۰۹…), landlines with
  area codes, IBAN / Sheba (شبا) mod-97, bank card numbers with Luhn and BIN
  lookup, postal code (کد پستی), vehicle plates (پلاک), and Persian/Arabic
  digit normalization. Use for signup, KYC, checkout, address, payment,
  profile, contact, or identity forms in Iranian products, or whenever the
  user mentions اعتبارسنجی، کد ملی، شناسه ملی، شبا، شماره کارت، شماره موبایل،
  تلفن ثابت، کد پستی، پلاک. Replaces US-style patterns such as SSN, ZIP codes,
  and US phone numbers with Iranian-specific formats and validation rules.
---

# Iranian validation (اعتبارسنجی ایرانی)

When building forms for Iranian users, do not automatically apply validation
patterns from US or European products. Iranian identifiers have their own
formats, check digits, numbering systems, and input conventions.

This skill covers the validation, normalization, formatting, and UI behavior
needed for common Iranian fields.

The general rule is:

> Normalize the user's input first, validate against the Iranian rules second,
> and format the value for display separately from the stored value.

Do not treat a regular expression as complete validation when the identifier
has a checksum or structural algorithm.

---

## 0. Normalize digits first

Iranian users commonly type numbers using:

* Persian digits: `۰۱۲۳۴۵۶۷۸۹`
* Arabic-Indic digits: `٠١٢٣٤٥٦٧٨٩`
* ASCII digits: `0123456789`

Before validation, convert Persian and Arabic-Indic digits to ASCII.

Also remove formatting characters that are intentionally accepted by the
field, such as spaces, hyphens, and ZWNJ.

```ts
export function normalizeIranianDigits(input: string) {
  return input
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660));
}

export function normalizeNumericInput(input: string) {
  return normalizeIranianDigits(input)
    .replace(/[\s‌_-]/g, "");
}
```

Do not blindly strip every non-digit character from every field.

For example:

* IBAN may contain `IR`.
* Vehicle plates contain Persian letters.
* International mobile numbers may contain `+`.
* Card and postal-code fields normally contain digits only.

Normalization should therefore be field-specific.

### Display vs storage

Use two representations:

* **Storage:** normalized ASCII value.
* **Display:** Persian digits and human-friendly grouping.

Never convert identifiers such as national IDs, postal codes, or card numbers
to JavaScript `number`. They are strings because leading zeros are meaningful.

---

# 1. National ID (کد ملی)

Iranian personal national IDs contain exactly 10 digits.

### Rules

* Exactly 10 digits.
* Reject values where all 10 digits are identical.
* The first nine digits participate in the checksum.
* The final digit is the check digit.
* Leading zeros are significant.

Checksum:

1. Multiply the first nine digits by weights `10` through `2`.
2. Sum the results.
3. Calculate `r = sum % 11`.
4. If `r < 2`, the check digit must equal `r`.
5. Otherwise, the check digit must equal `11 - r`.

```ts
export function isNationalId(input: string) {
  const s = normalizeNumericInput(input);

  if (!/^\d{10}$/.test(s)) return false;
  if (/^(\d)\1{9}$/.test(s)) return false;

  const check = Number(s[9]);

  const sum = [...s.slice(0, 9)].reduce(
    (acc, digit, index) => acc + Number(digit) * (10 - index),
    0
  );

  const remainder = sum % 11;

  return remainder < 2
    ? check === remainder
    : check === 11 - remainder;
}
```

### UI

```tsx
<Input
  dir="ltr"
  inputMode="numeric"
  maxLength={10}
/>
```

Label:

`کد ملی`

Errors:

* `کد ملی باید ۱۰ رقم باشد.`
* `کد ملی معتبر نیست.`

Do not validate a legal entity's identifier using the personal national ID
algorithm.

---

# 2. Legal entity ID (شناسه ملی)

The Iranian legal-entity identifier is different from a personal national ID.

Do not reuse `isNationalId()` for companies, organizations, or other legal
entities.

Treat the legal entity identifier as a separate validation rule and keep its
algorithm separate from the personal national ID implementation.

When implementing this field:

* keep it as a string;
* normalize Persian and Arabic-Indic digits;
* validate the exact expected length;
* implement the official checksum/rules separately;
* use a distinct function such as `isLegalEntityId()`.

Do not silently assume that every 10-digit identifier is a personal national
ID.

---

# 3. Mobile numbers (شماره موبایل)

The common Iranian domestic mobile format is:

`09xxxxxxxxx`

That is 11 digits beginning with `09`.

Examples:

```text
09123456789
09351234567
```

### Accepted formats

Support:

```text
09123456789
+989123456789
00989123456789
```

Normalize the international forms to one consistent storage format.

E.164 is recommended for systems that communicate with external services:

```text
+989123456789
```

A local `09...` representation can be used consistently if the application
is entirely domestic.

### Validation

After normalization:

```ts
export function isIranianMobile(input: string) {
  const value = input.trim();

  return /^(?:\+98|0098|0)?9\d{9}$/.test(value);
}
```

If the application only accepts domestic input, use the stricter form:

```ts
/09\d{9}/
```

with the appropriate anchors.

### Operator prefixes

Operator detection is only a hint.

Common prefixes include:

* `091x` → همراه اول
* `093x` → ایرانسل
* `092x` → رایتل

Do not reject a valid mobile number simply because its prefix is not in a
hard-coded operator list. Number ranges can change and additional ranges
exist.

### UI

```tsx
<Input
  dir="ltr"
  inputMode="tel"
  autoComplete="tel"
  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
/>
```

Label:

`شماره موبایل`

Display grouping:

`۰۹۱۲ ۳۴۵ ۶۷۸۹`

Error:

`شماره موبایل معتبر نیست.`

---

# 4. Landlines (تلفن ثابت)

Iranian landlines use:

* `0`
* a 2-digit area code
* 8 local digits

Total:

**11 digits**

Examples:

```text
02112345678
02612345678
03112345678
05112345678
07112345678
04112345678
```

Common area codes include:

* تهران: `021`
* کرج: `026`
* اصفهان: `031`
* مشهد: `051`
* شیراز: `071`
* تبریز: `041`

A basic structural check:

```ts
export function isIranianLandline(input: string) {
  const s = normalizeNumericInput(input);
  return /^0[1-9]\d{9}$/.test(s);
}
```

Do not use the mobile-number validation rule for landlines.

For applications that need strict geographic validation, maintain the area-code
list separately rather than embedding a large list inside a UI component.

Display example:

`۰۲۱-۱۲۳۴۵۶۷۸`

---

# 5. IBAN / Sheba (شماره شبا)

Iranian Sheba numbers use the IBAN format:

```text
IR + 2 check digits + 22 BBAN digits
```

Total:

**26 characters**

Example structure:

```text
IR12 0170 0000 0000 0000 0000 00
```

Users may enter the number:

```text
IR...
```

or sometimes only the 24 digits after `IR`.

Accepting the latter is a UI decision. If supported, prepend `IR` before
validation.

### Mod-97

Use the ISO 13616 IBAN validation process:

1. Move the first four characters to the end.
2. Convert letters to numbers:

   * `I` → `18`
   * `R` → `27`
3. Calculate the resulting number modulo `97`.
4. A valid IBAN has remainder `1`.

Do not convert the entire value to JavaScript `Number`. It is too large.

A chunked modulo implementation is safe:

```ts
export function isIranianIban(input: string) {
  let value = normalizeNumericInput(input)
    .toUpperCase()
    .replace(/\s/g, "");

  if (value.startsWith("IR")) {
    value = value.slice(2);
  }

  if (!/^\d{24}$/.test(value)) return false;

  const checkDigits = value.slice(0, 2);
  const bban = value.slice(2);

  const rearranged = `${bban}1827${checkDigits}`;

  let remainder = 0;

  for (const digit of rearranged) {
    remainder = (remainder * 10 + Number(digit)) % 97;
  }

  return remainder === 1;
}
```

### Bank code

For Iranian Sheba numbers, the bank identifier appears inside the BBAN.

Keep bank-code mappings in a dedicated data file.

Do not guess a bank name when a code is unknown.

For example:

```ts
const iranianBankCodes = {
  // "017": "بانک ملی ایران",
  // ...
} as const;
```

The mapping should be maintained independently from the validation algorithm.

### UI

```tsx
<Input
  dir="ltr"
  inputMode="text"
  autoComplete="off"
/>
```

Label:

`شماره شبا`

Helper:

`با IR یا بدون آن`

Display with groups of four characters:

`IR۱۲ ۰۱۷۰ ۰۰۰۰ ...`

---

# 6. Bank cards (شماره کارت)

Iranian bank cards normally contain:

**16 digits**

Use the Luhn checksum to detect structurally invalid card numbers.

```ts
export function isLuhnValid(input: string) {
  const s = normalizeNumericInput(input);

  if (!/^\d{16}$/.test(s)) return false;

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let digit = Number(s[i]);

    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
  }

  return sum % 10 === 0;
}
```

### BIN / bank detection

The first six digits are commonly used as the BIN/IIN.

Use BIN only for:

* showing the bank name;
* showing a bank logo;
* improving UX;
* selecting a payment flow when explicitly required.

BIN must **not** be used as proof that a card is valid, active, owned by
the user, or usable for payment.

Maintain the complete BIN table in a dedicated data file.

Do not scatter bank BINs throughout components.

Example stable mappings include:

```ts
const bankBins = {
  "603799": "بانک ملی ایران",
  "589210": "بانک سپه",
  "627353": "بانک تجارت",
  "610433": "بانک ملت",
  "603769": "بانک صادرات",
  "621986": "بانک سامان",
  "502229": "بانک پاسارگاد",
  "622106": "بانک پارسیان",
} as const;
```

The list is illustrative and should be maintained from a trusted,
up-to-date source.

### Security

Never store complete card numbers in application databases unless there is a
specific, compliant reason to do so.

For saved cards:

* store a token/reference when the payment provider supports it;
* display only the last four digits;
* never log full card numbers;
* never include full card numbers in analytics events;
* never put card numbers in URLs;
* avoid exposing them in client-side error reporting.

### UI

```tsx
<Input
  dir="ltr"
  inputMode="numeric"
  autoComplete="cc-number"
/>
```

Display:

`۶۰۳۷ ۹۹۱۱ ۲۳۴۵ ۶۷۸۹`

Accept Persian and Arabic-Indic digits when pasted.

---

# 7. Postal code (کد پستی)

Iranian postal codes contain:

**10 digits**

They are commonly displayed in two groups:

`۱۲۳۴۵-۶۷۸۹۰`

Accept:

```text
1234567890
12345-67890
```

Normalize before storage:

```text
1234567890
```

Do not invent checksum or structural rules if the application only needs the
standard 10-digit postal-code format.

```ts
export function isIranianPostalCode(input: string) {
  const s = normalizeNumericInput(input);
  return /^\d{10}$/.test(s);
}
```

UI:

```tsx
<Input
  dir="ltr"
  inputMode="numeric"
  maxLength={10}
/>
```

Label:

`کد پستی`

Error:

`کد پستی باید ۱۰ رقم باشد.`

---

# 8. Vehicle plates (پلاک خودرو)

Do not confuse:

* **پلاک خودرو** → vehicle license plate
* **پلاک** in an address → building number

A standard private Iranian vehicle plate has a structure similar to:

```text
۱۲ ب ۳۴۵ ایران ۱۱
```

The plate contains:

* 2 digits
* a Persian letter
* 3 digits
* a 2-digit regional code

For storage, a normalized representation can be used:

```text
12ب345-11
```

Display it with Persian digits and the visual arrangement expected by the
application.

### Plate letters

The set of permitted Persian letters is restricted.

Do not use a free-form text field when the plate letter can be selected from
the known allowed values.

For example:

```ts
const plateLetters = [
  "ب",
  "ج",
  "د",
  "س",
  "ص",
  "ط",
  "ع",
  "ق",
  "ل",
  "م",
  "ن",
  "و",
  "هـ",
  "ی",
];
```

The exact allowed set depends on plate type and should be maintained
separately.

Motorcycle, public-service, diplomatic, government, temporary, and other
plate types can have different structures.

**Do not assume every Iranian plate follows the private-car format.**

If the plate type is unknown, ask or detect the type before applying a strict
format.

---

# 9. Address fields

Iranian addresses should follow a natural geographic hierarchy.

Recommended order:

```text
استان
شهر
خیابان / محله
پلاک
واحد
کد پستی
```

Province and city should normally come from structured data rather than free
text.

Use:

* Select
* Combobox
* Searchable select

for province and city.

Keep:

`پلاک`

for the building number in an address context.

Do not confuse it with:

`پلاک خودرو`

for a vehicle plate.

---

# 10. Iranian digits in UI

Persian digits should be used for display when the product is Persian-first.

Examples:

```text
۱۲۳۴۵
۰۹۱۲۳۴۵۶۷۸۹
۶۰۳۷ ۹۹۱۱ ۲۳۴۵ ۶۷۸۹
```

However, storage and algorithms should normally use ASCII digits:

```text
12345
09123456789
6037991123456789
```

### Important

Do not use locale formatting that unexpectedly changes identifiers into grouped
decimal numbers.

Identifiers are strings, not numeric quantities.

---

# 11. Direction and input behavior

Persian labels and surrounding UI should remain RTL, but identifiers themselves
are easier to read and enter as LTR.

Recommended pattern:

```tsx
<div dir="rtl">
  <Label>کد ملی</Label>

  <Input
    dir="ltr"
    inputMode="numeric"
  />
</div>
```

Use:

* RTL for the form and labels.
* LTR for identifiers.
* Persian digits for display when appropriate.
* ASCII digits internally.

For mixed values such as IBAN, card numbers, phone numbers, and plate numbers,
avoid letting the browser reorder characters unexpectedly.

---

# 12. Formatting while typing

Formatting should improve readability without changing the stored value.

Examples:

### Card

Input:

```text
6037991123456789
```

Display:

```text
6037 9911 2345 6789
```

### Sheba

Input:

```text
IR123456789012345678901234
```

Display:

```text
IR12 3456 7890 1234 5678 9012 34
```

### Postal code

Input:

```text
1234567890
```

Display:

```text
12345-67890
```

Do not make formatting part of the validation algorithm.

A formatted display value should first be normalized and then validated.

---

# 13. Validation flow

Use three separate stages:

### 1. Normalize

Convert Persian/Arabic digits and remove only the formatting characters that
the field explicitly allows.

### 2. Validate

Apply:

* length checks;
* character checks;
* structural rules;
* checksum algorithms;
* field-specific rules.

### 3. Format

Convert the valid normalized value into the display format.

Conceptually:

```ts
const normalized = normalizeFieldValue(input);

if (!validateField(normalized)) {
  showError();
  return;
}

const formatted = formatField(normalized);
```

Do not validate the prettified display string directly when formatting adds
spaces, dashes, or other UI-only characters.

---

# 14. Error messages

Error messages should be short, specific, and written naturally in Persian.

Examples:

| Field      | Message                       |
| ---------- | ----------------------------- |
| کد ملی     | `کد ملی معتبر نیست.`          |
| موبایل     | `شماره موبایل معتبر نیست.`    |
| تلفن ثابت  | `شماره تلفن ثابت معتبر نیست.` |
| شبا        | `شماره شبا معتبر نیست.`       |
| کارت       | `شماره کارت معتبر نیست.`      |
| کد پستی    | `کد پستی باید ۱۰ رقم باشد.`   |
| پلاک خودرو | `پلاک خودرو معتبر نیست.`      |

For length errors, explain the expected format:

```text
کد ملی باید ۱۰ رقم باشد.
کد پستی باید ۱۰ رقم باشد.
شماره کارت باید ۱۶ رقم باشد.
```

Avoid technical messages such as:

```text
Regex validation failed.
Invalid input pattern.
MOD-97 error.
```

The user does not need to know which algorithm rejected the value.

---

# 15. Validation timing

Do not show an error on the first keystroke.

Prefer:

* validation after blur;
* validation on submit;
* or validation after the user has entered enough characters.

For fields with a known fixed length, validate progressively only when it
improves UX and does not produce premature errors.

Example:

```text
کد ملی
[۱۲۳]
```

Do not immediately show:

`کد ملی معتبر نیست.`

Wait until the user finishes the field or submits the form.

---

# 16. Security and privacy

Validation is not verification.

A valid checksum only means that an identifier has the correct mathematical
structure.

It does **not** prove:

* the identifier exists;
* the identifier belongs to the user;
* the bank account is active;
* the card is usable;
* the phone number belongs to the user.

For identity or payment flows, use a separate verification mechanism.

Examples:

* OTP for mobile ownership;
* payment-provider verification;
* official identity-verification services;
* server-side account checks.

Never rely exclusively on client-side validation.

Client-side validation is for UX. Important validation must also run on the
server.

Never log sensitive identifiers unnecessarily.

Avoid logging:

* complete national IDs;
* complete card numbers;
* complete IBANs;
* authentication codes;
* personal address information.

---

# 17. Common mistakes

### Mistake: using US validation

```ts
/^\d{9}$/
```

for an Iranian national ID is not sufficient.

### Mistake: treating national ID as a number

```ts
const nationalId = Number(input);
```

This can remove leading zeros.

Use:

```ts
const nationalId = input;
```

### Mistake: using `Number()` for IBAN

IBAN values are strings and can exceed JavaScript's safe integer range.

Use string-based modulo or `BigInt`.

### Mistake: using mobile validation for landlines

These are different identifiers.

### Mistake: rejecting unknown mobile prefixes

Operator prefix lists should not be treated as the complete definition of a
valid Iranian mobile number.

### Mistake: using BIN as card validation

BIN identifies the issuing bank range. It does not prove that the card number
is valid.

### Mistake: validating formatted values

Spaces and dashes belong to presentation, not the canonical stored value.

### Mistake: assuming all vehicle plates have one format

Iranian plate types differ.

### Mistake: confusing address plate and vehicle plate

`پلاک` in an address means building number.

`پلاک خودرو` means vehicle license plate.

---

# 18. Recommended helper structure

Keep validation logic independent from UI components.

A practical structure is:

```text
lib/
  iran/
    digits.ts
    national-id.ts
    legal-entity-id.ts
    mobile.ts
    landline.ts
    iban.ts
    card.ts
    postal-code.ts
    plate.ts
    banks.ts
    index.ts
```

Or, for a smaller project:

```text
lib/
  iranian-validation.ts
```

Do not duplicate the same validation algorithm across multiple forms.

For example, every national-ID field should use the same
`isNationalId()` implementation.

---

# 19. Example API

A shared validation API can look like:

```ts
export {
  normalizeIranianDigits,
  normalizeNumericInput,
  isNationalId,
  isLegalEntityId,
  isIranianMobile,
  isIranianLandline,
  isIranianIban,
  isLuhnValid,
  isIranianPostalCode,
  isIranianPlate,
};
```

Keep formatting helpers separate:

```ts
export {
  formatIranianDigits,
  formatCardNumber,
  formatSheba,
  formatPostalCode,
  formatMobileNumber,
  formatPlate,
};
```

Validation and formatting should not be coupled.

---

# 20. Checklist

Before shipping an Iranian form:

1. Persian digits are accepted.
2. Arabic-Indic digits are accepted where appropriate.
3. Digits are normalized before validation.
4. Identifiers are stored as strings.
5. National ID uses the Iranian checksum algorithm.
6. Legal entity ID is not validated as a personal national ID.
7. Mobile numbers use Iranian `09...` rules.
8. International mobile numbers are normalized consistently.
9. Operator detection is treated as a hint, not a validation gate.
10. Landlines use area-code rules rather than mobile rules.
11. Sheba uses the correct `IR + 24 digits` structure.
12. Sheba validation uses mod-97 without unsafe numeric conversion.
13. Bank codes are maintained separately from validation logic.
14. Card numbers use 16-digit structural validation and Luhn.
15. BIN is used for bank identification, not card acceptance.
16. Full card numbers are never unnecessarily stored or logged.
17. Postal codes use 10 digits.
18. Vehicle plates are validated according to their plate type.
19. Address `پلاک` is not confused with vehicle `پلاک`.
20. Inputs containing identifiers use `dir="ltr"` inside RTL forms.
21. Persian labels and error messages remain RTL.
22. Display formatting is separate from canonical storage.
23. Client-side validation is backed by server-side validation.
24. Validation errors are not shown prematurely.
25. Checksum validity is never presented as identity or ownership verification.
