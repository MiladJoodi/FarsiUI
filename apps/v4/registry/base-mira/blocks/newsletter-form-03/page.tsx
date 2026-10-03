import { NewsletterTopics } from "@/registry/base-mira/blocks/newsletter-form-03/components/newsletter-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-md">
        <NewsletterTopics />
      </div>
    </div>
  )
}
