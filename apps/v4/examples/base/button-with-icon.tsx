import { IconGitBranch, IconGitFork } from "@tabler/icons-react"

import { Button } from "@/styles/base-nova/ui/button"

export default function ButtonWithIcon() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center justify-center gap-2">
      <Button variant="outline">
        فورک
        <IconGitFork data-icon="inline-end" />
      </Button>
      <Button variant="outline">
        <IconGitBranch data-icon="inline-start" /> شاخه جدید
      </Button>
    </div>
  )
}
