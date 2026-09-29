export const BUTTON_SIZE_OPTIONS = [
  { id: "xs", label: "خیلی کوچک" },
  { id: "sm", label: "کوچک" },
  { id: "default", label: "معمولی" },
  { id: "lg", label: "بزرگ" },
] as const

export type ButtonSizeId = (typeof BUTTON_SIZE_OPTIONS)[number]["id"]

export type VariantPreviewDemo =
  | "icon"
  | "with-icon"
  | "rounded"
  | "spinner"
  | "as-link"
  | "rtl"
  | "group"

export type VariantPreviewSizedCode = {
  code: string
  highlightedCode: string
}

export type VariantPreviewItem = {
  name: string
  label: string
  code: string
  highlightedCode: string
  direction?: "ltr" | "rtl"
  variant?: string
  demo?: VariantPreviewDemo
  /** When false, size stepper does not apply to this demo. */
  sizeable?: boolean
  sized?: Partial<Record<ButtonSizeId, VariantPreviewSizedCode>>
}

export const ICON_SIZE_BY_BUTTON_SIZE: Record<
  ButtonSizeId,
  "icon-xs" | "icon-sm" | "icon" | "icon-lg"
> = {
  xs: "icon-xs",
  sm: "icon-sm",
  default: "icon",
  lg: "icon-lg",
}
