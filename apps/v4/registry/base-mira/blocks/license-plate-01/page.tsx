import { LicensePlateForm } from "@/registry/base-mira/blocks/license-plate-01/components/license-plate-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-md">
        <LicensePlateForm />
      </div>
    </div>
  )
}
