import MultiStepIdentity from "@/registry/base-lyra/blocks/identity-verification-04/components/multi-step-identity"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8">
      <div className="w-full max-w-2xl">
        <MultiStepIdentity />
      </div>
    </div>
  )
}
