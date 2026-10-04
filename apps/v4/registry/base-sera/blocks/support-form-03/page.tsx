import SupportMultiStep from "@/registry/base-sera/blocks/support-form-03/components/support-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <SupportMultiStep />
      </div>
    </div>
  )
}
