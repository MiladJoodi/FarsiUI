import { Slider } from "@/styles/base-nova/ui/slider"

export function SliderRange() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-xs">
      <Slider defaultValue={[25, 50]} max={100} step={5} />
    </div>
  )
}
