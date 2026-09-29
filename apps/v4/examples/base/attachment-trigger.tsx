import { CopyIcon, FileSearchIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/styles/base-rhea/ui/attachment"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/styles/base-rhea/ui/dialog"

export default function AttachmentTriggerDemo() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-sm">
      <Dialog>
        <Attachment className="w-full">
          <AttachmentMedia>
            <FileSearchIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>خلاصه-تحقیق.pdf</AttachmentTitle>
            <AttachmentDescription>باز کردن پیش‌نمایش</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="کپی لینک">
              <CopyIcon />
            </AttachmentAction>
            <AttachmentAction aria-label="حذف خلاصه-تحقیق.pdf">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
          <DialogTrigger
            render={
              <AttachmentTrigger aria-label="پیش‌نمایش خلاصه-تحقیق.pdf" />
            }
          />
        </Attachment>
        <DialogContent dir="rtl" className="sm:max-w-md" showCloseButton>
          <DialogHeader>
            <DialogTitle>خلاصه-تحقیق.pdf</DialogTitle>
            <DialogDescription>
              تریگر کل کارت را پر می‌کند و دیالوگ را باز می‌کند؛ دکمه‌های عملیات
              جداگانه قابل کلیک می‌مانند.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
