"use client"

import * as React from "react"

import {
  ICON_SIZE_BY_BUTTON_SIZE,
  type ButtonSizeId,
} from "@/components/component-variant-preview-shared"

export const VariantPreviewSizeContext =
  React.createContext<ButtonSizeId>("default")

export function useVariantPreviewSize() {
  return React.useContext(VariantPreviewSizeContext)
}

export function useVariantPreviewIconSize() {
  const size = useVariantPreviewSize()
  return ICON_SIZE_BY_BUTTON_SIZE[size]
}
