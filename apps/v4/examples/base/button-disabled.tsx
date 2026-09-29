import { Button } from "@/styles/base-nova/ui/button"

export default function ButtonDisabled() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button disabled>غیرفعال</Button>
      <Button variant="outline" disabled>
        غیرفعال
      </Button>
    </div>
  )
}
