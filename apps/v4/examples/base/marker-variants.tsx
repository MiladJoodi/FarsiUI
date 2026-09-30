import { Marker, MarkerContent } from "@/styles/base-rhea/ui/marker"

export function MarkerVariantsDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <MarkerContent>نشانگر پیش‌فرض برای یادداشت‌های درخط.</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>نشانگر جداکننده</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>نشانگر حاشیه برای مرز ردیف‌ها.</MarkerContent>
      </Marker>
    </div>
  )
}
