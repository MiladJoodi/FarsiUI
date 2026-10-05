import DocumentChecklist from "@/registry/base-rose/blocks/document-verification-02/components/document-checklist"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <DocumentChecklist />
      </div>
    </div>
  )
}
