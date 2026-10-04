import Link from "next/link"
import { MailIcon } from "lucide-react"
import { cn } from "cn"

import { Button } from "@/registry/new-york-v4/ui/button"

export function ContactLink({
  className,
}: {
  className?: string
}) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className={cn("extend-touch-target size-8", className)}
    >
      <Link href="/contact" aria-label="تماس با ما">
        <MailIcon className="size-4.5" />
      </Link>
    </Button>
  )
}
