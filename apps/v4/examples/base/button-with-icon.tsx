import { IconGitBranch, IconGitFork } from "@tabler/icons-react"

import { Button } from "@/styles/base-nova/ui/button"

export default function ButtonWithIcon() {
  return (
    <div className="flex gap-2">
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
