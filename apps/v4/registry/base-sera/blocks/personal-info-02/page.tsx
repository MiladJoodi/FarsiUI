import { PersonalInfoForm } from "@/registry/base-sera/blocks/personal-info-02/components/personal-info-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm">
        <PersonalInfoForm />
      </div>
    </div>
  )
}
