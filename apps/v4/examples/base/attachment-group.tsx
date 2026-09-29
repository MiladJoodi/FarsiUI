import {
  FileCodeIcon,
  FileTextIcon,
  TableIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/styles/base-rhea/ui/attachment"

type Item = {
  name: string
  meta: string
  icon?: LucideIcon
  src?: string
}

const items: Item[] = [
  { name: "یادداشت.pdf", meta: "PDF · ۱٫۴ مگابایت", icon: FileTextIcon },
  {
    name: "فضای-کار.png",
    meta: "PNG · ۸۲۰ کیلوبایت",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
  },
  { name: "مشتریان.csv", meta: "CSV · ۱۸ کیلوبایت", icon: TableIcon },
  { name: "renderer.tsx", meta: "TSX · ۱۲ کیلوبایت", icon: FileCodeIcon },
]

export default function AttachmentGroupDemo() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-sm">
      <AttachmentGroup className="w-full">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <Attachment key={item.name} className="w-64">
              {item.src ? (
                <AttachmentMedia variant="image">
                  <img src={item.src} alt={item.name} />
                </AttachmentMedia>
              ) : Icon ? (
                <AttachmentMedia>
                  <Icon />
                </AttachmentMedia>
              ) : null}
              <AttachmentContent>
                <AttachmentTitle>{item.name}</AttachmentTitle>
                <AttachmentDescription>{item.meta}</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label={`حذف ${item.name}`}>
                  <XIcon />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
          )
        })}
      </AttachmentGroup>
    </div>
  )
}
