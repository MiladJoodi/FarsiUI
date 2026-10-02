---
name: persian-ui-copy
description: >
  Write natural Persian (Farsi) UI microcopy for buttons, labels,
  placeholders, validation and error messages, empty states, loading,
  success messages, confirmations and notifications. Use when creating,
  rewriting or translating user-facing text for Persian and Iranian products.
  Prefer natural product language over literal translation. Includes an
  English-to-Persian UI glossary for consistent terminology.
---

# Persian UI Copy

Write Persian UI text that is clear, natural, concise and appropriate for the product context.

UI text is short, so awkward wording is immediately noticeable. Avoid both literal translations and overly formal, bureaucratic Persian.

## 1. Match the product tone

Choose the tone based on the product and keep it consistent within the same interface.

| Tone                        | Typical use                                 | Example                |
| --------------------------- | ------------------------------------------- | ---------------------- |
| Formal and natural          | Banking, B2B, admin, government, healthcare | ذخیره کنید، ادامه دهید |
| Friendly and conversational | Consumer apps, shops, onboarding, social    | ذخیره کن، ادامه بده    |

Do not mix tones unnecessarily.

For example, avoid:

> پروفایل شما با موفقیت ایجاد گردید. پروفایلت آماده‌ست.

Prefer one consistent tone throughout the interface.

## 2. UI terminology

Prefer established Persian UI terms over literal translations.

| English            | Persian          | Guidance                         |
| ------------------ | ---------------- | -------------------------------- |
| Login / Sign in    | ورود             | Avoid «لاگین» in standard UI     |
| Sign up / Register | ثبت‌نام          | Use ZWNJ                         |
| Log out            | خروج             |                                  |
| Submit             | ثبت / ارسال      | Choose based on the action       |
| Save               | ذخیره            |                                  |
| Cancel             | انصراف / لغو     | Choose based on context          |
| Delete             | حذف              |                                  |
| Edit               | ویرایش           |                                  |
| Continue           | ادامه            |                                  |
| Next               | بعدی             |                                  |
| Back               | بازگشت           |                                  |
| Previous           | قبلی             |                                  |
| Finish / Done      | پایان / انجام شد | Choose based on context          |
| Retry              | تلاش دوباره      |                                  |
| Search             | جست‌وجو          |                                  |
| Filter             | فیلتر            |                                  |
| Sort               | مرتب‌سازی        |                                  |
| Settings           | تنظیمات          |                                  |
| Profile            | پروفایل          |                                  |
| Account            | حساب کاربری      |                                  |
| Dashboard          | داشبورد          |                                  |
| Notifications      | اعلان‌ها         |                                  |
| Cart               | سبد خرید         |                                  |
| Checkout           | پرداخت           |                                  |
| Order              | سفارش            |                                  |
| Add to cart        | افزودن به سبد    |                                  |
| Buy now            | خرید             |                                  |
| Price              | قیمت             |                                  |
| Total              | جمع کل           |                                  |
| Discount           | تخفیف            |                                  |
| Coupon             | کد تخفیف         |                                  |
| Password           | رمز عبور         |                                  |
| Phone number       | شماره موبایل     | When referring to mobile numbers |
| Verification code  | کد تأیید         |                                  |
| Resend code        | ارسال دوباره کد  |                                  |
| Address            | آدرس             |                                  |
| Postal code        | کد پستی          |                                  |
| Upload             | آپلود / بارگذاری | Choose based on tone             |
| Download           | دانلود           |                                  |
| Loading            | در حال بارگذاری  |                                  |
| Help               | راهنما           |                                  |
| Support            | پشتیبانی         |                                  |
| Privacy            | حریم خصوصی       |                                  |

When there is no exact glossary entry, choose the most natural term for the context and use it consistently.

## 3. Buttons and actions

Keep button labels short and focused on the action.

Prefer:

> ذخیره
> ادامه
> پرداخت
> حذف سفارش

Avoid:

> برای ذخیره کردن کلیک کنید
> لطفاً جهت ادامه روی دکمه کلیک نمایید

Do not describe the user's gesture when the action itself is enough.

For destructive actions, name the object when it improves clarity:

> حذف سفارش

instead of:

> حذف

Use action-based labels in confirmation dialogs rather than generic «بله / خیر».

## 4. Forms

Labels should remain visible and should not depend on placeholders.

Prefer:

> **شماره موبایل**
> مثلاً ۰۹۱۲۳۴۵۶۷۸۹

