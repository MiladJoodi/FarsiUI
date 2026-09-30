import { FileTextIcon, GitBranchIcon, SearchIcon } from "lucide-react"

import { Marker, MarkerContent, MarkerIcon } from "@/styles/base-rhea/ui/marker"

export function MarkerBorderDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-3 py-12">
      <Marker variant="border">
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>به release-candidate منتقل شد</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>۸ فایل مرتبط بررسی شد</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <FileTextIcon />
        </MarkerIcon>
        <MarkerContent>یادداشت‌های پیاده‌سازی باز شد</MarkerContent>
      </Marker>
    </div>
  )
}
