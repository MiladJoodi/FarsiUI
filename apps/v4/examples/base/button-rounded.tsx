import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"

export default function ButtonRounded() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center justify-center gap-2">
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
      <Button className="rounded-full">شروع کنید</Button>
    </div>
  )
}
