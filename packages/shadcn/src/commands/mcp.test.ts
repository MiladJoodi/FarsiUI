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

    expect(content.mcpServers.farsiui).toEqual({
      command: "npx",
      args: ["farsiui@latest", "mcp"],
    })
    expect(content.mcpServers.shadcn).toBeUndefined()
    expect(JSON.stringify(content)).not.toContain("shadcn@")
  })

  it("writes claude config with farsiui identity", async () => {
    const cwd = await makeTempDir()
    const configPath = await runMcpInit({ client: "claude", cwd })
    const content = JSON.parse(
      await fs.readFile(path.join(cwd, configPath), "utf-8")
    )

    expect(content.mcpServers.farsiui.args).toEqual(["farsiui@latest", "mcp"])
  })

  it("writes vscode config under servers.farsiui", async () => {
    const cwd = await makeTempDir()
    const configPath = await runMcpInit({ client: "vscode", cwd })
    const content = JSON.parse(
      await fs.readFile(path.join(cwd, configPath), "utf-8")
    )

    expect(content.servers.farsiui.args).toEqual(["farsiui@latest", "mcp"])
  })

  it("writes opencode config with farsiui local command", async () => {
    const cwd = await makeTempDir()
    const configPath = await runMcpInit({ client: "opencode", cwd })
    const content = JSON.parse(
      await fs.readFile(path.join(cwd, configPath), "utf-8")
    )

    expect(content.mcp.farsiui.command).toEqual([
      "npx",
      "farsiui@latest",
      "mcp",
    ])
  })
})
