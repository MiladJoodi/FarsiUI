import { promises as fs } from "fs"
import os from "os"
import path from "path"
import { afterEach, describe, expect, it } from "vitest"

import { runMcpInit } from "./mcp"

const tempDirs: string[] = []

async function makeTempDir() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "farsiui-mcp-"))
  tempDirs.push(dir)
  return dir
}

afterEach(async () => {
  await Promise.all(
    tempDirs.splice(0).map((dir) => fs.rm(dir, { recursive: true, force: true }))
  )
})

describe("runMcpInit", () => {
  it("writes cursor config with farsiui key and farsiui@latest", async () => {
    const cwd = await makeTempDir()
    const configPath = await runMcpInit({ client: "cursor", cwd })

    expect(configPath).toBe(".cursor/mcp.json")

    const content = JSON.parse(
      await fs.readFile(path.join(cwd, configPath), "utf-8")
    )

    expect(content.mcpServers.FarsiUI).toEqual({
      command: "npx",
      args: ["farsiui@latest", "mcp"],
    })
    expect(content.mcpServers.shadcn).toBeUndefined()
    expect(content.mcpServers.farsiui).toBeUndefined()
    expect(JSON.stringify(content)).not.toContain("shadcn@")
  })

  it("creates .cursor directory when missing", async () => {
    const cwd = await makeTempDir()
    expect(
      await fs
        .access(path.join(cwd, ".cursor"))
        .then(() => true)
        .catch(() => false)
    ).toBe(false)

    await runMcpInit({ client: "cursor", cwd })

    const stat = await fs.stat(path.join(cwd, ".cursor"))
    expect(stat.isDirectory()).toBe(true)
    await fs.access(path.join(cwd, ".cursor/mcp.json"))
  })

  it("creates cursor mcp.json when the file does not exist", async () => {
    const cwd = await makeTempDir()
    const configPath = await runMcpInit({ client: "cursor", cwd })
    const content = JSON.parse(
      await fs.readFile(path.join(cwd, configPath), "utf-8")
    )

    expect(Object.keys(content.mcpServers)).toEqual(["FarsiUI"])
    expect(content.mcpServers.FarsiUI.args).toEqual(["farsiui@latest", "mcp"])
  })

  it("preserves other MCP servers when adding farsiui", async () => {
    const cwd = await makeTempDir()
    await fs.mkdir(path.join(cwd, ".cursor"), { recursive: true })
    await fs.writeFile(
      path.join(cwd, ".cursor/mcp.json"),
      JSON.stringify(
        {
          mcpServers: {
            playwright: {
              command: "npx",
              args: ["@playwright/mcp@latest"],
            },
          },
        },
        null,
        2
      ) + "\n",
      "utf-8"
    )

    await runMcpInit({ client: "cursor", cwd })

    const content = JSON.parse(
      await fs.readFile(path.join(cwd, ".cursor/mcp.json"), "utf-8")
    )

    expect(content.mcpServers.playwright).toEqual({
      command: "npx",
      args: ["@playwright/mcp@latest"],
    })
    expect(content.mcpServers.FarsiUI).toEqual({
      command: "npx",
      args: ["farsiui@latest", "mcp"],
    })
  })

  it("updates existing farsiui entry without duplicating", async () => {
    const cwd = await makeTempDir()
    await fs.mkdir(path.join(cwd, ".cursor"), { recursive: true })
    await fs.writeFile(
      path.join(cwd, ".cursor/mcp.json"),
      JSON.stringify(
        {
          mcpServers: {
            farsiui: {
              command: "npx",
              args: ["farsiui@0.0.1", "mcp"],
            },
            other: {
              command: "node",
              args: ["server.js"],
            },
          },
        },
        null,
        2
      ) + "\n",
      "utf-8"
    )

    await runMcpInit({ client: "cursor", cwd })

    const content = JSON.parse(
      await fs.readFile(path.join(cwd, ".cursor/mcp.json"), "utf-8")
    )

    expect(content.mcpServers.farsiui).toBeUndefined()
    expect(Object.keys(content.mcpServers).filter((k) => k === "FarsiUI")).toHaveLength(
      1
    )
    expect(content.mcpServers.FarsiUI).toEqual({
      command: "npx",
      args: ["farsiui@latest", "mcp"],
    })
    expect(content.mcpServers.other).toEqual({
      command: "node",
      args: ["server.js"],
    })
  })

  it("throws a clear error when existing cursor mcp.json is invalid JSON", async () => {
    const cwd = await makeTempDir()
    await fs.mkdir(path.join(cwd, ".cursor"), { recursive: true })
    await fs.writeFile(path.join(cwd, ".cursor/mcp.json"), "{ not-json", "utf-8")

    await expect(runMcpInit({ client: "cursor", cwd })).rejects.toThrow(
      /Invalid JSON in \.cursor\/mcp\.json/
    )
  })

  it("writes claude config with farsiui identity", async () => {
    const cwd = await makeTempDir()
    const configPath = await runMcpInit({ client: "claude", cwd })
    const content = JSON.parse(
      await fs.readFile(path.join(cwd, configPath), "utf-8")
    )

    expect(content.mcpServers.FarsiUI.args).toEqual(["farsiui@latest", "mcp"])
  })

  it("writes vscode config under servers.FarsiUI", async () => {
    const cwd = await makeTempDir()
    const configPath = await runMcpInit({ client: "vscode", cwd })
    const content = JSON.parse(
      await fs.readFile(path.join(cwd, configPath), "utf-8")
    )

    expect(content.servers.FarsiUI.args).toEqual(["farsiui@latest", "mcp"])
  })

  it("writes opencode config with farsiui local command", async () => {
    const cwd = await makeTempDir()
    const configPath = await runMcpInit({ client: "opencode", cwd })
    const content = JSON.parse(
      await fs.readFile(path.join(cwd, configPath), "utf-8")
    )

    expect(content.mcp.FarsiUI.command).toEqual([
      "npx",
      "farsiui@latest",
      "mcp",
    ])
  })
})
