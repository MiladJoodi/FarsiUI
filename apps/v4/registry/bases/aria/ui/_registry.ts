import { type Registry } from "farsiui/schema"

export const ui: Registry["items"] = [
  {
    name: "accordion",
    type: "registry:ui",
    files: [
      {
        path: "ui/accordion.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/accordion",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/accordion-example.tsx",
        api: "https://react-aria.adobe.com/DisclosureGroup#api",
      },
    },
  },
  {
    name: "alert",
    type: "registry:ui",
    files: [
      {
        path: "ui/alert.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/alert",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/alert-example.tsx",
      },
    },
  },
  {
    name: "alert-dialog",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/alert-dialog",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/alert-dialog-example.tsx",
        api: "https://react-aria.adobe.com/Modal#api",
      },
    },
  },
  {
    name: "aspect-ratio",
    type: "registry:ui",
    files: [
      {
        path: "ui/aspect-ratio.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/aspect-ratio",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/aspect-ratio-example.tsx",
      },
    },
  },
  {
    name: "avatar",
    type: "registry:ui",
    files: [
      {
        path: "ui/avatar.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/avatar",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/avatar-example.tsx",
      },
    },
  },
  {
    name: "badge",
    type: "registry:ui",
    files: [
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/badge",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/badge-example.tsx",
      },
    },
  },
  {
    name: "breadcrumb",
    type: "registry:ui",
    files: [
      {
        path: "ui/breadcrumb.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/breadcrumb",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/breadcrumb-example.tsx",
        api: "https://react-aria.adobe.com/Breadcrumbs#api",
      },
    },
  },
  {
    name: "button",
    type: "registry:ui",
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/button",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/button-example.tsx",
        api: "https://react-aria.adobe.com/Button#api",
      },
    },
  },
  {
    name: "button-group",
    type: "registry:ui",
    registryDependencies: ["separator"],
    files: [
      {
        path: "ui/button-group.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/button-group",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/button-group-example.tsx",
      },
    },
  },
  {
    name: "calendar",
    type: "registry:ui",
    registryDependencies: ["button", "select"],
    files: [
      {
        path: "ui/calendar.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/calendar",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/calendar-example.tsx",
        api: "https://react-aria.adobe.com/Calendar#api",
      },
    },
  },
  {
    name: "card",
    type: "registry:ui",
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/card",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/card-example.tsx",
      },
    },
  },
  {
    name: "carousel",
    type: "registry:ui",
    files: [
      {
        path: "ui/carousel.tsx",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["button"],
    dependencies: ["embla-carousel-react"],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/carousel",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/carousel-example.tsx",
        api: "https://www.embla-carousel.com/docs/api",
      },
    },
  },
  {
    name: "chart",
    type: "registry:ui",
    files: [
      {
        path: "ui/chart.tsx",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["card", "digits"],
    dependencies: ["recharts@3.8.0"],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/chart",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/chart-example.tsx",
      },
    },
  },
  {
    name: "checkbox",
    type: "registry:ui",
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/checkbox",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/checkbox-example.tsx",
        api: "https://react-aria.adobe.com/Checkbox#api",
      },
    },
  },
  {
    name: "collapsible",
    type: "registry:ui",
    files: [
      {
        path: "ui/collapsible.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/collapsible",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/collapsible-example.tsx",
        api: "https://react-aria.adobe.com/Disclosure#api",
      },
    },
  },
  {
    name: "combobox",
    type: "registry:ui",
    registryDependencies: ["button", "input-group"],
    files: [
      {
        path: "ui/combobox.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/combobox",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/combobox-example.tsx",
        api: "https://react-aria.adobe.com/ComboBox#api",
      },
    },
  },
  {
    name: "command",
    type: "registry:ui",
    registryDependencies: ["dialog", "input-group"],
    files: [
      {
        path: "ui/command.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/command",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/command-example.tsx",
        api: "https://react-aria.adobe.com/Autocomplete#api",
      },
    },
  },
  {
    name: "context-menu",
    type: "registry:ui",
    files: [
      {
        path: "ui/context-menu.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/context-menu",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/context-menu-example.tsx",
        api: "https://react-aria.adobe.com/Menu#api",
      },
    },
  },
  {
    name: "dialog",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/dialog",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/dialog-example.tsx",
        api: "https://react-aria.adobe.com/Modal#api",
      },
    },
  },
  {
    name: "drawer",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "ui/drawer.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/drawer",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/drawer-example.tsx",
        api: "https://base-ui.com/react/components/drawer.md",
      },
    },
  },
  {
    name: "dropdown-menu",
    type: "registry:ui",
    files: [
      {
        path: "ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/dropdown-menu",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/dropdown-menu-example.tsx",
        api: "https://react-aria.adobe.com/Menu#api",
      },
    },
  },
  {
    name: "empty",
    type: "registry:ui",
    files: [
      {
        path: "ui/empty.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/empty",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/empty-example.tsx",
      },
    },
  },
  {
    name: "field",
    type: "registry:ui",
    registryDependencies: ["label", "separator"],
    files: [
      {
        path: "ui/field.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/field",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/field-example.tsx",
      },
    },
  },
  {
    name: "form",
    type: "registry:ui",
  },
  {
    name: "hover-card",
    type: "registry:ui",
    files: [
      {
        path: "ui/hover-card.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/hover-card",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/hover-card-example.tsx",
        api: "https://react-aria.adobe.com/PreviewTrigger#api",
      },
    },
  },
  {
    name: "input",
    type: "registry:ui",
    registryDependencies: ["digits", "use-persian-digits-input"],
    files: [
      {
        path: "ui/input.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/input",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/input-example.tsx",
        api: "https://react-aria.adobe.com/TextField#api",
      },
    },
  },
  {
    name: "input-group",
    type: "registry:ui",
    registryDependencies: ["button", "input", "textarea"],
    files: [
      {
        path: "ui/input-group.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/input-group",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/input-group-example.tsx",
        api: "https://react-aria.adobe.com/Group#api",
      },
    },
  },
  {
    name: "input-otp",
    type: "registry:ui",
    dependencies: ["input-otp"],
    registryDependencies: ["digits"],
    files: [
      {
        path: "ui/input-otp.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/input-otp",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/input-otp-example.tsx",
        api: "https://input-otp.rodz.dev",
      },
    },
  },
  {
    name: "item",
    type: "registry:ui",
    registryDependencies: ["separator"],
    files: [
      {
        path: "ui/item.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/item",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/item-example.tsx",
        api: "https://react-aria.adobe.com/Link#api",
      },
    },
  },
  {
    name: "label",
    type: "registry:ui",
    files: [
      {
        path: "ui/label.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/label",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/label-example.tsx",
        api: "https://react-aria.adobe.com/TextField#api",
      },
    },
  },
  {
    name: "pagination",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/pagination.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/pagination",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/pagination-example.tsx",
      },
    },
  },
  {
    name: "persian-digits",
    type: "registry:ui",
    registryDependencies: ["digits"],
    files: [
      {
        path: "ui/persian-digits.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "popover",
    type: "registry:ui",
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/popover",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/popover-example.tsx",
        api: "https://react-aria.adobe.com/Popover#api",
      },
    },
  },
  {
    name: "progress",
    type: "registry:ui",
    files: [
      {
        path: "ui/progress.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/progress",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/progress-example.tsx",
        api: "https://react-aria.adobe.com/ProgressBar#api",
      },
    },
  },
  {
    name: "radio-group",
    type: "registry:ui",
    files: [
      {
        path: "ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/radio-group",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/radio-group-example.tsx",
        api: "https://react-aria.adobe.com/RadioGroup#api",
      },
    },
  },
  {
    name: "resizable",
    type: "registry:ui",
    dependencies: ["react-resizable-panels"],
    files: [
      {
        path: "ui/resizable.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/resizable",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/resizable-example.tsx",
        api: "https://github.com/bvaughn/react-resizable-panels",
      },
    },
  },
  {
    name: "scroll-area",
    type: "registry:ui",
    files: [
      {
        path: "ui/scroll-area.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/scroll-area",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/scroll-area-example.tsx",
      },
    },
  },
  {
    name: "select",
    type: "registry:ui",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "ui/select.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/select",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/select-example.tsx",
        api: "https://react-aria.adobe.com/Select#api",
      },
    },
  },
  {
    name: "separator",
    type: "registry:ui",
    files: [
      {
        path: "ui/separator.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/separator",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/separator-example.tsx",
        api: "https://react-aria.adobe.com/Separator#api",
      },
    },
  },
  {
    name: "sheet",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/sheet.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/sheet",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/sheet-example.tsx",
        api: "https://react-aria.adobe.com/Modal#api",
      },
    },
  },
  {
    name: "sidebar",
    type: "registry:ui",
    registryDependencies: [
      "button",
      "input",
      "separator",
      "sheet",
      "skeleton",
      "tooltip",
      "use-mobile",
    ],
    files: [
      {
        path: "ui/sidebar.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/sidebar",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/sidebar-example.tsx",
      },
    },
  },
  {
    name: "skeleton",
    type: "registry:ui",
    files: [
      {
        path: "ui/skeleton.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/skeleton",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/skeleton-example.tsx",
      },
    },
  },
  {
    name: "slider",
    type: "registry:ui",
    files: [
      {
        path: "ui/slider.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/slider",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/slider-example.tsx",
        api: "https://react-aria.adobe.com/Slider#api",
      },
    },
  },
  {
    name: "sonner",
    type: "registry:ui",
    dependencies: ["sonner", "next-themes"],
    files: [
      {
        path: "ui/sonner.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/sonner",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/sonner-example.tsx",
        api: "https://sonner.emilkowal.ski",
      },
    },
  },
  {
    name: "spinner",
    type: "registry:ui",
    files: [
      {
        path: "ui/spinner.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/spinner",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/spinner-example.tsx",
      },
    },
  },
  {
    name: "switch",
    type: "registry:ui",
    files: [
      {
        path: "ui/switch.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/switch",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/switch-example.tsx",
        api: "https://react-aria.adobe.com/Switch#api",
      },
    },
  },
  {
    name: "table",
    type: "registry:ui",
    files: [
      {
        path: "ui/table.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/table",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/table-example.tsx",
        api: "https://react-aria.adobe.com/Table#api",
      },
    },
  },
  {
    name: "tabs",
    type: "registry:ui",
    files: [
      {
        path: "ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/tabs",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/tabs-example.tsx",
        api: "https://react-aria.adobe.com/Tabs#api",
      },
    },
  },
  {
    name: "textarea",
    type: "registry:ui",
    registryDependencies: ["digits", "use-persian-digits-input"],
    files: [
      {
        path: "ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/textarea",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/textarea-example.tsx",
        api: "https://react-aria.adobe.com/TextField#api",
      },
    },
  },
  {
    name: "toggle",
    type: "registry:ui",
    files: [
      {
        path: "ui/toggle.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/toggle",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/toggle-example.tsx",
        api: "https://react-aria.adobe.com/ToggleButton#api",
      },
    },
  },
  {
    name: "toggle-group",
    type: "registry:ui",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "ui/toggle-group.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/toggle-group",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/toggle-group-example.tsx",
        api: "https://react-aria.adobe.com/ToggleButtonGroup#api",
      },
    },
  },
  {
    name: "tooltip",
    type: "registry:ui",
    files: [
      {
        path: "ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/tooltip",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/tooltip-example.tsx",
        api: "https://react-aria.adobe.com/Tooltip#api",
      },
    },
  },
  {
    name: "kbd",
    type: "registry:ui",
    files: [
      {
        path: "ui/kbd.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/kbd",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/kbd-example.tsx",
      },
    },
  },
  {
    name: "native-select",
    type: "registry:ui",
    files: [
      {
        path: "ui/native-select.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/native-select",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/native-select-example.tsx",
      },
    },
  },
  {
    name: "direction",
    type: "registry:ui",
    files: [
      {
        path: "ui/direction.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/direction",
        api: "https://react-aria.adobe.com/I18nProvider#api",
      },
    },
  },
  {
    name: "attachment",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/attachment.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/attachment",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/attachment-example.tsx",
      },
    },
  },
  {
    name: "bubble",
    type: "registry:ui",
    files: [
      {
        path: "ui/bubble.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/bubble",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/bubble-example.tsx",
      },
    },
  },
  {
    name: "message-scroller",
    type: "registry:ui",
    dependencies: ["@farsiui/react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/message-scroller.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/message-scroller",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/message-scroller-example.tsx",
      },
    },
  },
  {
    name: "questionnaire",
    type: "registry:ui",
    dependencies: ["@farsiui/react"],
    registryDependencies: ["button", "digits"],
    files: [
      {
        path: "ui/questionnaire.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/questionnaire",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/questionnaire-example.tsx",
      },
    },
  },
  {
    name: "marker",
    type: "registry:ui",
    files: [
      {
        path: "ui/marker.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/marker",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/marker-example.tsx",
      },
    },
  },
  {
    name: "message",
    type: "registry:ui",
    files: [
      {
        path: "ui/message.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      links: {
        docs: "https://farsiui.ir/docs/components/aria/message",
        examples:
          "https://farsiui.ir/code/apps/v4/registry/bases/aria/examples/message-example.tsx",
      },
    },
  },
]
