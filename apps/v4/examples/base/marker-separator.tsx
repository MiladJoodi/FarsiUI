import { Marker, MarkerContent } from "@/styles/base-rhea/ui/marker"

export default function MarkerSeparatorDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker variant="separator">
        <MarkerContent>امروز</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>۴۲ ثانیه کار کرد</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>گفتگو فشرده شد</MarkerContent>
      </Marker>
    </div>
  )
}
