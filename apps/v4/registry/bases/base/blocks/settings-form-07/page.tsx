import { SettingsTeam } from "@/registry/bases/base/blocks/settings-form-07/components/settings-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8"
    >
      <div className="w-full max-w-2xl">
        <SettingsTeam />
      </div>
    </div>
  )
}
