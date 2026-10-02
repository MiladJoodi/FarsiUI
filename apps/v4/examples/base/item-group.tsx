import { PlusIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-nova/ui/avatar"
import { Button } from "@/styles/base-nova/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/styles/base-nova/ui/item"

const people = [
  {
    username: "علی رضایی",
    avatar: "https://github.com/shadcn.png",
    email: "ali@example.com",
  },
  {
    username: "سارا محمدی",
    avatar: "https://github.com/maxleiter.png",
    email: "sara@example.com",
  },
  {
    username: "رضا کریمی",
    avatar: "https://github.com/evilrabbit.png",
    email: "reza@example.com",
  },
]

export function ItemGroupExample() {
  return (
    <ItemGroup dir="rtl" className="max-w-sm">
      {people.map((person) => (
        <Item key={person.email} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={person.avatar} className="grayscale" />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-1 text-start">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
