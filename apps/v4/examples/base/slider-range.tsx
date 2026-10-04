import { Slider } from "@/registry/bases/base/ui/slider"

export default function SliderRange() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-xs">
      <Slider defaultValue={[25, 50]} max={100} step={5} />
    </div>
  )
}
