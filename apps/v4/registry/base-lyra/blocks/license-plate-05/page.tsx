import LicensePlateTaxi from "@/registry/base-lyra/blocks/license-plate-05/components/license-plate-taxi"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
    >
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LicensePlateTaxi />
      </div>
    </div>
  )
}
