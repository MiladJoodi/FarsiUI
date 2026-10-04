const HOOK_IMPORT_RE =
  /(?:from\s+["']@\/hooks\/([\w-]+)["']|from\s+["']@\/registry\/[^"']+\/hooks\/([\w-]+)["'])/g

/** Extract registry hook names imported by example/source code. */
export function extractHookDependencies(source: string | null | undefined) {
  if (!source) {
    return []
  }

  const deps = new Set<string>()
  for (const match of source.matchAll(HOOK_IMPORT_RE)) {
    const name = match[1] ?? match[2]
    if (name) {
      deps.add(name)
    }
  }

  return [...deps].sort()
}

/** Keep only registry hook deps from a registryDependencies list. */
export function filterHookRegistryDependencies(
  registryDependencies: string[] | undefined
) {
  if (!registryDependencies?.length) {
    return []
  }

  return registryDependencies
    .filter((name) => name.startsWith("use-"))
    .sort()
}
