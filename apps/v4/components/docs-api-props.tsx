import { cn } from "cn"

export type DocsApiProp = {
  name: string
  values: string[]
  defaultValue?: string
  description?: string
}

export function DocsApiProps({
  title,
  description,
  props,
  className,
}: {
  title?: string
  description?: string
  props: DocsApiProp[]
  className?: string
}) {
  return (
    <div
      data-not-typeset
      className={cn("my-4 flex flex-col gap-4", className)}
    >
      {title ? (
        <div className="space-y-1">
          <h3 className="font-heading scroll-m-24 text-lg font-medium tracking-tight">
            {title}
          </h3>
          {description ? (
            <p className="text-sm text-muted-foreground text-pretty">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border">
        {props.map((prop, index) => (
          <div
            key={prop.name}
            className={cn(
              "grid gap-3 px-4 py-4 sm:grid-cols-[7rem_1fr_auto] sm:items-start sm:gap-4 sm:px-5",
              index > 0 && "border-t"
            )}
          >
            <div className="min-w-0">
              <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm font-medium text-foreground">
                {prop.name}
              </code>
              {prop.description ? (
                <p className="mt-1.5 text-xs text-muted-foreground sm:hidden">
                  {prop.description}
                </p>
              ) : null}
            </div>

            <div className="flex min-w-0 flex-wrap gap-1.5">
              {prop.values.map((value) => {
                const isDefault = value === prop.defaultValue
                return (
                  <span
                    key={value}
                    className={cn(
                      "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs",
                      isDefault
                        ? "border-foreground/20 bg-foreground text-background"
                        : "border-border bg-background text-muted-foreground"
                    )}
                  >
                    {value}
                    {isDefault ? (
                      <span className="ms-1.5 font-sans text-[10px] opacity-80">
                        پیش‌فرض
                      </span>
                    ) : null}
                  </span>
                )
              })}
            </div>

            {prop.description ? (
              <p className="hidden text-xs text-muted-foreground sm:block sm:max-w-40 sm:text-end">
                {prop.description}
              </p>
            ) : (
              <span className="hidden sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
