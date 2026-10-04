import { Button } from "@/registry/bases/aria/ui/button"
import { Spinner } from "@/registry/bases/aria/ui/spinner"

export default function SpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button isDisabled size="sm">
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
      <Button variant="outline" isDisabled size="sm">
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
      <Button variant="secondary" isDisabled size="sm">
        <Spinner data-icon="inline-start" />
        Processing
      </Button>
    </div>
  )
}
