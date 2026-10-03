"use client"

import { cn } from "cn"
import {
  composeRenderProps,
  Switch as SwitchPrimitive,
  type SwitchProps as SwitchPrimitiveProps,
} from "react-aria-components"

function Switch({
  className,
  size = "default",
  children,
  ...props
}: SwitchPrimitiveProps & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-2xl border-2 transition-all outline-none not-data-selected:border-transparent not-data-selected:bg-input/90 group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-focus-visible:border-ring data-focus-visible:ring-3 data-focus-visible:ring-ring/30 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 data-[size=default]:h-5 data-[size=default]:w-8 data-[size=sm]:h-4 data-[size=sm]:w-6 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary group-has-[:focus-visible]/field-label:data-checked:border-primary data-unchecked:border-transparent data-unchecked:bg-input/90 group-has-[:focus-visible]/field-label:data-unchecked:border-transparent data-selected:border-primary data-selected:bg-primary data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected }) => (
        <>
          <span
            data-slot="switch-thumb"
            data-selected={isSelected || undefined}
            className="pointer-events-none block rounded-2xl bg-background shadow-sm ring-0 transition-transform not-dark:bg-clip-padding not-data-selected:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 dark:not-data-selected:bg-foreground data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:data-checked:bg-primary-foreground data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground data-selected:translate-x-[calc(100%-4px)] rtl:data-selected:-translate-x-[calc(100%-4px)] dark:data-selected:bg-primary-foreground"
          />
          {children}
        </>
      ))}
    </SwitchPrimitive>
  )
}

export { Switch }
