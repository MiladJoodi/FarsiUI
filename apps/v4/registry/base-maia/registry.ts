export const registry = {
  "name": "shadcn/ui",
  "homepage": "https://ui.shadcn.com",
  "items": [
    {
      "name": "index",
      "dependencies": [
        "class-variance-authority",
        "cn",
        "lucide-react",
        "@base-ui/react"
      ],
      "devDependencies": [
        "tw-animate-css",
        "farsiui"
      ],
      "registryDependencies": [
        "utils"
      ],
      "files": [],
      "cssVars": {},
      "css": {
        "@import \"tw-animate-css\"": {},
        "@import \"farsiui/tailwind.css\"": {},
        "@layer base": {
          "*": {
            "@apply border-border outline-ring/50": {}
          },
          "body": {
            "@apply bg-background text-foreground": {}
          }
        }
      },
      "type": "registry:style"
    },
    {
      "name": "style",
      "dependencies": [
        "class-variance-authority",
        "cn",
        "lucide-react",
        "@base-ui/react"
      ],
      "devDependencies": [
        "tw-animate-css",
        "farsiui"
      ],
      "registryDependencies": [
        "utils"
      ],
      "files": [],
      "cssVars": {},
      "css": {
        "@import \"tw-animate-css\"": {},
        "@import \"farsiui/tailwind.css\"": {},
        "@layer base": {
          "*": {
            "@apply border-border outline-ring/50": {}
          },
          "body": {
            "@apply bg-background text-foreground": {}
          }
        }
      },
      "type": "registry:style"
    },
    {
      "name": "accordion",
      "files": [
        {
          "path": "ui/accordion.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/accordion",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/accordion-example.tsx",
          "api": "https://base-ui.com/react/components/accordion.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "alert",
      "files": [
        {
          "path": "ui/alert.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/alert",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/alert-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "alert-dialog",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/alert-dialog.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/alert-dialog",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/alert-dialog-example.tsx",
          "api": "https://base-ui.com/react/components/alert-dialog.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "aspect-ratio",
      "files": [
        {
          "path": "ui/aspect-ratio.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/aspect-ratio",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/aspect-ratio-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "avatar",
      "files": [
        {
          "path": "ui/avatar.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/avatar",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/avatar-example.tsx",
          "api": "https://base-ui.com/react/components/avatar.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "badge",
      "files": [
        {
          "path": "ui/badge.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/badge",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/badge-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "breadcrumb",
      "files": [
        {
          "path": "ui/breadcrumb.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/breadcrumb",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/breadcrumb-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "button",
      "files": [
        {
          "path": "ui/button.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/button",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/button-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "button-group",
      "registryDependencies": [
        "separator"
      ],
      "files": [
        {
          "path": "ui/button-group.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/button-group",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/button-group-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "calendar",
      "dependencies": [
        "react-day-picker@latest",
        "date-fns"
      ],
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/calendar.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/calendar",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/calendar-example.tsx",
          "api": "https://react-day-picker.js.org"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "card",
      "files": [
        {
          "path": "ui/card.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/card",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/card-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "carousel",
      "dependencies": [
        "embla-carousel-react"
      ],
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/carousel.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/carousel",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/carousel-example.tsx",
          "api": "https://www.embla-carousel.com/get-started/react"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "chart",
      "dependencies": [
        "recharts@3.8.0"
      ],
      "registryDependencies": [
        "card"
      ],
      "files": [
        {
          "path": "ui/chart.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/chart",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/chart-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "checkbox",
      "files": [
        {
          "path": "ui/checkbox.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/checkbox",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/checkbox-example.tsx",
          "api": "https://base-ui.com/react/components/checkbox.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "collapsible",
      "files": [
        {
          "path": "ui/collapsible.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/collapsible",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/collapsible-example.tsx",
          "api": "https://base-ui.com/react/components/collapsible.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "combobox",
      "dependencies": [
        "@base-ui/react"
      ],
      "registryDependencies": [
        "button",
        "input-group"
      ],
      "files": [
        {
          "path": "ui/combobox.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/combobox",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/combobox-example.tsx",
          "api": "https://base-ui.com/react/components/combobox.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "command",
      "dependencies": [
        "cmdk"
      ],
      "registryDependencies": [
        "dialog",
        "input-group"
      ],
      "files": [
        {
          "path": "ui/command.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/command",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/command-example.tsx",
          "api": "https://github.com/dip/cmdk"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "context-menu",
      "files": [
        {
          "path": "ui/context-menu.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/context-menu",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/context-menu-example.tsx",
          "api": "https://base-ui.com/react/components/context-menu.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "dialog",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/dialog.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/dialog",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/dialog-example.tsx",
          "api": "https://base-ui.com/react/components/dialog.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "drawer",
      "dependencies": [
        "@base-ui/react"
      ],
      "files": [
        {
          "path": "ui/drawer.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/drawer",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/drawer-example.tsx",
          "api": "https://base-ui.com/react/components/drawer.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "dropdown-menu",
      "files": [
        {
          "path": "ui/dropdown-menu.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/dropdown-menu",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/dropdown-menu-example.tsx",
          "api": "https://base-ui.com/react/components/menu.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "empty",
      "files": [
        {
          "path": "ui/empty.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/empty",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/empty-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "field",
      "registryDependencies": [
        "label",
        "separator"
      ],
      "files": [
        {
          "path": "ui/field.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/field",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/field-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "form",
      "type": "registry:ui"
    },
    {
      "name": "hover-card",
      "files": [
        {
          "path": "ui/hover-card.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/hover-card",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/hover-card-example.tsx",
          "api": "https://base-ui.com/react/components/hover-card.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "input",
      "files": [
        {
          "path": "ui/input.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/input",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/input-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "input-group",
      "registryDependencies": [
        "button",
        "input",
        "textarea"
      ],
      "files": [
        {
          "path": "ui/input-group.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/input-group",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/input-group-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "input-otp",
      "dependencies": [
        "input-otp"
      ],
      "files": [
        {
          "path": "ui/input-otp.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/input-otp",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/input-otp-example.tsx",
          "api": "https://input-otp.rodz.dev"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "item",
      "registryDependencies": [
        "separator"
      ],
      "files": [
        {
          "path": "ui/item.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/item",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/item-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "label",
      "files": [
        {
          "path": "ui/label.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/label",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/label-example.tsx",
          "api": "https://base-ui.com/react/components/label.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "menubar",
      "registryDependencies": [
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "ui/menubar.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/menubar",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/menubar-example.tsx",
          "api": "https://base-ui.com/react/components/menubar.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "navigation-menu",
      "files": [
        {
          "path": "ui/navigation-menu.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/navigation-menu",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/navigation-menu-example.tsx",
          "api": "https://base-ui.com/react/components/navigation-menu.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "pagination",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/pagination.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/pagination",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/pagination-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "popover",
      "files": [
        {
          "path": "ui/popover.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/popover",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/popover-example.tsx",
          "api": "https://base-ui.com/react/components/popover.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "progress",
      "files": [
        {
          "path": "ui/progress.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/progress",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/progress-example.tsx",
          "api": "https://base-ui.com/react/components/progress.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "radio-group",
      "files": [
        {
          "path": "ui/radio-group.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/radio-group",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/radio-group-example.tsx",
          "api": "https://base-ui.com/react/components/radio-group.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "resizable",
      "dependencies": [
        "react-resizable-panels"
      ],
      "files": [
        {
          "path": "ui/resizable.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/resizable",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/resizable-example.tsx",
          "api": "https://github.com/bvaughn/react-resizable-panels"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "scroll-area",
      "files": [
        {
          "path": "ui/scroll-area.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/scroll-area",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/scroll-area-example.tsx",
          "api": "https://base-ui.com/react/components/scroll-area.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "select",
      "files": [
        {
          "path": "ui/select.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/select",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/select-example.tsx",
          "api": "https://base-ui.com/react/components/select.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "separator",
      "files": [
        {
          "path": "ui/separator.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/separator",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/separator-example.tsx",
          "api": "https://base-ui.com/react/components/separator.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "sheet",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/sheet.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/sheet",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/sheet-example.tsx",
          "api": "https://base-ui.com/react/components/dialog.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "sidebar",
      "registryDependencies": [
        "button",
        "input",
        "separator",
        "sheet",
        "skeleton",
        "tooltip",
        "use-mobile"
      ],
      "files": [
        {
          "path": "ui/sidebar.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/sidebar",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/sidebar-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "skeleton",
      "files": [
        {
          "path": "ui/skeleton.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/skeleton",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/skeleton-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "slider",
      "files": [
        {
          "path": "ui/slider.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/slider",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/slider-example.tsx",
          "api": "https://base-ui.com/react/components/slider.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "sonner",
      "dependencies": [
        "sonner",
        "next-themes"
      ],
      "files": [
        {
          "path": "ui/sonner.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/sonner",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/sonner-example.tsx",
          "api": "https://sonner.emilkowal.ski"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "spinner",
      "files": [
        {
          "path": "ui/spinner.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/spinner",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/spinner-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "switch",
      "files": [
        {
          "path": "ui/switch.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/switch",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/switch-example.tsx",
          "api": "https://base-ui.com/react/components/switch.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "table",
      "files": [
        {
          "path": "ui/table.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/table",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/table-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "tabs",
      "files": [
        {
          "path": "ui/tabs.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/tabs",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/tabs-example.tsx",
          "api": "https://base-ui.com/react/components/tabs.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "textarea",
      "files": [
        {
          "path": "ui/textarea.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/textarea",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/textarea-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "toast",
      "dependencies": [
        "@base-ui/react"
      ],
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/toast.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/toast",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/toast-example.tsx",
          "api": "https://base-ui.com/react/components/toast.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "toggle",
      "files": [
        {
          "path": "ui/toggle.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/toggle",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/toggle-example.tsx",
          "api": "https://base-ui.com/react/components/toggle.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "toggle-group",
      "registryDependencies": [
        "toggle"
      ],
      "files": [
        {
          "path": "ui/toggle-group.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/toggle-group",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/toggle-group-example.tsx",
          "api": "https://base-ui.com/react/components/toggle-group.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "tooltip",
      "files": [
        {
          "path": "ui/tooltip.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/tooltip",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/tooltip-example.tsx",
          "api": "https://base-ui.com/react/components/tooltip.md"
        }
      },
      "docs": "The `tooltip` component has been added. Remember to wrap your app with the `TooltipProvider` component.\n\n```tsx title=\"app/layout.tsx\"\nimport { TooltipProvider } from \"@/components/ui/tooltip\"\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\">\n      <body>\n        <TooltipProvider>{children}</TooltipProvider>\n      </body>\n    </html>\n  )\n}\n```\n",
      "type": "registry:ui"
    },
    {
      "name": "kbd",
      "files": [
        {
          "path": "ui/kbd.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/kbd",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/kbd-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "native-select",
      "files": [
        {
          "path": "ui/native-select.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/native-select",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/native-select-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "direction",
      "dependencies": [
        "@base-ui/react"
      ],
      "files": [
        {
          "path": "ui/direction.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/direction",
          "api": "https://base-ui.com/react/utils/direction-provider.md"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "attachment",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/attachment.tsx",
          "type": "registry:ui"
        }
      ],
      "type": "registry:ui"
    },
    {
      "name": "bubble",
      "files": [
        {
          "path": "ui/bubble.tsx",
          "type": "registry:ui"
        }
      ],
      "type": "registry:ui"
    },
    {
      "name": "message-scroller",
      "dependencies": [
        "@farsiui/react"
      ],
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/message-scroller.tsx",
          "type": "registry:ui"
        }
      ],
      "type": "registry:ui"
    },
    {
      "name": "questionnaire",
      "dependencies": [
        "@farsiui/react"
      ],
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "ui/questionnaire.tsx",
          "type": "registry:ui"
        }
      ],
      "meta": {
        "links": {
          "docs": "https://ui.shadcn.com/docs/components/base/questionnaire",
          "examples": "https://ui.shadcn.com/code/apps/v4/registry/bases/base/examples/questionnaire-example.tsx"
        }
      },
      "type": "registry:ui"
    },
    {
      "name": "marker",
      "files": [
        {
          "path": "ui/marker.tsx",
          "type": "registry:ui"
        }
      ],
      "type": "registry:ui"
    },
    {
      "name": "message",
      "files": [
        {
          "path": "ui/message.tsx",
          "type": "registry:ui"
        }
      ],
      "type": "registry:ui"
    },
    {
      "name": "accordion-example",
      "title": "Accordion",
      "registryDependencies": [
        "accordion",
        "button",
        "card",
        "example"
      ],
      "files": [
        {
          "path": "examples/accordion-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "alert-example",
      "title": "Alert",
      "registryDependencies": [
        "alert",
        "badge",
        "example"
      ],
      "files": [
        {
          "path": "examples/alert-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "alert-dialog-example",
      "title": "Alert Dialog",
      "registryDependencies": [
        "alert-dialog",
        "button",
        "dialog",
        "example"
      ],
      "files": [
        {
          "path": "examples/alert-dialog-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "aspect-ratio-example",
      "title": "Aspect Ratio",
      "registryDependencies": [
        "aspect-ratio",
        "example"
      ],
      "files": [
        {
          "path": "examples/aspect-ratio-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "avatar-example",
      "title": "Avatar",
      "registryDependencies": [
        "avatar",
        "button",
        "empty",
        "example"
      ],
      "files": [
        {
          "path": "examples/avatar-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "badge-example",
      "title": "Badge",
      "registryDependencies": [
        "badge",
        "spinner",
        "example"
      ],
      "files": [
        {
          "path": "examples/badge-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "breadcrumb-example",
      "title": "Breadcrumb",
      "registryDependencies": [
        "breadcrumb",
        "dropdown-menu",
        "example"
      ],
      "files": [
        {
          "path": "examples/breadcrumb-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "button-example",
      "title": "Button",
      "registryDependencies": [
        "button",
        "example"
      ],
      "files": [
        {
          "path": "examples/button-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "button-group-example",
      "title": "Button Group",
      "registryDependencies": [
        "button",
        "button-group",
        "dropdown-menu",
        "field",
        "input",
        "input-group",
        "label",
        "popover",
        "select",
        "tooltip",
        "example"
      ],
      "files": [
        {
          "path": "examples/button-group-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "calendar-example",
      "title": "Calendar",
      "registryDependencies": [
        "button",
        "calendar",
        "card",
        "field",
        "input",
        "label",
        "popover",
        "example"
      ],
      "files": [
        {
          "path": "examples/calendar-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "card-example",
      "title": "Card",
      "registryDependencies": [
        "avatar",
        "button",
        "card",
        "field",
        "input",
        "example"
      ],
      "files": [
        {
          "path": "examples/card-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "carousel-example",
      "title": "Carousel",
      "registryDependencies": [
        "card",
        "carousel",
        "example"
      ],
      "files": [
        {
          "path": "examples/carousel-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "chart-example",
      "title": "Chart",
      "registryDependencies": [
        "chart",
        "card",
        "example"
      ],
      "files": [
        {
          "path": "examples/chart-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "checkbox-example",
      "title": "Checkbox",
      "registryDependencies": [
        "checkbox",
        "field",
        "table",
        "example"
      ],
      "files": [
        {
          "path": "examples/checkbox-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "collapsible-example",
      "title": "Collapsible",
      "registryDependencies": [
        "button",
        "card",
        "collapsible",
        "field",
        "input",
        "tabs",
        "example"
      ],
      "files": [
        {
          "path": "examples/collapsible-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "combobox-example",
      "title": "Combobox",
      "registryDependencies": [
        "button",
        "card",
        "combobox",
        "dialog",
        "field",
        "input",
        "input-group",
        "item",
        "select",
        "example"
      ],
      "files": [
        {
          "path": "examples/combobox-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "command-example",
      "title": "Command",
      "registryDependencies": [
        "button",
        "command",
        "example"
      ],
      "files": [
        {
          "path": "examples/command-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "context-menu-example",
      "title": "Context Menu",
      "registryDependencies": [
        "button",
        "context-menu",
        "dialog",
        "example"
      ],
      "files": [
        {
          "path": "examples/context-menu-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "dialog-example",
      "title": "Dialog",
      "registryDependencies": [
        "button",
        "checkbox",
        "dialog",
        "field",
        "input",
        "input-group",
        "kbd",
        "native-select",
        "select",
        "switch",
        "tabs",
        "textarea",
        "tooltip",
        "example"
      ],
      "files": [
        {
          "path": "examples/dialog-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "drawer-example",
      "title": "Drawer",
      "registryDependencies": [
        "drawer",
        "example"
      ],
      "files": [
        {
          "path": "examples/drawer-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "dropdown-menu-example",
      "title": "Dropdown Menu",
      "registryDependencies": [
        "avatar",
        "button",
        "dialog",
        "dropdown-menu",
        "example"
      ],
      "files": [
        {
          "path": "examples/dropdown-menu-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "empty-example",
      "title": "Empty",
      "registryDependencies": [
        "button",
        "empty",
        "input-group",
        "kbd",
        "example"
      ],
      "files": [
        {
          "path": "examples/empty-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "field-example",
      "title": "Field",
      "registryDependencies": [
        "badge",
        "checkbox",
        "field",
        "input",
        "input-otp",
        "native-select",
        "radio-group",
        "select",
        "slider",
        "switch",
        "textarea",
        "example"
      ],
      "files": [
        {
          "path": "examples/field-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "hover-card-example",
      "title": "Hover Card",
      "registryDependencies": [
        "button",
        "dialog",
        "hover-card",
        "example"
      ],
      "files": [
        {
          "path": "examples/hover-card-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "input-example",
      "title": "Input",
      "registryDependencies": [
        "button",
        "field",
        "input",
        "native-select",
        "select",
        "example"
      ],
      "files": [
        {
          "path": "examples/input-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "input-group-example",
      "title": "Input Group",
      "registryDependencies": [
        "button",
        "button-group",
        "card",
        "dropdown-menu",
        "field",
        "input",
        "input-group",
        "kbd",
        "popover",
        "spinner",
        "textarea",
        "tooltip",
        "example"
      ],
      "files": [
        {
          "path": "examples/input-group-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "input-otp-example",
      "title": "Input OTP",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input-otp",
        "example"
      ],
      "files": [
        {
          "path": "examples/input-otp-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "item-example",
      "title": "Item",
      "registryDependencies": [
        "button",
        "item",
        "example"
      ],
      "files": [
        {
          "path": "examples/item-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "kbd-example",
      "title": "Kbd",
      "registryDependencies": [
        "button",
        "input-group",
        "kbd",
        "tooltip",
        "example"
      ],
      "files": [
        {
          "path": "examples/kbd-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "label-example",
      "title": "Label",
      "registryDependencies": [
        "checkbox",
        "field",
        "input",
        "label",
        "textarea",
        "example"
      ],
      "files": [
        {
          "path": "examples/label-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "menubar-example",
      "title": "Menubar",
      "registryDependencies": [
        "button",
        "dialog",
        "menubar",
        "example"
      ],
      "files": [
        {
          "path": "examples/menubar-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "native-select-example",
      "title": "Native Select",
      "registryDependencies": [
        "field",
        "native-select",
        "example"
      ],
      "files": [
        {
          "path": "examples/native-select-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "navigation-menu-example",
      "title": "Navigation Menu",
      "registryDependencies": [
        "button",
        "dialog",
        "navigation-menu",
        "example"
      ],
      "files": [
        {
          "path": "examples/navigation-menu-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "pagination-example",
      "title": "Pagination",
      "registryDependencies": [
        "field",
        "pagination",
        "select",
        "example"
      ],
      "files": [
        {
          "path": "examples/pagination-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "popover-example",
      "title": "Popover",
      "registryDependencies": [
        "button",
        "dialog",
        "field",
        "input",
        "popover",
        "example"
      ],
      "files": [
        {
          "path": "examples/popover-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "progress-example",
      "title": "Progress",
      "registryDependencies": [
        "field",
        "item",
        "progress",
        "slider",
        "example"
      ],
      "files": [
        {
          "path": "examples/progress-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "radio-group-example",
      "title": "Radio Group",
      "registryDependencies": [
        "field",
        "radio-group",
        "example"
      ],
      "files": [
        {
          "path": "examples/radio-group-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "resizable-example",
      "title": "Resizable",
      "registryDependencies": [
        "resizable",
        "example"
      ],
      "files": [
        {
          "path": "examples/resizable-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "scroll-area-example",
      "title": "Scroll Area",
      "registryDependencies": [
        "scroll-area",
        "separator",
        "example"
      ],
      "files": [
        {
          "path": "examples/scroll-area-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "select-example",
      "title": "Select",
      "registryDependencies": [
        "button",
        "dialog",
        "field",
        "input",
        "item",
        "native-select",
        "select",
        "example"
      ],
      "files": [
        {
          "path": "examples/select-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "separator-example",
      "title": "Separator",
      "registryDependencies": [
        "separator",
        "example"
      ],
      "files": [
        {
          "path": "examples/separator-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "sheet-example",
      "title": "Sheet",
      "registryDependencies": [
        "button",
        "field",
        "input",
        "sheet",
        "example"
      ],
      "files": [
        {
          "path": "examples/sheet-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "sidebar-example",
      "title": "Sidebar",
      "registryDependencies": [
        "button",
        "dropdown-menu",
        "item",
        "label",
        "sidebar",
        "example"
      ],
      "files": [
        {
          "path": "examples/sidebar-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "sidebar-icon-example",
      "title": "Sidebar (Icon)",
      "registryDependencies": [
        "avatar",
        "button",
        "collapsible",
        "dropdown-menu",
        "item",
        "sidebar",
        "example"
      ],
      "files": [
        {
          "path": "examples/sidebar-icon-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "sidebar-inset-example",
      "title": "Sidebar (Inset)",
      "registryDependencies": [
        "collapsible",
        "sidebar",
        "example"
      ],
      "files": [
        {
          "path": "examples/sidebar-inset-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "sidebar-floating-example",
      "title": "Sidebar (Floating)",
      "registryDependencies": [
        "button",
        "card",
        "dropdown-menu",
        "field",
        "item",
        "sidebar",
        "example"
      ],
      "files": [
        {
          "path": "examples/sidebar-floating-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "skeleton-example",
      "title": "Skeleton",
      "registryDependencies": [
        "skeleton",
        "example"
      ],
      "files": [
        {
          "path": "examples/skeleton-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "slider-example",
      "title": "Slider",
      "registryDependencies": [
        "label",
        "slider",
        "example"
      ],
      "files": [
        {
          "path": "examples/slider-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "sonner-example",
      "title": "Sonner",
      "registryDependencies": [
        "sonner",
        "example"
      ],
      "files": [
        {
          "path": "examples/sonner-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "spinner-example",
      "title": "Spinner",
      "registryDependencies": [
        "badge",
        "button",
        "empty",
        "field",
        "input-group",
        "spinner",
        "example"
      ],
      "files": [
        {
          "path": "examples/spinner-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "switch-example",
      "title": "Switch",
      "registryDependencies": [
        "field",
        "label",
        "switch",
        "example"
      ],
      "files": [
        {
          "path": "examples/switch-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "table-example",
      "title": "Table",
      "registryDependencies": [
        "button",
        "dropdown-menu",
        "input",
        "select",
        "table",
        "example"
      ],
      "files": [
        {
          "path": "examples/table-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "tabs-example",
      "title": "Tabs",
      "registryDependencies": [
        "button",
        "dropdown-menu",
        "tabs",
        "example"
      ],
      "files": [
        {
          "path": "examples/tabs-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "textarea-example",
      "title": "Textarea",
      "registryDependencies": [
        "field",
        "textarea",
        "example"
      ],
      "files": [
        {
          "path": "examples/textarea-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "toast-example",
      "title": "Toast",
      "registryDependencies": [
        "button",
        "toast",
        "example"
      ],
      "files": [
        {
          "path": "examples/toast-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "toggle-example",
      "title": "Toggle",
      "registryDependencies": [
        "toggle",
        "example"
      ],
      "files": [
        {
          "path": "examples/toggle-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "toggle-group-example",
      "title": "Toggle Group",
      "registryDependencies": [
        "input",
        "select",
        "toggle-group",
        "example"
      ],
      "files": [
        {
          "path": "examples/toggle-group-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "tooltip-example",
      "title": "Tooltip",
      "registryDependencies": [
        "button",
        "kbd",
        "tooltip",
        "example"
      ],
      "files": [
        {
          "path": "examples/tooltip-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "demo",
      "title": "Demo",
      "registryDependencies": [
        "alert-dialog",
        "badge",
        "button",
        "button-group",
        "card",
        "checkbox",
        "dropdown-menu",
        "field",
        "input-group",
        "item",
        "radio-group",
        "slider",
        "switch",
        "textarea"
      ],
      "files": [
        {
          "path": "examples/demo.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "component-example",
      "title": "Example",
      "registryDependencies": [
        "alert-dialog",
        "badge",
        "button",
        "card",
        "combobox",
        "dropdown-menu",
        "field",
        "input",
        "select",
        "textarea",
        "example"
      ],
      "files": [
        {
          "path": "examples/component-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "attachment-example",
      "title": "Attachment",
      "registryDependencies": [
        "attachment"
      ],
      "files": [
        {
          "path": "examples/attachment-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "bubble-example",
      "title": "Bubble",
      "registryDependencies": [
        "bubble",
        "button",
        "collapsible",
        "example"
      ],
      "files": [
        {
          "path": "examples/bubble-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "message-scroller-example",
      "title": "Message Scroller",
      "registryDependencies": [
        "attachment",
        "bubble",
        "button",
        "card",
        "example",
        "input-group",
        "marker",
        "message",
        "message-scroller",
        "spinner"
      ],
      "files": [
        {
          "path": "examples/message-scroller-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "questionnaire-example",
      "title": "Questionnaire",
      "registryDependencies": [
        "button",
        "card",
        "dialog",
        "example",
        "questionnaire",
        "sonner"
      ],
      "files": [
        {
          "path": "examples/questionnaire-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "marker-example",
      "title": "Marker",
      "registryDependencies": [
        "marker",
        "button",
        "accordion",
        "drawer",
        "spinner",
        "example"
      ],
      "files": [
        {
          "path": "examples/marker-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "message-example",
      "title": "Message",
      "registryDependencies": [
        "bubble",
        "message",
        "button",
        "example"
      ],
      "files": [
        {
          "path": "examples/message-example.tsx",
          "type": "registry:example"
        }
      ],
      "type": "registry:example"
    },
    {
      "name": "utils",
      "dependencies": [
        "cn"
      ],
      "files": [
        {
          "path": "lib/utils.ts",
          "type": "registry:lib"
        }
      ],
      "type": "registry:lib"
    },
    {
      "name": "example",
      "title": "Example",
      "files": [
        {
          "path": "components/example.tsx",
          "type": "registry:component"
        }
      ],
      "type": "registry:component"
    },
    {
      "name": "reset-password-01",
      "title": "Reset Password 01",
      "description": "تغییر رمز عبور — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/reset-password-01/page.tsx",
          "type": "registry:page",
          "target": "app/reset-password/page.tsx"
        }
      ],
      "categories": [
        "reset-password"
      ],
      "type": "registry:block"
    },
    {
      "name": "reset-password-02",
      "title": "Reset Password 02",
      "description": "تغییر رمز عبور — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/reset-password-02/page.tsx",
          "type": "registry:page",
          "target": "app/reset-password/page.tsx"
        }
      ],
      "categories": [
        "reset-password"
      ],
      "type": "registry:block"
    },
    {
      "name": "otp-01",
      "title": "OTP Verification 01",
      "description": "تأیید کد یکبارمصرف — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/otp-01/page.tsx",
          "type": "registry:page",
          "target": "app/otp/page.tsx"
        }
      ],
      "categories": [
        "otp"
      ],
      "type": "registry:block"
    },
    {
      "name": "otp-02",
      "title": "OTP Verification 02",
      "description": "تأیید کد یکبارمصرف — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/otp-02/page.tsx",
          "type": "registry:page",
          "target": "app/otp/page.tsx"
        }
      ],
      "categories": [
        "otp"
      ],
      "type": "registry:block"
    },
    {
      "name": "navbar-01",
      "title": "Navbar 01",
      "description": "نوار ناوبری — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/navbar-01/page.tsx",
          "type": "registry:page",
          "target": "app/navbar/page.tsx"
        }
      ],
      "categories": [
        "navbar"
      ],
      "type": "registry:block"
    },
    {
      "name": "navbar-02",
      "title": "Navbar 02",
      "description": "نوار ناوبری — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/navbar-02/page.tsx",
          "type": "registry:page",
          "target": "app/navbar/page.tsx"
        }
      ],
      "categories": [
        "navbar"
      ],
      "type": "registry:block"
    },
    {
      "name": "header-01",
      "title": "Header 01",
      "description": "سربرگ — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/header-01/page.tsx",
          "type": "registry:page",
          "target": "app/header/page.tsx"
        }
      ],
      "categories": [
        "header"
      ],
      "type": "registry:block"
    },
    {
      "name": "header-02",
      "title": "Header 02",
      "description": "سربرگ — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/header-02/page.tsx",
          "type": "registry:page",
          "target": "app/header/page.tsx"
        }
      ],
      "categories": [
        "header"
      ],
      "type": "registry:block"
    },
    {
      "name": "footer-01",
      "title": "Footer 01",
      "description": "پابرگ — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/footer-01/page.tsx",
          "type": "registry:page",
          "target": "app/footer/page.tsx"
        }
      ],
      "categories": [
        "footer"
      ],
      "type": "registry:block"
    },
    {
      "name": "footer-02",
      "title": "Footer 02",
      "description": "پابرگ — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/footer-02/page.tsx",
          "type": "registry:page",
          "target": "app/footer/page.tsx"
        }
      ],
      "categories": [
        "footer"
      ],
      "type": "registry:block"
    },
    {
      "name": "mobile-navigation-01",
      "title": "Mobile Navigation 01",
      "description": "ناوبری موبایل — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/mobile-navigation-01/page.tsx",
          "type": "registry:page",
          "target": "app/mobile-navigation/page.tsx"
        }
      ],
      "categories": [
        "mobile-navigation"
      ],
      "type": "registry:block"
    },
    {
      "name": "mobile-navigation-02",
      "title": "Mobile Navigation 02",
      "description": "ناوبری موبایل — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/mobile-navigation-02/page.tsx",
          "type": "registry:page",
          "target": "app/mobile-navigation/page.tsx"
        }
      ],
      "categories": [
        "mobile-navigation"
      ],
      "type": "registry:block"
    },
    {
      "name": "breadcrumb-block-01",
      "title": "Breadcrumb 01",
      "description": "مسیر صفحه — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/breadcrumb-block-01/page.tsx",
          "type": "registry:page",
          "target": "app/breadcrumb-block/page.tsx"
        }
      ],
      "categories": [
        "breadcrumb-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "breadcrumb-block-02",
      "title": "Breadcrumb 02",
      "description": "مسیر صفحه — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/breadcrumb-block-02/page.tsx",
          "type": "registry:page",
          "target": "app/breadcrumb-block/page.tsx"
        }
      ],
      "categories": [
        "breadcrumb-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "blog-grid-01",
      "title": "Blog Grid 01",
      "description": "فهرست وبلاگ — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/blog-grid-01/page.tsx",
          "type": "registry:page",
          "target": "app/blog-grid/page.tsx"
        }
      ],
      "categories": [
        "blog-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "blog-grid-02",
      "title": "Blog Grid 02",
      "description": "فهرست وبلاگ — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/blog-grid-02/page.tsx",
          "type": "registry:page",
          "target": "app/blog-grid/page.tsx"
        }
      ],
      "categories": [
        "blog-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "article-01",
      "title": "Article 01",
      "description": "مقاله — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/article-01/page.tsx",
          "type": "registry:page",
          "target": "app/article/page.tsx"
        }
      ],
      "categories": [
        "article"
      ],
      "type": "registry:block"
    },
    {
      "name": "article-02",
      "title": "Article 02",
      "description": "مقاله — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/article-02/page.tsx",
          "type": "registry:page",
          "target": "app/article/page.tsx"
        }
      ],
      "categories": [
        "article"
      ],
      "type": "registry:block"
    },
    {
      "name": "account-notifications-01",
      "title": "Notifications 01",
      "description": "اعلان‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/account-notifications-01/page.tsx",
          "type": "registry:page",
          "target": "app/account-notifications/page.tsx"
        }
      ],
      "categories": [
        "account-notifications"
      ],
      "type": "registry:block"
    },
    {
      "name": "account-notifications-02",
      "title": "Notifications 02",
      "description": "اعلان‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/account-notifications-02/page.tsx",
          "type": "registry:page",
          "target": "app/account-notifications/page.tsx"
        }
      ],
      "categories": [
        "account-notifications"
      ],
      "type": "registry:block"
    },
    {
      "name": "account-billing-01",
      "title": "Billing 01",
      "description": "صورتحساب — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/account-billing-01/page.tsx",
          "type": "registry:page",
          "target": "app/account-billing/page.tsx"
        }
      ],
      "categories": [
        "account-billing"
      ],
      "type": "registry:block"
    },
    {
      "name": "account-billing-02",
      "title": "Billing 02",
      "description": "صورتحساب — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/account-billing-02/page.tsx",
          "type": "registry:page",
          "target": "app/account-billing/page.tsx"
        }
      ],
      "categories": [
        "account-billing"
      ],
      "type": "registry:block"
    },
    {
      "name": "sessions-01",
      "title": "Sessions 01",
      "description": "نشست‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/sessions-01/page.tsx",
          "type": "registry:page",
          "target": "app/sessions/page.tsx"
        }
      ],
      "categories": [
        "sessions"
      ],
      "type": "registry:block"
    },
    {
      "name": "sessions-02",
      "title": "Sessions 02",
      "description": "نشست‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/sessions-02/page.tsx",
          "type": "registry:page",
          "target": "app/sessions/page.tsx"
        }
      ],
      "categories": [
        "sessions"
      ],
      "type": "registry:block"
    },
    {
      "name": "chat-01",
      "title": "Chat 01",
      "description": "گفتگو — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/chat-01/page.tsx",
          "type": "registry:page",
          "target": "app/chat/page.tsx"
        }
      ],
      "categories": [
        "chat"
      ],
      "type": "registry:block"
    },
    {
      "name": "chat-02",
      "title": "Chat 02",
      "description": "گفتگو — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/chat-02/page.tsx",
          "type": "registry:page",
          "target": "app/chat/page.tsx"
        }
      ],
      "categories": [
        "chat"
      ],
      "type": "registry:block"
    },
    {
      "name": "conversation-01",
      "title": "Conversation 01",
      "description": "مکالمه — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/conversation-01/page.tsx",
          "type": "registry:page",
          "target": "app/conversation/page.tsx"
        }
      ],
      "categories": [
        "conversation"
      ],
      "type": "registry:block"
    },
    {
      "name": "conversation-02",
      "title": "Conversation 02",
      "description": "مکالمه — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/conversation-02/page.tsx",
          "type": "registry:page",
          "target": "app/conversation/page.tsx"
        }
      ],
      "categories": [
        "conversation"
      ],
      "type": "registry:block"
    },
    {
      "name": "message-list-01",
      "title": "Message List 01",
      "description": "فهرست پیام‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/message-list-01/page.tsx",
          "type": "registry:page",
          "target": "app/message-list/page.tsx"
        }
      ],
      "categories": [
        "message-list"
      ],
      "type": "registry:block"
    },
    {
      "name": "message-list-02",
      "title": "Message List 02",
      "description": "فهرست پیام‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/message-list-02/page.tsx",
          "type": "registry:page",
          "target": "app/message-list/page.tsx"
        }
      ],
      "categories": [
        "message-list"
      ],
      "type": "registry:block"
    },
    {
      "name": "comments-01",
      "title": "Comments 01",
      "description": "دیدگاه‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/comments-01/page.tsx",
          "type": "registry:page",
          "target": "app/comments/page.tsx"
        }
      ],
      "categories": [
        "comments"
      ],
      "type": "registry:block"
    },
    {
      "name": "comments-02",
      "title": "Comments 02",
      "description": "دیدگاه‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/comments-02/page.tsx",
          "type": "registry:page",
          "target": "app/comments/page.tsx"
        }
      ],
      "categories": [
        "comments"
      ],
      "type": "registry:block"
    },
    {
      "name": "notifications-01",
      "title": "Notifications 01",
      "description": "اعلان‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/notifications-01/page.tsx",
          "type": "registry:page",
          "target": "app/notifications/page.tsx"
        }
      ],
      "categories": [
        "notifications"
      ],
      "type": "registry:block"
    },
    {
      "name": "notifications-02",
      "title": "Notifications 02",
      "description": "اعلان‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/notifications-02/page.tsx",
          "type": "registry:page",
          "target": "app/notifications/page.tsx"
        }
      ],
      "categories": [
        "notifications"
      ],
      "type": "registry:block"
    },
    {
      "name": "inbox-01",
      "title": "Inbox 01",
      "description": "صندوق پیام‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/inbox-01/page.tsx",
          "type": "registry:page",
          "target": "app/inbox/page.tsx"
        }
      ],
      "categories": [
        "inbox"
      ],
      "type": "registry:block"
    },
    {
      "name": "inbox-02",
      "title": "Inbox 02",
      "description": "صندوق پیام‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/inbox-02/page.tsx",
          "type": "registry:page",
          "target": "app/inbox/page.tsx"
        }
      ],
      "categories": [
        "inbox"
      ],
      "type": "registry:block"
    },
    {
      "name": "search-01",
      "title": "Search 01",
      "description": "جستجو — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/search-01/page.tsx",
          "type": "registry:page",
          "target": "app/search/page.tsx"
        }
      ],
      "categories": [
        "search"
      ],
      "type": "registry:block"
    },
    {
      "name": "search-02",
      "title": "Search 02",
      "description": "جستجو — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/search-02/page.tsx",
          "type": "registry:page",
          "target": "app/search/page.tsx"
        }
      ],
      "categories": [
        "search"
      ],
      "type": "registry:block"
    },
    {
      "name": "search-results-01",
      "title": "Search Results 01",
      "description": "نتایج جستجو — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/search-results-01/page.tsx",
          "type": "registry:page",
          "target": "app/search-results/page.tsx"
        }
      ],
      "categories": [
        "search-results"
      ],
      "type": "registry:block"
    },
    {
      "name": "search-results-02",
      "title": "Search Results 02",
      "description": "نتایج جستجو — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/search-results-02/page.tsx",
          "type": "registry:page",
          "target": "app/search-results/page.tsx"
        }
      ],
      "categories": [
        "search-results"
      ],
      "type": "registry:block"
    },
    {
      "name": "filters-01",
      "title": "Filters 01",
      "description": "فیلترها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/filters-01/page.tsx",
          "type": "registry:page",
          "target": "app/filters/page.tsx"
        }
      ],
      "categories": [
        "filters"
      ],
      "type": "registry:block"
    },
    {
      "name": "filters-02",
      "title": "Filters 02",
      "description": "فیلترها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/filters-02/page.tsx",
          "type": "registry:page",
          "target": "app/filters/page.tsx"
        }
      ],
      "categories": [
        "filters"
      ],
      "type": "registry:block"
    },
    {
      "name": "advanced-filters-01",
      "title": "Advanced Filters 01",
      "description": "فیلترهای پیشرفته — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/advanced-filters-01/page.tsx",
          "type": "registry:page",
          "target": "app/advanced-filters/page.tsx"
        }
      ],
      "categories": [
        "advanced-filters"
      ],
      "type": "registry:block"
    },
    {
      "name": "advanced-filters-02",
      "title": "Advanced Filters 02",
      "description": "فیلترهای پیشرفته — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/advanced-filters-02/page.tsx",
          "type": "registry:page",
          "target": "app/advanced-filters/page.tsx"
        }
      ],
      "categories": [
        "advanced-filters"
      ],
      "type": "registry:block"
    },
    {
      "name": "sort-filter-01",
      "title": "Sort & Filter 01",
      "description": "مرتب‌سازی و فیلتر — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/sort-filter-01/page.tsx",
          "type": "registry:page",
          "target": "app/sort-filter/page.tsx"
        }
      ],
      "categories": [
        "sort-filter"
      ],
      "type": "registry:block"
    },
    {
      "name": "sort-filter-02",
      "title": "Sort & Filter 02",
      "description": "مرتب‌سازی و فیلتر — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/sort-filter-02/page.tsx",
          "type": "registry:page",
          "target": "app/sort-filter/page.tsx"
        }
      ],
      "categories": [
        "sort-filter"
      ],
      "type": "registry:block"
    },
    {
      "name": "empty-search-01",
      "title": "Empty Search 01",
      "description": "نتیجه‌ای پیدا نشد — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/empty-search-01/page.tsx",
          "type": "registry:page",
          "target": "app/empty-search/page.tsx"
        }
      ],
      "categories": [
        "empty-search"
      ],
      "type": "registry:block"
    },
    {
      "name": "empty-search-02",
      "title": "Empty Search 02",
      "description": "نتیجه‌ای پیدا نشد — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/empty-search-02/page.tsx",
          "type": "registry:page",
          "target": "app/empty-search/page.tsx"
        }
      ],
      "categories": [
        "empty-search"
      ],
      "type": "registry:block"
    },
    {
      "name": "file-upload-01",
      "title": "File Upload 01",
      "description": "بارگذاری فایل — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/file-upload-01/page.tsx",
          "type": "registry:page",
          "target": "app/file-upload/page.tsx"
        }
      ],
      "categories": [
        "file-upload"
      ],
      "type": "registry:block"
    },
    {
      "name": "file-upload-02",
      "title": "File Upload 02",
      "description": "بارگذاری فایل — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/file-upload-02/page.tsx",
          "type": "registry:page",
          "target": "app/file-upload/page.tsx"
        }
      ],
      "categories": [
        "file-upload"
      ],
      "type": "registry:block"
    },
    {
      "name": "file-manager-01",
      "title": "File Manager 01",
      "description": "مدیریت فایل‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/file-manager-01/page.tsx",
          "type": "registry:page",
          "target": "app/file-manager/page.tsx"
        }
      ],
      "categories": [
        "file-manager"
      ],
      "type": "registry:block"
    },
    {
      "name": "file-manager-02",
      "title": "File Manager 02",
      "description": "مدیریت فایل‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/file-manager-02/page.tsx",
          "type": "registry:page",
          "target": "app/file-manager/page.tsx"
        }
      ],
      "categories": [
        "file-manager"
      ],
      "type": "registry:block"
    },
    {
      "name": "image-gallery-01",
      "title": "Image Gallery 01",
      "description": "گالری تصاویر — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/image-gallery-01/page.tsx",
          "type": "registry:page",
          "target": "app/image-gallery/page.tsx"
        }
      ],
      "categories": [
        "image-gallery"
      ],
      "type": "registry:block"
    },
    {
      "name": "image-gallery-02",
      "title": "Image Gallery 02",
      "description": "گالری تصاویر — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/image-gallery-02/page.tsx",
          "type": "registry:page",
          "target": "app/image-gallery/page.tsx"
        }
      ],
      "categories": [
        "image-gallery"
      ],
      "type": "registry:block"
    },
    {
      "name": "media-grid-01",
      "title": "Media Grid 01",
      "description": "فهرست رسانه‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/media-grid-01/page.tsx",
          "type": "registry:page",
          "target": "app/media-grid/page.tsx"
        }
      ],
      "categories": [
        "media-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "media-grid-02",
      "title": "Media Grid 02",
      "description": "فهرست رسانه‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/media-grid-02/page.tsx",
          "type": "registry:page",
          "target": "app/media-grid/page.tsx"
        }
      ],
      "categories": [
        "media-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "attachment-list-01",
      "title": "Attachment List 01",
      "description": "پیوست‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/attachment-list-01/page.tsx",
          "type": "registry:page",
          "target": "app/attachment-list/page.tsx"
        }
      ],
      "categories": [
        "attachment-list"
      ],
      "type": "registry:block"
    },
    {
      "name": "attachment-list-02",
      "title": "Attachment List 02",
      "description": "پیوست‌ها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/attachment-list-02/page.tsx",
          "type": "registry:page",
          "target": "app/attachment-list/page.tsx"
        }
      ],
      "categories": [
        "attachment-list"
      ],
      "type": "registry:block"
    },
    {
      "name": "avatar-upload-01",
      "title": "Avatar Upload 01",
      "description": "بارگذاری تصویر پروفایل — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/avatar-upload-01/page.tsx",
          "type": "registry:page",
          "target": "app/avatar-upload/page.tsx"
        }
      ],
      "categories": [
        "avatar-upload"
      ],
      "type": "registry:block"
    },
    {
      "name": "avatar-upload-02",
      "title": "Avatar Upload 02",
      "description": "بارگذاری تصویر پروفایل — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/avatar-upload-02/page.tsx",
          "type": "registry:page",
          "target": "app/avatar-upload/page.tsx"
        }
      ],
      "categories": [
        "avatar-upload"
      ],
      "type": "registry:block"
    },
    {
      "name": "calendar-block-01",
      "title": "Calendar 01",
      "description": "تقویم — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/calendar-block-01/page.tsx",
          "type": "registry:page",
          "target": "app/calendar-block/page.tsx"
        }
      ],
      "categories": [
        "calendar-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "calendar-block-02",
      "title": "Calendar 02",
      "description": "تقویم — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/calendar-block-02/page.tsx",
          "type": "registry:page",
          "target": "app/calendar-block/page.tsx"
        }
      ],
      "categories": [
        "calendar-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "event-list-01",
      "title": "Event List 01",
      "description": "فهرست رویدادها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/event-list-01/page.tsx",
          "type": "registry:page",
          "target": "app/event-list/page.tsx"
        }
      ],
      "categories": [
        "event-list"
      ],
      "type": "registry:block"
    },
    {
      "name": "event-list-02",
      "title": "Event List 02",
      "description": "فهرست رویدادها — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/event-list-02/page.tsx",
          "type": "registry:page",
          "target": "app/event-list/page.tsx"
        }
      ],
      "categories": [
        "event-list"
      ],
      "type": "registry:block"
    },
    {
      "name": "event-details-01",
      "title": "Event Details 01",
      "description": "جزئیات رویداد — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/event-details-01/page.tsx",
          "type": "registry:page",
          "target": "app/event-details/page.tsx"
        }
      ],
      "categories": [
        "event-details"
      ],
      "type": "registry:block"
    },
    {
      "name": "event-details-02",
      "title": "Event Details 02",
      "description": "جزئیات رویداد — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/event-details-02/page.tsx",
          "type": "registry:page",
          "target": "app/event-details/page.tsx"
        }
      ],
      "categories": [
        "event-details"
      ],
      "type": "registry:block"
    },
    {
      "name": "schedule-01",
      "title": "Schedule 01",
      "description": "برنامه زمانی — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/schedule-01/page.tsx",
          "type": "registry:page",
          "target": "app/schedule/page.tsx"
        }
      ],
      "categories": [
        "schedule"
      ],
      "type": "registry:block"
    },
    {
      "name": "schedule-02",
      "title": "Schedule 02",
      "description": "برنامه زمانی — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/schedule-02/page.tsx",
          "type": "registry:page",
          "target": "app/schedule/page.tsx"
        }
      ],
      "categories": [
        "schedule"
      ],
      "type": "registry:block"
    },
    {
      "name": "datetime-picker-01",
      "title": "Date & Time Picker 01",
      "description": "انتخاب تاریخ و زمان — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/datetime-picker-01/page.tsx",
          "type": "registry:page",
          "target": "app/datetime-picker/page.tsx"
        }
      ],
      "categories": [
        "datetime-picker"
      ],
      "type": "registry:block"
    },
    {
      "name": "datetime-picker-02",
      "title": "Date & Time Picker 02",
      "description": "انتخاب تاریخ و زمان — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/datetime-picker-02/page.tsx",
          "type": "registry:page",
          "target": "app/datetime-picker/page.tsx"
        }
      ],
      "categories": [
        "datetime-picker"
      ],
      "type": "registry:block"
    },
    {
      "name": "booking-01",
      "title": "Booking 01",
      "description": "رزرو — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/booking-01/page.tsx",
          "type": "registry:page",
          "target": "app/booking/page.tsx"
        }
      ],
      "categories": [
        "booking"
      ],
      "type": "registry:block"
    },
    {
      "name": "booking-02",
      "title": "Booking 02",
      "description": "رزرو — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/booking-02/page.tsx",
          "type": "registry:page",
          "target": "app/booking/page.tsx"
        }
      ],
      "categories": [
        "booking"
      ],
      "type": "registry:block"
    },
    {
      "name": "payment-01",
      "title": "Payment 01",
      "description": "پرداخت — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/payment-01/page.tsx",
          "type": "registry:page",
          "target": "app/payment/page.tsx"
        }
      ],
      "categories": [
        "payment"
      ],
      "type": "registry:block"
    },
    {
      "name": "payment-02",
      "title": "Payment 02",
      "description": "پرداخت — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/payment-02/page.tsx",
          "type": "registry:page",
          "target": "app/payment/page.tsx"
        }
      ],
      "categories": [
        "payment"
      ],
      "type": "registry:block"
    },
    {
      "name": "payment-methods-01",
      "title": "Payment Methods 01",
      "description": "روش‌های پرداخت — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/payment-methods-01/page.tsx",
          "type": "registry:page",
          "target": "app/payment-methods/page.tsx"
        }
      ],
      "categories": [
        "payment-methods"
      ],
      "type": "registry:block"
    },
    {
      "name": "payment-methods-02",
      "title": "Payment Methods 02",
      "description": "روش‌های پرداخت — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/payment-methods-02/page.tsx",
          "type": "registry:page",
          "target": "app/payment-methods/page.tsx"
        }
      ],
      "categories": [
        "payment-methods"
      ],
      "type": "registry:block"
    },
    {
      "name": "subscription-01",
      "title": "Subscription 01",
      "description": "اشتراک — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/subscription-01/page.tsx",
          "type": "registry:page",
          "target": "app/subscription/page.tsx"
        }
      ],
      "categories": [
        "subscription"
      ],
      "type": "registry:block"
    },
    {
      "name": "subscription-02",
      "title": "Subscription 02",
      "description": "اشتراک — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/subscription-02/page.tsx",
          "type": "registry:page",
          "target": "app/subscription/page.tsx"
        }
      ],
      "categories": [
        "subscription"
      ],
      "type": "registry:block"
    },
    {
      "name": "plan-selection-01",
      "title": "Plan Selection 01",
      "description": "انتخاب طرح — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/plan-selection-01/page.tsx",
          "type": "registry:page",
          "target": "app/plan-selection/page.tsx"
        }
      ],
      "categories": [
        "plan-selection"
      ],
      "type": "registry:block"
    },
    {
      "name": "plan-selection-02",
      "title": "Plan Selection 02",
      "description": "انتخاب طرح — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/plan-selection-02/page.tsx",
          "type": "registry:page",
          "target": "app/plan-selection/page.tsx"
        }
      ],
      "categories": [
        "plan-selection"
      ],
      "type": "registry:block"
    },
    {
      "name": "invoice-01",
      "title": "Invoice 01",
      "description": "فاکتور — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/invoice-01/page.tsx",
          "type": "registry:page",
          "target": "app/invoice/page.tsx"
        }
      ],
      "categories": [
        "invoice"
      ],
      "type": "registry:block"
    },
    {
      "name": "invoice-02",
      "title": "Invoice 02",
      "description": "فاکتور — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/invoice-02/page.tsx",
          "type": "registry:page",
          "target": "app/invoice/page.tsx"
        }
      ],
      "categories": [
        "invoice"
      ],
      "type": "registry:block"
    },
    {
      "name": "billing-01",
      "title": "Billing 01",
      "description": "صورتحساب — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/billing-01/page.tsx",
          "type": "registry:page",
          "target": "app/billing/page.tsx"
        }
      ],
      "categories": [
        "billing"
      ],
      "type": "registry:block"
    },
    {
      "name": "billing-02",
      "title": "Billing 02",
      "description": "صورتحساب — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/billing-02/page.tsx",
          "type": "registry:page",
          "target": "app/billing/page.tsx"
        }
      ],
      "categories": [
        "billing"
      ],
      "type": "registry:block"
    },
    {
      "name": "empty-state-01",
      "title": "Empty State 01",
      "description": "حالت خالی — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/empty-state-01/page.tsx",
          "type": "registry:page",
          "target": "app/empty-state/page.tsx"
        }
      ],
      "categories": [
        "empty-state"
      ],
      "type": "registry:block"
    },
    {
      "name": "empty-state-02",
      "title": "Empty State 02",
      "description": "حالت خالی — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/empty-state-02/page.tsx",
          "type": "registry:page",
          "target": "app/empty-state/page.tsx"
        }
      ],
      "categories": [
        "empty-state"
      ],
      "type": "registry:block"
    },
    {
      "name": "error-state-01",
      "title": "Error State 01",
      "description": "حالت خطا — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/error-state-01/page.tsx",
          "type": "registry:page",
          "target": "app/error-state/page.tsx"
        }
      ],
      "categories": [
        "error-state"
      ],
      "type": "registry:block"
    },
    {
      "name": "error-state-02",
      "title": "Error State 02",
      "description": "حالت خطا — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/error-state-02/page.tsx",
          "type": "registry:page",
          "target": "app/error-state/page.tsx"
        }
      ],
      "categories": [
        "error-state"
      ],
      "type": "registry:block"
    },
    {
      "name": "not-found-block-01",
      "title": "Not Found 01",
      "description": "پیدا نشد — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/not-found-block-01/page.tsx",
          "type": "registry:page",
          "target": "app/not-found-block/page.tsx"
        }
      ],
      "categories": [
        "not-found-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "not-found-block-02",
      "title": "Not Found 02",
      "description": "پیدا نشد — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/not-found-block-02/page.tsx",
          "type": "registry:page",
          "target": "app/not-found-block/page.tsx"
        }
      ],
      "categories": [
        "not-found-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "loading-state-01",
      "title": "Loading 01",
      "description": "در حال بارگذاری — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/loading-state-01/page.tsx",
          "type": "registry:page",
          "target": "app/loading-state/page.tsx"
        }
      ],
      "categories": [
        "loading-state"
      ],
      "type": "registry:block"
    },
    {
      "name": "loading-state-02",
      "title": "Loading 02",
      "description": "در حال بارگذاری — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/loading-state-02/page.tsx",
          "type": "registry:page",
          "target": "app/loading-state/page.tsx"
        }
      ],
      "categories": [
        "loading-state"
      ],
      "type": "registry:block"
    },
    {
      "name": "success-state-01",
      "title": "Success 01",
      "description": "موفقیت — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/success-state-01/page.tsx",
          "type": "registry:page",
          "target": "app/success-state/page.tsx"
        }
      ],
      "categories": [
        "success-state"
      ],
      "type": "registry:block"
    },
    {
      "name": "success-state-02",
      "title": "Success 02",
      "description": "موفقیت — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/success-state-02/page.tsx",
          "type": "registry:page",
          "target": "app/success-state/page.tsx"
        }
      ],
      "categories": [
        "success-state"
      ],
      "type": "registry:block"
    },
    {
      "name": "maintenance-01",
      "title": "Maintenance 01",
      "description": "تعمیر و نگهداری — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/maintenance-01/page.tsx",
          "type": "registry:page",
          "target": "app/maintenance/page.tsx"
        }
      ],
      "categories": [
        "maintenance"
      ],
      "type": "registry:block"
    },
    {
      "name": "maintenance-02",
      "title": "Maintenance 02",
      "description": "تعمیر و نگهداری — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/maintenance-02/page.tsx",
          "type": "registry:page",
          "target": "app/maintenance/page.tsx"
        }
      ],
      "categories": [
        "maintenance"
      ],
      "type": "registry:block"
    },
    {
      "name": "coming-soon-01",
      "title": "Coming Soon 01",
      "description": "به‌زودی — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/coming-soon-01/page.tsx",
          "type": "registry:page",
          "target": "app/coming-soon/page.tsx"
        }
      ],
      "categories": [
        "coming-soon"
      ],
      "type": "registry:block"
    },
    {
      "name": "coming-soon-02",
      "title": "Coming Soon 02",
      "description": "به‌زودی — نمونهٔ راست‌چین فارسی",
      "files": [
        {
          "path": "blocks/coming-soon-02/page.tsx",
          "type": "registry:page",
          "target": "app/coming-soon/page.tsx"
        }
      ],
      "categories": [
        "coming-soon"
      ],
      "type": "registry:block"
    },
    {
      "name": "preview",
      "title": "Preview",
      "registryDependencies": [
        "alert-dialog",
        "avatar",
        "badge",
        "button",
        "button-group",
        "card",
        "chart",
        "checkbox",
        "combobox",
        "dropdown-menu",
        "empty",
        "field",
        "input",
        "input-group",
        "item",
        "label",
        "popover",
        "radio-group",
        "select",
        "separator",
        "sheet",
        "slider",
        "spinner",
        "switch",
        "textarea",
        "tooltip",
        "example"
      ],
      "files": [
        {
          "path": "blocks/preview/index.tsx",
          "type": "registry:block"
        }
      ],
      "type": "registry:block"
    },
    {
      "name": "preview-02",
      "title": "Preview 02",
      "dependencies": [
        "react-qr-code"
      ],
      "registryDependencies": [
        "accordion",
        "badge",
        "breadcrumb",
        "button",
        "calendar",
        "card",
        "chart",
        "checkbox",
        "combobox",
        "dropdown-menu",
        "empty",
        "field",
        "input",
        "input-group",
        "item",
        "label",
        "native-select",
        "progress",
        "radio-group",
        "select",
        "separator",
        "sidebar",
        "skeleton",
        "slider",
        "spinner",
        "switch",
        "table",
        "tabs",
        "textarea",
        "toggle-group"
      ],
      "files": [
        {
          "path": "blocks/preview-02/index.tsx",
          "type": "registry:block"
        }
      ],
      "type": "registry:block"
    },
    {
      "name": "preview-03",
      "title": "Preview 03",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/preview-03/index.tsx",
          "type": "registry:block"
        }
      ],
      "type": "registry:block"
    },
    {
      "name": "login-01",
      "title": "Login 01",
      "description": "فرم ورود ساده.",
      "registryDependencies": [
        "button",
        "card",
        "input",
        "label",
        "field"
      ],
      "files": [
        {
          "path": "blocks/login-01/page.tsx",
          "type": "registry:page",
          "target": "app/login/page.tsx"
        },
        {
          "path": "blocks/login-01/components/login-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "login"
      ],
      "type": "registry:block"
    },
    {
      "name": "login-02",
      "title": "Login 02",
      "description": "صفحه ورود دو ستونه با تصویر کاور.",
      "registryDependencies": [
        "button",
        "input",
        "label",
        "field"
      ],
      "files": [
        {
          "path": "blocks/login-02/page.tsx",
          "type": "registry:page",
          "target": "app/login/page.tsx"
        },
        {
          "path": "blocks/login-02/components/login-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "login"
      ],
      "type": "registry:block"
    },
    {
      "name": "login-03",
      "title": "Login 03",
      "description": "صفحه ورود با پس‌زمینه ملایم.",
      "registryDependencies": [
        "button",
        "card",
        "input",
        "label",
        "field"
      ],
      "files": [
        {
          "path": "blocks/login-03/page.tsx",
          "type": "registry:page",
          "target": "app/login/page.tsx"
        },
        {
          "path": "blocks/login-03/components/login-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "login"
      ],
      "type": "registry:block"
    },
    {
      "name": "login-04",
      "title": "Login 04",
      "description": "صفحه ورود با فرم و تصویر.",
      "registryDependencies": [
        "button",
        "card",
        "input",
        "label",
        "field"
      ],
      "files": [
        {
          "path": "blocks/login-04/page.tsx",
          "type": "registry:page",
          "target": "app/login/page.tsx"
        },
        {
          "path": "blocks/login-04/components/login-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "login"
      ],
      "type": "registry:block"
    },
    {
      "name": "login-05",
      "title": "Login 05",
      "description": "صفحه ورود فقط با ایمیل.",
      "registryDependencies": [
        "button",
        "input",
        "label",
        "field"
      ],
      "files": [
        {
          "path": "blocks/login-05/page.tsx",
          "type": "registry:page",
          "target": "app/login/page.tsx"
        },
        {
          "path": "blocks/login-05/components/login-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "login"
      ],
      "type": "registry:block"
    },
    {
      "name": "signup-01",
      "title": "Signup 01",
      "description": "فرم ثبت‌نام ساده.",
      "registryDependencies": [
        "button",
        "card",
        "input",
        "label"
      ],
      "files": [
        {
          "path": "blocks/signup-01/page.tsx",
          "type": "registry:page",
          "target": "app/signup/page.tsx"
        },
        {
          "path": "blocks/signup-01/components/signup-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "signup"
      ],
      "type": "registry:block"
    },
    {
      "name": "signup-02",
      "title": "Signup 02",
      "description": "صفحه ثبت‌نام دو ستونه با تصویر کاور.",
      "registryDependencies": [
        "button",
        "input",
        "label",
        "field"
      ],
      "files": [
        {
          "path": "blocks/signup-02/page.tsx",
          "type": "registry:page",
          "target": "app/signup/page.tsx"
        },
        {
          "path": "blocks/signup-02/components/signup-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "signup"
      ],
      "type": "registry:block"
    },
    {
      "name": "signup-03",
      "title": "Signup 03",
      "description": "صفحه ثبت‌نام با پس‌زمینه ملایم.",
      "registryDependencies": [
        "button",
        "card",
        "input",
        "label",
        "field"
      ],
      "files": [
        {
          "path": "blocks/signup-03/page.tsx",
          "type": "registry:page",
          "target": "app/signup/page.tsx"
        },
        {
          "path": "blocks/signup-03/components/signup-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "signup"
      ],
      "type": "registry:block"
    },
    {
      "name": "signup-04",
      "title": "Signup 04",
      "description": "صفحه ثبت‌نام با فرم و تصویر.",
      "registryDependencies": [
        "button",
        "card",
        "input",
        "label",
        "field"
      ],
      "files": [
        {
          "path": "blocks/signup-04/page.tsx",
          "type": "registry:page",
          "target": "app/signup/page.tsx"
        },
        {
          "path": "blocks/signup-04/components/signup-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "signup"
      ],
      "type": "registry:block"
    },
    {
      "name": "signup-05",
      "title": "Signup 05",
      "description": "فرم ثبت‌نام ساده با ورود اجتماعی.",
      "registryDependencies": [
        "button",
        "input",
        "label"
      ],
      "files": [
        {
          "path": "blocks/signup-05/page.tsx",
          "type": "registry:page",
          "target": "app/signup/page.tsx"
        },
        {
          "path": "blocks/signup-05/components/signup-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "authentication",
        "signup"
      ],
      "type": "registry:block"
    },
    {
      "name": "forgot-password-01",
      "title": "Forgot Password 01",
      "description": "فرم بازیابی رمز عبور با ایمیل و پیام تأیید ارسال.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/forgot-password-01/page.tsx",
          "type": "registry:page",
          "target": "app/forgot-password/page.tsx"
        },
        {
          "path": "blocks/forgot-password-01/components/forgot-password-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "forgot-password"
      ],
      "type": "registry:block"
    },
    {
      "name": "forgot-password-02",
      "title": "Forgot Password 02",
      "description": "بازیابی رمز عبور با شماره موبایل و کد تأیید.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "input-otp"
      ],
      "files": [
        {
          "path": "blocks/forgot-password-02/page.tsx",
          "type": "registry:page",
          "target": "app/forgot-password/page.tsx"
        },
        {
          "path": "blocks/forgot-password-02/components/forgot-password-mobile.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "forgot-password"
      ],
      "type": "registry:block"
    },
    {
      "name": "forgot-password-03",
      "title": "Forgot Password 03",
      "description": "انتخاب روش بازیابی بین ایمیل و موبایل.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/forgot-password-03/page.tsx",
          "type": "registry:page",
          "target": "app/forgot-password/page.tsx"
        },
        {
          "path": "blocks/forgot-password-03/components/forgot-password-methods.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "forgot-password"
      ],
      "type": "registry:block"
    },
    {
      "name": "forgot-password-04",
      "title": "Forgot Password 04",
      "description": "صفحه بازیابی دو ستونه با تصویر کاور.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/forgot-password-04/page.tsx",
          "type": "registry:page",
          "target": "app/forgot-password/page.tsx"
        },
        {
          "path": "blocks/forgot-password-04/components/forgot-password-split.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "forgot-password"
      ],
      "type": "registry:block"
    },
    {
      "name": "forgot-password-05",
      "title": "Forgot Password 05",
      "description": "بازیابی متمرکز با برند و وضعیت ارسال.",
      "registryDependencies": [
        "button",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/forgot-password-05/page.tsx",
          "type": "registry:page",
          "target": "app/forgot-password/page.tsx"
        },
        {
          "path": "blocks/forgot-password-05/components/forgot-password-centered.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "forgot-password"
      ],
      "type": "registry:block"
    },
    {
      "name": "national-id-01",
      "title": "National ID 01",
      "description": "فرم ورود کد ملی با اعتبارسنجی و تأیید.",
      "registryDependencies": [
        "button",
        "card",
        "field"
      ],
      "files": [
        {
          "path": "blocks/national-id-01/page.tsx",
          "type": "registry:page",
          "target": "app/national-id/page.tsx"
        },
        {
          "path": "blocks/national-id-01/components/national-id-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "national-id"
      ],
      "type": "registry:block"
    },
    {
      "name": "national-id-02",
      "title": "National ID 02",
      "description": "اعتبارسنجی لحظه‌ای کد ملی با پنل نتیجه.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "field",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/national-id-02/page.tsx",
          "type": "registry:page",
          "target": "app/national-id/page.tsx"
        },
        {
          "path": "blocks/national-id-02/components/national-id-validator.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "national-id"
      ],
      "type": "registry:block"
    },
    {
      "name": "national-id-03",
      "title": "National ID 03",
      "description": "فرم مشخصات هویتی با نام، کد ملی و تاریخ تولد.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/national-id-03/page.tsx",
          "type": "registry:page",
          "target": "app/national-id/page.tsx"
        },
        {
          "path": "blocks/national-id-03/components/national-id-profile-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "national-id"
      ],
      "type": "registry:block"
    },
    {
      "name": "national-id-04",
      "title": "National ID 04",
      "description": "صفحه دو ستونه ورود کد ملی با تصویر کاور.",
      "registryDependencies": [
        "button",
        "card",
        "field"
      ],
      "files": [
        {
          "path": "blocks/national-id-04/page.tsx",
          "type": "registry:page",
          "target": "app/national-id/page.tsx"
        },
        {
          "path": "blocks/national-id-04/components/national-id-split.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "national-id"
      ],
      "type": "registry:block"
    },
    {
      "name": "national-id-05",
      "title": "National ID 05",
      "description": "ورود متمرکز کد ملی با نشان وضعیت اعتبار.",
      "registryDependencies": [
        "badge",
        "button",
        "field"
      ],
      "files": [
        {
          "path": "blocks/national-id-05/page.tsx",
          "type": "registry:page",
          "target": "app/national-id/page.tsx"
        },
        {
          "path": "blocks/national-id-05/components/national-id-centered.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "national-id"
      ],
      "type": "registry:block"
    },
    {
      "name": "license-plate-01",
      "title": "License Plate 01",
      "description": "فرم ثبت پلاک خودرو با تأیید نهایی.",
      "registryDependencies": [
        "button",
        "card",
        "field"
      ],
      "files": [
        {
          "path": "blocks/license-plate-01/page.tsx",
          "type": "registry:page",
          "target": "app/license-plate/page.tsx"
        },
        {
          "path": "blocks/license-plate-01/components/license-plate-form.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/license-plate-01/components/plate-input.tsx",
          "type": "registry:file",
          "target": "components/plate-input.tsx"
        }
      ],
      "categories": [
        "license-plate"
      ],
      "type": "registry:block"
    },
    {
      "name": "license-plate-02",
      "title": "License Plate 02",
      "description": "ورود پلاک با پنل جزئیات و نوع حرف.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "field",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/license-plate-02/page.tsx",
          "type": "registry:page",
          "target": "app/license-plate/page.tsx"
        },
        {
          "path": "blocks/license-plate-02/components/license-plate-inspector.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/license-plate-02/components/plate-input.tsx",
          "type": "registry:file",
          "target": "components/plate-input.tsx"
        }
      ],
      "categories": [
        "license-plate"
      ],
      "type": "registry:block"
    },
    {
      "name": "license-plate-03",
      "title": "License Plate 03",
      "description": "ثبت خودرو همراه با پلاک و نوع وسیله.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "select"
      ],
      "files": [
        {
          "path": "blocks/license-plate-03/page.tsx",
          "type": "registry:page",
          "target": "app/license-plate/page.tsx"
        },
        {
          "path": "blocks/license-plate-03/components/license-plate-vehicle-form.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/license-plate-03/components/plate-input.tsx",
          "type": "registry:file",
          "target": "components/plate-input.tsx"
        }
      ],
      "categories": [
        "license-plate"
      ],
      "type": "registry:block"
    },
    {
      "name": "license-plate-04",
      "title": "License Plate 04",
      "description": "صفحه دو ستونه ثبت پلاک با تصویر کاور.",
      "registryDependencies": [
        "button",
        "card",
        "field"
      ],
      "files": [
        {
          "path": "blocks/license-plate-04/page.tsx",
          "type": "registry:page",
          "target": "app/license-plate/page.tsx"
        },
        {
          "path": "blocks/license-plate-04/components/license-plate-split.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/license-plate-04/components/plate-input.tsx",
          "type": "registry:file",
          "target": "components/plate-input.tsx"
        }
      ],
      "categories": [
        "license-plate"
      ],
      "type": "registry:block"
    },
    {
      "name": "license-plate-05",
      "title": "License Plate 05",
      "description": "ثبت پلاک تاکسی فقط با حرف ت.",
      "registryDependencies": [
        "badge",
        "button",
        "field"
      ],
      "files": [
        {
          "path": "blocks/license-plate-05/page.tsx",
          "type": "registry:page",
          "target": "app/license-plate/page.tsx"
        },
        {
          "path": "blocks/license-plate-05/components/license-plate-taxi.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/license-plate-05/components/plate-input.tsx",
          "type": "registry:file",
          "target": "components/plate-input.tsx"
        }
      ],
      "categories": [
        "license-plate"
      ],
      "type": "registry:block"
    },
    {
      "name": "document-verification-01",
      "title": "Document Verification 01",
      "description": "بارگذاری مدرک با پیش‌نمایش و پیشرفت آپلود.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "progress",
        "select"
      ],
      "files": [
        {
          "path": "blocks/document-verification-01/page.tsx",
          "type": "registry:page",
          "target": "app/document-verification/page.tsx"
        },
        {
          "path": "blocks/document-verification-01/components/document-upload-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "document-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "document-verification-02",
      "title": "Document Verification 02",
      "description": "چک‌لیست مدارک موردنیاز با وضعیت بارگذاری.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/document-verification-02/page.tsx",
          "type": "registry:page",
          "target": "app/document-verification/page.tsx"
        },
        {
          "path": "blocks/document-verification-02/components/document-checklist.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "document-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "document-verification-03",
      "title": "Document Verification 03",
      "description": "تنظیمات تأیید مدارک با سوئیچ‌های راست‌چین.",
      "registryDependencies": [
        "button",
        "card",
        "label",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/document-verification-03/page.tsx",
          "type": "registry:page",
          "target": "app/document-verification/page.tsx"
        },
        {
          "path": "blocks/document-verification-03/components/document-preferences.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "document-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "document-verification-04",
      "title": "Document Verification 04",
      "description": "صفحه دو ستونه بارگذاری مدرک با تصویر کاور.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/document-verification-04/page.tsx",
          "type": "registry:page",
          "target": "app/document-verification/page.tsx"
        },
        {
          "path": "blocks/document-verification-04/components/document-split-upload.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "document-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "document-verification-05",
      "title": "Document Verification 05",
      "description": "وضعیت‌های بررسی مدارک: در حال بررسی تا رد.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/document-verification-05/page.tsx",
          "type": "registry:page",
          "target": "app/document-verification/page.tsx"
        },
        {
          "path": "blocks/document-verification-05/components/document-status-gallery.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "document-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "profile-form-01",
      "title": "Profile Form 01",
      "description": "ویرایش پروفایل با نام نمایشی و بیو.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/profile-form-01/page.tsx",
          "type": "registry:page",
          "target": "app/profile-form/page.tsx"
        },
        {
          "path": "blocks/profile-form-01/components/profile-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "profile-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "profile-form-02",
      "title": "Profile Form 02",
      "description": "پروفایل عمومی با آواتار و اطلاعات تماس.",
      "registryDependencies": [
        "avatar",
        "button",
        "card",
        "field",
        "input",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/profile-form-02/page.tsx",
          "type": "registry:page",
          "target": "app/profile-form/page.tsx"
        },
        {
          "path": "blocks/profile-form-02/components/profile-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "profile-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "profile-form-03",
      "title": "Profile Form 03",
      "description": "لینک‌های اجتماعی و سوئیچ‌های حریم خصوصی RTL.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/profile-form-03/page.tsx",
          "type": "registry:page",
          "target": "app/profile-form/page.tsx"
        },
        {
          "path": "blocks/profile-form-03/components/profile-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "profile-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "profile-form-04",
      "title": "Profile Form 04",
      "description": "تکمیل پروفایل دو ستونه با تصویر کاور.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/profile-form-04/page.tsx",
          "type": "registry:page",
          "target": "app/profile-form/page.tsx"
        },
        {
          "path": "blocks/profile-form-04/components/profile-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "profile-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "contact-form-01",
      "title": "Contact Form 01",
      "description": "فرم تماس ساده با وضعیت ارسال.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/contact-form-01/page.tsx",
          "type": "registry:page",
          "target": "app/contact-form/page.tsx"
        },
        {
          "path": "blocks/contact-form-01/components/contact-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "contact-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "contact-form-02",
      "title": "Contact Form 02",
      "description": "فرم ارسال بازخورد با انتخاب نوع.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "select",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/contact-form-02/page.tsx",
          "type": "registry:page",
          "target": "app/contact-form/page.tsx"
        },
        {
          "path": "blocks/contact-form-02/components/contact-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "contact-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "contact-form-03",
      "title": "Contact Form 03",
      "description": "فرم تماس دو ستونه با اطلاعات تماس.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/contact-form-03/page.tsx",
          "type": "registry:page",
          "target": "app/contact-form/page.tsx"
        },
        {
          "path": "blocks/contact-form-03/components/contact-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "contact-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "contact-form-04",
      "title": "Contact Form 04",
      "description": "همکاری تجاری با سوئیچ درخواست تماس.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "separator",
        "switch",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/contact-form-04/page.tsx",
          "type": "registry:page",
          "target": "app/contact-form/page.tsx"
        },
        {
          "path": "blocks/contact-form-04/components/contact-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "contact-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "support-form-01",
      "title": "Support Form 01",
      "description": "درخواست پشتیبانی با انتخاب موضوع و شماره پیگیری.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "select",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/support-form-01/page.tsx",
          "type": "registry:page",
          "target": "app/support-form/page.tsx"
        },
        {
          "path": "blocks/support-form-01/components/support-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "support-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "support-form-02",
      "title": "Support Form 02",
      "description": "تیکت پشتیبانی با انتخاب اولویت.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "radio-group",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/support-form-02/page.tsx",
          "type": "registry:page",
          "target": "app/support-form/page.tsx"
        },
        {
          "path": "blocks/support-form-02/components/support-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "support-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "support-form-03",
      "title": "Support Form 03",
      "description": "درخواست پشتیبانی چندمرحله‌ای با بازبینی نهایی.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "select",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/support-form-03/page.tsx",
          "type": "registry:page",
          "target": "app/support-form/page.tsx"
        },
        {
          "path": "blocks/support-form-03/components/support-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "support-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "support-form-04",
      "title": "Support Form 04",
      "description": "وضعیت تیکت پشتیبانی با تب‌های باز / در انتظار / حل‌شده.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "separator",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/support-form-04/page.tsx",
          "type": "registry:page",
          "target": "app/support-form/page.tsx"
        },
        {
          "path": "blocks/support-form-04/components/support-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "support-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "newsletter-form-01",
      "title": "Newsletter Form 01",
      "description": "عضویت خبرنامه با تأیید ایمیل.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/newsletter-form-01/page.tsx",
          "type": "registry:page",
          "target": "app/newsletter-form/page.tsx"
        },
        {
          "path": "blocks/newsletter-form-01/components/newsletter-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "newsletter-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "newsletter-form-02",
      "title": "Newsletter Form 02",
      "description": "فرم عضویت فشردهٔ درون‌خطی.",
      "registryDependencies": [
        "button",
        "input"
      ],
      "files": [
        {
          "path": "blocks/newsletter-form-02/page.tsx",
          "type": "registry:page",
          "target": "app/newsletter-form/page.tsx"
        },
        {
          "path": "blocks/newsletter-form-02/components/newsletter-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "newsletter-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "newsletter-form-03",
      "title": "Newsletter Form 03",
      "description": "خبرنامه موضوعی با سوئیچ‌های RTL.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/newsletter-form-03/page.tsx",
          "type": "registry:page",
          "target": "app/newsletter-form/page.tsx"
        },
        {
          "path": "blocks/newsletter-form-03/components/newsletter-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "newsletter-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "newsletter-form-04",
      "title": "Newsletter Form 04",
      "description": "عضویت متمرکز با برند و وضعیت تأیید.",
      "registryDependencies": [
        "button",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/newsletter-form-04/page.tsx",
          "type": "registry:page",
          "target": "app/newsletter-form/page.tsx"
        },
        {
          "path": "blocks/newsletter-form-04/components/newsletter-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "newsletter-form"
      ],
      "type": "registry:block"
    },
    {
      "name": "hero-01",
      "title": "Hero 01",
      "description": "معرفی سادهٔ مرکزی با برند، عنوان و یک دکمه.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/hero-01/page.tsx",
          "type": "registry:page",
          "target": "app/hero/page.tsx"
        },
        {
          "path": "blocks/hero-01/components/hero.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "hero"
      ],
      "type": "registry:block"
    },
    {
      "name": "hero-02",
      "title": "Hero 02",
      "description": "معرفی با بج، دو CTA و پس‌زمینهٔ ملایم.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/hero-02/page.tsx",
          "type": "registry:page",
          "target": "app/hero/page.tsx"
        },
        {
          "path": "blocks/hero-02/components/hero.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "hero"
      ],
      "type": "registry:block"
    },
    {
      "name": "hero-03",
      "title": "Hero 03",
      "description": "معرفی دو ستونه با تصویر تمام‌ارتفاع.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/hero-03/page.tsx",
          "type": "registry:page",
          "target": "app/hero/page.tsx"
        },
        {
          "path": "blocks/hero-03/components/hero.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "hero"
      ],
      "type": "registry:block"
    },
    {
      "name": "hero-04",
      "title": "Hero 04",
      "description": "معرفی تمام‌عرض با تصویر پس‌زمینه و پوشش گرادیان.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/hero-04/page.tsx",
          "type": "registry:page",
          "target": "app/hero/page.tsx"
        },
        {
          "path": "blocks/hero-04/components/hero.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "hero"
      ],
      "type": "registry:block"
    },
    {
      "name": "hero-05",
      "title": "Hero 05",
      "description": "معرفی کامل با ناوبری، اثبات اجتماعی و تصویر محصول.",
      "registryDependencies": [
        "avatar",
        "button"
      ],
      "files": [
        {
          "path": "blocks/hero-05/page.tsx",
          "type": "registry:page",
          "target": "app/hero/page.tsx"
        },
        {
          "path": "blocks/hero-05/components/hero.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "hero"
      ],
      "type": "registry:block"
    },
    {
      "name": "features-01",
      "title": "Features 01",
      "description": "شبکهٔ سادهٔ سه ستونه با آیکون و توضیح کوتاه.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/features-01/page.tsx",
          "type": "registry:page",
          "target": "app/features/page.tsx"
        },
        {
          "path": "blocks/features-01/components/features.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "features"
      ],
      "type": "registry:block"
    },
    {
      "name": "features-02",
      "title": "Features 02",
      "description": "کارت‌های ویژگی با آیکون، توضیح و لینک جزئیات.",
      "registryDependencies": [
        "button",
        "card"
      ],
      "files": [
        {
          "path": "blocks/features-02/page.tsx",
          "type": "registry:page",
          "target": "app/features/page.tsx"
        },
        {
          "path": "blocks/features-02/components/features.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "features"
      ],
      "type": "registry:block"
    },
    {
      "name": "features-03",
      "title": "Features 03",
      "description": "ردیف‌های متناوب متن و تصویر برای معرفی قابلیت‌ها.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/features-03/page.tsx",
          "type": "registry:page",
          "target": "app/features/page.tsx"
        },
        {
          "path": "blocks/features-03/components/features.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "features"
      ],
      "type": "registry:block"
    },
    {
      "name": "features-04",
      "title": "Features 04",
      "description": "شبکهٔ بنتویی با کارت بزرگ تصویر و کارت‌های کوچک.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/features-04/page.tsx",
          "type": "registry:page",
          "target": "app/features/page.tsx"
        },
        {
          "path": "blocks/features-04/components/features.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "features"
      ],
      "type": "registry:block"
    },
    {
      "name": "features-05",
      "title": "Features 05",
      "description": "نمایش کامل با تب دسته‌ها، لیست قابلیت و تصویر محصول.",
      "registryDependencies": [
        "badge",
        "button",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/features-05/page.tsx",
          "type": "registry:page",
          "target": "app/features/page.tsx"
        },
        {
          "path": "blocks/features-05/components/features.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "features"
      ],
      "type": "registry:block"
    },
    {
      "name": "feature-split-01",
      "title": "Feature Split 01",
      "description": "دو بخشی ساده: عنوان، توضیح و یک تصویر.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/feature-split-01/page.tsx",
          "type": "registry:page",
          "target": "app/feature-split/page.tsx"
        },
        {
          "path": "blocks/feature-split-01/components/feature-split.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "feature-split"
      ],
      "type": "registry:block"
    },
    {
      "name": "feature-split-02",
      "title": "Feature Split 02",
      "description": "دو بخشی با بج، چک‌لیست و دو CTA.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/feature-split-02/page.tsx",
          "type": "registry:page",
          "target": "app/feature-split/page.tsx"
        },
        {
          "path": "blocks/feature-split-02/components/feature-split.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "feature-split"
      ],
      "type": "registry:block"
    },
    {
      "name": "feature-split-03",
      "title": "Feature Split 03",
      "description": "تصویر تمام‌ارتفاع لبه‌به‌لبه در کنار متن.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/feature-split-03/page.tsx",
          "type": "registry:page",
          "target": "app/feature-split/page.tsx"
        },
        {
          "path": "blocks/feature-split-03/components/feature-split.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "feature-split"
      ],
      "type": "registry:block"
    },
    {
      "name": "feature-split-04",
      "title": "Feature Split 04",
      "description": "دو بخشی با آمار، نکات کلیدی و پیش‌نمایش محصول.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/feature-split-04/page.tsx",
          "type": "registry:page",
          "target": "app/feature-split/page.tsx"
        },
        {
          "path": "blocks/feature-split-04/components/feature-split.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "feature-split"
      ],
      "type": "registry:block"
    },
    {
      "name": "feature-split-05",
      "title": "Feature Split 05",
      "description": "دو بخشی تعاملی: انتخاب قابلیت و تعویض پیش‌نمایش.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/feature-split-05/page.tsx",
          "type": "registry:page",
          "target": "app/feature-split/page.tsx"
        },
        {
          "path": "blocks/feature-split-05/components/feature-split.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "950px"
      },
      "categories": [
        "feature-split"
      ],
      "type": "registry:block"
    },
    {
      "name": "bento-01",
      "title": "Bento 01",
      "description": "شبکهٔ سادهٔ ۲×۲ با کاشی‌های متنی هم‌اندازه.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/bento-01/page.tsx",
          "type": "registry:page",
          "target": "app/bento/page.tsx"
        },
        {
          "path": "blocks/bento-01/components/bento.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "bento"
      ],
      "type": "registry:block"
    },
    {
      "name": "bento-02",
      "title": "Bento 02",
      "description": "بنتو با کاشی بزرگ دو در دو و کاشی‌های آیکون‌دار.",
      "registryDependencies": [
        "badge"
      ],
      "files": [
        {
          "path": "blocks/bento-02/page.tsx",
          "type": "registry:page",
          "target": "app/bento/page.tsx"
        },
        {
          "path": "blocks/bento-02/components/bento.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "bento"
      ],
      "type": "registry:block"
    },
    {
      "name": "bento-03",
      "title": "Bento 03",
      "description": "بنتو با کاشی تصویر داشبورد و کاشی‌های متنی.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/bento-03/page.tsx",
          "type": "registry:page",
          "target": "app/bento/page.tsx"
        },
        {
          "path": "blocks/bento-03/components/bento.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "850px"
      },
      "categories": [
        "bento"
      ],
      "type": "registry:block"
    },
    {
      "name": "bento-04",
      "title": "Bento 04",
      "description": "بنتو با آمار، آواتار تیم و کاشی‌های قابلیت.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/bento-04/page.tsx",
          "type": "registry:page",
          "target": "app/bento/page.tsx"
        },
        {
          "path": "blocks/bento-04/components/bento.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "950px"
      },
      "categories": [
        "bento"
      ],
      "type": "registry:block"
    },
    {
      "name": "bento-05",
      "title": "Bento 05",
      "description": "بنتو کامل تعاملی با تصویر، CTA، آمار و انتخاب‌گر.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/bento-05/page.tsx",
          "type": "registry:page",
          "target": "app/bento/page.tsx"
        },
        {
          "path": "blocks/bento-05/components/bento.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "bento"
      ],
      "type": "registry:block"
    },
    {
      "name": "pricing-01",
      "title": "Pricing 01",
      "description": "دو پلن ساده با قیمت و دکمه.",
      "registryDependencies": [
        "button",
        "card"
      ],
      "files": [
        {
          "path": "blocks/pricing-01/page.tsx",
          "type": "registry:page",
          "target": "app/pricing/page.tsx"
        },
        {
          "path": "blocks/pricing-01/components/pricing.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "pricing"
      ],
      "type": "registry:block"
    },
    {
      "name": "pricing-02",
      "title": "Pricing 02",
      "description": "سه کارت پلن با لیست امکانات و پلن پیشنهادی.",
      "registryDependencies": [
        "badge",
        "button",
        "card"
      ],
      "files": [
        {
          "path": "blocks/pricing-02/page.tsx",
          "type": "registry:page",
          "target": "app/pricing/page.tsx"
        },
        {
          "path": "blocks/pricing-02/components/pricing.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "850px"
      },
      "categories": [
        "pricing"
      ],
      "type": "registry:block"
    },
    {
      "name": "pricing-03",
      "title": "Pricing 03",
      "description": "قیمت‌گذاری با سوئیچ ماهانه / سالانه.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "label",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/pricing-03/page.tsx",
          "type": "registry:page",
          "target": "app/pricing/page.tsx"
        },
        {
          "path": "blocks/pricing-03/components/pricing.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "pricing"
      ],
      "type": "registry:block"
    },
    {
      "name": "pricing-04",
      "title": "Pricing 04",
      "description": "جدول مقایسهٔ قابلیت‌های پلن‌ها.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/pricing-04/page.tsx",
          "type": "registry:page",
          "target": "app/pricing/page.tsx"
        },
        {
          "path": "blocks/pricing-04/components/pricing.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "850px"
      },
      "categories": [
        "pricing"
      ],
      "type": "registry:block"
    },
    {
      "name": "pricing-05",
      "title": "Pricing 05",
      "description": "صفحهٔ کامل قیمت با سوئیچ، اثبات اجتماعی و پرسش‌های رایج.",
      "registryDependencies": [
        "accordion",
        "avatar",
        "badge",
        "button",
        "card",
        "label",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/pricing-05/page.tsx",
          "type": "registry:page",
          "target": "app/pricing/page.tsx"
        },
        {
          "path": "blocks/pricing-05/components/pricing.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "pricing"
      ],
      "type": "registry:block"
    },
    {
      "name": "cta-01",
      "title": "CTA 01",
      "description": "فراخوان سادهٔ مرکزی با یک دکمه.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/cta-01/page.tsx",
          "type": "registry:page",
          "target": "app/cta/page.tsx"
        },
        {
          "path": "blocks/cta-01/components/cta.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "600px"
      },
      "categories": [
        "cta"
      ],
      "type": "registry:block"
    },
    {
      "name": "cta-02",
      "title": "CTA 02",
      "description": "فراخوان با بج و دو دکمهٔ اصلی / فرعی.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/cta-02/page.tsx",
          "type": "registry:page",
          "target": "app/cta/page.tsx"
        },
        {
          "path": "blocks/cta-02/components/cta.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "650px"
      },
      "categories": [
        "cta"
      ],
      "type": "registry:block"
    },
    {
      "name": "cta-03",
      "title": "CTA 03",
      "description": "کارت فراخوان با فرم ایمیل و وضعیت تأیید.",
      "registryDependencies": [
        "button",
        "input"
      ],
      "files": [
        {
          "path": "blocks/cta-03/page.tsx",
          "type": "registry:page",
          "target": "app/cta/page.tsx"
        },
        {
          "path": "blocks/cta-03/components/cta.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "cta"
      ],
      "type": "registry:block"
    },
    {
      "name": "cta-04",
      "title": "CTA 04",
      "description": "فراخوان دو ستونه با تصویر داشبورد.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/cta-04/page.tsx",
          "type": "registry:page",
          "target": "app/cta/page.tsx"
        },
        {
          "path": "blocks/cta-04/components/cta.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "750px"
      },
      "categories": [
        "cta"
      ],
      "type": "registry:block"
    },
    {
      "name": "cta-05",
      "title": "CTA 05",
      "description": "فراخوان تمام‌عرض با تصویر، دو CTA و اثبات اجتماعی.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/cta-05/page.tsx",
          "type": "registry:page",
          "target": "app/cta/page.tsx"
        },
        {
          "path": "blocks/cta-05/components/cta.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "cta"
      ],
      "type": "registry:block"
    },
    {
      "name": "banner-01",
      "title": "Banner 01",
      "description": "نوار اطلاع‌رسانی ساده با لینک.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/banner-01/page.tsx",
          "type": "registry:page",
          "target": "app/banner/page.tsx"
        },
        {
          "path": "blocks/banner-01/components/banner.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "500px"
      },
      "categories": [
        "banner"
      ],
      "type": "registry:block"
    },
    {
      "name": "banner-02",
      "title": "Banner 02",
      "description": "بنر تخفیف با آیکون، بج و دکمه.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/banner-02/page.tsx",
          "type": "registry:page",
          "target": "app/banner/page.tsx"
        },
        {
          "path": "blocks/banner-02/components/banner.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "550px"
      },
      "categories": [
        "banner"
      ],
      "type": "registry:block"
    },
    {
      "name": "banner-03",
      "title": "Banner 03",
      "description": "بنر هشدار قابل‌بستن برای نگهداری سیستم.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/banner-03/page.tsx",
          "type": "registry:page",
          "target": "app/banner/page.tsx"
        },
        {
          "path": "blocks/banner-03/components/banner.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "550px"
      },
      "categories": [
        "banner"
      ],
      "type": "registry:block"
    },
    {
      "name": "banner-04",
      "title": "Banner 04",
      "description": "بنر رویداد دو ستونه با تصویر.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/banner-04/page.tsx",
          "type": "registry:page",
          "target": "app/banner/page.tsx"
        },
        {
          "path": "blocks/banner-04/components/banner.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "650px"
      },
      "categories": [
        "banner"
      ],
      "type": "registry:block"
    },
    {
      "name": "banner-05",
      "title": "Banner 05",
      "description": "بنر پروموی تمام‌عرض با تصویر، کد تخفیف و بستن.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/banner-05/page.tsx",
          "type": "registry:page",
          "target": "app/banner/page.tsx"
        },
        {
          "path": "blocks/banner-05/components/banner.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "banner"
      ],
      "type": "registry:block"
    },
    {
      "name": "stats-01",
      "title": "Stats 01",
      "description": "سه عدد بزرگ مرکزی با برچسب فارسی.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/stats-01/page.tsx",
          "type": "registry:page",
          "target": "app/stats/page.tsx"
        },
        {
          "path": "blocks/stats-01/components/stats.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/stats-01/components/stat-number.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "650px"
      },
      "categories": [
        "stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "stats-02",
      "title": "Stats 02",
      "description": "کارت‌های KPI با روند صعودی/نزولی فارسی.",
      "registryDependencies": [
        "card"
      ],
      "files": [
        {
          "path": "blocks/stats-02/page.tsx",
          "type": "registry:page",
          "target": "app/stats/page.tsx"
        },
        {
          "path": "blocks/stats-02/components/stats.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/stats-01/components/stat-number.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "stats-03",
      "title": "Stats 03",
      "description": "اهداف ماه شمسی با نوار پیشرفت.",
      "registryDependencies": [
        "badge",
        "progress"
      ],
      "files": [
        {
          "path": "blocks/stats-03/page.tsx",
          "type": "registry:page",
          "target": "app/stats/page.tsx"
        },
        {
          "path": "blocks/stats-03/components/stats.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/stats-01/components/stat-number.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "stats-04",
      "title": "Stats 04",
      "description": "نمودار میله‌ای هفتهٔ شمسی با آمار کناری.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/stats-04/page.tsx",
          "type": "registry:page",
          "target": "app/stats/page.tsx"
        },
        {
          "path": "blocks/stats-04/components/stats.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/stats-01/components/stat-number.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "850px"
      },
      "categories": [
        "stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "stats-05",
      "title": "Stats 05",
      "description": "داشبورد کامل با تب دوره، شهرها و گزارش.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "progress",
        "separator",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/stats-05/page.tsx",
          "type": "registry:page",
          "target": "app/stats/page.tsx"
        },
        {
          "path": "blocks/stats-05/components/stats.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/stats-01/components/stat-number.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1000px"
      },
      "categories": [
        "stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "testimonials-01",
      "title": "Testimonials 01",
      "description": "یک نقل‌قول مرکزی با آواتار و نقش.",
      "registryDependencies": [
        "avatar"
      ],
      "files": [
        {
          "path": "blocks/testimonials-01/page.tsx",
          "type": "registry:page",
          "target": "app/testimonials/page.tsx"
        },
        {
          "path": "blocks/testimonials-01/components/testimonials.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "650px"
      },
      "categories": [
        "testimonials"
      ],
      "type": "registry:block"
    },
    {
      "name": "testimonials-02",
      "title": "Testimonials 02",
      "description": "سه کارت نظر با ستاره و عکس پروفایل.",
      "registryDependencies": [
        "avatar",
        "card"
      ],
      "files": [
        {
          "path": "blocks/testimonials-02/page.tsx",
          "type": "registry:page",
          "target": "app/testimonials/page.tsx"
        },
        {
          "path": "blocks/testimonials-02/components/testimonials.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "800px"
      },
      "categories": [
        "testimonials"
      ],
      "type": "registry:block"
    },
    {
      "name": "testimonials-03",
      "title": "Testimonials 03",
      "description": "داستان ویژه با تصویر بزرگ و دو نظر کناری.",
      "registryDependencies": [
        "avatar",
        "badge"
      ],
      "files": [
        {
          "path": "blocks/testimonials-03/page.tsx",
          "type": "registry:page",
          "target": "app/testimonials/page.tsx"
        },
        {
          "path": "blocks/testimonials-03/components/testimonials.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "testimonials"
      ],
      "type": "registry:block"
    },
    {
      "name": "testimonials-04",
      "title": "Testimonials 04",
      "description": "تعویض نظر با تب و آواتار مشتریان.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/testimonials-04/page.tsx",
          "type": "registry:page",
          "target": "app/testimonials/page.tsx"
        },
        {
          "path": "blocks/testimonials-04/components/testimonials.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "850px"
      },
      "categories": [
        "testimonials"
      ],
      "type": "registry:block"
    },
    {
      "name": "testimonials-05",
      "title": "Testimonials 05",
      "description": "گالری کامل نظرات با امتیاز، تصویر و CTA.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/testimonials-05/page.tsx",
          "type": "registry:page",
          "target": "app/testimonials/page.tsx"
        },
        {
          "path": "blocks/testimonials-05/components/testimonials.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "testimonials"
      ],
      "type": "registry:block"
    },
    {
      "name": "logo-cloud-01",
      "title": "Logo Cloud 01",
      "description": "ردیف سادهٔ لوگو با خاکستری‌سازی و هاور.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/logo-cloud-01/page.tsx",
          "type": "registry:page",
          "target": "app/logo-cloud/page.tsx"
        },
        {
          "path": "blocks/logo-cloud-01/components/logo-cloud.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/logo-cloud-01/components/logos.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "550px"
      },
      "categories": [
        "logo-cloud"
      ],
      "type": "registry:block"
    },
    {
      "name": "logo-cloud-02",
      "title": "Logo Cloud 02",
      "description": "شبکهٔ کارت‌دار برای نمایش لوگوهای مشتریان.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/logo-cloud-02/page.tsx",
          "type": "registry:page",
          "target": "app/logo-cloud/page.tsx"
        },
        {
          "path": "blocks/logo-cloud-02/components/logo-cloud.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/logo-cloud-01/components/logos.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "750px"
      },
      "categories": [
        "logo-cloud"
      ],
      "type": "registry:block"
    },
    {
      "name": "logo-cloud-03",
      "title": "Logo Cloud 03",
      "description": "دو ردیف مارکی متحرک از لوگوها.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/logo-cloud-03/page.tsx",
          "type": "registry:page",
          "target": "app/logo-cloud/page.tsx"
        },
        {
          "path": "blocks/logo-cloud-03/components/logo-cloud.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/logo-cloud-01/components/logos.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "logo-cloud"
      ],
      "type": "registry:block"
    },
    {
      "name": "logo-cloud-04",
      "title": "Logo Cloud 04",
      "description": "ویترین لوگو با آمار تیم و راهنمای جایگزینی فایل.",
      "registryDependencies": [
        "badge"
      ],
      "files": [
        {
          "path": "blocks/logo-cloud-04/page.tsx",
          "type": "registry:page",
          "target": "app/logo-cloud/page.tsx"
        },
        {
          "path": "blocks/logo-cloud-04/components/logo-cloud.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/logo-cloud-01/components/logos.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "850px"
      },
      "categories": [
        "logo-cloud"
      ],
      "type": "registry:block"
    },
    {
      "name": "logo-cloud-05",
      "title": "Logo Cloud 05",
      "description": "ویترین کامل لوگو با شبکه، اثبات اجتماعی و CTA.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/logo-cloud-05/page.tsx",
          "type": "registry:page",
          "target": "app/logo-cloud/page.tsx"
        },
        {
          "path": "blocks/logo-cloud-05/components/logo-cloud.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/logo-cloud-01/components/logos.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "950px"
      },
      "categories": [
        "logo-cloud"
      ],
      "type": "registry:block"
    },
    {
      "name": "newsletter-01",
      "title": "Newsletter 01",
      "description": "عضویت سادهٔ مرکزی با ایمیل و وضعیت تأیید.",
      "registryDependencies": [
        "button",
        "input"
      ],
      "files": [
        {
          "path": "blocks/newsletter-01/page.tsx",
          "type": "registry:page",
          "target": "app/newsletter/page.tsx"
        },
        {
          "path": "blocks/newsletter-01/components/newsletter.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "600px"
      },
      "categories": [
        "newsletter"
      ],
      "type": "registry:block"
    },
    {
      "name": "newsletter-02",
      "title": "Newsletter 02",
      "description": "کارت خبرنامه با لیست مزایا و عضویت.",
      "registryDependencies": [
        "badge",
        "button",
        "input"
      ],
      "files": [
        {
          "path": "blocks/newsletter-02/page.tsx",
          "type": "registry:page",
          "target": "app/newsletter/page.tsx"
        },
        {
          "path": "blocks/newsletter-02/components/newsletter.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "750px"
      },
      "categories": [
        "newsletter"
      ],
      "type": "registry:block"
    },
    {
      "name": "newsletter-03",
      "title": "Newsletter 03",
      "description": "خبرنامه دو ستونه با پیش‌نمایش شماره‌های اخیر.",
      "registryDependencies": [
        "badge",
        "button",
        "input"
      ],
      "files": [
        {
          "path": "blocks/newsletter-03/page.tsx",
          "type": "registry:page",
          "target": "app/newsletter/page.tsx"
        },
        {
          "path": "blocks/newsletter-03/components/newsletter.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "750px"
      },
      "categories": [
        "newsletter"
      ],
      "type": "registry:block"
    },
    {
      "name": "newsletter-04",
      "title": "Newsletter 04",
      "description": "انتخاب موضوع‌های خبرنامه با سوئیچ.",
      "registryDependencies": [
        "badge",
        "button",
        "input",
        "label",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/newsletter-04/page.tsx",
          "type": "registry:page",
          "target": "app/newsletter/page.tsx"
        },
        {
          "path": "blocks/newsletter-04/components/newsletter.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "850px"
      },
      "categories": [
        "newsletter"
      ],
      "type": "registry:block"
    },
    {
      "name": "newsletter-05",
      "title": "Newsletter 05",
      "description": "بخش کامل خبرنامه با مزایا، عضویت و اثبات اجتماعی.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "input"
      ],
      "files": [
        {
          "path": "blocks/newsletter-05/page.tsx",
          "type": "registry:page",
          "target": "app/newsletter/page.tsx"
        },
        {
          "path": "blocks/newsletter-05/components/newsletter.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "newsletter"
      ],
      "type": "registry:block"
    },
    {
      "name": "navbar-01",
      "title": "Navbar 01",
      "description": "نوار ساده با لوگو، لینک‌ها و ورود.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/navbar-01/page.tsx",
          "type": "registry:page",
          "target": "app/navbar/page.tsx"
        },
        {
          "path": "blocks/navbar-01/components/navbar.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "520px"
      },
      "categories": [
        "navbar"
      ],
      "type": "registry:block"
    },
    {
      "name": "navbar-02",
      "title": "Navbar 02",
      "description": "نوار با CTA و منوی موبایل شیت.",
      "registryDependencies": [
        "button",
        "sheet"
      ],
      "files": [
        {
          "path": "blocks/navbar-02/page.tsx",
          "type": "registry:page",
          "target": "app/navbar/page.tsx"
        },
        {
          "path": "blocks/navbar-02/components/navbar.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "560px"
      },
      "categories": [
        "navbar"
      ],
      "type": "registry:block"
    },
    {
      "name": "navbar-03",
      "title": "Navbar 03",
      "description": "لینک‌های مرکزی با جستجو و شیت موبایل.",
      "registryDependencies": [
        "button",
        "sheet"
      ],
      "files": [
        {
          "path": "blocks/navbar-03/page.tsx",
          "type": "registry:page",
          "target": "app/navbar/page.tsx"
        },
        {
          "path": "blocks/navbar-03/components/navbar.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "560px"
      },
      "categories": [
        "navbar"
      ],
      "type": "registry:block"
    },
    {
      "name": "navbar-04",
      "title": "Navbar 04",
      "description": "منوی کشویی محصولات با Navigation Menu.",
      "registryDependencies": [
        "button",
        "navigation-menu",
        "sheet"
      ],
      "files": [
        {
          "path": "blocks/navbar-04/page.tsx",
          "type": "registry:page",
          "target": "app/navbar/page.tsx"
        },
        {
          "path": "blocks/navbar-04/components/navbar.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "620px"
      },
      "categories": [
        "navbar"
      ],
      "type": "registry:block"
    },
    {
      "name": "navbar-05",
      "title": "Navbar 05",
      "description": "نوار اپ با بنر، جستجو، آواتار و منوی موبایل.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "dropdown-menu",
        "input",
        "sheet"
      ],
      "files": [
        {
          "path": "blocks/navbar-05/page.tsx",
          "type": "registry:page",
          "target": "app/navbar/page.tsx"
        },
        {
          "path": "blocks/navbar-05/components/navbar.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "680px"
      },
      "categories": [
        "navbar"
      ],
      "type": "registry:block"
    },
    {
      "name": "header-01",
      "title": "Header 01",
      "description": "سربرگ ساده فقط با عنوان صفحه.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/header-01/page.tsx",
          "type": "registry:page",
          "target": "app/header/page.tsx"
        },
        {
          "path": "blocks/header-01/components/header.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "480px"
      },
      "categories": [
        "header"
      ],
      "type": "registry:block"
    },
    {
      "name": "header-02",
      "title": "Header 02",
      "description": "عنوان، توضیح کوتاه و یک دکمهٔ اکشن.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/header-02/page.tsx",
          "type": "registry:page",
          "target": "app/header/page.tsx"
        },
        {
          "path": "blocks/header-02/components/header.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "520px"
      },
      "categories": [
        "header"
      ],
      "type": "registry:block"
    },
    {
      "name": "header-03",
      "title": "Header 03",
      "description": "مسیر صفحه، عنوان و دکمه‌های اکشن.",
      "registryDependencies": [
        "breadcrumb",
        "button"
      ],
      "files": [
        {
          "path": "blocks/header-03/page.tsx",
          "type": "registry:page",
          "target": "app/header/page.tsx"
        },
        {
          "path": "blocks/header-03/components/header.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "560px"
      },
      "categories": [
        "header"
      ],
      "type": "registry:block"
    },
    {
      "name": "header-04",
      "title": "Header 04",
      "description": "سربرگ با توضیح و تب‌های بخش.",
      "registryDependencies": [
        "button",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/header-04/page.tsx",
          "type": "registry:page",
          "target": "app/header/page.tsx"
        },
        {
          "path": "blocks/header-04/components/header.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "600px"
      },
      "categories": [
        "header"
      ],
      "type": "registry:block"
    },
    {
      "name": "header-05",
      "title": "Header 05",
      "description": "سربرگ کامل با بج، تیم، اکشن و متادیتا.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/header-05/page.tsx",
          "type": "registry:page",
          "target": "app/header/page.tsx"
        },
        {
          "path": "blocks/header-05/components/header.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "header"
      ],
      "type": "registry:block"
    },
    {
      "name": "footer-01",
      "title": "Footer 01",
      "description": "پابرگ ساده با کپی‌رایت.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/footer-01/page.tsx",
          "type": "registry:page",
          "target": "app/footer/page.tsx"
        },
        {
          "path": "blocks/footer-01/components/footer.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "480px"
      },
      "categories": [
        "footer"
      ],
      "type": "registry:block"
    },
    {
      "name": "footer-02",
      "title": "Footer 02",
      "description": "لوگو، لینک‌های افقی و سال.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/footer-02/page.tsx",
          "type": "registry:page",
          "target": "app/footer/page.tsx"
        },
        {
          "path": "blocks/footer-02/components/footer.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "520px"
      },
      "categories": [
        "footer"
      ],
      "type": "registry:block"
    },
    {
      "name": "footer-03",
      "title": "Footer 03",
      "description": "پابرگ چندستونه با معرفی برند.",
      "registryDependencies": [
        "separator"
      ],
      "files": [
        {
          "path": "blocks/footer-03/page.tsx",
          "type": "registry:page",
          "target": "app/footer/page.tsx"
        },
        {
          "path": "blocks/footer-03/components/footer.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "footer"
      ],
      "type": "registry:block"
    },
    {
      "name": "footer-04",
      "title": "Footer 04",
      "description": "عضویت خبرنامه به‌همراه ستون لینک‌ها.",
      "registryDependencies": [
        "button",
        "input",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/footer-04/page.tsx",
          "type": "registry:page",
          "target": "app/footer/page.tsx"
        },
        {
          "path": "blocks/footer-04/components/footer.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "footer"
      ],
      "type": "registry:block"
    },
    {
      "name": "footer-05",
      "title": "Footer 05",
      "description": "پابرگ کامل با شبکه اجتماعی، خبرنامه و لینک‌های حقوقی.",
      "registryDependencies": [
        "button",
        "input",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/footer-05/page.tsx",
          "type": "registry:page",
          "target": "app/footer/page.tsx"
        },
        {
          "path": "blocks/footer-05/components/footer.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "850px"
      },
      "categories": [
        "footer"
      ],
      "type": "registry:block"
    },
    {
      "name": "mobile-navigation-01",
      "title": "Mobile Navigation 01",
      "description": "منوی کشویی ساده از پایین با لینک‌ها.",
      "registryDependencies": [
        "button",
        "drawer"
      ],
      "files": [
        {
          "path": "blocks/mobile-navigation-01/page.tsx",
          "type": "registry:page",
          "target": "app/mobile-navigation/page.tsx"
        },
        {
          "path": "blocks/mobile-navigation-01/components/mobile-navigation.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "mobile-navigation"
      ],
      "type": "registry:block"
    },
    {
      "name": "mobile-navigation-02",
      "title": "Mobile Navigation 02",
      "description": "شیت کناری با لینک‌ها و دکمه‌های ورود/شروع.",
      "registryDependencies": [
        "button",
        "sheet"
      ],
      "files": [
        {
          "path": "blocks/mobile-navigation-02/page.tsx",
          "type": "registry:page",
          "target": "app/mobile-navigation/page.tsx"
        },
        {
          "path": "blocks/mobile-navigation-02/components/mobile-navigation.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "mobile-navigation"
      ],
      "type": "registry:block"
    },
    {
      "name": "mobile-navigation-03",
      "title": "Mobile Navigation 03",
      "description": "میانبرهای آیکونی در دراور پایین.",
      "registryDependencies": [
        "button",
        "drawer"
      ],
      "files": [
        {
          "path": "blocks/mobile-navigation-03/page.tsx",
          "type": "registry:page",
          "target": "app/mobile-navigation/page.tsx"
        },
        {
          "path": "blocks/mobile-navigation-03/components/mobile-navigation.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "mobile-navigation"
      ],
      "type": "registry:block"
    },
    {
      "name": "mobile-navigation-04",
      "title": "Mobile Navigation 04",
      "description": "منوی گروه‌بندی‌شده با بخش‌های جمع‌شونده.",
      "registryDependencies": [
        "button",
        "collapsible",
        "sheet"
      ],
      "files": [
        {
          "path": "blocks/mobile-navigation-04/page.tsx",
          "type": "registry:page",
          "target": "app/mobile-navigation/page.tsx"
        },
        {
          "path": "blocks/mobile-navigation-04/components/mobile-navigation.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "mobile-navigation"
      ],
      "type": "registry:block"
    },
    {
      "name": "mobile-navigation-05",
      "title": "Mobile Navigation 05",
      "description": "منوی کامل با پروفایل، جستجو، لینک و اکشن‌ها.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "input",
        "separator",
        "sheet"
      ],
      "files": [
        {
          "path": "blocks/mobile-navigation-05/page.tsx",
          "type": "registry:page",
          "target": "app/mobile-navigation/page.tsx"
        },
        {
          "path": "blocks/mobile-navigation-05/components/mobile-navigation.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "760px"
      },
      "categories": [
        "mobile-navigation"
      ],
      "type": "registry:block"
    },
    {
      "name": "breadcrumb-block-01",
      "title": "Breadcrumb 01",
      "description": "مسیر سادهٔ سه‌سطحی.",
      "registryDependencies": [
        "breadcrumb"
      ],
      "files": [
        {
          "path": "blocks/breadcrumb-block-01/page.tsx",
          "type": "registry:page",
          "target": "app/breadcrumb/page.tsx"
        },
        {
          "path": "blocks/breadcrumb-block-01/components/breadcrumb-block.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "420px"
      },
      "categories": [
        "breadcrumb-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "breadcrumb-block-02",
      "title": "Breadcrumb 02",
      "description": "مسیر بالای عنوان و توضیح صفحه.",
      "registryDependencies": [
        "breadcrumb"
      ],
      "files": [
        {
          "path": "blocks/breadcrumb-block-02/page.tsx",
          "type": "registry:page",
          "target": "app/breadcrumb/page.tsx"
        },
        {
          "path": "blocks/breadcrumb-block-02/components/breadcrumb-block.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "560px"
      },
      "categories": [
        "breadcrumb-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "breadcrumb-block-03",
      "title": "Breadcrumb 03",
      "description": "مسیر با بخش میانی جمع‌شده (ellipsis).",
      "registryDependencies": [
        "breadcrumb"
      ],
      "files": [
        {
          "path": "blocks/breadcrumb-block-03/page.tsx",
          "type": "registry:page",
          "target": "app/breadcrumb/page.tsx"
        },
        {
          "path": "blocks/breadcrumb-block-03/components/breadcrumb-block.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "420px"
      },
      "categories": [
        "breadcrumb-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "breadcrumb-block-04",
      "title": "Breadcrumb 04",
      "description": "مسیرهای میانی داخل منوی کشویی.",
      "registryDependencies": [
        "breadcrumb",
        "button",
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "blocks/breadcrumb-block-04/page.tsx",
          "type": "registry:page",
          "target": "app/breadcrumb/page.tsx"
        },
        {
          "path": "blocks/breadcrumb-block-04/components/breadcrumb-block.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "480px"
      },
      "categories": [
        "breadcrumb-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "breadcrumb-block-05",
      "title": "Breadcrumb 05",
      "description": "مسیر کامل با عنوان، اکشن‌ها و متادیتا.",
      "registryDependencies": [
        "breadcrumb",
        "button",
        "dropdown-menu",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/breadcrumb-block-05/page.tsx",
          "type": "registry:page",
          "target": "app/breadcrumb/page.tsx"
        },
        {
          "path": "blocks/breadcrumb-block-05/components/breadcrumb-block.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "680px"
      },
      "categories": [
        "breadcrumb-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "blog-grid-01",
      "title": "Blog Grid 01",
      "description": "فهرست سادهٔ سه‌ستونه با عنوان و خلاصه.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/blog-grid-01/page.tsx",
          "type": "registry:page",
          "target": "app/blog/page.tsx"
        },
        {
          "path": "blocks/blog-grid-01/components/blog-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "blog-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "blog-grid-02",
      "title": "Blog Grid 02",
      "description": "کارت‌های مقاله با کاور رنگی و دسته.",
      "registryDependencies": [
        "badge",
        "card"
      ],
      "files": [
        {
          "path": "blocks/blog-grid-02/page.tsx",
          "type": "registry:page",
          "target": "app/blog/page.tsx"
        },
        {
          "path": "blocks/blog-grid-02/components/blog-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "blog-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "blog-grid-03",
      "title": "Blog Grid 03",
      "description": "مقالهٔ ویژه، فیلتر و فهرست کنار هم.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/blog-grid-03/page.tsx",
          "type": "registry:page",
          "target": "app/blog/page.tsx"
        },
        {
          "path": "blocks/blog-grid-03/components/blog-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "blog-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "blog-grid-04",
      "title": "Blog Grid 04",
      "description": "جستجو و دسته‌بندی با کارت نویسنده.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "card",
        "input",
        "select"
      ],
      "files": [
        {
          "path": "blocks/blog-grid-04/page.tsx",
          "type": "registry:page",
          "target": "app/blog/page.tsx"
        },
        {
          "path": "blocks/blog-grid-04/components/blog-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1000px"
      },
      "categories": [
        "blog-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "blog-grid-05",
      "title": "Blog Grid 05",
      "description": "مجله کامل با ویژه، فیلتر، خبرنامه و صفحه‌بندی.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "dropdown-menu",
        "input",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/blog-grid-05/page.tsx",
          "type": "registry:page",
          "target": "app/blog/page.tsx"
        },
        {
          "path": "blocks/blog-grid-05/components/blog-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1400px"
      },
      "categories": [
        "blog-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "faq-01",
      "title": "FAQ 01",
      "description": "آکاردئون سادهٔ مرکزی با چند پرسش.",
      "registryDependencies": [
        "accordion"
      ],
      "files": [
        {
          "path": "blocks/faq-01/page.tsx",
          "type": "registry:page",
          "target": "app/faq/page.tsx"
        },
        {
          "path": "blocks/faq-01/components/faq.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "faq"
      ],
      "type": "registry:block"
    },
    {
      "name": "faq-02",
      "title": "FAQ 02",
      "description": "پرسش‌ها داخل کارت با بج و توضیح.",
      "registryDependencies": [
        "accordion",
        "badge",
        "card"
      ],
      "files": [
        {
          "path": "blocks/faq-02/page.tsx",
          "type": "registry:page",
          "target": "app/faq/page.tsx"
        },
        {
          "path": "blocks/faq-02/components/faq.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "faq"
      ],
      "type": "registry:block"
    },
    {
      "name": "faq-03",
      "title": "FAQ 03",
      "description": "دو ستونه: معرفی و آکاردئون.",
      "registryDependencies": [
        "accordion",
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/faq-03/page.tsx",
          "type": "registry:page",
          "target": "app/faq/page.tsx"
        },
        {
          "path": "blocks/faq-03/components/faq.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "780px"
      },
      "categories": [
        "faq"
      ],
      "type": "registry:block"
    },
    {
      "name": "faq-04",
      "title": "FAQ 04",
      "description": "تب عمومی، صورتحساب و فنی با آکاردئون.",
      "registryDependencies": [
        "accordion",
        "button",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/faq-04/page.tsx",
          "type": "registry:page",
          "target": "app/faq/page.tsx"
        },
        {
          "path": "blocks/faq-04/components/faq.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "820px"
      },
      "categories": [
        "faq"
      ],
      "type": "registry:block"
    },
    {
      "name": "faq-05",
      "title": "FAQ 05",
      "description": "جستجو، فیلتر، مرتب‌سازی و فرم ایمیل پشتیبانی.",
      "registryDependencies": [
        "accordion",
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/faq-05/page.tsx",
          "type": "registry:page",
          "target": "app/faq/page.tsx"
        },
        {
          "path": "blocks/faq-05/components/faq.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "faq"
      ],
      "type": "registry:block"
    },
    {
      "name": "team-01",
      "title": "Team 01",
      "description": "فهرست متنی سادهٔ اعضای تیم.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/team-01/page.tsx",
          "type": "registry:page",
          "target": "app/team/page.tsx"
        },
        {
          "path": "blocks/team-01/components/team.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "team"
      ],
      "type": "registry:block"
    },
    {
      "name": "team-02",
      "title": "Team 02",
      "description": "کارت عضو با آواتار، نقش و واحد.",
      "registryDependencies": [
        "avatar",
        "badge",
        "card"
      ],
      "files": [
        {
          "path": "blocks/team-02/page.tsx",
          "type": "registry:page",
          "target": "app/team/page.tsx"
        },
        {
          "path": "blocks/team-02/components/team.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "team"
      ],
      "type": "registry:block"
    },
    {
      "name": "team-03",
      "title": "Team 03",
      "description": "عضو ویژه کنار فهرست کوتاه تیم.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/team-03/page.tsx",
          "type": "registry:page",
          "target": "app/team/page.tsx"
        },
        {
          "path": "blocks/team-03/components/team.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "team"
      ],
      "type": "registry:block"
    },
    {
      "name": "team-04",
      "title": "Team 04",
      "description": "فیلتر واحد با Select راست‌چین.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "card",
        "select"
      ],
      "files": [
        {
          "path": "blocks/team-04/page.tsx",
          "type": "registry:page",
          "target": "app/team/page.tsx"
        },
        {
          "path": "blocks/team-04/components/team.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1000px"
      },
      "categories": [
        "team"
      ],
      "type": "registry:block"
    },
    {
      "name": "team-05",
      "title": "Team 05",
      "description": "جستجو، فیلتر، مرتب‌سازی و فرم پیوستن.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/team-05/page.tsx",
          "type": "registry:page",
          "target": "app/team/page.tsx"
        },
        {
          "path": "blocks/team-05/components/team.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "team"
      ],
      "type": "registry:block"
    },
    {
      "name": "contact-01",
      "title": "Contact 01",
      "description": "اطلاعات تماس ساده: ایمیل، تلفن و آدرس.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/contact-01/page.tsx",
          "type": "registry:page",
          "target": "app/contact/page.tsx"
        },
        {
          "path": "blocks/contact-01/components/contact.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "560px"
      },
      "categories": [
        "contact"
      ],
      "type": "registry:block"
    },
    {
      "name": "contact-02",
      "title": "Contact 02",
      "description": "فرم پیام داخل کارت با ایمیل LTR.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/contact-02/page.tsx",
          "type": "registry:page",
          "target": "app/contact/page.tsx"
        },
        {
          "path": "blocks/contact-02/components/contact.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "contact"
      ],
      "type": "registry:block"
    },
    {
      "name": "contact-03",
      "title": "Contact 03",
      "description": "دو ستونه: اطلاعات دفتر و فرم پیام.",
      "registryDependencies": [
        "badge",
        "button",
        "field",
        "input",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/contact-03/page.tsx",
          "type": "registry:page",
          "target": "app/contact/page.tsx"
        },
        {
          "path": "blocks/contact-03/components/contact.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "contact"
      ],
      "type": "registry:block"
    },
    {
      "name": "contact-04",
      "title": "Contact 04",
      "description": "فرم با Select موضوع راست‌چین.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "field",
        "input",
        "select",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/contact-04/page.tsx",
          "type": "registry:page",
          "target": "app/contact/page.tsx"
        },
        {
          "path": "blocks/contact-04/components/contact.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "contact"
      ],
      "type": "registry:block"
    },
    {
      "name": "contact-05",
      "title": "Contact 05",
      "description": "مرکز تماس با تب، Select، DropdownMenu و سوئیچ تماس.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch",
        "tabs",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/contact-05/page.tsx",
          "type": "registry:page",
          "target": "app/contact/page.tsx"
        },
        {
          "path": "blocks/contact-05/components/contact.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "contact"
      ],
      "type": "registry:block"
    },
    {
      "name": "steps-01",
      "title": "Steps 01",
      "description": "فهرست شماره‌دار سادهٔ مراحل.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/steps-01/page.tsx",
          "type": "registry:page",
          "target": "app/steps/page.tsx"
        },
        {
          "path": "blocks/steps-01/components/steps.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "steps"
      ],
      "type": "registry:block"
    },
    {
      "name": "steps-02",
      "title": "Steps 02",
      "description": "کارت‌های مرحله با شماره و بج.",
      "registryDependencies": [
        "badge",
        "card"
      ],
      "files": [
        {
          "path": "blocks/steps-02/page.tsx",
          "type": "registry:page",
          "target": "app/steps/page.tsx"
        },
        {
          "path": "blocks/steps-02/components/steps.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "steps"
      ],
      "type": "registry:block"
    },
    {
      "name": "steps-03",
      "title": "Steps 03",
      "description": "زمان‌بندی عمودی با وضعیت انجام.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/steps-03/page.tsx",
          "type": "registry:page",
          "target": "app/steps/page.tsx"
        },
        {
          "path": "blocks/steps-03/components/steps.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "steps"
      ],
      "type": "registry:block"
    },
    {
      "name": "steps-04",
      "title": "Steps 04",
      "description": "مراحل تعاملی با Select نوع فرآیند.",
      "registryDependencies": [
        "badge",
        "button",
        "select"
      ],
      "files": [
        {
          "path": "blocks/steps-04/page.tsx",
          "type": "registry:page",
          "target": "app/steps/page.tsx"
        },
        {
          "path": "blocks/steps-04/components/steps.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "820px"
      },
      "categories": [
        "steps"
      ],
      "type": "registry:block"
    },
    {
      "name": "steps-05",
      "title": "Steps 05",
      "description": "ویزارد کامل با فرم، Select و DropdownMenu.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "field",
        "input",
        "select",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/steps-05/page.tsx",
          "type": "registry:page",
          "target": "app/steps/page.tsx"
        },
        {
          "path": "blocks/steps-05/components/steps.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "steps"
      ],
      "type": "registry:block"
    },
    {
      "name": "comparison-01",
      "title": "Comparison 01",
      "description": "جدول قبل/بعد بدون قیمت پلن.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/comparison-01/page.tsx",
          "type": "registry:page",
          "target": "app/comparison/page.tsx"
        },
        {
          "path": "blocks/comparison-01/components/comparison.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "comparison"
      ],
      "type": "registry:block"
    },
    {
      "name": "comparison-02",
      "title": "Comparison 02",
      "description": "دو کارت مسیر: ساخت دستی در برابر FarsiUI.",
      "registryDependencies": [
        "badge",
        "button",
        "card"
      ],
      "files": [
        {
          "path": "blocks/comparison-02/page.tsx",
          "type": "registry:page",
          "target": "app/comparison/page.tsx"
        },
        {
          "path": "blocks/comparison-02/components/comparison.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "820px"
      },
      "categories": [
        "comparison"
      ],
      "type": "registry:block"
    },
    {
      "name": "comparison-03",
      "title": "Comparison 03",
      "description": "ماتریس قابلیت ابزارهای UI فارسی.",
      "registryDependencies": [
        "badge"
      ],
      "files": [
        {
          "path": "blocks/comparison-03/page.tsx",
          "type": "registry:page",
          "target": "app/comparison/page.tsx"
        },
        {
          "path": "blocks/comparison-03/components/comparison.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "780px"
      },
      "categories": [
        "comparison"
      ],
      "type": "registry:block"
    },
    {
      "name": "comparison-04",
      "title": "Comparison 04",
      "description": "انتخاب دو گزینه با Select راست‌چین.",
      "registryDependencies": [
        "button",
        "select"
      ],
      "files": [
        {
          "path": "blocks/comparison-04/page.tsx",
          "type": "registry:page",
          "target": "app/comparison/page.tsx"
        },
        {
          "path": "blocks/comparison-04/components/comparison.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "comparison"
      ],
      "type": "registry:block"
    },
    {
      "name": "comparison-05",
      "title": "Comparison 05",
      "description": "جدول قابل جستجو، مرتب‌سازی و ارسال ایمیل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/comparison-05/page.tsx",
          "type": "registry:page",
          "target": "app/comparison/page.tsx"
        },
        {
          "path": "blocks/comparison-05/components/comparison.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "comparison"
      ],
      "type": "registry:block"
    },
    {
      "name": "personal-info-01",
      "title": "Personal Info 01",
      "description": "فرم اطلاعات شخصی ساده داخل کارت.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/personal-info-01/page.tsx",
          "type": "registry:page",
          "target": "app/personal-info/page.tsx"
        },
        {
          "path": "blocks/personal-info-01/components/personal-info-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "personal-info"
      ],
      "type": "registry:block"
    },
    {
      "name": "personal-info-02",
      "title": "Personal Info 02",
      "description": "فرم پروفایل مرکزی با نام، تماس و بیو.",
      "registryDependencies": [
        "button",
        "field",
        "input",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/personal-info-02/page.tsx",
          "type": "registry:page",
          "target": "app/personal-info/page.tsx"
        },
        {
          "path": "blocks/personal-info-02/components/personal-info-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "personal-info"
      ],
      "type": "registry:block"
    },
    {
      "name": "personal-info-03",
      "title": "Personal Info 03",
      "description": "فرم اطلاعات شخصی همراه با آدرس و استان.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "select",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/personal-info-03/page.tsx",
          "type": "registry:page",
          "target": "app/personal-info/page.tsx"
        },
        {
          "path": "blocks/personal-info-03/components/personal-info-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "personal-info"
      ],
      "type": "registry:block"
    },
    {
      "name": "personal-info-04",
      "title": "Personal Info 04",
      "description": "فرم دو ستونه اطلاعات شخصی با تصویر کاور.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/personal-info-04/page.tsx",
          "type": "registry:page",
          "target": "app/personal-info/page.tsx"
        },
        {
          "path": "blocks/personal-info-04/components/personal-info-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "personal-info"
      ],
      "type": "registry:block"
    },
    {
      "name": "personal-info-05",
      "title": "Personal Info 05",
      "description": "ویرایش پروفایل با آواتار و تنظیمات نمایش.",
      "registryDependencies": [
        "avatar",
        "button",
        "card",
        "field",
        "input",
        "label",
        "separator",
        "switch",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/personal-info-05/page.tsx",
          "type": "registry:page",
          "target": "app/personal-info/page.tsx"
        },
        {
          "path": "blocks/personal-info-05/components/personal-info-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "personal-info"
      ],
      "type": "registry:block"
    },
    {
      "name": "identity-verification-01",
      "title": "Identity Verification 01",
      "description": "فرم اطلاعات هویتی با نام، کد ملی، تاریخ تولد و موبایل.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/identity-verification-01/page.tsx",
          "type": "registry:page",
          "target": "app/identity-verification/page.tsx"
        },
        {
          "path": "blocks/identity-verification-01/components/identity-info-form.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/identity-verification-01/components/national-id-input.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "identity-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "identity-verification-02",
      "title": "Identity Verification 02",
      "description": "احراز هویت با آپلود کارت ملی و پیش‌نمایش مدرک.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/identity-verification-02/page.tsx",
          "type": "registry:page",
          "target": "app/identity-verification/page.tsx"
        },
        {
          "path": "blocks/identity-verification-02/components/national-card-upload.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "identity-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "identity-verification-03",
      "title": "Identity Verification 03",
      "description": "بررسی هویت با ثبت‌احوال، OTP و نتیجه تأیید.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "input-otp"
      ],
      "files": [
        {
          "path": "blocks/identity-verification-03/page.tsx",
          "type": "registry:page",
          "target": "app/identity-verification/page.tsx"
        },
        {
          "path": "blocks/identity-verification-03/components/identity-civil-check.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "identity-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "identity-verification-04",
      "title": "Identity Verification 04",
      "description": "احراز هویت چندمرحله‌ای برای اطلاعات، موبایل، مدرک و تأیید.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "field",
        "input"
      ],
      "files": [
        {
          "path": "blocks/identity-verification-04/page.tsx",
          "type": "registry:page",
          "target": "app/identity-verification/page.tsx"
        },
        {
          "path": "blocks/identity-verification-04/components/multi-step-identity.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/identity-verification-04/components/national-id-input.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "identity-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "identity-verification-05",
      "title": "Identity Verification 05",
      "description": "بررسی خلاصه اطلاعات و ویرایش هر بخش قبل از تأیید نهایی.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/identity-verification-05/page.tsx",
          "type": "registry:page",
          "target": "app/identity-verification/page.tsx"
        },
        {
          "path": "blocks/identity-verification-05/components/identity-review.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/identity-verification-05/components/national-id-input.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "identity-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "identity-verification-06",
      "title": "Identity Verification 06",
      "description": "وضعیت‌های احراز هویت: بررسی، تأیید، نیاز به اصلاح و رد.",
      "registryDependencies": [
        "alert",
        "badge",
        "button",
        "card",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/identity-verification-06/page.tsx",
          "type": "registry:page",
          "target": "app/identity-verification/page.tsx"
        },
        {
          "path": "blocks/identity-verification-06/components/identity-status-gallery.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "identity-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "identity-verification-07",
      "title": "Identity Verification 07",
      "description": "داشبورد حساب کاربری با وضعیت احراز هویت و اقدام بعدی.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "card",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/identity-verification-07/page.tsx",
          "type": "registry:page",
          "target": "app/identity-verification/page.tsx"
        },
        {
          "path": "blocks/identity-verification-07/components/account-identity-dashboard.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "identity-verification"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-01",
      "title": "Dashboard 01",
      "description": "داشبورد کامل با سایدبار راست، نمودار و جدول فارسی.",
      "dependencies": [
        "@dnd-kit/core",
        "@dnd-kit/modifiers",
        "@dnd-kit/sortable",
        "@dnd-kit/utilities",
        "@tanstack/react-table",
        "zod"
      ],
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "label",
        "chart",
        "card",
        "select",
        "tabs",
        "table",
        "toggle-group",
        "badge",
        "button",
        "checkbox",
        "dropdown-menu",
        "drawer",
        "input",
        "avatar",
        "sheet",
        "sonner"
      ],
      "files": [
        {
          "path": "blocks/dashboard-01/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/dashboard-01/data.json",
          "type": "registry:file",
          "target": "app/dashboard/data.json"
        },
        {
          "path": "blocks/dashboard-01/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/dashboard-01/components/chart-area-interactive.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/dashboard-01/components/data-table.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/dashboard-01/components/nav-documents.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/dashboard-01/components/nav-main.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/dashboard-01/components/nav-secondary.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/dashboard-01/components/nav-user.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/dashboard-01/components/section-cards.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/dashboard-01/components/site-header.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1000px"
      },
      "categories": [
        "dashboard"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-02",
      "title": "Dashboard 02",
      "description": "سه کارت شاخص ساده بدون سایدبار.",
      "registryDependencies": [
        "badge",
        "card"
      ],
      "files": [
        {
          "path": "blocks/dashboard-02/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/dashboard-02/components/dashboard.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "560px"
      },
      "categories": [
        "dashboard"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-03",
      "title": "Dashboard 03",
      "description": "شاخص‌ها به‌همراه فهرست فعالیت اخیر.",
      "registryDependencies": [
        "avatar",
        "badge",
        "card"
      ],
      "files": [
        {
          "path": "blocks/dashboard-03/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/dashboard-03/components/dashboard.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "780px"
      },
      "categories": [
        "dashboard"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-04",
      "title": "Dashboard 04",
      "description": "نمودار فروش با Select بازهٔ زمانی راست‌چین.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "select"
      ],
      "files": [
        {
          "path": "blocks/dashboard-04/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/dashboard-04/components/dashboard.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "780px"
      },
      "categories": [
        "dashboard"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-05",
      "title": "Dashboard 05",
      "description": "میز کار با جستجو، فیلتر، مرتب‌سازی و ایمیل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/dashboard-05/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/dashboard-05/components/dashboard.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "dashboard"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-stats-01",
      "title": "Dashboard Stats 01",
      "description": "چهار کارت شاخص عملیاتی ساده.",
      "registryDependencies": [
        "card"
      ],
      "files": [
        {
          "path": "blocks/dashboard-stats-01/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-stats/page.tsx"
        },
        {
          "path": "blocks/dashboard-stats-01/components/dashboard-stats.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "560px"
      },
      "categories": [
        "dashboard-stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-stats-02",
      "title": "Dashboard Stats 02",
      "description": "کارت شاخص با اسپارک‌لاین و درصد تغییر.",
      "registryDependencies": [
        "badge",
        "card"
      ],
      "files": [
        {
          "path": "blocks/dashboard-stats-02/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-stats/page.tsx"
        },
        {
          "path": "blocks/dashboard-stats-02/components/dashboard-stats.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "dashboard-stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-stats-03",
      "title": "Dashboard Stats 03",
      "description": "KPI زنده کنار اهداف با Progress.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "progress"
      ],
      "files": [
        {
          "path": "blocks/dashboard-stats-03/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-stats/page.tsx"
        },
        {
          "path": "blocks/dashboard-stats-03/components/dashboard-stats.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "820px"
      },
      "categories": [
        "dashboard-stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-stats-04",
      "title": "Dashboard Stats 04",
      "description": "درآمد کانال‌ها با Select بازه راست‌چین.",
      "registryDependencies": [
        "badge",
        "card",
        "select",
        "table"
      ],
      "files": [
        {
          "path": "blocks/dashboard-stats-04/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-stats/page.tsx"
        },
        {
          "path": "blocks/dashboard-stats-04/components/dashboard-stats.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "dashboard-stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-stats-05",
      "title": "Dashboard Stats 05",
      "description": "مرکز آمار با جستجو، فیلتر، مرتب‌سازی و ایمیل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "progress",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/dashboard-stats-05/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-stats/page.tsx"
        },
        {
          "path": "blocks/dashboard-stats-05/components/dashboard-stats.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "dashboard-stats"
      ],
      "type": "registry:block"
    },
    {
      "name": "analytics-01",
      "title": "Analytics 01",
      "description": "نمودار میله‌ای بازدید هفتگی.",
      "registryDependencies": [
        "card",
        "chart"
      ],
      "files": [
        {
          "path": "blocks/analytics-01/page.tsx",
          "type": "registry:page",
          "target": "app/analytics/page.tsx"
        },
        {
          "path": "blocks/analytics-01/components/analytics.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "analytics"
      ],
      "type": "registry:block"
    },
    {
      "name": "analytics-02",
      "title": "Analytics 02",
      "description": "نمودار ناحیه‌ای ارگانیک در برابر تبلیغات.",
      "registryDependencies": [
        "card",
        "chart"
      ],
      "files": [
        {
          "path": "blocks/analytics-02/page.tsx",
          "type": "registry:page",
          "target": "app/analytics/page.tsx"
        },
        {
          "path": "blocks/analytics-02/components/analytics.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "analytics"
      ],
      "type": "registry:block"
    },
    {
      "name": "analytics-03",
      "title": "Analytics 03",
      "description": "قیف تبدیل از بازدید تا پرداخت.",
      "registryDependencies": [
        "badge",
        "card"
      ],
      "files": [
        {
          "path": "blocks/analytics-03/page.tsx",
          "type": "registry:page",
          "target": "app/analytics/page.tsx"
        },
        {
          "path": "blocks/analytics-03/components/analytics.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "analytics"
      ],
      "type": "registry:block"
    },
    {
      "name": "analytics-04",
      "title": "Analytics 04",
      "description": "نمودار دایره‌ای منابع ترافیک با Select.",
      "registryDependencies": [
        "badge",
        "card",
        "chart",
        "select"
      ],
      "files": [
        {
          "path": "blocks/analytics-04/page.tsx",
          "type": "registry:page",
          "target": "app/analytics/page.tsx"
        },
        {
          "path": "blocks/analytics-04/components/analytics.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "820px"
      },
      "categories": [
        "analytics"
      ],
      "type": "registry:block"
    },
    {
      "name": "analytics-05",
      "title": "Analytics 05",
      "description": "کاوش صفحه با نمودار، جدول، فیلتر و ایمیل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "chart",
        "dropdown-menu",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/analytics-05/page.tsx",
          "type": "registry:page",
          "target": "app/analytics/page.tsx"
        },
        {
          "path": "blocks/analytics-05/components/analytics.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "analytics"
      ],
      "type": "registry:block"
    },
    {
      "name": "data-table-block-01",
      "title": "Data Table 01",
      "description": "جدول سادهٔ کاربران با وضعیت و تاریخ.",
      "registryDependencies": [
        "badge",
        "table"
      ],
      "files": [
        {
          "path": "blocks/data-table-block-01/page.tsx",
          "type": "registry:page",
          "target": "app/data-table-block/page.tsx"
        },
        {
          "path": "blocks/data-table-block-01/components/data-table.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "data-table-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "data-table-block-02",
      "title": "Data Table 02",
      "description": "جدول با آواتار، نقش و ایمیل چپ‌چین.",
      "registryDependencies": [
        "avatar",
        "badge",
        "table"
      ],
      "files": [
        {
          "path": "blocks/data-table-block-02/page.tsx",
          "type": "registry:page",
          "target": "app/data-table-block/page.tsx"
        },
        {
          "path": "blocks/data-table-block-02/components/data-table.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "data-table-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "data-table-block-03",
      "title": "Data Table 03",
      "description": "جستجو و فیلتر وضعیت با Select راست‌چین.",
      "registryDependencies": [
        "badge",
        "input",
        "select",
        "table"
      ],
      "files": [
        {
          "path": "blocks/data-table-block-03/page.tsx",
          "type": "registry:page",
          "target": "app/data-table-block/page.tsx"
        },
        {
          "path": "blocks/data-table-block-03/components/data-table.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "820px"
      },
      "categories": [
        "data-table-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "data-table-block-04",
      "title": "Data Table 04",
      "description": "سفارش‌ها با صفحه‌بندی و نمایش ستون‌ها.",
      "registryDependencies": [
        "badge",
        "button",
        "dropdown-menu",
        "select",
        "table"
      ],
      "files": [
        {
          "path": "blocks/data-table-block-04/page.tsx",
          "type": "registry:page",
          "target": "app/data-table-block/page.tsx"
        },
        {
          "path": "blocks/data-table-block-04/components/data-table.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "data-table-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "data-table-block-05",
      "title": "Data Table 05",
      "description": "جدول کامل با انتخاب، منوی عملیات و دعوت ایمیل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "checkbox",
        "dropdown-menu",
        "input",
        "select",
        "separator",
        "table"
      ],
      "files": [
        {
          "path": "blocks/data-table-block-05/page.tsx",
          "type": "registry:page",
          "target": "app/data-table-block/page.tsx"
        },
        {
          "path": "blocks/data-table-block-05/components/data-table.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "data-table-block"
      ],
      "type": "registry:block"
    },
    {
      "name": "activity-01",
      "title": "Activity 01",
      "description": "فید سادهٔ فعالیت‌های اخیر.",
      "registryDependencies": [
        "avatar",
        "badge"
      ],
      "files": [
        {
          "path": "blocks/activity-01/page.tsx",
          "type": "registry:page",
          "target": "app/activity/page.tsx"
        },
        {
          "path": "blocks/activity-01/components/activity.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "activity"
      ],
      "type": "registry:block"
    },
    {
      "name": "activity-02",
      "title": "Activity 02",
      "description": "خط زمانی تیم با ایمیل چپ‌چین.",
      "registryDependencies": [
        "avatar",
        "badge"
      ],
      "files": [
        {
          "path": "blocks/activity-02/page.tsx",
          "type": "registry:page",
          "target": "app/activity/page.tsx"
        },
        {
          "path": "blocks/activity-02/components/activity.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "activity"
      ],
      "type": "registry:block"
    },
    {
      "name": "activity-03",
      "title": "Activity 03",
      "description": "جستجو و فیلتر نوع با Select راست‌چین.",
      "registryDependencies": [
        "avatar",
        "badge",
        "input",
        "select"
      ],
      "files": [
        {
          "path": "blocks/activity-03/page.tsx",
          "type": "registry:page",
          "target": "app/activity/page.tsx"
        },
        {
          "path": "blocks/activity-03/components/activity.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "activity"
      ],
      "type": "registry:block"
    },
    {
      "name": "activity-04",
      "title": "Activity 04",
      "description": "فعالیت‌های گروه‌بندی‌شده با منوی عملیات RTL.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "blocks/activity-04/page.tsx",
          "type": "registry:page",
          "target": "app/activity/page.tsx"
        },
        {
          "path": "blocks/activity-04/components/activity.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1000px"
      },
      "categories": [
        "activity"
      ],
      "type": "registry:block"
    },
    {
      "name": "activity-05",
      "title": "Activity 05",
      "description": "مرکز فعالیت با فیلتر، مرتب‌سازی و خلاصه ایمیل.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/activity-05/page.tsx",
          "type": "registry:page",
          "target": "app/activity/page.tsx"
        },
        {
          "path": "blocks/activity-05/components/activity.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "activity"
      ],
      "type": "registry:block"
    },
    {
      "name": "recent-items-01",
      "title": "Recent Items 01",
      "description": "لیست سادهٔ موارد اخیراً بازشده.",
      "registryDependencies": [
        "badge"
      ],
      "files": [
        {
          "path": "blocks/recent-items-01/page.tsx",
          "type": "registry:page",
          "target": "app/recent-items/page.tsx"
        },
        {
          "path": "blocks/recent-items-01/components/recent-items.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "recent-items"
      ],
      "type": "registry:block"
    },
    {
      "name": "recent-items-02",
      "title": "Recent Items 02",
      "description": "کارت‌ها با مسیر چپ‌چین و ایمیل مالک.",
      "registryDependencies": [
        "badge",
        "card"
      ],
      "files": [
        {
          "path": "blocks/recent-items-02/page.tsx",
          "type": "registry:page",
          "target": "app/recent-items/page.tsx"
        },
        {
          "path": "blocks/recent-items-02/components/recent-items.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "recent-items"
      ],
      "type": "registry:block"
    },
    {
      "name": "recent-items-03",
      "title": "Recent Items 03",
      "description": "جستجو و فیلتر نوع با Select راست‌چین.",
      "registryDependencies": [
        "badge",
        "input",
        "select"
      ],
      "files": [
        {
          "path": "blocks/recent-items-03/page.tsx",
          "type": "registry:page",
          "target": "app/recent-items/page.tsx"
        },
        {
          "path": "blocks/recent-items-03/components/recent-items.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "recent-items"
      ],
      "type": "registry:block"
    },
    {
      "name": "recent-items-04",
      "title": "Recent Items 04",
      "description": "سنجاق و منوی عملیات راست‌چین.",
      "registryDependencies": [
        "badge",
        "button",
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "blocks/recent-items-04/page.tsx",
          "type": "registry:page",
          "target": "app/recent-items/page.tsx"
        },
        {
          "path": "blocks/recent-items-04/components/recent-items.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "recent-items"
      ],
      "type": "registry:block"
    },
    {
      "name": "recent-items-05",
      "title": "Recent Items 05",
      "description": "مرکز موارد اخیر با فیلتر، سنجاق و اشتراک ایمیل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/recent-items-05/page.tsx",
          "type": "registry:page",
          "target": "app/recent-items/page.tsx"
        },
        {
          "path": "blocks/recent-items-05/components/recent-items.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "recent-items"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-settings-01",
      "title": "Dashboard Settings 01",
      "description": "سوئیچ‌های سادهٔ اعلان ایمیل، پیامک و مرورگر.",
      "registryDependencies": [
        "button",
        "card",
        "label",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/dashboard-settings-01/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-settings/page.tsx"
        },
        {
          "path": "blocks/dashboard-settings-01/components/dashboard-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "dashboard-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-settings-02",
      "title": "Dashboard Settings 02",
      "description": "تب‌های حساب، امنیت و اعلان با ایمیل چپ‌چین.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "separator",
        "switch",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/dashboard-settings-02/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-settings/page.tsx"
        },
        {
          "path": "blocks/dashboard-settings-02/components/dashboard-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "820px"
      },
      "categories": [
        "dashboard-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-settings-03",
      "title": "Dashboard Settings 03",
      "description": "ظاهر و زبان با Select راست‌چین.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/dashboard-settings-03/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-settings/page.tsx"
        },
        {
          "path": "blocks/dashboard-settings-03/components/dashboard-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "dashboard-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-settings-04",
      "title": "Dashboard Settings 04",
      "description": "فضای کاری، نقش اعضا و دعوت با منوی RTL.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/dashboard-settings-04/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-settings/page.tsx"
        },
        {
          "path": "blocks/dashboard-settings-04/components/dashboard-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "dashboard-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "dashboard-settings-05",
      "title": "Dashboard Settings 05",
      "description": "کنسول پیشرفته با API، وب‌هوک و ناوبری کناری.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "checkbox",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/dashboard-settings-05/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard-settings/page.tsx"
        },
        {
          "path": "blocks/dashboard-settings-05/components/dashboard-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "dashboard-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "user-management-01",
      "title": "User Management 01",
      "description": "جدول سادهٔ کاربران با وضعیت و تاریخ عضویت.",
      "registryDependencies": [
        "badge",
        "button",
        "table"
      ],
      "files": [
        {
          "path": "blocks/user-management-01/page.tsx",
          "type": "registry:page",
          "target": "app/user-management/page.tsx"
        },
        {
          "path": "blocks/user-management-01/components/user-management.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "user-management"
      ],
      "type": "registry:block"
    },
    {
      "name": "user-management-02",
      "title": "User Management 02",
      "description": "جدول با آواتار، نقش و ایمیل چپ‌چین.",
      "registryDependencies": [
        "avatar",
        "badge",
        "table"
      ],
      "files": [
        {
          "path": "blocks/user-management-02/page.tsx",
          "type": "registry:page",
          "target": "app/user-management/page.tsx"
        },
        {
          "path": "blocks/user-management-02/components/user-management.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "700px"
      },
      "categories": [
        "user-management"
      ],
      "type": "registry:block"
    },
    {
      "name": "user-management-03",
      "title": "User Management 03",
      "description": "جستجو و فیلتر وضعیت و نقش با Select راست‌چین.",
      "registryDependencies": [
        "avatar",
        "badge",
        "input",
        "select",
        "table"
      ],
      "files": [
        {
          "path": "blocks/user-management-03/page.tsx",
          "type": "registry:page",
          "target": "app/user-management/page.tsx"
        },
        {
          "path": "blocks/user-management-03/components/user-management.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "user-management"
      ],
      "type": "registry:block"
    },
    {
      "name": "user-management-04",
      "title": "User Management 04",
      "description": "انتخاب گروهی، تغییر نقش و منوی عملیات RTL.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "checkbox",
        "dropdown-menu",
        "select",
        "table"
      ],
      "files": [
        {
          "path": "blocks/user-management-04/page.tsx",
          "type": "registry:page",
          "target": "app/user-management/page.tsx"
        },
        {
          "path": "blocks/user-management-04/components/user-management.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "user-management"
      ],
      "type": "registry:block"
    },
    {
      "name": "user-management-05",
      "title": "User Management 05",
      "description": "مرکز کامل با آمار، فیلتر، صفحه‌بندی و دعوت.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "card",
        "checkbox",
        "dropdown-menu",
        "input",
        "select",
        "separator",
        "table"
      ],
      "files": [
        {
          "path": "blocks/user-management-05/page.tsx",
          "type": "registry:page",
          "target": "app/user-management/page.tsx"
        },
        {
          "path": "blocks/user-management-05/components/user-management.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1400px"
      },
      "categories": [
        "user-management"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-grid-01",
      "title": "Product Grid 01",
      "description": "شبکهٔ سادهٔ محصولات با تصویر و قیمت.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/product-grid-01/page.tsx",
          "type": "registry:page",
          "target": "app/product-grid/page.tsx"
        },
        {
          "path": "blocks/product-grid-01/components/product-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "product-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-grid-02",
      "title": "Product Grid 02",
      "description": "کارت محصول با نشان، امتیاز و افزودن به سبد.",
      "registryDependencies": [
        "badge",
        "button",
        "card"
      ],
      "files": [
        {
          "path": "blocks/product-grid-02/page.tsx",
          "type": "registry:page",
          "target": "app/product-grid/page.tsx"
        },
        {
          "path": "blocks/product-grid-02/components/product-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "960px"
      },
      "categories": [
        "product-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-grid-03",
      "title": "Product Grid 03",
      "description": "جستجو و فیلتر دسته با Select راست‌چین.",
      "registryDependencies": [
        "badge",
        "input",
        "select"
      ],
      "files": [
        {
          "path": "blocks/product-grid-03/page.tsx",
          "type": "registry:page",
          "target": "app/product-grid/page.tsx"
        },
        {
          "path": "blocks/product-grid-03/components/product-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "product-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-grid-04",
      "title": "Product Grid 04",
      "description": "مرتب‌سازی، علاقه‌مندی و منوی عملیات RTL.",
      "registryDependencies": [
        "badge",
        "button",
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "blocks/product-grid-04/page.tsx",
          "type": "registry:page",
          "target": "app/product-grid/page.tsx"
        },
        {
          "path": "blocks/product-grid-04/components/product-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "product-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-grid-05",
      "title": "Product Grid 05",
      "description": "فروشگاه کامل با فیلتر، نمایش شبکه/لیست و خبرنامه.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/product-grid-05/page.tsx",
          "type": "registry:page",
          "target": "app/product-grid/page.tsx"
        },
        {
          "path": "blocks/product-grid-05/components/product-grid.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1500px"
      },
      "categories": [
        "product-grid"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-details-01",
      "title": "Product Details 01",
      "description": "صفحهٔ ساده: تصویر، قیمت و افزودن به سبد.",
      "registryDependencies": [
        "button"
      ],
      "files": [
        {
          "path": "blocks/product-details-01/page.tsx",
          "type": "registry:page",
          "target": "app/product-details/page.tsx"
        },
        {
          "path": "blocks/product-details-01/components/product-details.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "product-details"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-details-02",
      "title": "Product Details 02",
      "description": "گالری تصاویر و انتخاب سایز با Select راست‌چین.",
      "registryDependencies": [
        "badge",
        "button",
        "select"
      ],
      "files": [
        {
          "path": "blocks/product-details-02/page.tsx",
          "type": "registry:page",
          "target": "app/product-details/page.tsx"
        },
        {
          "path": "blocks/product-details-02/components/product-details.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1000px"
      },
      "categories": [
        "product-details"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-details-03",
      "title": "Product Details 03",
      "description": "رنگ، اندازه، تعداد و امتیاز محصول.",
      "registryDependencies": [
        "badge",
        "button",
        "label",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/product-details-03/page.tsx",
          "type": "registry:page",
          "target": "app/product-details/page.tsx"
        },
        {
          "path": "blocks/product-details-03/components/product-details.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "product-details"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-details-04",
      "title": "Product Details 04",
      "description": "تب توضیحات/مشخصات/نظرات و منوی اشتراک RTL.",
      "registryDependencies": [
        "badge",
        "button",
        "dropdown-menu",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/product-details-04/page.tsx",
          "type": "registry:page",
          "target": "app/product-details/page.tsx"
        },
        {
          "path": "blocks/product-details-04/components/product-details.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "product-details"
      ],
      "type": "registry:block"
    },
    {
      "name": "product-details-05",
      "title": "Product Details 05",
      "description": "صفحهٔ کامل: گالری، واریانت، FAQ، مرتبط و اطلاع ایمیل.",
      "registryDependencies": [
        "accordion",
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "label",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/product-details-05/page.tsx",
          "type": "registry:page",
          "target": "app/product-details/page.tsx"
        },
        {
          "path": "blocks/product-details-05/components/product-details.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1800px"
      },
      "categories": [
        "product-details"
      ],
      "type": "registry:block"
    },
    {
      "name": "shopping-cart-01",
      "title": "Shopping Cart 01",
      "description": "لیست سادهٔ سبد با تصویر و جمع کل.",
      "registryDependencies": [
        "button",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/shopping-cart-01/page.tsx",
          "type": "registry:page",
          "target": "app/shopping-cart/page.tsx"
        },
        {
          "path": "blocks/shopping-cart-01/components/shopping-cart.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "shopping-cart"
      ],
      "type": "registry:block"
    },
    {
      "name": "shopping-cart-02",
      "title": "Shopping Cart 02",
      "description": "تغییر تعداد، حذف آیتم و خلاصه سفارش.",
      "registryDependencies": [
        "button",
        "card",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/shopping-cart-02/page.tsx",
          "type": "registry:page",
          "target": "app/shopping-cart/page.tsx"
        },
        {
          "path": "blocks/shopping-cart-02/components/shopping-cart.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1000px"
      },
      "categories": [
        "shopping-cart"
      ],
      "type": "registry:block"
    },
    {
      "name": "shopping-cart-03",
      "title": "Shopping Cart 03",
      "description": "کد تخفیف فارسی و Select روش ارسال راست‌چین.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "input",
        "label",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/shopping-cart-03/page.tsx",
          "type": "registry:page",
          "target": "app/shopping-cart/page.tsx"
        },
        {
          "path": "blocks/shopping-cart-03/components/shopping-cart.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "shopping-cart"
      ],
      "type": "registry:block"
    },
    {
      "name": "shopping-cart-04",
      "title": "Shopping Cart 04",
      "description": "منوی عملیات RTL، ذخیره برای بعد و بسته‌بندی هدیه.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "label",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/shopping-cart-04/page.tsx",
          "type": "registry:page",
          "target": "app/shopping-cart/page.tsx"
        },
        {
          "path": "blocks/shopping-cart-04/components/shopping-cart.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1200px"
      },
      "categories": [
        "shopping-cart"
      ],
      "type": "registry:block"
    },
    {
      "name": "shopping-cart-05",
      "title": "Shopping Cart 05",
      "description": "سبد کامل با پیشنهاد، تخفیف، ارسال و رسید ایمیل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "label",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/shopping-cart-05/page.tsx",
          "type": "registry:page",
          "target": "app/shopping-cart/page.tsx"
        },
        {
          "path": "blocks/shopping-cart-05/components/shopping-cart.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1500px"
      },
      "categories": [
        "shopping-cart"
      ],
      "type": "registry:block"
    },
    {
      "name": "checkout-01",
      "title": "Checkout 01",
      "description": "فرم سادهٔ تسویه با ایمیل چپ‌چین.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/checkout-01/page.tsx",
          "type": "registry:page",
          "target": "app/checkout/page.tsx"
        },
        {
          "path": "blocks/checkout-01/components/checkout.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "780px"
      },
      "categories": [
        "checkout"
      ],
      "type": "registry:block"
    },
    {
      "name": "checkout-02",
      "title": "Checkout 02",
      "description": "ارسال دو ستونه با Select استان و روش پرداخت.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "radio-group",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/checkout-02/page.tsx",
          "type": "registry:page",
          "target": "app/checkout/page.tsx"
        },
        {
          "path": "blocks/checkout-02/components/checkout.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1000px"
      },
      "categories": [
        "checkout"
      ],
      "type": "registry:block"
    },
    {
      "name": "checkout-03",
      "title": "Checkout 03",
      "description": "تسویه چندمرحله‌ای تماس، ارسال و پرداخت.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "field",
        "input",
        "label",
        "radio-group",
        "select"
      ],
      "files": [
        {
          "path": "blocks/checkout-03/page.tsx",
          "type": "registry:page",
          "target": "app/checkout/page.tsx"
        },
        {
          "path": "blocks/checkout-03/components/checkout.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "checkout"
      ],
      "type": "registry:block"
    },
    {
      "name": "checkout-04",
      "title": "Checkout 04",
      "description": "دفترچه آدرس Dropdown RTL و فیلد کارت LTR.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "field",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/checkout-04/page.tsx",
          "type": "registry:page",
          "target": "app/checkout/page.tsx"
        },
        {
          "path": "blocks/checkout-04/components/checkout.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1000px"
      },
      "categories": [
        "checkout"
      ],
      "type": "registry:block"
    },
    {
      "name": "checkout-05",
      "title": "Checkout 05",
      "description": "تسویه کامل با تصویر کالا، تخفیف و گزینه‌های ارسال.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "checkbox",
        "field",
        "input",
        "label",
        "radio-group",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/checkout-05/page.tsx",
          "type": "registry:page",
          "target": "app/checkout/page.tsx"
        },
        {
          "path": "blocks/checkout-05/components/checkout.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1600px"
      },
      "categories": [
        "checkout"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-summary-01",
      "title": "Order Summary 01",
      "description": "خلاصه سادهٔ اقلام و جمع کل.",
      "registryDependencies": [
        "separator"
      ],
      "files": [
        {
          "path": "blocks/order-summary-01/page.tsx",
          "type": "registry:page",
          "target": "app/order-summary/page.tsx"
        },
        {
          "path": "blocks/order-summary-01/components/order-summary.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "order-summary"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-summary-02",
      "title": "Order Summary 02",
      "description": "کارت خلاصه با تصویر کالا و وضعیت پرداخت.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/order-summary-02/page.tsx",
          "type": "registry:page",
          "target": "app/order-summary/page.tsx"
        },
        {
          "path": "blocks/order-summary-02/components/order-summary.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "820px"
      },
      "categories": [
        "order-summary"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-summary-03",
      "title": "Order Summary 03",
      "description": "جزئیات باز/بسته و Select فرمت رسید راست‌چین.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "label",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/order-summary-03/page.tsx",
          "type": "registry:page",
          "target": "app/order-summary/page.tsx"
        },
        {
          "path": "blocks/order-summary-03/components/order-summary.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "960px"
      },
      "categories": [
        "order-summary"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-summary-04",
      "title": "Order Summary 04",
      "description": "منوی عملیات RTL و آدرس تحویل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/order-summary-04/page.tsx",
          "type": "registry:page",
          "target": "app/order-summary/page.tsx"
        },
        {
          "path": "blocks/order-summary-04/components/order-summary.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "order-summary"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-summary-05",
      "title": "Order Summary 05",
      "description": "تأیید سفارش با تایم‌لاین، تحویل و ارسال رسید ایمیل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/order-summary-05/page.tsx",
          "type": "registry:page",
          "target": "app/order-summary/page.tsx"
        },
        {
          "path": "blocks/order-summary-05/components/order-summary.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1400px"
      },
      "categories": [
        "order-summary"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-history-01",
      "title": "Order History 01",
      "description": "جدول سادهٔ سفارش‌ها با وضعیت و مبلغ.",
      "registryDependencies": [
        "badge",
        "table"
      ],
      "files": [
        {
          "path": "blocks/order-history-01/page.tsx",
          "type": "registry:page",
          "target": "app/order-history/page.tsx"
        },
        {
          "path": "blocks/order-history-01/components/order-history.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "order-history"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-history-02",
      "title": "Order History 02",
      "description": "کارت سفارش با تصویر و جزئیات کوتاه.",
      "registryDependencies": [
        "badge",
        "button"
      ],
      "files": [
        {
          "path": "blocks/order-history-02/page.tsx",
          "type": "registry:page",
          "target": "app/order-history/page.tsx"
        },
        {
          "path": "blocks/order-history-02/components/order-history.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "order-history"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-history-03",
      "title": "Order History 03",
      "description": "جستجو و فیلتر وضعیت با Select راست‌چین.",
      "registryDependencies": [
        "badge",
        "button",
        "input",
        "select",
        "table"
      ],
      "files": [
        {
          "path": "blocks/order-history-03/page.tsx",
          "type": "registry:page",
          "target": "app/order-history/page.tsx"
        },
        {
          "path": "blocks/order-history-03/components/order-history.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "order-history"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-history-04",
      "title": "Order History 04",
      "description": "جدول با منوی عملیات راست‌چین.",
      "registryDependencies": [
        "badge",
        "button",
        "dropdown-menu",
        "table"
      ],
      "files": [
        {
          "path": "blocks/order-history-04/page.tsx",
          "type": "registry:page",
          "target": "app/order-history/page.tsx"
        },
        {
          "path": "blocks/order-history-04/components/order-history.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "820px"
      },
      "categories": [
        "order-history"
      ],
      "type": "registry:block"
    },
    {
      "name": "order-history-05",
      "title": "Order History 05",
      "description": "مرکز کامل با آمار، فیلتر، صفحه‌بندی و ارسال رسید.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "select",
        "separator",
        "table"
      ],
      "files": [
        {
          "path": "blocks/order-history-05/page.tsx",
          "type": "registry:page",
          "target": "app/order-history/page.tsx"
        },
        {
          "path": "blocks/order-history-05/components/order-history.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1400px"
      },
      "categories": [
        "order-history"
      ],
      "type": "registry:block"
    },
    {
      "name": "wishlist-01",
      "title": "Wishlist 01",
      "description": "شبکهٔ سادهٔ علاقه‌مندی با تصویر و قیمت.",
      "registryDependencies": [],
      "files": [
        {
          "path": "blocks/wishlist-01/page.tsx",
          "type": "registry:page",
          "target": "app/wishlist/page.tsx"
        },
        {
          "path": "blocks/wishlist-01/components/wishlist.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "860px"
      },
      "categories": [
        "wishlist"
      ],
      "type": "registry:block"
    },
    {
      "name": "wishlist-02",
      "title": "Wishlist 02",
      "description": "کارت با افزودن به سبد و حذف از لیست.",
      "registryDependencies": [
        "badge",
        "button",
        "card"
      ],
      "files": [
        {
          "path": "blocks/wishlist-02/page.tsx",
          "type": "registry:page",
          "target": "app/wishlist/page.tsx"
        },
        {
          "path": "blocks/wishlist-02/components/wishlist.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "960px"
      },
      "categories": [
        "wishlist"
      ],
      "type": "registry:block"
    },
    {
      "name": "wishlist-03",
      "title": "Wishlist 03",
      "description": "جستجو و فیلتر دسته با Select راست‌چین.",
      "registryDependencies": [
        "badge",
        "button",
        "input",
        "select"
      ],
      "files": [
        {
          "path": "blocks/wishlist-03/page.tsx",
          "type": "registry:page",
          "target": "app/wishlist/page.tsx"
        },
        {
          "path": "blocks/wishlist-03/components/wishlist.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "wishlist"
      ],
      "type": "registry:block"
    },
    {
      "name": "wishlist-04",
      "title": "Wishlist 04",
      "description": "مرتب‌سازی و منوی عملیات RTL با وضعیت موجودی.",
      "registryDependencies": [
        "badge",
        "button",
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "blocks/wishlist-04/page.tsx",
          "type": "registry:page",
          "target": "app/wishlist/page.tsx"
        },
        {
          "path": "blocks/wishlist-04/components/wishlist.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "wishlist"
      ],
      "type": "registry:block"
    },
    {
      "name": "wishlist-05",
      "title": "Wishlist 05",
      "description": "مرکز کامل با انتخاب گروهی، شبکه/لیست و اشتراک ایمیل.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "checkbox",
        "dropdown-menu",
        "input",
        "select",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/wishlist-05/page.tsx",
          "type": "registry:page",
          "target": "app/wishlist/page.tsx"
        },
        {
          "path": "blocks/wishlist-05/components/wishlist.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1500px"
      },
      "categories": [
        "wishlist"
      ],
      "type": "registry:block"
    },
    {
      "name": "profile-01",
      "title": "Profile 01",
      "description": "نمای سادهٔ پروفایل با آواتار و بیو.",
      "registryDependencies": [
        "avatar"
      ],
      "files": [
        {
          "path": "blocks/profile-01/page.tsx",
          "type": "registry:page",
          "target": "app/profile/page.tsx"
        },
        {
          "path": "blocks/profile-01/components/profile.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "640px"
      },
      "categories": [
        "profile"
      ],
      "type": "registry:block"
    },
    {
      "name": "profile-02",
      "title": "Profile 02",
      "description": "کارت پروفایل با آمار، نشان و دکمه‌های تعامل.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "card",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/profile-02/page.tsx",
          "type": "registry:page",
          "target": "app/profile/page.tsx"
        },
        {
          "path": "blocks/profile-02/components/profile.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "760px"
      },
      "categories": [
        "profile"
      ],
      "type": "registry:block"
    },
    {
      "name": "profile-03",
      "title": "Profile 03",
      "description": "فرم ویرایش با پلیس‌هولدر فارسی و ایمیل LTR.",
      "registryDependencies": [
        "avatar",
        "button",
        "card",
        "field",
        "input",
        "select",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/profile-03/page.tsx",
          "type": "registry:page",
          "target": "app/profile/page.tsx"
        },
        {
          "path": "blocks/profile-03/components/profile.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "980px"
      },
      "categories": [
        "profile"
      ],
      "type": "registry:block"
    },
    {
      "name": "profile-04",
      "title": "Profile 04",
      "description": "کاور، منوی عملیات RTL و تب نمای کلی/فعالیت.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "separator",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/profile-04/page.tsx",
          "type": "registry:page",
          "target": "app/profile/page.tsx"
        },
        {
          "path": "blocks/profile-04/components/profile.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1100px"
      },
      "categories": [
        "profile"
      ],
      "type": "registry:block"
    },
    {
      "name": "profile-05",
      "title": "Profile 05",
      "description": "مرکز کامل با ناوبری، ویرایش، حریم خصوصی و منوهای RTL.",
      "registryDependencies": [
        "avatar",
        "badge",
        "button",
        "dropdown-menu",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch",
        "textarea"
      ],
      "files": [
        {
          "path": "blocks/profile-05/page.tsx",
          "type": "registry:page",
          "target": "app/profile/page.tsx"
        },
        {
          "path": "blocks/profile-05/components/profile.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1500px"
      },
      "categories": [
        "profile"
      ],
      "type": "registry:block"
    },
    {
      "name": "account-settings-01",
      "title": "Account Settings 01",
      "description": "سوئیچ‌های ساده برای ترجیحات پایهٔ حساب.",
      "registryDependencies": [
        "button",
        "card",
        "label",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/account-settings-01/page.tsx",
          "type": "registry:page",
          "target": "app/account-settings/page.tsx"
        },
        {
          "path": "blocks/account-settings-01/components/account-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "account-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "account-settings-02",
      "title": "Account Settings 02",
      "description": "تب‌های حساب، امنیت و اعلان با ایمیل LTR.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "separator",
        "switch",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/account-settings-02/page.tsx",
          "type": "registry:page",
          "target": "app/account-settings/page.tsx"
        },
        {
          "path": "blocks/account-settings-02/components/account-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "account-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "account-settings-03",
      "title": "Account Settings 03",
      "description": "ظاهر، زبان و شهر با Select راست‌چین.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/account-settings-03/page.tsx",
          "type": "registry:page",
          "target": "app/account-settings/page.tsx"
        },
        {
          "path": "blocks/account-settings-03/components/account-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "980px"
      },
      "categories": [
        "account-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "account-settings-04",
      "title": "Account Settings 04",
      "description": "نشست‌ها با منوی عملیات RTL و ایمیل بازیابی.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/account-settings-04/page.tsx",
          "type": "registry:page",
          "target": "app/account-settings/page.tsx"
        },
        {
          "path": "blocks/account-settings-04/components/account-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1400px"
      },
      "categories": [
        "account-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "account-settings-05",
      "title": "Account Settings 05",
      "description": "مرکز کامل با ناوبری، منوی RTL و منطقه خطر.",
      "registryDependencies": [
        "badge",
        "button",
        "dropdown-menu",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/account-settings-05/page.tsx",
          "type": "registry:page",
          "target": "app/account-settings/page.tsx"
        },
        {
          "path": "blocks/account-settings-05/components/account-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1400px"
      },
      "categories": [
        "account-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "security-settings-01",
      "title": "Security Settings 01",
      "description": "سوئیچ‌های ساده برای دو مرحله‌ای و هشدار ورود.",
      "registryDependencies": [
        "button",
        "card",
        "label",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/security-settings-01/page.tsx",
          "type": "registry:page",
          "target": "app/security-settings/page.tsx"
        },
        {
          "path": "blocks/security-settings-01/components/security-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "720px"
      },
      "categories": [
        "security-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "security-settings-02",
      "title": "Security Settings 02",
      "description": "تب رمز عبور و دو مرحله‌ای با ایمیل LTR.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "separator",
        "switch",
        "tabs"
      ],
      "files": [
        {
          "path": "blocks/security-settings-02/page.tsx",
          "type": "registry:page",
          "target": "app/security-settings/page.tsx"
        },
        {
          "path": "blocks/security-settings-02/components/security-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "900px"
      },
      "categories": [
        "security-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "security-settings-03",
      "title": "Security Settings 03",
      "description": "روش تأیید و مهلت نشست با Select راست‌چین.",
      "registryDependencies": [
        "button",
        "card",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/security-settings-03/page.tsx",
          "type": "registry:page",
          "target": "app/security-settings/page.tsx"
        },
        {
          "path": "blocks/security-settings-03/components/security-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "980px"
      },
      "categories": [
        "security-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "security-settings-04",
      "title": "Security Settings 04",
      "description": "نشست‌ها با منوی عملیات RTL و تغییر رمز.",
      "registryDependencies": [
        "badge",
        "button",
        "card",
        "dropdown-menu",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/security-settings-04/page.tsx",
          "type": "registry:page",
          "target": "app/security-settings/page.tsx"
        },
        {
          "path": "blocks/security-settings-04/components/security-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1500px"
      },
      "categories": [
        "security-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "security-settings-05",
      "title": "Security Settings 05",
      "description": "مرکز امنیت با کد بازیابی، تاریخچه ورود و منوی RTL.",
      "registryDependencies": [
        "badge",
        "button",
        "dropdown-menu",
        "field",
        "input",
        "label",
        "select",
        "separator",
        "switch"
      ],
      "files": [
        {
          "path": "blocks/security-settings-05/page.tsx",
          "type": "registry:page",
          "target": "app/security-settings/page.tsx"
        },
        {
          "path": "blocks/security-settings-05/components/security-settings.tsx",
          "type": "registry:component"
        }
      ],
      "meta": {
        "iframeHeight": "1400px"
      },
      "categories": [
        "security-settings"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-01",
      "title": "Sidebar 01",
      "description": "A simple sidebar with navigation grouped by section.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "label",
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "blocks/sidebar-01/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-01/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-01/components/search-form.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-01/components/version-switcher.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-02",
      "title": "Sidebar 02",
      "description": "A sidebar with collapsible sections.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "label",
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "blocks/sidebar-02/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-02/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-02/components/search-form.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-02/components/version-switcher.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-03",
      "title": "Sidebar 03",
      "description": "A sidebar with submenus.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb"
      ],
      "files": [
        {
          "path": "blocks/sidebar-03/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-03/components/app-sidebar.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-04",
      "title": "Sidebar 04",
      "description": "A floating sidebar with submenus.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator"
      ],
      "files": [
        {
          "path": "blocks/sidebar-04/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-04/components/app-sidebar.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-05",
      "title": "Sidebar 05",
      "description": "A sidebar with collapsible submenus.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "label",
        "collapsible"
      ],
      "files": [
        {
          "path": "blocks/sidebar-05/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-05/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-05/components/search-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-06",
      "title": "Sidebar 06",
      "description": "A sidebar with submenus as dropdowns.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "card",
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "blocks/sidebar-06/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-06/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-06/components/nav-main.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-06/components/sidebar-opt-in-form.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-07",
      "title": "Sidebar 07",
      "description": "A sidebar that collapses to icons.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "dropdown-menu",
        "avatar"
      ],
      "files": [
        {
          "path": "blocks/sidebar-07/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-07/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-07/components/nav-main.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-07/components/nav-projects.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-07/components/nav-user.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-07/components/team-switcher.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-08",
      "title": "Sidebar 08",
      "description": "An inset sidebar with secondary navigation.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "dropdown-menu",
        "avatar"
      ],
      "files": [
        {
          "path": "blocks/sidebar-08/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-08/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-08/components/nav-main.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-08/components/nav-projects.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-08/components/nav-secondary.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-08/components/nav-user.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-09",
      "title": "Sidebar 09",
      "description": "Collapsible nested sidebars.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "dropdown-menu",
        "avatar",
        "switch",
        "label"
      ],
      "files": [
        {
          "path": "blocks/sidebar-09/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-09/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-09/components/nav-user.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-10",
      "title": "Sidebar 10",
      "description": "A sidebar in a popover.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "popover",
        "collapsible",
        "dropdown-menu"
      ],
      "files": [
        {
          "path": "blocks/sidebar-10/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-10/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-10/components/nav-actions.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-10/components/nav-favorites.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-10/components/nav-main.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-10/components/nav-secondary.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-10/components/nav-workspaces.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-10/components/team-switcher.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-11",
      "title": "Sidebar 11",
      "description": "A sidebar with a collapsible file tree.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible"
      ],
      "files": [
        {
          "path": "blocks/sidebar-11/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-11/components/app-sidebar.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-12",
      "title": "Sidebar 12",
      "description": "A sidebar with a calendar.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "calendar",
        "dropdown-menu",
        "avatar"
      ],
      "files": [
        {
          "path": "blocks/sidebar-12/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-12/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-12/components/calendars.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-12/components/date-picker.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-12/components/nav-user.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-13",
      "title": "Sidebar 13",
      "description": "A sidebar in a dialog.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "button",
        "dialog"
      ],
      "files": [
        {
          "path": "blocks/sidebar-13/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-13/components/settings-dialog.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-14",
      "title": "Sidebar 14",
      "description": "A sidebar on the right.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb"
      ],
      "files": [
        {
          "path": "blocks/sidebar-14/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-14/components/app-sidebar.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-15",
      "title": "Sidebar 15",
      "description": "A left and right sidebar.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "popover",
        "collapsible",
        "dropdown-menu",
        "calendar",
        "avatar"
      ],
      "files": [
        {
          "path": "blocks/sidebar-15/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-15/components/calendars.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-15/components/date-picker.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-15/components/nav-favorites.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-15/components/nav-main.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-15/components/nav-secondary.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-15/components/nav-user.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-15/components/nav-workspaces.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-15/components/sidebar-left.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-15/components/sidebar-right.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-15/components/team-switcher.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "sidebar-16",
      "title": "Sidebar 16",
      "description": "A sidebar with a sticky site header.",
      "registryDependencies": [
        "sidebar",
        "breadcrumb",
        "separator",
        "collapsible",
        "dropdown-menu",
        "avatar",
        "button",
        "label"
      ],
      "files": [
        {
          "path": "blocks/sidebar-16/page.tsx",
          "type": "registry:page",
          "target": "app/dashboard/page.tsx"
        },
        {
          "path": "blocks/sidebar-16/components/app-sidebar.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-16/components/nav-main.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-16/components/nav-projects.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-16/components/nav-secondary.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-16/components/nav-user.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-16/components/search-form.tsx",
          "type": "registry:component"
        },
        {
          "path": "blocks/sidebar-16/components/site-header.tsx",
          "type": "registry:component"
        }
      ],
      "categories": [
        "sidebar"
      ],
      "type": "registry:block"
    },
    {
      "name": "use-mobile",
      "files": [
        {
          "path": "hooks/use-mobile.ts",
          "type": "registry:hook"
        }
      ],
      "type": "registry:hook"
    },
    {
      "name": "font-geist",
      "title": "Geist",
      "type": "registry:font",
      "font": {
        "family": "'Geist Variable', sans-serif",
        "provider": "google",
        "import": "Geist",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/geist"
      }
    },
    {
      "name": "font-inter",
      "title": "Inter",
      "type": "registry:font",
      "font": {
        "family": "'Inter Variable', sans-serif",
        "provider": "google",
        "import": "Inter",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/inter"
      }
    },
    {
      "name": "font-noto-sans",
      "title": "Noto Sans",
      "type": "registry:font",
      "font": {
        "family": "'Noto Sans Variable', sans-serif",
        "provider": "google",
        "import": "Noto_Sans",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/noto-sans"
      }
    },
    {
      "name": "font-nunito-sans",
      "title": "Nunito Sans",
      "type": "registry:font",
      "font": {
        "family": "'Nunito Sans Variable', sans-serif",
        "provider": "google",
        "import": "Nunito_Sans",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/nunito-sans"
      }
    },
    {
      "name": "font-figtree",
      "title": "Figtree",
      "type": "registry:font",
      "font": {
        "family": "'Figtree Variable', sans-serif",
        "provider": "google",
        "import": "Figtree",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/figtree"
      }
    },
    {
      "name": "font-roboto",
      "title": "Roboto",
      "type": "registry:font",
      "font": {
        "family": "'Roboto Variable', sans-serif",
        "provider": "google",
        "import": "Roboto",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/roboto"
      }
    },
    {
      "name": "font-raleway",
      "title": "Raleway",
      "type": "registry:font",
      "font": {
        "family": "'Raleway Variable', sans-serif",
        "provider": "google",
        "import": "Raleway",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/raleway"
      }
    },
    {
      "name": "font-dm-sans",
      "title": "DM Sans",
      "type": "registry:font",
      "font": {
        "family": "'DM Sans Variable', sans-serif",
        "provider": "google",
        "import": "DM_Sans",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/dm-sans"
      }
    },
    {
      "name": "font-public-sans",
      "title": "Public Sans",
      "type": "registry:font",
      "font": {
        "family": "'Public Sans Variable', sans-serif",
        "provider": "google",
        "import": "Public_Sans",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/public-sans"
      }
    },
    {
      "name": "font-outfit",
      "title": "Outfit",
      "type": "registry:font",
      "font": {
        "family": "'Outfit Variable', sans-serif",
        "provider": "google",
        "import": "Outfit",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/outfit"
      }
    },
    {
      "name": "font-oxanium",
      "title": "Oxanium",
      "type": "registry:font",
      "font": {
        "family": "'Oxanium Variable', sans-serif",
        "provider": "google",
        "import": "Oxanium",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/oxanium"
      }
    },
    {
      "name": "font-manrope",
      "title": "Manrope",
      "type": "registry:font",
      "font": {
        "family": "'Manrope Variable', sans-serif",
        "provider": "google",
        "import": "Manrope",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/manrope"
      }
    },
    {
      "name": "font-space-grotesk",
      "title": "Space Grotesk",
      "type": "registry:font",
      "font": {
        "family": "'Space Grotesk Variable', sans-serif",
        "provider": "google",
        "import": "Space_Grotesk",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/space-grotesk"
      }
    },
    {
      "name": "font-montserrat",
      "title": "Montserrat",
      "type": "registry:font",
      "font": {
        "family": "'Montserrat Variable', sans-serif",
        "provider": "google",
        "import": "Montserrat",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/montserrat"
      }
    },
    {
      "name": "font-ibm-plex-sans",
      "title": "IBM Plex Sans",
      "type": "registry:font",
      "font": {
        "family": "'IBM Plex Sans Variable', sans-serif",
        "provider": "google",
        "import": "IBM_Plex_Sans",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/ibm-plex-sans"
      }
    },
    {
      "name": "font-source-sans-3",
      "title": "Source Sans 3",
      "type": "registry:font",
      "font": {
        "family": "'Source Sans 3 Variable', sans-serif",
        "provider": "google",
        "import": "Source_Sans_3",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/source-sans-3"
      }
    },
    {
      "name": "font-instrument-sans",
      "title": "Instrument Sans",
      "type": "registry:font",
      "font": {
        "family": "'Instrument Sans Variable', sans-serif",
        "provider": "google",
        "import": "Instrument_Sans",
        "variable": "--font-sans",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/instrument-sans"
      }
    },
    {
      "name": "font-jetbrains-mono",
      "title": "JetBrains Mono",
      "type": "registry:font",
      "font": {
        "family": "'JetBrains Mono Variable', monospace",
        "provider": "google",
        "import": "JetBrains_Mono",
        "variable": "--font-mono",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/jetbrains-mono"
      }
    },
    {
      "name": "font-geist-mono",
      "title": "Geist Mono",
      "type": "registry:font",
      "font": {
        "family": "'Geist Mono Variable', monospace",
        "provider": "google",
        "import": "Geist_Mono",
        "variable": "--font-mono",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/geist-mono"
      }
    },
    {
      "name": "font-noto-serif",
      "title": "Noto Serif",
      "type": "registry:font",
      "font": {
        "family": "'Noto Serif Variable', serif",
        "provider": "google",
        "import": "Noto_Serif",
        "variable": "--font-serif",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/noto-serif"
      }
    },
    {
      "name": "font-roboto-slab",
      "title": "Roboto Slab",
      "type": "registry:font",
      "font": {
        "family": "'Roboto Slab Variable', serif",
        "provider": "google",
        "import": "Roboto_Slab",
        "variable": "--font-serif",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/roboto-slab"
      }
    },
    {
      "name": "font-merriweather",
      "title": "Merriweather",
      "type": "registry:font",
      "font": {
        "family": "'Merriweather Variable', serif",
        "provider": "google",
        "import": "Merriweather",
        "variable": "--font-serif",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/merriweather"
      }
    },
    {
      "name": "font-lora",
      "title": "Lora",
      "type": "registry:font",
      "font": {
        "family": "'Lora Variable', serif",
        "provider": "google",
        "import": "Lora",
        "variable": "--font-serif",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/lora"
      }
    },
    {
      "name": "font-playfair-display",
      "title": "Playfair Display",
      "type": "registry:font",
      "font": {
        "family": "'Playfair Display Variable', serif",
        "provider": "google",
        "import": "Playfair_Display",
        "variable": "--font-serif",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/playfair-display"
      }
    },
    {
      "name": "font-eb-garamond",
      "title": "EB Garamond",
      "type": "registry:font",
      "font": {
        "family": "'EB Garamond Variable', serif",
        "provider": "google",
        "import": "EB_Garamond",
        "variable": "--font-serif",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/eb-garamond"
      }
    },
    {
      "name": "font-instrument-serif",
      "title": "Instrument Serif",
      "type": "registry:font",
      "font": {
        "family": "'Instrument Serif', serif",
        "provider": "google",
        "import": "Instrument_Serif",
        "variable": "--font-serif",
        "weight": [
          "400"
        ],
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource/instrument-serif"
      }
    },
    {
      "name": "font-heading-geist",
      "title": "Geist (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Geist Variable', sans-serif",
        "provider": "google",
        "import": "Geist",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/geist"
      }
    },
    {
      "name": "font-heading-inter",
      "title": "Inter (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Inter Variable', sans-serif",
        "provider": "google",
        "import": "Inter",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/inter"
      }
    },
    {
      "name": "font-heading-noto-sans",
      "title": "Noto Sans (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Noto Sans Variable', sans-serif",
        "provider": "google",
        "import": "Noto_Sans",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/noto-sans"
      }
    },
    {
      "name": "font-heading-nunito-sans",
      "title": "Nunito Sans (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Nunito Sans Variable', sans-serif",
        "provider": "google",
        "import": "Nunito_Sans",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/nunito-sans"
      }
    },
    {
      "name": "font-heading-figtree",
      "title": "Figtree (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Figtree Variable', sans-serif",
        "provider": "google",
        "import": "Figtree",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/figtree"
      }
    },
    {
      "name": "font-heading-roboto",
      "title": "Roboto (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Roboto Variable', sans-serif",
        "provider": "google",
        "import": "Roboto",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/roboto"
      }
    },
    {
      "name": "font-heading-raleway",
      "title": "Raleway (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Raleway Variable', sans-serif",
        "provider": "google",
        "import": "Raleway",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/raleway"
      }
    },
    {
      "name": "font-heading-dm-sans",
      "title": "DM Sans (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'DM Sans Variable', sans-serif",
        "provider": "google",
        "import": "DM_Sans",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/dm-sans"
      }
    },
    {
      "name": "font-heading-public-sans",
      "title": "Public Sans (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Public Sans Variable', sans-serif",
        "provider": "google",
        "import": "Public_Sans",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/public-sans"
      }
    },
    {
      "name": "font-heading-outfit",
      "title": "Outfit (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Outfit Variable', sans-serif",
        "provider": "google",
        "import": "Outfit",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/outfit"
      }
    },
    {
      "name": "font-heading-oxanium",
      "title": "Oxanium (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Oxanium Variable', sans-serif",
        "provider": "google",
        "import": "Oxanium",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/oxanium"
      }
    },
    {
      "name": "font-heading-manrope",
      "title": "Manrope (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Manrope Variable', sans-serif",
        "provider": "google",
        "import": "Manrope",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/manrope"
      }
    },
    {
      "name": "font-heading-space-grotesk",
      "title": "Space Grotesk (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Space Grotesk Variable', sans-serif",
        "provider": "google",
        "import": "Space_Grotesk",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/space-grotesk"
      }
    },
    {
      "name": "font-heading-montserrat",
      "title": "Montserrat (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Montserrat Variable', sans-serif",
        "provider": "google",
        "import": "Montserrat",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/montserrat"
      }
    },
    {
      "name": "font-heading-ibm-plex-sans",
      "title": "IBM Plex Sans (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'IBM Plex Sans Variable', sans-serif",
        "provider": "google",
        "import": "IBM_Plex_Sans",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/ibm-plex-sans"
      }
    },
    {
      "name": "font-heading-source-sans-3",
      "title": "Source Sans 3 (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Source Sans 3 Variable', sans-serif",
        "provider": "google",
        "import": "Source_Sans_3",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/source-sans-3"
      }
    },
    {
      "name": "font-heading-instrument-sans",
      "title": "Instrument Sans (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Instrument Sans Variable', sans-serif",
        "provider": "google",
        "import": "Instrument_Sans",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/instrument-sans"
      }
    },
    {
      "name": "font-heading-jetbrains-mono",
      "title": "JetBrains Mono (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'JetBrains Mono Variable', monospace",
        "provider": "google",
        "import": "JetBrains_Mono",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/jetbrains-mono"
      }
    },
    {
      "name": "font-heading-geist-mono",
      "title": "Geist Mono (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Geist Mono Variable', monospace",
        "provider": "google",
        "import": "Geist_Mono",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/geist-mono"
      }
    },
    {
      "name": "font-heading-noto-serif",
      "title": "Noto Serif (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Noto Serif Variable', serif",
        "provider": "google",
        "import": "Noto_Serif",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/noto-serif"
      }
    },
    {
      "name": "font-heading-roboto-slab",
      "title": "Roboto Slab (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Roboto Slab Variable', serif",
        "provider": "google",
        "import": "Roboto_Slab",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/roboto-slab"
      }
    },
    {
      "name": "font-heading-merriweather",
      "title": "Merriweather (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Merriweather Variable', serif",
        "provider": "google",
        "import": "Merriweather",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/merriweather"
      }
    },
    {
      "name": "font-heading-lora",
      "title": "Lora (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Lora Variable', serif",
        "provider": "google",
        "import": "Lora",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/lora"
      }
    },
    {
      "name": "font-heading-playfair-display",
      "title": "Playfair Display (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Playfair Display Variable', serif",
        "provider": "google",
        "import": "Playfair_Display",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/playfair-display"
      }
    },
    {
      "name": "font-heading-eb-garamond",
      "title": "EB Garamond (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'EB Garamond Variable', serif",
        "provider": "google",
        "import": "EB_Garamond",
        "variable": "--font-heading",
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource-variable/eb-garamond"
      }
    },
    {
      "name": "font-heading-instrument-serif",
      "title": "Instrument Serif (Heading)",
      "type": "registry:font",
      "font": {
        "family": "'Instrument Serif', serif",
        "provider": "google",
        "import": "Instrument_Serif",
        "variable": "--font-heading",
        "weight": [
          "400"
        ],
        "subsets": [
          "latin"
        ],
        "dependency": "@fontsource/instrument-serif"
      }
    }
  ]
}
