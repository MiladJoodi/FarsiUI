export const DOCUMENTED_HOOK_INSTALLS = {
  "use-media-query": {
    exportName: "useMediaQuery",
    command: "npx farsiui@latest add use-media-query",
  },
  "use-mobile": {
    exportName: "useIsMobile",
    command: "npx farsiui@latest add use-mobile",
  },
} as const

export type DocumentedHookName = keyof typeof DOCUMENTED_HOOK_INSTALLS

export function getDocumentedHookInstalls(dependencies?: string[]) {
  if (!dependencies?.length) {
    return []
  }

  return (Object.keys(DOCUMENTED_HOOK_INSTALLS) as DocumentedHookName[]).filter(
    (name) => dependencies.includes(name)
  )
}

export function getHookInstallCopy(
  hookName: DocumentedHookName,
  scope: "example" | "component"
) {
  const hook = DOCUMENTED_HOOK_INSTALLS[hookName]
  if (scope === "example") {
    return `برای اجرای این مثال، هوک \`${hook.exportName}\` را نیز نصب کنید.`
  }
  return `این کامپوننت به هوک \`${hook.exportName}\` نیاز دارد. آن را نیز نصب کنید.`
}
