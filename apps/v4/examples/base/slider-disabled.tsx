import { Slider } from "@/registry/bases/base/ui/slider"

export default function SliderDisabled() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-xs">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  )
}
