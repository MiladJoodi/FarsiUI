"use client"

import { ChevronDownIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"

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

export default function ItemDropdown() {
  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          انتخاب <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent dir="rtl" className="w-72" align="start">
          <DropdownMenuGroup className="gap-0.5 p-1">
            {people.map((person) => (
              <DropdownMenuItem key={person.email} className="p-0">
                <Item size="sm" dir="rtl" className="w-full px-3 py-2.5 text-start">
                  <ItemMedia>
                    <Avatar className="size-8">
                      <AvatarImage src={person.avatar} className="grayscale" />
                      <AvatarFallback>
                        {person.username.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-0.5 text-start">
                    <ItemTitle className="w-full text-start">
                      {person.username}
                    </ItemTitle>
                    <ItemDescription>{person.email}</ItemDescription>
                  </ItemContent>
                </Item>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
