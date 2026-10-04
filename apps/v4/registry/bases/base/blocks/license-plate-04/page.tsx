import LicensePlateSplit from "@/registry/bases/base/blocks/license-plate-04/components/license-plate-split"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-sm md:max-w-4xl">
        <LicensePlateSplit />
      </div>
    </div>
  )
}
