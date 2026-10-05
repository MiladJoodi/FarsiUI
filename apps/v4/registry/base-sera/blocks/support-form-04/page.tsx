import SupportTicketStatus from "@/registry/base-sera/blocks/support-form-04/components/support-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8"
    >
      <div className="w-full max-w-xl">
        <SupportTicketStatus />
      </div>
    </div>
  )
}
