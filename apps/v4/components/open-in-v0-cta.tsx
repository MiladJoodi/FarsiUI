import { cn } from "cn"

import packageJson from "../../../packages/shadcn/package.json"

export function OpenInV0Cta({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-surface px-4 py-3 text-sm text-muted-foreground",
        className
      )}
    >
      <span className="font-medium tracking-wide text-surface-foreground">
        FarsiUI{" "}
        <span className="font-mono text-muted-foreground" dir="ltr">
          v{packageJson.version}
        </span>
      </span>
    </div>
  )
}
