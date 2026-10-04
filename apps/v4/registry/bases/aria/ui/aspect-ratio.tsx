import { cn } from "cn"

function AspectRatio({
  ratio,
  className,
  children,
  style,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative w-full", className)}
      style={{
        ...style,
        // Padding-% is relative to width, so this creates a real used height for
        // absolutely positioned children like next/image fill.
        paddingBottom: `${100 / ratio}%`,
      }}
      {...props}
    >
      <div
        data-slot="aspect-ratio-content"
        className="absolute inset-0 size-full"
      >
        {children}
      </div>
    </div>
  )
}

export { AspectRatio }
