import { SupportPriorityForm } from "@/registry/base-mira/blocks/support-form-02/components/support-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <SupportPriorityForm />
      </div>
    </div>
  )
}
