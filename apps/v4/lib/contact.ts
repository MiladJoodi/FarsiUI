import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "نام باید حداقل ۲ کاراکتر باشد.")
    .max(100, "نام نباید بیشتر از ۱۰۰ کاراکتر باشد."),
  email: z
    .string()
    .trim()
    .min(1, "ایمیل را وارد کنید.")
    .email("ایمیل واردشده معتبر نیست.")
    .max(254, "ایمیل خیلی طولانی است."),
  subject: z
    .string()
    .trim()
    .min(2, "موضوع باید حداقل ۲ کاراکتر باشد.")
    .max(200, "موضوع نباید بیشتر از ۲۰۰ کاراکتر باشد."),
  message: z
    .string()
    .trim()
    .min(10, "پیام باید حداقل ۱۰ کاراکتر باشد.")
    .max(5000, "پیام نباید بیشتر از ۵۰۰۰ کاراکتر باشد."),
  /** Honeypot — must stay empty. */
  website: z.string().optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export type ContactFieldErrors = Partial<
  Record<keyof ContactFormValues, string>
>

export function flattenContactFieldErrors(
  error: z.ZodError<ContactFormValues>
): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {}

  for (const issue of error.issues) {
    const key = issue.path[0]
    if (
      typeof key === "string" &&
      key in contactFormSchema.shape &&
      !fieldErrors[key as keyof ContactFormValues]
    ) {
      fieldErrors[key as keyof ContactFormValues] = issue.message
    }
  }

  return fieldErrors
}
