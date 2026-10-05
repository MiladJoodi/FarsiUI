/** Overlay token recipes onto a base style map (overlay appended = wins). */
export function mergeStyleMaps(
  base: Record<string, string>,
  overlay: Record<string, string>
): Record<string, string> {
  const result: Record<string, string> = { ...base }
  for (const [className, classes] of Object.entries(overlay)) {
    result[className] = result[className]
      ? `${result[className]} ${classes}`
      : classes
  }
  return result
}
