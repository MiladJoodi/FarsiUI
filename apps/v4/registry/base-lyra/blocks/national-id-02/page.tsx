import NationalIdValidator from "@/registry/base-lyra/blocks/national-id-02/components/national-id-validator"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8"
    >
      <div className="w-full max-w-3xl">
        <NationalIdValidator />
      </div>
    </div>
  )
}
