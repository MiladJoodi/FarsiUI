import IdentityStatusGallery from "@/registry/base-vega/blocks/identity-verification-06/components/identity-status-gallery"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted p-4 md:p-8">
      <div className="w-full max-w-5xl">
        <IdentityStatusGallery />
      </div>
    </div>
  )
}
