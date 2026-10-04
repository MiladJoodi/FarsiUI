import { Slider } from "@/registry/bases/base/ui/slider"

export default function SliderRtl() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-xs">
      <Slider defaultValue={[75]} max={100} step={1} dir="rtl" />
    </div>
  )
}
