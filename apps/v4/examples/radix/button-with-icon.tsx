import { GitBranch } from "lucide-react"

import { Button } from "@/styles/radix-nova/ui/button"

export default function ButtonWithIcon() {
  return (
    <Button variant="outline" size="sm">
      <GitBranch /> New Branch
    </Button>
  )
}
