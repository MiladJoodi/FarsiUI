"use client"

import { SearchIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import { Input } from "@/styles/base-nova/ui/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="جستجو..." />
      <Button variant="outline" size="icon" aria-label="جستجو">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
