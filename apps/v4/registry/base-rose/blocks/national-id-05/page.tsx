import NationalIdCentered from "@/registry/base-rose/blocks/national-id-05/components/national-id-centered"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
    >
      <div className="flex w-full max-w-sm flex-col gap-6">
        <NationalIdCentered />
      </div>
    </div>
  )
}
