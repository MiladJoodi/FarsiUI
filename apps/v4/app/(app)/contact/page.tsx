import { type Metadata } from "next"
import Link from "next/link"
import { LinkedinIcon, MailIcon } from "lucide-react"

import { ContactForm } from "@/components/contact-form"

const title = "در ارتباط باشیم"
const description =
  "هر چیزی که فکر می‌کنید می‌تواند FarsiUI را بهتر کند، با ما در میان بگذارید."

const CONTACT_EMAIL = "info@FarsiUI.ir"
const LINKEDIN_URL = "https://www.linkedin.com/in/joodi/"
const X_URL = "https://x.com/joodi_ir"
const PULLS_URL = "https://github.com/MiladJoodi/FarsiUI/pulls"

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
  },
}

export default function ContactPage() {
  return (
    <div
      data-slot="docs"
      data-docs-kind="docs"
      dir="rtl"
      lang="fa"
      className="flex scroll-mt-24 items-stretch pb-8 text-base leading-[1.7] xl:w-full"
    >
      <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8 dark:text-foreground">
        <header className="flex flex-col gap-2">
          <h1 className="docs-page-title scroll-m-24 font-semibold tracking-tight text-primary">
            {title}
          </h1>
        </header>

        <div className="typeset w-full flex-1">
          <p>
            ساختن یک محصول فارسی نباید فقط به معنی راست‌چین کردن یک رابط کاربری
            انگلیسی و اضافه کردن چند متن فارسی باشد. فارسی، اعداد، تاریخ‌ها،
            فرم‌ها، تایپوگرافی و جزئیات تجربه کاربری خودش را دارد و باید از همان
            ابتدا در طراحی دیده شود.
          </p>
          <p>
            هر چیزی که فکر می‌کنید می‌تواند FarsiUI را بهتر کند، با ما در میان
            بگذارید. یک باگ، یک کامپوننت که جایش خالی است، یک مشکل در راست‌چین
            بودن رابط کاربری، یک ایراد در موبایل، یک پیشنهاد یا یک ایده.
          </p>
          <p>
            اگر دولوپر هستید، می‌توانید با{" "}
            <Link href={PULLS_URL} target="_blank" rel="noreferrer">
              <strong>Pull Request</strong>
            </Link>{" "}
            مستقیم در توسعه FarsiUI مشارکت کنید.
          </p>
          <p>
            <strong>اینجا منتظر نظر شما هستیم.</strong>
          </p>

          <div className="not-typeset mt-6">
            <ContactForm />

            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <span>ارتباط مستقیم</span>
              <div className="flex items-center gap-1">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <LinkedinIcon className="size-4" />
                </a>
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="size-3.5 fill-current"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  aria-label="Email"
                  className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <MailIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
