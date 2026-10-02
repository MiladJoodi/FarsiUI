"use client"

import { ChevronDownIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-nova/ui/avatar"
import { Button } from "@/styles/base-nova/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemDescription,
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

export function ItemDropdown() {
  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          انتخاب <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent dir="rtl" className="w-56" align="start">
          <DropdownMenuGroup>
            {people.map((person) => (
              <DropdownMenuItem key={person.email} className="p-0">
                <Item size="xs" dir="rtl" className="w-full p-2 text-start">
                  <ItemMedia>
                    <Avatar className="size-[--spacing(6.5)]">
                      <AvatarImage src={person.avatar} className="grayscale" />
                      <AvatarFallback>
                        {person.username.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-0 text-start">
                    <ItemTitle className="w-full text-start">
                      {person.username}
                    </ItemTitle>
                    <ItemDescription className="leading-none">
                      {person.email}
                    </ItemDescription>
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
