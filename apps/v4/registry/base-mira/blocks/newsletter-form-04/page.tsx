import { NewsletterCentered } from "@/registry/base-mira/blocks/newsletter-form-04/components/newsletter-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-sm">
        <NewsletterCentered />
      </div>
    </div>
  )
}
