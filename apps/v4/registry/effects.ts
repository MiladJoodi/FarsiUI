/**
 * Shared elevation + motion tokens for the installable design system.
 * Values match dominant usage across current style recipes.
 */

export type EffectTokens = {
  "shadow-xs": string
  "shadow-sm": string
  "shadow-md": string
  "shadow-lg": string
  "duration-fast": string
  "duration-normal": string
  "duration-slow": string
  "ease-standard": string
  "ease-linear": string
}

/** Tailwind v4 default shadow stack (theme-compatible strings). */
export const EFFECTS = {
  "shadow-xs":
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "shadow-sm":
    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  "shadow-md":
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  "shadow-lg":
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  "duration-fast": "100ms",
  "duration-normal": "200ms",
  "duration-slow": "300ms",
  "ease-standard": "cubic-bezier(0.22, 1, 0.36, 1)",
  "ease-linear": "linear",
} as const satisfies EffectTokens

export function getEffectCssVars(): Record<string, string> {
  return { ...EFFECTS }
}