Required and optional fields should be clear without unnecessary visual noise.

Error messages should explain what is wrong and, when possible, how to fix it.

Avoid:

> خطا!
> مقدار نامعتبر است.
> ورودی نامعتبر می‌باشد.

Prefer:

> شماره موبایل باید ۱۱ رقم باشد و با ۰۹ شروع شود.

Helper text should be short and useful:

> کد تأیید به این شماره پیامک می‌شود.

Do not mention technical validation rules unless they are relevant to the user.

## 5. Dialogs and confirmations

The title should describe the actual action or question.

Prefer:

> سفارش حذف شود؟

instead of:

> آیا مطمئن هستید؟

Buttons should describe the actions:

> حذف | انصراف

If the action cannot be undone, explain the consequence briefly:

> این کار قابل بازگشت نیست.

## 6. Empty, loading, success and error states

Write states so the user knows what happened and what they can do next.

| State          | Example                                             |
| -------------- | --------------------------------------------------- |
| Empty          | هنوز سفارشی ثبت نکرده‌اید.                          |
| Empty + action | هنوز سفارشی ثبت نکرده‌اید. اولین سفارش را ثبت کنید. |
| Loading        | در حال ارسال…                                       |
| Success        | سفارش ثبت شد.                                       |
| Error          | اتصال برقرار نشد. دوباره تلاش کنید.                 |
| Offline        | اینترنت قطع است.                                    |
| Not found      | این صفحه وجود ندارد. به خانه برگردید.               |

Avoid vague messages such as:

> مشکلی پیش آمد.

Say what went wrong and what the user can do next.

## 7. Numbers, dates and Persian formatting

Use Persian digits in Persian UI text:

> ۳ کالا
> ۲ ساعت پیش
> ۱٬۲۵۰٬۰۰۰ تومان
> ۲۰٪ تخفیف

Use Jalali dates when the product is Persian-first and the context expects the Persian calendar:

> ۲۹ شهریور ۱۴۰۵

Do not add a plural suffix after a number:

> ۳ کالا

not:

> ۳ کالاها

## 8. Writing rules

* Use natural Persian, not word-for-word translation.
* Keep sentences short.
* Avoid unnecessary «لطفاً»، «خواهشمندیم» and «کاربر گرامی».
* Use Persian punctuation: «،»، «؟» و «».
* Use ZWNJ where appropriate: «می‌شود»، «ثبت‌نام»، «اعلان‌ها».
* Keep product and brand names in their established form.
* Use one consistent term for the same concept throughout the interface.
* Do not make every message sound formal if the product is conversational.
* Do not make every message conversational if the product requires a formal tone.
* Avoid unnecessary exclamation marks, especially in errors.

## 9. Context matters

The same English word may need different Persian translations depending on what the interface does.

For example, `Submit` can become:

> ثبت

for a form that saves information,

or:

> ارسال

for a message or request being sent.

Likewise, `Cancel` can be:

> انصراف

for leaving a form,

or:

> لغو

for cancelling an order or operation.

Always translate according to the user's action and the product context, not the dictionary meaning alone.

## 10. Before and after

| Context       | Avoid                               | Prefer                                          |
| ------------- | ----------------------------------- | ----------------------------------------------- |
| Signup button | ارسال نمایید                        | ثبت‌نام                                         |
| Invalid phone | شماره تلفن وارد شده نامعتبر می‌باشد | شماره موبایل باید ۱۱ رقم باشد و با ۰۹ شروع شود. |
| Empty orders  | هیچ داده‌ای یافت نشد                | هنوز سفارشی ثبت نکرده‌اید.                      |
| Delete dialog | آیا مطمئن هستید؟ بله / خیر          | سفارش حذف شود؟ حذف / انصراف                     |
| Success toast | عملیات با موفقیت انجام شد           | ذخیره شد                                        |
| Price         | 12,000 Toman                        | ۱۲٬۰۰۰ تومان                                    |

## 11. Final checklist

Before returning Persian UI copy, check:

1. Is the tone consistent with the product?
2. Does the wording sound natural to a Persian-speaking user?
3. Is the text as short as the interface allows?
4. Is the terminology consistent with the rest of the product?
5. Are errors actionable rather than vague?
6. Are empty states useful rather than generic?
7. Are Persian digits, punctuation and ZWNJ used where appropriate?
8. Was the English text translated according to context rather than literally?
