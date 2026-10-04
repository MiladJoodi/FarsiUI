"use client"

import { useThemeConfig } from "@/components/active-theme"
import {
  OWNED_ACCENT_SYSTEMS,
  useDesignSystemPreview,
} from "@/components/design-system-preview"
import { useFontPreview } from "@/components/font-preview"
import { THEME_LABELS } from "@/lib/themes"

/** Light summary hook for the header trigger — keep panel code out of the critical path. */
export function useDesignStudioSummary() {
  const { designSystemId, presets } = useDesignSystemPreview()
  const { fontId, fonts } = useFontPreview()
  const { activeTheme } = useThemeConfig()
  const showPrimaryColor = !OWNED_ACCENT_SYSTEMS.has(designSystemId)
  const currentTheme = activeTheme === "default" ? "neutral" : activeTheme

  const activeDs =
    presets.find((preset) => preset.id === designSystemId) ?? presets[0]
  const activeFont = fonts.find((font) => font.id === fontId) ?? fonts[0]
  const colorLabel = THEME_LABELS[currentTheme] ?? currentTheme

  const parts = [activeDs.label, activeFont.label]
  if (showPrimaryColor) parts.push(colorLabel)

  return {
    activeDs,
    activeFont,
    colorLabel,
    currentTheme,
    showPrimaryColor,
    summary: parts.join(" · "),
  }
}
