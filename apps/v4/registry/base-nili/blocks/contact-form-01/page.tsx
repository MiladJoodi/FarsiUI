import ContactFormSimple from "@/registry/base-nili/blocks/contact-form-01/components/contact-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-md">
        <ContactFormSimple />
      </div>
    </div>
  )
}
