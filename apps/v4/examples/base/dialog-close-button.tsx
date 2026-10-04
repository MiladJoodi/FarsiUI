import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"

export default function DialogCloseButton() {
  return (
    <div dir="rtl">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          اشتراک‌گذاری
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>اشتراک لینک</DialogTitle>
            <DialogDescription>
              هر کسی این لینک را داشته باشد می‌تواند محتوا را ببیند.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                لینک
              </Label>
              <Input
                id="link"
                dir="ltr"
                defaultValue="https://ui.farsiui.com/docs/installation"
                readOnly
                className="text-left"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose render={<Button type="button" />}>بستن</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
