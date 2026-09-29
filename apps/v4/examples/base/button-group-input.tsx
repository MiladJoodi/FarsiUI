"use client"

import { SearchIcon } from "lucide-react"

import {
  useVariantPreviewIconSize,
} from "@/components/component-variant-preview-size"
import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import { Input } from "@/styles/base-nova/ui/input"

export default function ButtonGroupInput() {
  const iconSize = useVariantPreviewIconSize()

  return (
    <ButtonGroup>
      <Input placeholder="جستجو..." />
      <Button variant="outline" size={iconSize} aria-label="جستجو">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
