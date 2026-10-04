import DocumentPreferences from "@/registry/bases/base/blocks/document-verification-03/components/document-preferences"

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-lg">
        <DocumentPreferences />
      </div>
    </div>
  )
}
