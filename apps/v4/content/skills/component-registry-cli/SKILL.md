---
name: component-registry-cli
description: >
  Design, build, and consume a UI component registry with its install CLI:
  registry structure, item metadata, files, dependencies, local vs published
  registries, path resolution, versioning, and installs into .cursor / .claude /
  project paths. Use when adding components via CLI fails, registry JSON is
  wrong, or install paths/deps resolve incorrectly.
---

# Component Registry & CLI

One workflow: **publishable registry items** + **CLI that installs them** into a
consumer project. Splitting “registry” and “CLI” into two skills duplicates the
same dependency/path story — keep them together.

### Scope

| | |
| --- | --- |
| **In scope** | Registry JSON/items, metadata, files, deps, build artifacts, local/remote registries, CLI add/init, path aliases, skills/rules install paths |
| **Out of scope** | Designing the visual components themselves; general npm publishing theory; MCP (see `ui-library-mcp`) |

---

## When to use

* Authoring or fixing a UI library registry (`registry:ui`, blocks, examples…).
* `npx <cli> add …` fails, writes to the wrong folder, or skips dependencies.
* Installing skills/rules into `.cursor`, `.claude`, or `AGENTS.md`.
* Migrating between local file registry and published URL registry.

---

## Mental model

```text
Registry index  →  Item manifest  →  Files + deps  →  CLI resolve  →  Write to project
```

* **Registry**: namespaced catalog (`@library/...`) with types and search metadata.
* **Item**: one installable unit (component, block, hook, skill, example).
* **CLI**: reads `components.json` (or equivalent), resolves registry URLs, fetches
  items, transforms imports, installs npm deps, writes files.

---

## Agent workflow

### Inspect

* `components.json` / config: style, aliases (`@/components`), registries map.
* Registry index and item schemas (name, type, files[], dependencies[],
  registryDependencies[], cssVars, docs).
* Generated artifacts (built `registry.json`, R2/CDN URLs, local `__registry__`).
* CLI commands: `init`, `add`, `diff`, validate.
* Target paths for skills: `.cursor/skills`, `.claude/skills`, `.agents/skills`.

### Diagnose

| Symptom | Likely cause |
| --- | --- |
| Item not found | Wrong registry namespace; index not rebuilt; typo in name |
| Files land in wrong folder | Alias / `cwd` / `src` layout mismatch |
| Missing peer dependency | Item omitted `dependencies` or `registryDependencies` |
| Import paths broken after add | Transformer skipped; wrong `tsx`/`rsc` flags |
| Skill installed but agent ignores it | Wrong tool path; missing frontmatter `name`/`description` |
| Local works, published fails | Built artifact stale; CDN path; auth on private registry |

### Plan

```markdown
## Pre-change brief
**Root cause:** …
**Evidence:** …
**Proposed fix:** …
**Registry vs CLI touchpoints:** …
```

### Implement

1. Fix item metadata first (files + deps) before changing CLI.
2. Rebuild / validate registry artifacts.
3. Re-run `add` into a clean fixture project when possible.
4. For skills: ensure `SKILL.md` frontmatter matches catalog slug.

### Verify

* `add` idempotent second run (diff / overwrite policy clear).
* Imports compile; deps present in package.json.
* For skills: file exists at the documented Cursor/Claude/Codex path.
* Version: published registry URL serves the intended build.

---

## Registry item checklist

* `name` stable and URL-safe
* `type` correct (`registry:ui`, `registry:block`, `registry:hook`, …)
* `files[].path` + `type` (+ `target` when non-default)
* `dependencies` (npm) vs `registryDependencies` (other items)
* Description/search text for discovery
* No secrets in shipped files

---

## CLI install checklist

* Config present (`init` if missing)
* Registry key resolves (`@name` → URL or local path)
* Path aliases match tsconfig
* Error messages actionable (missing config, 404 item, network)
* Overwrite / conflict behavior documented

### Skill / agent installs

When the “component” is a skill:

| Target | Typical path |
| --- | --- |
| Cursor | `.cursor/skills/<slug>/SKILL.md` |
| Claude Code | `.claude/skills/<slug>/SKILL.md` |
| Codex | `.agents/skills/<slug>/SKILL.md` |
| Project rules | `.cursor/rules/*.mdc` or `AGENTS.md` |

Keep slug = folder = frontmatter `name`.

---

## Common failures

* Editing source registry but forgetting to rebuild published JSON.
* Putting npm deps only in README, not in item `dependencies`.
* Using relative imports that the CLI cannot rewrite.
* Mixing monorepo package paths with consumer alias paths.
* Treating registry and CLI as unrelated codebases — they share one schema.

---

## Best practices

* Validate registry in CI before publish.
* One clear namespace (`@yourlib`) in docs and MCP.
* Prefer additive migrations; never silently rename item `name`.
* Fixture apps for smoke-testing `add`.
* For agent skills, ship the same markdown the site catalog describes.

---

## Report

```markdown
## Registry/CLI report
**Item:** …
**Registry:** local | published
**Failure point:** index | item | deps | paths | write
**Fix:** …
**Verified add:** yes | no
```
