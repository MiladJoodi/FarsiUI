"use client"

import { GitBranchIcon, RotateCcwIcon } from "lucide-react"
import { toast } from "sonner"

import { Marker, MarkerContent, MarkerIcon } from "@/styles/base-rhea/ui/marker"

export function MarkerLinkButtonDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker render={<a href="#links-and-buttons" />}>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>مشاهدهٔ پول‌ریکوئست</MarkerContent>
      </Marker>
      <Marker
        render={
          <button
            type="button"
            className="transition-colors hover:text-foreground"
            onClick={() => toast("دکمهٔ بازگردانی را کلیک کردید")}
          />
        }
      >
        <MarkerIcon>
          <RotateCcwIcon />
        </MarkerIcon>
        <MarkerContent>بازگردانی این تغییر</MarkerContent>
      </Marker>
    </div>
  )
}
