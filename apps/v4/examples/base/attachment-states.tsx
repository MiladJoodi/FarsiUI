import {
  CheckIcon,
  ClockIcon,
  FileTextIcon,
  FileWarningIcon,
  RefreshCwIcon,
  XIcon,
} from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/styles/base-rhea/ui/attachment"
import { Spinner } from "@/styles/base-rhea/ui/spinner"

export default function AttachmentStates() {
  return (
    <div dir="rtl" className="mx-auto flex w-full max-w-sm flex-col gap-2">
      <Attachment state="idle" className="w-full">
        <AttachmentMedia>
          <ClockIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>فایل-انتخابی.pdf</AttachmentTitle>
          <AttachmentDescription>آمادهٔ آپلود</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="حذف فایل-انتخابی.pdf">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>سیستم-طراحی.zip</AttachmentTitle>
          <AttachmentDescription>در حال آپلود · ۶۴٪</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="لغو آپلود">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="processing" className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>تحقیق-بازار.pdf</AttachmentTitle>
          <AttachmentDescription>در حال پردازش سند</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="حذف تحقیق-بازار.pdf">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="error" className="w-full">
        <AttachmentMedia>
          <FileWarningIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>مدل-مالی.xlsx</AttachmentTitle>
          <AttachmentDescription>
            آپلود ناموفق بود. دوباره تلاش کنید.
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="تلاش مجدد">
            <RefreshCwIcon />
          </AttachmentAction>
          <AttachmentAction aria-label="حذف مدل-مالی.xlsx">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="done" className="w-full">
        <AttachmentMedia>
          <CheckIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>گزارش-آپلودشده.pdf</AttachmentTitle>
          <AttachmentDescription>آپلود شد · ۱٫۸ مگابایت</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="حذف گزارش-آپلودشده.pdf">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  )
}
