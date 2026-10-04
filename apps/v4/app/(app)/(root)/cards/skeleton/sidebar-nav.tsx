import { Card } from "@/registry/bases/base/ui/card"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

function NavSection() {
  return (
    <Card className="w-full rounded-3xl py-0">
      <div className="flex flex-col gap-1 px-2 py-2">
        <Skeleton className="mx-2 mb-1 h-3 w-16 rounded-md" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2 rounded-md px-2 py-2">
            <Skeleton className="size-4 rounded-md" />
            <Skeleton className="h-3 w-24 rounded-md" />
          </div>
        ))}
      </div>
    </Card>
  )
}

export function SidebarNav() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 xl:gap-6">
      <NavSection />
      <NavSection />
    </div>
  )
}
