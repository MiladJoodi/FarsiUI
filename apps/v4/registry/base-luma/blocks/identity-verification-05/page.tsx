import IdentityReview from "@/registry/base-luma/blocks/identity-verification-05/components/identity-review"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8">
      <div className="w-full max-w-xl">
        <IdentityReview />
      </div>
    </div>
  )
}
