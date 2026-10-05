import ForgotPasswordMethods from "@/registry/base-rose/blocks/forgot-password-03/components/forgot-password-methods"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-md">
        <ForgotPasswordMethods />
      </div>
    </div>
  )
}
