import { filterHookRegistryDependencies } from "@/lib/example-dependencies"
import { getRegistryMeta } from "@/lib/registry"

/**
 * Component-level registry hook dependencies for Installation sections.
 * Example-only hooks belong under ExampleDependencies, not here.
 */
export function ComponentDependencies({
  name,
  styleName = "base-nova",
}: {
  name: string
  styleName?: string
}) {
  const meta = getRegistryMeta(name, styleName)
  const hooks = filterHookRegistryDependencies(meta?.registryDependencies)

  if (hooks.length === 0) {
    return null
  }

  return (
    <div className="not-typeset my-4 rounded-xl border bg-muted/20 px-3.5 py-3">
      <div className="mb-2 text-sm font-medium">وابستگی‌های کامپوننت</div>
      <div className="flex flex-wrap gap-2">
        {hooks.map((hookName) => (
          <code
            key={hookName}
            className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-foreground"
          >
            {hookName}
          </code>
        ))}
      </div>
    </div>
  )
}
