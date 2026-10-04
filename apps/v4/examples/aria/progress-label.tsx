import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/bases/aria/ui/progress"

export default function ProgressWithLabel() {
  return (
    <Progress value={56} className="w-full max-w-sm">
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}
