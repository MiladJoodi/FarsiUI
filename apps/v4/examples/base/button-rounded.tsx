import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"

export default function ButtonRounded() {
  return (
    <div className="flex gap-2">
      <Button className="rounded-full">شروع کنید</Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
