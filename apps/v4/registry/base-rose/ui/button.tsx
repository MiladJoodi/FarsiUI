import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center !rounded-[var(--radius-control)] rounded-full border border-transparent bg-clip-padding text-sm leading-(--leading-control) font-medium whitespace-nowrap shadow-none transition-all duration-150 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[var(--shadow-control)] hover:bg-primary/80 active:[transform:scale(0.95)] active:!shadow-[var(--shadow-press)] active:not-aria-[haspopup]:bg-primary/70",
        outline:
          "!rounded-[var(--radius-control)] !border-[var(--control-border)] border-[var(--control-border)] !bg-[var(--control)] bg-[var(--control)] text-[var(--foreground)] !shadow-[var(--shadow-control)] shadow-[var(--shadow-control)] hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:bg-muted/80 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "!rounded-[var(--radius-control)] !border-[var(--control-border)] border-[var(--control-border)] !bg-[var(--control)] bg-[var(--control)] text-[var(--foreground)] !shadow-[var(--shadow-control)] shadow-[var(--shadow-control)] hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] active:not-aria-[haspopup]:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_8%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "!border-[var(--control-border)] !bg-[var(--control)] !shadow-[var(--shadow-control)] hover:!border-[var(--control-border)] hover:!bg-[var(--control)] hover:bg-muted hover:text-foreground hover:!shadow-[var(--shadow-control)] active:not-aria-[haspopup]:bg-muted/80 aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 active:not-aria-[haspopup]:bg-destructive/25 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 shadow-none hover:underline active:not-aria-[haspopup]:translate-y-0",
      },
      size: {
        default:
          "h-9.5 gap-2 px-3.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6.5 gap-1 rounded-full px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1 rounded-full px-3.5 text-[0.8125rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        icon: "size-9.5",
        "icon-xs":
          "size-6.5 rounded-full [&_svg:not([class*='size-'])]:size-3.5",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
