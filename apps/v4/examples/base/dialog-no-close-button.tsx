import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"

export default function DialogNoCloseButton() {
  return (
    <div dir="rtl">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          بدون دکمه بستن
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>بدون دکمه بستن</DialogTitle>
            <DialogDescription>
              این دیالوگ دکمهٔ بستن در گوشهٔ شروع ندارد.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
