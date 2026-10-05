import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center !rounded-[var(--radius-control)] rounded-[var(--radius-field)] border border-transparent bg-clip-padding text-sm leading-(--leading-control) font-semibold whitespace-nowrap shadow-none transition-all duration-150 outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:scale-[0.985] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-primary/20 bg-primary text-primary-foreground shadow-[var(--shadow-control)] hover:bg-primary/92 active:[transform:scale(0.97)] active:!shadow-[var(--shadow-press)] active:not-aria-[haspopup]:bg-primary/85",
        outline:
          "!rounded-[var(--radius-control)] !border-[var(--control-border)] border-[var(--control-border)] !bg-[var(--control)] bg-[var(--control)] text-[var(--foreground)] !shadow-[var(--shadow-control)] shadow-[var(--shadow-control)] backdrop-blur-md backdrop-saturate-150 [backdrop-filter:blur(14px)_saturate(1.35)] hover:border-ring/45 hover:bg-accent/55 active:not-aria-[haspopup]:bg-accent/45 aria-expanded:bg-accent/65 aria-expanded:text-accent-foreground",
        secondary:
          "!rounded-[var(--radius-control)] !border-[var(--control-border)] border-[var(--control-border)] !bg-[var(--control)] bg-[var(--secondary)] text-[var(--foreground)] !shadow-[var(--shadow-control)] shadow-[var(--shadow-control)] backdrop-blur-md backdrop-saturate-150 [backdrop-filter:blur(14px)_saturate(1.35)] hover:bg-accent/50 active:not-aria-[haspopup]:bg-accent/40 aria-expanded:bg-accent/60 aria-expanded:text-accent-foreground",
        ghost:
          "!border-[var(--control-border)] !bg-[var(--control)] !shadow-[var(--shadow-control)] shadow-none hover:!border-[var(--control-border)] hover:!bg-[var(--control)] hover:bg-accent/55 hover:text-accent-foreground hover:!shadow-[var(--shadow-control)] hover:backdrop-blur-sm active:not-aria-[haspopup]:bg-accent/40 aria-expanded:bg-accent/55 aria-expanded:text-accent-foreground dark:hover:bg-white/10",
        destructive:
          "border-destructive/25 bg-destructive text-white shadow-none hover:bg-destructive/90 focus-visible:border-destructive/40 focus-visible:ring-destructive/30 active:not-aria-[haspopup]:bg-destructive/85",
        link: "text-primary underline-offset-4 shadow-none hover:underline active:not-aria-[haspopup]:scale-100",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-6.5 gap-1 rounded-lg px-2 text-[0.8125rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 rounded-lg px-3 text-[0.8125rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-2 px-3.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs":
          "size-6.5 rounded-lg in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        "icon-sm": "size-8 rounded-lg in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-10",
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
