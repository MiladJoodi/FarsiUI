import { Button } from "@/styles/base-nova/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/styles/base-nova/ui/dialog"
import { Input } from "@/styles/base-nova/ui/input"
import { Label } from "@/styles/base-nova/ui/label"

export function DialogCloseButton() {
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
                defaultValue="https://ui.farsiui.com/docs/installation"
                readOnly
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose render={<Button type="button" />}>بستن</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
