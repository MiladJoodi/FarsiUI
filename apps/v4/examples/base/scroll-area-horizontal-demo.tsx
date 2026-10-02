import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/styles/base-nova/ui/scroll-area"

const places = [
  {
    title: "حافظیه شیراز",
    src: "/farsiui/shiraz.jpg",
  },
  {
    title: "برج میلاد",
    src: "/farsiui/miladtower.jpg",
  },
  {
    title: "۳۳ پل اصفهان",
    src: "/farsiui/isfahan.jpg",
  },
] as const

export function ScrollAreaHorizontalDemo() {
  return (
    <div dir="rtl" className="w-full max-w-md">
      <ScrollArea className="overflow-hidden rounded-md border">
        <div className="flex w-max items-start gap-4 p-4">
          {places.map((place) => (
            <figure key={place.src} className="w-36 shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
                <Image
                  src={place.src}
                  alt={place.title}
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
              <figcaption className="pt-2 text-center text-xs font-medium text-foreground">
                {place.title}
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
