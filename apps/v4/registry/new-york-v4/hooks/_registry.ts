import { type Registry } from "farsiui/schema"

export const hooks: Registry["items"] = [
  {
    name: "use-media-query",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-media-query.ts",
        type: "registry:hook",
      },
    ],
  },
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
]
