import IdentityCivilCheck from "@/registry/base-vega/blocks/identity-verification-03/components/identity-civil-check"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-md">
        <IdentityCivilCheck />
      </div>
    </div>
  )
}
