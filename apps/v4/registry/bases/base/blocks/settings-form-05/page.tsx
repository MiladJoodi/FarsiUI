import { SettingsSessions } from "@/registry/bases/base/blocks/settings-form-05/components/settings-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <SettingsSessions />
      </div>
    </div>
  )
}
