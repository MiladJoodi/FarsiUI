import { GitBranch, GitFork } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"

export default function ButtonWithIcon() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center justify-center gap-2">
      <Button variant="outline">
        فورک
        <GitFork data-icon="inline-end" />
      </Button>
      <Button variant="outline">
        <GitBranch data-icon="inline-start" /> شاخه جدید
      </Button>
    </div>
  )
}
