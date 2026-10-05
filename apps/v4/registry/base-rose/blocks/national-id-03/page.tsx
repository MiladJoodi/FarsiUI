import NationalIdProfileForm from "@/registry/base-rose/blocks/national-id-03/components/national-id-profile-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <NationalIdProfileForm />
      </div>
    </div>
  )
}
