import { type Metadata } from "next"
import Link from "next/link"

import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/config"

const title = "FarsiUI برای همین ساخته شده"
const description =
  "FarsiUI یک کتابخانه کامپوننت و Design System برای ساخت تجربه‌های وب فارسی و RTL است."

const CONTACT_EMAIL = "info@FarsiUI.ir"
const LINKEDIN_URL = "https://www.linkedin.com/in/joodi/"
const X_URL = "https://x.com/joodi_ir"

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
          <p className="docs-page-description text-pretty text-muted-foreground">
            {description}
          </p>
        </header>

        <div className="typeset w-full flex-1">
          <p>
            ساختن یک محصول فارسی نباید فقط به معنی RTL کردن یک رابط انگلیسی و
            اضافه کردن چند متن فارسی باشد. فارسی، اعداد، تاریخ‌ها، فرم‌ها،
            تایپوگرافی و جزئیات تجربه کاربری خودش را دارد و باید از همان ابتدا در
            طراحی دیده شود.
          </p>
          <p>
            <strong>
              پیشنهاد شما برای بهتر شدن FarsiUI، در واقع کمک به بهتر شدن وب
              فارسی است.
            </strong>
          </p>
          <p>
            یک باگ، یک کامپوننت که جایش خالی است، یک مشکل RTL، یک ایراد در
            موبایل، یک پیشنهاد یا یک ایده؛ هر چیزی که فکر می‌کنید می‌تواند
            FarsiUI را بهتر کند، با ما در میان بگذارید.
          </p>
          <p>
            اگر دولوپر هستید، می‌توانید با{" "}
            <Link
              href={`${siteConfig.links.github}/pulls`}
              target="_blank"
              rel="noreferrer"
            >
              Pull Request
            </Link>{" "}
            در توسعه FarsiUI مشارکت کنید و مستقیماً در بهتر شدن آن نقش داشته
            باشید.
          </p>
          <p>
            <strong>اینجا منتظر نظر شما هستیم.</strong>
          </p>

          <div className="not-typeset mt-6">
            <ContactForm />

            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  dir="ltr"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  LinkedIn
                </a>
                <span aria-hidden>·</span>
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  X
                </a>
                <span aria-hidden>·</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  Email
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
