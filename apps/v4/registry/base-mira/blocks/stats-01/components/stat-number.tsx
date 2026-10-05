import type { ReactNode } from "react"
import { cn } from "cn"

/** Keep Persian figures tight — avoid inherited tracking / tabular gaps. */
export default function StatNumber({
  value,
  className,
}: {
  value: ReactNode
  className?: string
}) {
  return (
    <bdi
      dir="ltr"
      className={cn(
        "inline-block tracking-normal [letter-spacing:0] whitespace-nowrap",
        className
      )}
    >
      {value}
    </bdi>
  )
}
