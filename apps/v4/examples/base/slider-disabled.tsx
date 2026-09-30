import { Slider } from "@/styles/base-nova/ui/slider"

export function SliderDisabled() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-xs">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  )
}
