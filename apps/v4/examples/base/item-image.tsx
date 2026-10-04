import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/styles/base-nova/ui/item"

const music = [
  {
    title: "چراغ‌های نیمه‌شب شهر",
    artist: "رویای نئون",
    album: "شب‌های الکتریک",
    duration: "۳:۴۵",
  },
  {
    title: "گفت‌وگوهای کافه",
    artist: "قهوهٔ صبح",
    album: "داستان‌های شهری",
    duration: "۴:۰۵",
  },
  {
    title: "باران دیجیتال",
    artist: "سمفونی سایبر",
    album: "بیت‌های باینری",
    duration: "۳:۳۰",
  },
]

export default function ItemImage() {
  return (
    <div dir="rtl" className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item
            key={song.title}
            variant="outline"
            render={<a href="#" />}
            role="listitem"
          >
            <ItemMedia variant="image">
              <Image
                src={`https://avatar.vercel.sh/${song.title}`}
                alt={song.title}
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                {song.title} -{" "}
                <span className="text-muted-foreground">{song.album}</span>
              </ItemTitle>
              <ItemDescription>{song.artist}</ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>{song.duration}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
