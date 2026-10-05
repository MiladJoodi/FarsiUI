import { Client } from "@modelcontextprotocol/sdk/client/index.js"
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js"
import { afterAll, beforeAll, describe, expect, it } from "vitest"

import { server } from "./index"

const EXPECTED_TOOLS = [
  "get_project_registries",
  "list_items_in_registries",
  "search_items_in_registries",
  "view_items_in_registries",
  "get_item_examples_from_registries",
  "get_add_command_for_items",
  "get_audit_checklist",
] as const

describe("farsiui MCP server", () => {
  let client: Client

  beforeAll(async () => {
    client = new Client({ name: "farsiui-mcp-test", version: "1.0.0" })
    const [clientTransport, serverTransport] =
      InMemoryTransport.createLinkedPair()
    await Promise.all([
      client.connect(clientTransport),
      server.connect(serverTransport),
    ])
  })

  afterAll(async () => {
    await client.close()
    await server.close()
  })

  it("advertises tools but not resources on initialize", () => {
    const capabilities = client.getServerCapabilities()
    expect(capabilities?.tools).toBeDefined()
    expect(capabilities?.resources).toBeUndefined()
  })

  it("exposes FarsiUI title and icon in serverInfo", () => {
    const info = client.getServerVersion()
    expect(info?.name).toBe("farsiui")
    expect(info?.title).toBe("FarsiUI")
    expect(info?.icons?.length).toBeGreaterThanOrEqual(1)
    expect(info?.icons?.[0]?.mimeType).toBe("image/png")
    expect(info?.icons?.[0]?.src).toMatch(/^data:image\/png;base64,/)
    expect(info?.icons?.some((icon) => icon.src.startsWith("https://"))).toBe(
      true
    )
  })

  it("lists all registry tools with plain object input schemas", async () => {
    const { tools } = await client.listTools()

    expect(tools.map((tool) => tool.name)).toEqual([...EXPECTED_TOOLS])

    for (const tool of tools) {
      expect(tool.inputSchema).toMatchObject({ type: "object" })
      expect(tool.inputSchema).not.toHaveProperty("$schema")
    }
  })

  it("calls empty-arg tools when arguments are omitted", async () => {
    const result = await client.callTool({
      name: "get_audit_checklist",
    })

    expect(result.isError).not.toBe(true)
    const text = result.content
      .filter((part): part is { type: "text"; text: string } => part.type === "text")
      .map((part) => part.text)
      .join("\n")
    expect(text).toContain("Component Audit Checklist")
    expect(text).not.toContain("No tool arguments provided")
  })
})
