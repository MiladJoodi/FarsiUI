import { PersonalInfoForm } from "@/registry/base-maia/blocks/personal-info-05/components/personal-info-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-2xl">
        <PersonalInfoForm />
      </div>
    </div>
  )
}
