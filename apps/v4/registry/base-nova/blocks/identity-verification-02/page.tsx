import NationalCardUpload from "@/registry/base-nova/blocks/identity-verification-02/components/national-card-upload"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8">
      <div className="w-full max-w-4xl">
        <NationalCardUpload />
      </div>
    </div>
  )
}
