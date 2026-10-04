import { GitBranchIcon, SearchIcon } from "lucide-react"

import { Marker, MarkerContent, MarkerIcon } from "@/styles/base-rhea/ui/marker"
import { Spinner } from "@/styles/base-rhea/ui/spinner"

export default function MarkerDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>به شاخهٔ جدید منتقل شد</MarkerContent>
      </Marker>
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent className="shimmer">در حال فکر کردن...</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>گفتگو فشرده شد</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>۴ فایل بررسی شد</MarkerContent>
      </Marker>
    </div>
  )
}
