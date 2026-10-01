export const legacyStyles = [
  {
    name: "new-york-v4",
    title: "New York",
  },
  {
    name: "base-nova",
    title: "Base Nova",
  },
  {
    name: "radix-nova",
    title: "Radix Nova",
  },
  {
    name: "aria-nova",
    title: "React Aria Nova",
  },
] as const

export type Style = (typeof legacyStyles)[number]

export async function getActiveStyle() {
  // Default to FarsiUI base design system (not legacy new-york).
  return legacyStyles.find((style) => style.name === "base-nova") ?? legacyStyles[0]
}

export function getStyle(name: string) {
  return legacyStyles.find((style) => style.name === name)
}
