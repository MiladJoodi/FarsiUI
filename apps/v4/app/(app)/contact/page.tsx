import { type Metadata } from "next"

import { ContactForm } from "@/components/contact-form"

const title = "تماس با ما"
const description = "راه‌های ارتباط با تیم فارسیUI."

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
            سؤال، پیشنهاد یا گزارش مشکل دارید؟ فرم زیر را پر کنید تا پیام‌تان
            مستقیم به تیم فارسیUI برسد.
          </p>

          <div className="not-typeset mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
