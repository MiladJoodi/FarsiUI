import { XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/styles/base-rhea/ui/attachment"

const images = [
  {
    name: "فضای-کار.png",
    meta: "PNG · ۸۲۰ کیلوبایت",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
    alt: "فضای کار",
  },
  {
    name: "میز-کار.jpg",
    meta: "JPG · ۱٫۱ مگابایت",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80",
    alt: "میز کار",
  },
  {
    name: "دفتر.jpg",
    meta: "JPG · ۹۴۰ کیلوبایت",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
    alt: "دفتر",
  },
]

export default function AttachmentImage() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-sm">
      <AttachmentGroup className="w-full">
        {images.map((image) => (
          <Attachment key={image.name} orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={image.src} alt={image.alt} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{image.name}</AttachmentTitle>
              <AttachmentDescription>{image.meta}</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label={`حذف ${image.name}`}>
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
            <AttachmentTrigger
              render={
                <a
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`باز کردن ${image.name}`}
                />
              }
            />
          </Attachment>
        ))}
      </AttachmentGroup>
    </div>
  )
}
