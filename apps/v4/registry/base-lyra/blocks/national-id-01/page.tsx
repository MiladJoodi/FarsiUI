import { NationalIdForm } from "@/registry/base-lyra/blocks/national-id-01/components/national-id-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-sm">
        <NationalIdForm />
      </div>
    </div>
  )
}
