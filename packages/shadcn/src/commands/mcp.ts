import { promises as fs } from "fs"
import path from "path"
import { server } from "@/src/mcp"
import { loadEnvFiles } from "@/src/utils/env-loader"
import { getConfig } from "@/src/utils/get-config"
import { getPackageManager } from "@/src/utils/get-package-manager"
import { handleError } from "@/src/utils/handle-error"
import { highlighter } from "@/src/utils/highlighter"
import { logger } from "@/src/utils/logger"
import { spinner } from "@/src/utils/spinner"
import { updateDependencies } from "@/src/utils/updaters/update-dependencies"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { Command } from "commander"
import deepmerge from "deepmerge"
import { execa } from "execa"
import fsExtra from "fs-extra"
import prompts from "prompts"
import z from "zod"

const FARSIUI_MCP_VERSION = "latest"
const FARSIUI_PACKAGE = `farsiui@${FARSIUI_MCP_VERSION}`
/** Display key in client MCP configs (Cursor/VS Code show this as the server name). */
const MCP_SERVER_KEY = "FarsiUI"

const CLIENTS = [
  {
    name: "claude",
    label: "Claude Code",
    configPath: ".mcp.json",
    config: {
      mcpServers: {
        [MCP_SERVER_KEY]: {
          command: "npx",
          args: [FARSIUI_PACKAGE, "mcp"],
        },
      },
    },
  },
  {
    name: "cursor",
    label: "Cursor",
    configPath: ".cursor/mcp.json",
    config: {
      mcpServers: {
        [MCP_SERVER_KEY]: {
          command: "npx",
          args: [FARSIUI_PACKAGE, "mcp"],
        },
      },
    },
  },
  {
    name: "vscode",
    label: "VS Code",
    configPath: ".vscode/mcp.json",
    config: {
      servers: {
        [MCP_SERVER_KEY]: {
          command: "npx",
          args: [FARSIUI_PACKAGE, "mcp"],
        },
      },
    },
  },
  {
    name: "codex",
    label: "Codex",
    configPath: ".codex/config.toml",
    config: `[mcp_servers.${MCP_SERVER_KEY}]
command = "npx"
args = ["${FARSIUI_PACKAGE}", "mcp"]
`,
  },
  {
    name: "opencode",
    label: "OpenCode",
    configPath: "opencode.json",
    config: {
      $schema: "https://opencode.ai/config.json",
      mcp: {
        [MCP_SERVER_KEY]: {
          type: "local",
          command: ["npx", FARSIUI_PACKAGE, "mcp"],
          enabled: true,
        },
      },
    },
  },
] as const

const DEPENDENCIES = [FARSIUI_PACKAGE]

export const mcp = new Command()
  .name("mcp")
  .description("FarsiUI MCP server and client configuration commands")
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .action(async (options) => {
    try {
      await loadEnvFiles(options.cwd)
      const transport = new StdioServerTransport()
      await server.connect(transport)
    } catch (error) {
      logger.break()
      handleError(error)
    }
  })

const mcpInitOptionsSchema = z.object({
  client: z.enum(["claude", "cursor", "vscode", "codex", "opencode"]),
  cwd: z.string(),
  install: z.boolean().default(false),
})

type McpInitOptions = z.infer<typeof mcpInitOptionsSchema>
type RunMcpInitOptions = Omit<McpInitOptions, "install"> & {
  install?: boolean
}

