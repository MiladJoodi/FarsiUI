import { type Metadata } from "next"

import { ContactForm } from "@/components/contact-form"

const title = "در ارتباط باشیم"
const description =
  "باگ، پیشنهاد، سوال یا ایده — هر چیزی که به ذهنتان می‌رسد را با تیم فارسیUI در میان بگذارید."

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
      <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-5 px-4 py-6 text-foreground md:px-0 lg:py-8 dark:text-foreground">
        <header className="flex flex-col gap-2">
          <h1 className="docs-page-title scroll-m-24 font-semibold tracking-tight text-primary">
            {title}
          </h1>
          <p className="docs-page-description text-pretty text-muted-foreground">
            اینجا می‌تونید هر چیزی رو که به ذهنتون می‌رسه با ما در میون بذارید؛
            از گزارش باگ و پیشنهاد قابلیت جدید گرفته تا سوال، همکاری یا ایده‌ای
            برای بهتر شدن پروژه.
          </p>
        </header>

        <div className="typeset w-full flex-1">
          <p>
            اگر دولوپر هستید و می‌خواید در توسعه FarsiUI مشارکت کنید، از Pull
            Request و مشارکتتون استقبال می‌کنیم.
          </p>

          <div className="not-typeset mt-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
