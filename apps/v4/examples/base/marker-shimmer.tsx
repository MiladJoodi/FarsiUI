import { Marker, MarkerContent } from "@/styles/base-rhea/ui/marker"

export default function MarkerShimmerDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker role="status">
        <MarkerContent className="shimmer">در حال فکر کردن...</MarkerContent>
      </Marker>
      <Marker variant="separator" role="status">
        <MarkerContent className="shimmer">در حال خواندن ۴ فایل</MarkerContent>
      </Marker>
    </div>
  )
}
