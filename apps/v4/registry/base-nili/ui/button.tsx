import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center !rounded-[var(--radius-control)] rounded-md border border-transparent bg-clip-padding text-[0.8125rem] leading-(--leading-control) font-medium whitespace-nowrap shadow-none transition-all duration-150 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.75",
  {
    variants: {
      variant: {
        default:
          "!bg-[var(--nili-primary)] bg-[var(--primary)] !text-[var(--nili-primary-foreground)] text-[var(--primary-foreground)] !shadow-[0_0_0_1px_#ffffff22_inset,_0_8px_20px_-12px_var(--nili-primary)] shadow-[0_0_0_1px_#ffffff22_inset,_0_8px_20px_-12px_var(--primary)] ![border:1px_solid_color-mix(in_oklab,_var(--nili-primary)_70%,_#000)] [border:1px_solid_color-mix(in_oklab,_var(--primary)_70%,_#000)] hover:bg-primary/90 active:[transform:var(--press)] active:!shadow-[var(--shadow-press)] active:not-aria-[haspopup]:bg-primary/80",
        outline:
          "!rounded-[var(--radius-control)] !bg-[var(--control)] bg-[var(--control)] text-[var(--foreground)] !shadow-[var(--shadow-control)] shadow-[var(--shadow-control)] ![backdrop-filter:none] ![border:1px_solid_var(--control-border)] [border:1px_solid_var(--control-border)] hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:bg-muted/80 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "!rounded-[var(--radius-control)] !bg-[var(--control)] bg-[var(--control)] text-[var(--foreground)] !shadow-[var(--shadow-control)] shadow-[var(--shadow-control)] ![backdrop-filter:none] ![border:1px_solid_var(--control-border)] [border:1px_solid_var(--control-border)] hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] active:not-aria-[haspopup]:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_8%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "!border-[var(--control-border)] !bg-[var(--control)] !shadow-[var(--shadow-control)] hover:!border-[var(--control-border)] hover:!bg-[var(--control)] hover:bg-muted hover:text-foreground hover:!shadow-[var(--shadow-control)] active:not-aria-[haspopup]:bg-muted/80 aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 active:not-aria-[haspopup]:bg-destructive/25 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 shadow-none hover:underline active:not-aria-[haspopup]:translate-y-0",
      },
      size: {
        default:
          "h-7.5 gap-1.25 px-2.25 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-5.5 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-6.5 gap-1 rounded-[min(var(--radius-md),12px)] px-2.25 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-8.5 gap-1.25 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        icon: "size-7.5",
        "icon-xs":
          "size-5.5 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-6.5 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-8.5",
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
