/**
 * Fresh-temp CLI install smoke for all 6 Design Systems.
 * Uses local registry via REGISTRY_URL when provided.
 *
 * Usage (from apps/v4):
 *   bun run ./scripts/smoke-design-system-cli.mts
 */
import { spawn } from "child_process"
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { registryItemSchema } from "farsiui/schema"

import { parseDesignSystemConfig } from "../app/(app)/(create)/lib/parse-config"
import {
  buildPartialRegistryBase,
  buildRegistryBase,
  parseRegistryBaseParts,
} from "../registry/config"
import { loadStyleInstallTokensFromFile } from "../registry/extract-style-install-tokens.node"

const ROOT = path.resolve(process.cwd(), "../..")
const FARSIUI_BIN = path.join(ROOT, "packages/shadcn/dist/index.js")
const PUBLIC_DIR = path.join(process.cwd(), "public")

function startLocalRegistryServer(): {
  registryUrl: string
  stop: () => void
} {
  if (process.env.REGISTRY_URL) {
    return {
      registryUrl: process.env.REGISTRY_URL.replace(/\/$/, ""),
      stop: () => {},
    }
  }

  const server = Bun.serve({
    port: 0,
    hostname: "127.0.0.1",
    async fetch(req) {
      const url = new URL(req.url)

      if (url.pathname === "/init") {
        const result = parseDesignSystemConfig(url.searchParams)
        if (!result.success) {
          return Response.json({ error: result.error }, { status: 400 })
        }
        const onlyResult = parseRegistryBaseParts(url.searchParams.get("only"))
        if (!onlyResult.success) {
          return Response.json({ error: onlyResult.error }, { status: 400 })
        }
        const registryBase = onlyResult.parts
          ? buildPartialRegistryBase(result.data, onlyResult.parts)
          : buildRegistryBase(result.data)
        const parseResult = registryItemSchema.safeParse(registryBase)
        if (!parseResult.success) {
          return Response.json(
            {
              error: "Invalid registry base item",
              details: parseResult.error.format(),
            },
            { status: 500 }
          )
        }
        return Response.json(parseResult.data)
      }

      const rel = decodeURIComponent(url.pathname.replace(/^\//, ""))
      const filePath = path.join(PUBLIC_DIR, rel)
      if (!filePath.startsWith(PUBLIC_DIR)) {
        return new Response("Forbidden", { status: 403 })
      }
      const file = Bun.file(filePath)
      if (!(await file.exists())) {
        return new Response("Not Found", { status: 404 })
      }
      return new Response(file)
    },
  })

  return {
    registryUrl: `http://127.0.0.1:${server.port}/r`,
    stop: () => server.stop(),
  }
}

const STEP_TIMEOUT_MS = Number(process.env.SMOKE_STEP_TIMEOUT_MS ?? 10 * 60 * 1000)

function runCmd(
  command: string,
  args: string[],
  env: NodeJS.ProcessEnv,
  cwd?: string
): Promise<{
  status: number | null
  stdout: string
  stderr: string
}> {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      env,
      cwd,
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
      shell: process.platform === "win32",
    })
    let stdout = ""
    let stderr = ""
    const timer = setTimeout(() => {
      proc.kill("SIGTERM")
      setTimeout(() => proc.kill("SIGKILL"), 5_000)
      reject(
        new Error(
          `Timed out after ${STEP_TIMEOUT_MS}ms: ${command} ${args.slice(0, 6).join(" ")}`
        )
      )
    }, STEP_TIMEOUT_MS)
    proc.stdout?.on("data", (chunk) => {
      stdout += String(chunk)
    })
    proc.stderr?.on("data", (chunk) => {
      stderr += String(chunk)
    })
    proc.on("error", (err) => {
      clearTimeout(timer)
      reject(err)
    })
    proc.on("close", (status) => {
      clearTimeout(timer)
      resolve({ status, stdout, stderr })
    })
  })
}

function runNpm(
  args: string[],
  env: NodeJS.ProcessEnv,
  cwd: string
) {
  return runCmd("npm", args, env, cwd)
}

function runNode(
  args: string[],
  env: NodeJS.ProcessEnv,
  opts?: { cwd?: string }
): Promise<{
  status: number | null
  stdout: string
  stderr: string
}> {
  return runCmd("node", args, env, opts?.cwd)
}

const { registryUrl: REGISTRY, stop: stopRegistryServer } =
  startLocalRegistryServer()

const systems = [
  { id: "default", preset: "default", style: "nova", registry: "base-nova" },
  { id: "aram", preset: "comfort", style: "vega", registry: "base-vega" },
  { id: "firoozeh", preset: "glass", style: "glass", registry: "base-glass" },
  { id: "rose", preset: "rose", style: "rose", registry: "base-rose" },
  { id: "nili", preset: "nili", style: "nili", registry: "base-nili" },
  { id: "khesht", preset: "khesht", style: "khesht", registry: "base-khesht" },
] as const

const comps = ["button", "input", "card", "select", "dialog", "tabs", "table"]

if (!existsSync(FARSIUI_BIN)) {
  console.error(`Missing CLI build at ${FARSIUI_BIN}. Run: pnpm --filter=farsiui build`)
  process.exit(1)
}

let failed = 0
const baseTmp = mkdtempSync(path.join(tmpdir(), "farsiui-ds-smoke-"))

console.log(`Smoke registry: ${REGISTRY}`)
console.log(`Smoke temp: ${baseTmp}`)

