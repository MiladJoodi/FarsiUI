import { Marker, MarkerContent, MarkerIcon } from "@/styles/base-rhea/ui/marker"
import { Spinner } from "@/styles/base-rhea/ui/spinner"

export default function ShimmerMarker() {
  return (
    <div dir="rtl" lang="fa" className="flex w-full max-w-sm flex-col gap-4">
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent className="shimmer">در حال فکر کردن&hellip;</MarkerContent>
      </Marker>
      <Marker variant="separator" role="status">
        <MarkerContent className="shimmer">در حال خواندن ۴ فایل</MarkerContent>
      </Marker>
    </div>
  )
}
