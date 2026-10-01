import { FileCodeIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/styles/base-rhea/ui/attachment"
import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import { Spinner } from "@/styles/base-rhea/ui/spinner"

export function AttachmentCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-3">
        <Attachment state="uploading" className="w-full">
          <AttachmentMedia>
            <Spinner />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>داشبورد-فروش.pdf</AttachmentTitle>
            <AttachmentDescription>در حال آپلود · ۶۴٪</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="لغو آپلود">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
        <Attachment className="w-full">
          <AttachmentMedia>
            <FileCodeIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>message-renderer.tsx</AttachmentTitle>
            <AttachmentDescription>
              TypeScript · ۱۲ کیلوبایت
            </AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="حذف message-renderer.tsx">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </CardContent>
    </Card>
  )
}
