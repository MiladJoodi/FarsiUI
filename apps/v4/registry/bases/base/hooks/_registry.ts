import { type Registry } from "farsiui/schema"

export const hooks: Registry["items"] = [
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-persian-digits-input",
    type: "registry:hook",
    registryDependencies: ["digits"],
    files: [
      {
        path: "hooks/use-persian-digits-input.ts",
        type: "registry:hook",
      },
    ],
  },
]
