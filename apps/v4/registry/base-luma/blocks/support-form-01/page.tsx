import { SupportRequestForm } from "@/registry/base-luma/blocks/support-form-01/components/support-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <SupportRequestForm />
      </div>
    </div>
  )
}
