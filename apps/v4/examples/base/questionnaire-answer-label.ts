/** Maps questionnaire choice values to Persian labels for toast copy. */
export function answerLabel(
  value: FormDataEntryValue | null | undefined,
  labels: Record<string, string>,
  empty = "هیچ"
) {
  if (value == null || value === "") return empty
  const key = String(value)
  return labels[key] ?? key
}

export function answerLabels(
  values: FormDataEntryValue[],
  labels: Record<string, string>,
  empty = "هیچ"
) {
  if (!values.length) return empty
  return values.map((value) => answerLabel(value, labels, empty)).join("، ")
}