for (const ds of systems) {
  const cwd = path.join(baseTmp, ds.id)
  mkdirSync(cwd, { recursive: true })
  console.log(`\n--- ${ds.id}: scaffolding ---`)

  // Minimal Next-ish package so init can write CSS.
  // Pre-declare deps (incl. local farsiui) so updateDependencies skipInstalled
  // avoids slow npm installs of published packages.
  writeFileSync(
    path.join(cwd, "package.json"),
    JSON.stringify(
      {
        name: `ds-smoke-${ds.id}`,
        private: true,
        packageManager: "npm@10",
        dependencies: {
          next: "16.3.3",
          react: "19.2.3",
          "react-dom": "19.2.3",
          tailwindcss: "^4.0.0",
          "class-variance-authority": "^0.7.1",
          "tw-animate-css": "^1.2.5",
          "@base-ui/react": "1.6.0",
          "lucide-react": "^0.511.0",
          clsx: "^2.1.1",
          "tailwind-merge": "^3.3.0",
          farsiui: `file:${path.join(ROOT, "packages/shadcn").replace(/\\/g, "/")}`,
        },
      },
      null,
      2
    )
  )
  mkdirSync(path.join(cwd, "app"), { recursive: true })
  writeFileSync(path.join(cwd, "app/globals.css"), `@import "tailwindcss";\n`)
  writeFileSync(path.join(cwd, ".npmrc"), "legacy-peer-deps=true\n")
  writeFileSync(
    path.join(cwd, "next.config.mjs"),
    `/** @type {import('next').NextConfig} */\nconst nextConfig = {};\nexport default nextConfig;\n`
  )
  writeFileSync(
    path.join(cwd, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          target: "ES2017",
          lib: ["dom", "dom.iterable", "esnext"],
          allowJs: true,
          skipLibCheck: true,
          strict: true,
          noEmit: true,
          module: "esnext",
          moduleResolution: "bundler",
          jsx: "preserve",
          paths: { "@/*": ["./*"] },
        },
        include: ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
      },
      null,
      2
    )
  )

  const env = {
    ...process.env,
    REGISTRY_URL: REGISTRY.endsWith("/r") ? REGISTRY : `${REGISTRY}`,
    npm_config_legacy_peer_deps: "true",
  }

  console.log(`--- ${ds.id}: npm install (seed deps) ---`)
  try {
    const seed = await runNpm(["install", "--no-audit", "--no-fund"], env, cwd)
    if (seed.status !== 0) {
      failed++
      console.error(
        `FAIL ${ds.id}: npm install\n${seed.stdout}\n${seed.stderr}`
      )
      continue
    }
  } catch (err) {
    failed++
    console.error(`FAIL ${ds.id}: npm install\n${err}`)
    continue
  }

  console.log(`--- ${ds.id}: init -p ${ds.preset} ---`)
  let init: { status: number | null; stdout: string; stderr: string }
  try {
    init = await runNode(
      [
        FARSIUI_BIN,
        "init",
        "-y",
        "-d",
        "-s",
        "-p",
        ds.preset,
        "-c",
        cwd,
        "--base",
        "base",
      ],
      env
    )
  } catch (err) {
    failed++
    console.error(`FAIL ${ds.id}: init\n${err}`)
    continue
  }

  if (init.status !== 0) {
    failed++
    console.error(`FAIL ${ds.id}: init\n${init.stdout}\n${init.stderr}`)
    continue
  }

  // Keep local workspace CLI package even if registry requested farsiui@version.
  try {
    const pkgPath = path.join(cwd, "package.json")
    const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as {
      dependencies?: Record<string, string>
      devDependencies?: Record<string, string>
    }
    const localFarsiui = `file:${path.join(ROOT, "packages/shadcn").replace(/\\/g, "/")}`
    if (pkg.dependencies) pkg.dependencies.farsiui = localFarsiui
    if (pkg.devDependencies?.farsiui) pkg.devDependencies.farsiui = localFarsiui
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
  } catch {
    // non-fatal
  }

  for (const comp of comps) {
    console.log(`--- ${ds.id}: add ${comp} ---`)
    let add: { status: number | null; stdout: string; stderr: string }
    try {
      add = await runNode(
        [FARSIUI_BIN, "add", comp, "-y", "-s", "-c", cwd, "-o"],
        env
      )
    } catch (err) {
      failed++
      console.error(`FAIL ${ds.id}: add ${comp}\n${err}`)
      continue
    }
    if (add.status !== 0) {
      failed++
      console.error(`FAIL ${ds.id}: add ${comp}\n${add.stderr}`)
    }
  }

  const globals = path.join(cwd, "app/globals.css")
  const css = existsSync(globals) ? readFileSync(globals, "utf8") : ""
  const buttonPath = path.join(cwd, "components/ui/button.tsx")
  const button = existsSync(buttonPath) ? readFileSync(buttonPath, "utf8") : ""

  if (["glass", "rose", "nili", "khesht"].includes(ds.style)) {
    const tokens = loadStyleInstallTokensFromFile(ds.style as "khesht")
    if (!tokens?.light.primary || !css.includes(tokens.light.primary)) {
      failed++
      console.error(
        `FAIL ${ds.id}: globals.css missing primary ${tokens?.light.primary}`
      )
      continue
    }
    if (ds.style === "khesht" && !button.includes("var(--shadow-control)")) {
      failed++
      console.error(`FAIL ${ds.id}: button missing token shadow bake`)
      continue
    }
  }

  if (!button) {
    failed++
    console.error(`FAIL ${ds.id}: button.tsx not written`)
    continue
  }

  console.log(`OK   ${ds.id} installed → ${ds.registry}`)
}

console.log(`\nTemp dir: ${baseTmp}`)
if (process.env.KEEP_SMOKE !== "1") {
  rmSync(baseTmp, { recursive: true, force: true })
}

stopRegistryServer()

if (failed) {
  console.error(`\n${failed} smoke check(s) failed`)
  process.exit(1)
}
console.log("\nCLI smoke passed for all 6 Design Systems.")
