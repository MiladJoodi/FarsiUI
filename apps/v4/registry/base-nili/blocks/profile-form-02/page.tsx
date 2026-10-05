import ProfileFormAvatar from "@/registry/base-nili/blocks/profile-form-02/components/profile-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <ProfileFormAvatar />
      </div>
    </div>
  )
}
