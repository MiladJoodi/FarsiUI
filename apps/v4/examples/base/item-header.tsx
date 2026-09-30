import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/styles/base-nova/ui/item"

const models = [
  {
    name: "v0-1.5-sm",
    description: "کارهای روزمره و تولید رابط کاربری.",
    image:
      "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "v0-1.5-lg",
    description: "تفکر و استدلال پیشرفته.",
    image:
      "https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "v0-2.0-mini",
    description: "مدل متن‌باز برای همه.",
    image:
      "https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop",
  },
]

export function ItemHeaderDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-xl flex-col gap-6">
      <ItemGroup className="grid grid-cols-3 gap-4">
        {models.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              <Image
                src={model.image}
                alt={model.name}
                width={128}
                height={128}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
