"use client"

import { DownloadIcon, FileTextIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/styles/base-rhea/ui/attachment"
import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import { Message, MessageContent } from "@/styles/base-rhea/ui/message"

export function MessageAttachmentDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message align="end">
        <MessageContent>
          <Attachment orientation="vertical">
            <AttachmentMedia variant="image">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80"
                alt="فضای کار"
              />
            </AttachmentMedia>
          </Attachment>
          <Bubble>
            <BubbleContent>
              این تصویر است. می‌توانید به PDF اضافه کنید؟ برای صفحهٔ جلد
              استفاده کنید.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              انجام شد. این PDF با تصویر به‌عنوان صفحهٔ جلد است.
            </BubbleContent>
          </Bubble>
          <Attachment>
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
              <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction
                type="button"
                title="دانلود"
                aria-label="دانلود"
                size="icon-sm"
                variant="secondary"
              >
                <DownloadIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>ممنون. خوب به نظر می‌رسد.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}