mcp
  .command("init")
  .description("Initialize FarsiUI MCP configuration for your client")
  .option(
    "--client <client>",
    `MCP client (${CLIENTS.map((c) => c.name).join(", ")})`
  )
  .option(
    "--install",
    "also install farsiui@latest as a project dependency (optional; MCP runs via npx)"
  )
  .action(async (opts, command) => {
    try {
      // Get the cwd from parent command.
      const parentOpts = command.parent?.opts() || {}
      const cwd = parentOpts.cwd || process.cwd()

      let client = opts.client

      if (!client) {
        const response = await prompts({
          type: "select",
          name: "client",
          message: "Which MCP client are you using?",
          choices: CLIENTS.map((c) => ({
            title: c.label,
            value: c.name,
          })),
        })

        if (!response.client) {
          logger.break()
          process.exit(1)
        }

        client = response.client
      }

      const options = mcpInitOptionsSchema.parse({
        client,
        cwd,
        install: Boolean(opts.install),
      })

      if (options.client === "codex") {
        if (options.install) {
          await installMcpDependency(options.cwd)
        }

        logger.break()
        logger.log("To configure the FarsiUI MCP server in Codex:")
        logger.break()
        logger.log(
          `1. Open or create the file ${highlighter.info(
            "~/.codex/config.toml"
          )}`
        )
        logger.log("2. Add the following configuration:")
        logger.log()
        logger.info(`[mcp_servers.${MCP_SERVER_KEY}]
command = "npx"
args = ["${FARSIUI_PACKAGE}", "mcp"]`)
        logger.break()
        logger.info("3. Restart Codex to load the MCP server")
        logger.break()
        process.exit(0)
      }

      const configSpinner = spinner("Configuring MCP server...").start()
      const configPath = await runMcpInit(options)
      configSpinner.succeed("Configuring MCP server.")

      if (options.install) {
        await installMcpDependency(options.cwd)
      }

      logger.break()
      logger.success(`Configuration saved to ${configPath}.`)
      logger.break()
      process.exit(0)
    } catch (error) {
      handleError(error)
    }
  })

async function installMcpDependency(cwd: string) {
  const config = await getConfig(cwd)

  if (config) {
    await updateDependencies([], DEPENDENCIES, config, {
      silent: false,
      interactive: false,
    })
    return
  }

  const packageManager = await getPackageManager(cwd)
  const installCommand = packageManager === "npm" ? "install" : "add"
  const devFlag = packageManager === "npm" ? "--save-dev" : "-D"

  const installSpinner = spinner("Installing dependencies...").start()
  try {
    await execa(packageManager, [installCommand, devFlag, ...DEPENDENCIES], {
      cwd,
    })
    installSpinner.succeed("Installing dependencies.")
  } catch (error) {
    installSpinner.fail("Failed to install dependencies.")
    throw error
  }
}

const overwriteMerge = (_: any[], sourceArray: any[]) => sourceArray

export async function runMcpInit(options: RunMcpInitOptions) {
  const { client, cwd } = options

  const clientInfo = CLIENTS.find((c) => c.name === client)
  if (!clientInfo) {
    throw new Error(
      `Unknown client: ${client}. Available clients: ${CLIENTS.map(
        (c) => c.name
      ).join(", ")}`
    )
  }

  const configPath = path.join(cwd, clientInfo.configPath)
  const dir = path.dirname(configPath)
  await fsExtra.ensureDir(dir)

  // Codex prints manual instructions; no local JSON write.
  if (client === "codex") {
    return clientInfo.configPath
  }

  let existingConfig: Record<string, unknown> = {}
  if (await fsExtra.pathExists(configPath)) {
    const content = await fs.readFile(configPath, "utf-8")
    try {
      existingConfig = JSON.parse(content) as Record<string, unknown>
    } catch {
      throw new Error(
        `Invalid JSON in ${clientInfo.configPath}. Fix or remove the file, then run mcp init again.`
      )
    }
  }

  const mergedConfig = deepmerge(
    existingConfig,
    clientInfo.config as Record<string, unknown>,
    { arrayMerge: overwriteMerge }
  )

  // Drop legacy lowercase server keys so Cursor shows "FarsiUI", not a duplicate "farsiui".
  removeLegacyMcpServerKeys(mergedConfig)

  await fs.writeFile(
    configPath,
    JSON.stringify(mergedConfig, null, 2) + "\n",
    "utf-8"
  )

  return clientInfo.configPath
}

function removeLegacyMcpServerKeys(config: Record<string, unknown>) {
  for (const section of ["mcpServers", "servers", "mcp"] as const) {
    const block = config[section]
    if (!block || typeof block !== "object" || Array.isArray(block)) {
      continue
    }
    const servers = block as Record<string, unknown>
    if ("farsiui" in servers && MCP_SERVER_KEY in servers) {
      delete servers.farsiui
    }
  }
}
