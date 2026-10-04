# FarsiUI

[Website](https://farsiui.ir) · [Docs](https://farsiui.ir/docs) · [Components](https://farsiui.ir/docs/components)

A UI component library for Persian products. RTL by default, Persian typography, Jalali dates — and components copy straight into your project so you own the code.

![hero](apps/v4/public/opengraph-image.png)

## Quick start

```bash
npx farsiui@latest init
npx farsiui@latest add button
```

Then in your project:

```tsx
import { Button } from "@/components/ui/button"

export function Example() {
  return <Button>Continue</Button>
}
```

Full guide: [Installation](https://farsiui.ir/docs/installation)

## Built for

- **RTL-first** — layout, spacing, and interactions designed right-to-left from the start
- **Persian-ready** — typography, content, and UI patterns for Persian products
- **Jalali dates** — Shamsi calendar support in date components
- **Yours to own** — no locked runtime; read, change, and own every line
- **shadcn-compatible** — same mental model, CLI, and registry workflow

Stack: React, TypeScript, Tailwind CSS, with accessibility patterns from Radix / Base UI / React Aria.

## Local development

```bash
pnpm install
pnpm v4:dev
```

The site and registry run at [localhost:4000](http://localhost:4000).

## Credits

FarsiUI is built on the philosophy and ecosystem of [shadcn/ui](https://ui.shadcn.com). Credit for the original approach belongs to that project; this repo adapts the same experience for Persian, RTL-first interfaces.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE.md)
