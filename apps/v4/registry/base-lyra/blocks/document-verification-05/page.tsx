import DocumentStatusGallery from "@/registry/base-lyra/blocks/document-verification-05/components/document-status-gallery"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8"
    >
      <div className="w-full max-w-3xl">
        <DocumentStatusGallery />
      </div>
    </div>
  )
}
