import LoginForm from "@/registry/base-nova/blocks/login-01/components/login-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
