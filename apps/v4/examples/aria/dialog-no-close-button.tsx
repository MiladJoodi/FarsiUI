import { Button } from "@/registry/bases/aria/ui/button"
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/aria/ui/dialog"

export default function DialogNoCloseButton() {
  return (
    <DialogTrigger>
      <Button variant="outline">No Close Button</Button>
      <Dialog showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No Close Button</DialogTitle>
          <DialogDescription>
            This dialog doesn&apos;t have a close button in the top-right
            corner.
          </DialogDescription>
        </DialogHeader>
      </Dialog>
    </DialogTrigger>
  )
}
