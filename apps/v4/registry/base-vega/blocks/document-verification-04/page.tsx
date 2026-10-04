import DocumentSplitUpload from "@/registry/base-vega/blocks/document-verification-04/components/document-split-upload"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-sm md:max-w-4xl">
        <DocumentSplitUpload />
      </div>
    </div>
  )
}
