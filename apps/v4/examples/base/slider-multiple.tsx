import { Slider } from "@/registry/bases/base/ui/slider"

export default function SliderMultiple() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-xs">
      <Slider defaultValue={[10, 20, 70]} max={100} step={10} />
    </div>
  )
}
