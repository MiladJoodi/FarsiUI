---
name: ui-library-mcp
description: >
  Build and debug an MCP server tailored to a UI library / design system
  registry: tools, resources, prompts, empty schemas, component discovery,
  metadata, naming, branding, and Cursor/Claude/OpenCode compatibility. Use when
  agents cannot list or install components via MCP, schemas fail validation, or
  the MCP is too generic for a component registry. Not a general MCP tutorial —
  use mcp-builder for that.
---

# UI Library MCP

MCP for a **component registry / Design System**, not a generic “any API” server.

Agents should be able to: discover registries → search items → view files → get
examples → obtain a CLI `add` command — without dumping the entire catalog into
context.

For general MCP server construction (transports, FastMCP, protocol study), use
`mcp-builder`. This skill adds the **UI-library-specific** product shape.

### Scope

| | |
| --- | --- |
| **In scope** | Registry-backed MCP tools, schemas, naming, branding, client quirks, debugging discovery/install flows |
| **Out of scope** | Building the visual components; rewriting the whole MCP SDK |

---

## When to use

* Shipping MCP next to a shadcn-style / custom UI registry CLI.
* Cursor/Claude can connect but tools fail on empty args or `$schema`.
* Agents need fuzzy search + examples, not raw REST dumps.
* Branding (name, title, icons, website) must match the UI library.

---

## Recommended tool surface

Keep tools **workflow-shaped** and prefixed consistently if you expose multiple
libraries. A proven set:

| Tool | Job |
| --- | --- |
| `get_project_registries` | Read configured registries from project config |
| `list_items_in_registries` | Paginated list with optional type filters |
| `search_items_in_registries` | Fuzzy search by name/description |
| `view_items_in_registries` | Item metadata + file contents |
| `get_item_examples_from_registries` | Demo/example code search |
| `get_add_command_for_items` | Exact CLI install command |
| `get_audit_checklist` | Post-generate verification prompts |

Prefer returning **markdown-friendly** concise text. Paginate. Skip failed
registries with an explicit notice instead of failing the whole call.

---

## Agent workflow

### Inspect

* MCP server entry (stdio / HTTP), tool list, zod → JSON Schema conversion.
* Project config file the tools expect (`components.json`).
* Registry search/list APIs shared with the CLI.
* Client under test (Cursor, Claude, OpenCode) — behaviors differ.

### Diagnose

| Symptom | Likely cause |
| --- | --- |
| Tool rejected / ignored | JSON Schema includes `$schema`; client strictness |
| “Missing arguments” on no-arg tools | Client omitted `arguments`; server must default `{}` |
| Empty registry list | No config file; wrong cwd; registries not initialized |
| Search returns junk | Query not fuzzy; descriptions missing on items |
| Add command wrong | Hardcoded package name; ignores registry prefix |
| Auth noise breaks protocol | Logs written to stdout instead of MCP logging |

### Plan → Implement → Verify

1. Align tools with CLI capabilities (same registry resolver).
2. Strip `$schema` from tool input schemas when converting from Zod.
3. Default `arguments` to `{}` for empty-input tools.
4. Brand server (`name`, `title`, `websiteUrl`, icons).
5. Test list → search → view → examples → add command in the real client.

---

## Schema rules (UI MCP)

* Empty input → `z.object({})` → JSON Schema **without** `$schema`.
* Arrays of registry names and item names (`@lib/button`) beat free-form blobs.
* Describe type filters with the real allowed enum from the registry.
* Errors should say what to run next (`init`, fix name, check network).

---

## Naming & branding

* Server `name`: short machine id (`farsiui`).
* `title`: human product name.
* Tool names: stable, verb-led, registry-oriented.
* Icons: small PNG/SVG the client accepts; keep sizes declared.
* Never print secrets; GitHub/registry auth notices go through MCP logging,
  not stdout (stdout is the protocol).

---

## Compatibility notes

* **Cursor**: sensitive to tool schema shape; empty tools need `{}`.
* **Claude**: follow the same schema hygiene; long tool results hurt.
* **OpenCode / others**: assume subset support — keep tools list small.
* Always require project config for registry-scoped tools; guide `init` when
  missing instead of guessing registries.

---

## Common failures

* Building a generic “HTTP proxy MCP” instead of registry workflows.
* Returning entire file trees for every search hit.
* Coupling MCP to one hardcoded registry URL with no `components.json`.
* Duplicating CLI install logic with different dependency resolution.
* Using `mcp-builder` alone and shipping tools that do not map to `add`.

---

## Best practices

* Share registry code between CLI and MCP.
* Format results for agents (bulleted names + one-line descriptions).
* After codegen, push agents through an audit checklist tool.
* Document the install one-liner for the MCP server next to the UI library docs.
* Cross-link: registry/CLI details live in `component-registry-cli`.

---

## Report

```markdown
## UI Library MCP report
**Client:** Cursor | Claude | other
**Broken tool:** …
**Root cause:** schema | config | registry | formatting | transport
**Fix:** …
**Verified flow:** list → search → view → add command
```
