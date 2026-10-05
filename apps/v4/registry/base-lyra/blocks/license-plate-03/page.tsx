import LicensePlateVehicleForm from "@/registry/base-lyra/blocks/license-plate-03/components/license-plate-vehicle-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <LicensePlateVehicleForm />
      </div>
    </div>
  )
}
