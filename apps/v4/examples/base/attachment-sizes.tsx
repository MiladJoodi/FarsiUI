import { FileTextIcon } from "lucide-react"

import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/styles/base-rhea/ui/attachment"

export default function AttachmentSizes() {
  return (
    <div dir="rtl" className="mx-auto flex w-full max-w-sm flex-col gap-3">
      <Attachment size="default" className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>پیوست معمولی</AttachmentTitle>
          <AttachmentDescription>PDF · ۲٫۴ مگابایت</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment size="sm" className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>پیوست کوچک</AttachmentTitle>
          <AttachmentDescription>PDF · ۲٫۴ مگابایت</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment size="xs" className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>پیوست خیلی کوچک</AttachmentTitle>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}
