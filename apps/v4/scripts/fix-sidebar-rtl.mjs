import fs from "node:fs"
import path from "node:path"

const root = "i:/Github/new/FarsiUI/apps/v4/registry/bases/base/blocks"

const replacements = [
  [
    'className="ms-auto transition-transform duration-200 group-data-open/collapsible:rotate-90"',
    'className="ms-auto transition-transform duration-200 rtl:rotate-180 group-data-open/collapsible:rotate-90 rtl:group-data-open/collapsible:-rotate-90"',
  ],
  [
    'className="ms-auto transition-transform group-data-open/collapsible:rotate-90"',
    'className="ms-auto transition-transform rtl:rotate-180 group-data-open/collapsible:rotate-90 rtl:group-data-open/collapsible:-rotate-90"',
  ],
  [
    'className="start-2 bg-sidebar-accent text-sidebar-accent-foreground data-open:rotate-90"',
    'className="start-2 bg-sidebar-accent text-sidebar-accent-foreground rtl:rotate-180 data-open:rotate-90 rtl:data-open:-rotate-90"',
  ],
  [
    'className="aria-expanded:rotate-90"',
    'className="rtl:rotate-180 aria-expanded:rotate-90 rtl:aria-expanded:-rotate-90"',
  ],
  [
    '<SidebarMenuAction className="aria-expanded:rotate-90" />',
    '<SidebarMenuAction className="rtl:rotate-180 aria-expanded:rotate-90 rtl:aria-expanded:-rotate-90" />',
  ],
  [
    'className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"',
    'className="group/collapsible rtl:[&>button>svg:first-child]:rotate-180 [&[data-state=open]>button>svg:first-child]:rotate-90 rtl:[&[data-state=open]>button>svg:first-child]:-rotate-90"',
  ],
]

const files = [
  "sidebar-02/components/app-sidebar.tsx",
  "sidebar-07/components/nav-main.tsx",
  "sidebar-08/components/nav-main.tsx",
  "sidebar-10/components/nav-workspaces.tsx",
  "sidebar-11/components/app-sidebar.tsx",
  "sidebar-12/components/calendars.tsx",
  "sidebar-15/components/calendars.tsx",
  "sidebar-15/components/nav-workspaces.tsx",
  "sidebar-16/components/nav-main.tsx",
]

for (const rel of files) {
  const file = path.join(root, rel)
  let s = fs.readFileSync(file, "utf8")
  const before = s
  for (const [from, to] of replacements) {
    s = s.split(from).join(to)
  }
  if (s !== before) {
    fs.writeFileSync(file, s)
    console.log("updated", rel)
  } else {
    console.log("no-change", rel)
  }
}

// Persianize + border fixes
const simpleText = [
  ["sidebar-10/components/nav-favorites.tsx", "Copy Link", "کپی لینک"],
  ["sidebar-15/components/nav-favorites.tsx", "Copy Link", "کپی لینک"],
  ["sidebar-08/components/nav-main.tsx", '<span className="sr-only">Toggle</span>', '<span className="sr-only">باز و بسته</span>'],
  ["sidebar-16/components/nav-main.tsx", '<span className="sr-only">Toggle</span>', '<span className="sr-only">باز و بسته</span>'],
  ["sidebar-12/page.tsx", "October 2024", "مهر ۱۴۰۵"],
  ["sidebar-10/components/app-sidebar.tsx", 'className="border-r-0"', 'className="border-e-0"'],
  ["sidebar-15/components/sidebar-left.tsx", 'className="border-r-0"', 'className="border-e-0"'],
  [
    "sidebar-07/components/app-sidebar.tsx",
    '<Sidebar dir="rtl" lang="fa" collapsible="icon" dir="rtl" lang="fa" {...props}>',
    '<Sidebar dir="rtl" lang="fa" collapsible="icon" {...props}>',
  ],
]

for (const [rel, from, to] of simpleText) {
  const file = path.join(root, rel)
  let s = fs.readFileSync(file, "utf8")
  if (!s.includes(from)) {
    console.log("missing", rel, from)
    continue
  }
  fs.writeFileSync(file, s.split(from).join(to))
  console.log("text", rel)
}

// Calendar English lists
for (const rel of [
  "sidebar-12/components/app-sidebar.tsx",
  "sidebar-15/components/sidebar-right.tsx",
]) {
  const file = path.join(root, rel)
  let s = fs.readFileSync(file, "utf8")
  s = s
    .replaceAll('"Personal"', '"شخصی"')
    .replaceAll('"Work"', '"کاری"')
    .replaceAll('"Family"', '"خانوادگی"')
    .replaceAll('"Holidays"', '"تعطیلات"')
    .replaceAll('"Birthdays"', '"تولدها"')
  fs.writeFileSync(file, s)
  console.log("calendars", rel)
}
