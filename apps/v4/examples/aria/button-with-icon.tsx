import { GitBranch, GitFork } from "lucide-react"

import { Button } from "@/registry/bases/aria/ui/button"

export default function ButtonWithIcon() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <GitBranch data-icon="inline-start" /> New Branch
      </Button>
      <Button variant="outline">
        Fork
        <GitFork data-icon="inline-end" />
      </Button>
    </div>
  )
}
