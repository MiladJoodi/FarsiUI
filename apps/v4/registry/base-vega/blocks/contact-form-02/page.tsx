import ContactFormFeedback from "@/registry/base-vega/blocks/contact-form-02/components/contact-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <ContactFormFeedback />
      </div>
    </div>
  )
}
