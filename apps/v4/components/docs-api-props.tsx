import { cn } from "cn"

export type DocsApiProp = {
  name: string
  values?: string[]
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
      className={cn("my-4 flex flex-col gap-3", className)}
    >
      {title || description ? (
        <div className="space-y-1">
          {title ? (
            <h3 className="font-heading scroll-m-24 text-lg font-medium tracking-tight">
              {title}
            </h3>
          ) : null}
          {description ? (
            <p className="text-sm text-muted-foreground text-pretty">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="divide-y rounded-xl border">
        {props.map((prop) => (
          <div key={prop.name} className="px-4 py-3.5">
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <code className="font-mono text-[13px] font-semibold text-foreground">
                {prop.name}
              </code>
              {prop.description ? (
                <span className="text-sm text-muted-foreground">
                  {prop.description}
                </span>
              ) : null}
            </div>
            {prop.values?.length ? (
              <div dir="ltr" className="mt-2 flex flex-wrap gap-1.5">
                {prop.values.map((value) => {
                  const isDefault = value === prop.defaultValue
                  return (
                    <code
                      key={value}
                      className={cn(
                        "rounded-md px-1.5 py-0.5 font-mono text-[13px]",
                        isDefault
                          ? "bg-primary/15 text-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {value}
                    </code>
                  )
                })}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
