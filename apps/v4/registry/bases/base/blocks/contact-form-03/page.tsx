import { ContactFormSplit } from "@/registry/bases/base/blocks/contact-form-03/components/contact-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-sm md:max-w-4xl">
        <ContactFormSplit />
      </div>
    </div>
  )
}
