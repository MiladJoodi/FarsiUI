// Compatibility bridge for v4 examples that still import from `@/lib/ai`.
// The public chat API lives in `@farsiui/helpers/ai-sdk`; `getMessageText`
// remains local to the app.
import type { UIMessage } from "ai"

export * from "@farsiui/helpers/ai-sdk"

export function getMessageText(message: Pick<UIMessage, "parts">) {
  return message.parts.reduce(
    (text, part) => (part.type === "text" ? text + part.text : text),
    ""
  )
}
