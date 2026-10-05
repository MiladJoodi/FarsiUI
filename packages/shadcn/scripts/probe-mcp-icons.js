const { spawn } = require("child_process");
const cp = spawn("node", ["dist/index.js", "mcp"], { cwd: process.cwd(), stdio: ["pipe","pipe","pipe"] });
let buf = "";
cp.stdout.on("data", (d) => {
  buf += d.toString();
  if (buf.includes("serverInfo") || buf.includes("result")) {
    const lines = buf.split(/\r?\n/).filter(Boolean);
    for (const line of lines) {
      try {
        const msg = JSON.parse(line);
        if (msg.result && msg.result.serverInfo) {
          const info = msg.result.serverInfo;
          console.log(JSON.stringify({
            name: info.name,
            title: info.title,
            iconCount: (info.icons||[]).length,
            icon0: info.icons && info.icons[0] ? {
              mimeType: info.icons[0].mimeType,
              sizes: info.icons[0].sizes,
              srcPrefix: String(info.icons[0].src).slice(0, 40),
              srcLen: String(info.icons[0].src).length
            } : null
          }, null, 2));
          cp.kill();
          process.exit(0);
        }
      } catch {}
    }
  }
});
setTimeout(() => { console.error("timeout buf=", buf.slice(0,500)); cp.kill(); process.exit(1); }, 8000);
cp.stdin.write(JSON.stringify({
  jsonrpc: "2.0", id: 1, method: "initialize",
  params: {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "verify", version: "1.0.0" }
  }
}) + "\n");
