import LicensePlateInspector from "@/registry/base-vega/blocks/license-plate-02/components/license-plate-inspector"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8"
    >
      <div className="w-full max-w-3xl">
        <LicensePlateInspector />
      </div>
    </div>
  )
}
