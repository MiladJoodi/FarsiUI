import { cn } from "cn"

import packageJson from "../../../packages/shadcn/package.json"

function toPersianDigits(value: string) {
  return value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]!)
}

export function OpenInV0Cta({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-surface px-4 py-3 text-sm text-muted-foreground",
        className
      )}
    >
      <span className="font-medium tracking-wide text-surface-foreground">
        فارسیUI{" "}
        <span className="text-muted-foreground">
          نسخه {toPersianDigits(packageJson.version)}
        </span>
      </span>
    </div>
  )
}
