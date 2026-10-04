import { ArrowUpRightIcon, FolderIcon } from "lucide-react"

import { Button, LinkButton } from "@/registry/bases/aria/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/aria/ui/empty"

export default function EmptyInCard() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <LinkButton href="#">Create project</LinkButton>
          <Button variant="outline">Import project</Button>
        </div>
        <LinkButton href="#" variant="link" className="text-muted-foreground">
          Learn more <ArrowUpRightIcon />
        </LinkButton>
      </EmptyContent>
    </Empty>
  )
}
