"use client"

import { SearchIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Input } from "@/registry/bases/base/ui/input"

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
