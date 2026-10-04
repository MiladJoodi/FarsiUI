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

export default function MessageAttachmentDemo() {
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
              این عکسه. می‌تونی به PDF اضافه کنی؟ برای جلد می‌خوام.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              انجام شد. PDF با همین عکس به‌عنوان جلد آماده‌ست.
            </BubbleContent>
          </Bubble>
          <Attachment>
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>گزارش-فروش.pdf</AttachmentTitle>
              <AttachmentDescription>PDF · ۲٫۴ مگابایت</AttachmentDescription>
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
            <BubbleContent>مرسی، خوبه.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}
