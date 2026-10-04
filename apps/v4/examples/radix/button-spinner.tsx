import { Button } from "@/registry/bases/radix/ui/button"
import { Spinner } from "@/registry/bases/radix/ui/spinner"

export default function ButtonSpinner() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Generating
      </Button>
      <Button variant="secondary" disabled>
        Downloading
        <Spinner data-icon="inline-start" />
      </Button>
    </div>
  )
}
