import { IdentityInfoForm } from "@/registry/bases/base/blocks/identity-verification-01/components/identity-info-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-lg">
        <IdentityInfoForm />
      </div>
    </div>
  )
}
