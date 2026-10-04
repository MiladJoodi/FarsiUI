import AccountIdentityDashboard from "@/registry/bases/base/blocks/identity-verification-07/components/account-identity-dashboard"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8">
      <div className="w-full max-w-4xl">
        <AccountIdentityDashboard />
      </div>
    </div>
  )
}
