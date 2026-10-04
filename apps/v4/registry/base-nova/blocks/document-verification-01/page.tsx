import DocumentUploadForm from "@/registry/base-nova/blocks/document-verification-01/components/document-upload-form"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-md">
        <DocumentUploadForm />
      </div>
    </div>
  )
}
