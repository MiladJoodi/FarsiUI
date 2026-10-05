import * as React from "react"

import {
  formatPersianText,
  shouldSkipPersianDigitsProps,
  shouldSkipPersianDigitsTag,
} from "@/registry/base-lyra/lib/digits"

type PersianDigitsProps = {
  children?: React.ReactNode
  /** Force-disable conversion for this subtree. */
  disabled?: boolean
}

function isPersianDigitsRoot(props: Record<string, unknown>): boolean {
  return props["data-persian-digits-root"] != null
}

function mapNode(node: React.ReactNode, disabled: boolean): React.ReactNode {
  if (disabled || node == null || typeof node === "boolean") {
    return node
  }

  if (typeof node === "string" || typeof node === "number") {
    return formatPersianText(String(node))
  }

  if (Array.isArray(node)) {
    // Preserve original keys/structure — wrapping each child in a Fragment
    // causes hydration mismatches for lists and asChild compositions.
    return React.Children.map(node, (child) => mapNode(child, disabled))
  }

  if (!React.isValidElement(node)) {
    return node
  }

  const type = node.type
  const props = node.props as Record<string, unknown> & {
    children?: React.ReactNode
  }

  // Nested <PersianDigits> — leave as-is to avoid double conversion.
  if (type === PersianDigits || isPersianDigitsRoot(props)) {
    return node
  }

  if (typeof type === "string") {
    if (shouldSkipPersianDigitsTag(type)) {
      return node
    }
  }

  const dataSlot =
    typeof props["data-slot"] === "string" ? props["data-slot"] : null

  // Code panels / installable source chrome — never rewrite digits.
  if (dataSlot === "code" || dataSlot === "component-source") {
    return node
  }

  if (
    shouldSkipPersianDigitsProps({
      dir: typeof props.dir === "string" ? props.dir : null,
      lang: typeof props.lang === "string" ? props.lang : null,
      "data-persian-digits":
        typeof props["data-persian-digits"] === "string"
          ? props["data-persian-digits"]
          : null,
      "data-not-typeset":
        props["data-not-typeset"] != null
          ? String(props["data-not-typeset"])
          : null,
      contentEditable: props.contentEditable as
        | boolean
        | "true"
        | "false"
        | "plaintext-only"
        | undefined,
    })
  ) {
    return node
  }

  // Let Input / form controls manage their own digit display.
  if (
    typeof type === "string" &&
    (type === "input" || type === "textarea" || type === "select")
  ) {
    return node
  }

  if (props.children == null) {
    return node
  }

  return React.cloneElement(node, {
    ...props,
    children: mapNode(props.children, disabled),
  } as never)
}

/**
 * Recursively renders Persian digits in normal prose.
 * Skips code/pre/kbd/samp, lang=en, data-persian-digits="false",
 * data-not-typeset regions, contentEditable, URLs/emails (via formatPersianText),
 * and form controls (Input/Textarea handle their own display).
 * `dir="ltr"` does NOT skip — phone numbers stay LTR with Persian digits.
 * Nested <PersianDigits> roots are ignored to prevent double conversion.
 */
function PersianDigits({ children, disabled = false }: PersianDigitsProps) {
  return (
    <span data-persian-digits-root="" className="contents">
      {mapNode(children, disabled)}
    </span>
  )
}

export { PersianDigits }
export type { PersianDigitsProps }
