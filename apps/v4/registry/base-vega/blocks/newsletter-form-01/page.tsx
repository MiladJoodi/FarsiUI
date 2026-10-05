import NewsletterCard from "@/registry/base-vega/blocks/newsletter-form-01/components/newsletter-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-sm">
        <NewsletterCard />
      </div>
    </div>
  )
}
