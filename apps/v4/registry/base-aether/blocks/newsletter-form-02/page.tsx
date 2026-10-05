import NewsletterInline from "@/registry/base-aether/blocks/newsletter-form-02/components/newsletter-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <NewsletterInline />
    </div>
  )
}
