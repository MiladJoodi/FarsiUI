import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/styles/base-nova/ui/progress"

export default function ProgressRtl() {
  return (
    <div dir="rtl" className="w-full max-w-sm">
      <Progress value={56} className="w-full">
        <ProgressLabel>پیشرفت آپلود</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  )
}
