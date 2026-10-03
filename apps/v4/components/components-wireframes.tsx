import type { JSX, ReactNode } from "react"

/** Soft fills tuned for short (aspect-16/5) cards. */
const fill = "bg-muted-foreground/10"
const fillMid = "bg-muted-foreground/16"
const fillBold = "bg-muted-foreground/24"
const surface = "rounded-md border border-border/70 bg-background"

function Shell({
  children,
  className = "bg-background",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`flex size-full items-center justify-center p-2 ${className}`}>
      {children}
    </div>
  )
}

function WfButton() {
  return (
    <Shell>
      <div className="flex items-center gap-1.5">
        <div className={`h-6 w-14 rounded-md ${fillBold}`} />
        <div className={`h-6 w-14 rounded-md border border-border/70 ${fill}`} />
        <div className={`size-6 rounded-md ${fillMid}`} />
      </div>
    </Shell>
  )
}

function WfButtonGroup() {
  return (
    <Shell>
      <div className="flex overflow-hidden rounded-md border border-border/70">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-6 w-11 border-s border-border/60 first:border-s-0 ${i === 1 ? fillBold : fill}`}
          />
        ))}
      </div>
    </Shell>
  )
}

function WfBadge() {
  return (
    <Shell>
      <div className="flex items-center gap-1.5">
        <div className={`h-4 w-10 rounded-full ${fillBold}`} />
        <div className={`h-4 w-12 rounded-full border border-border/70 ${fillMid}`} />
        <div className={`h-4 w-8 rounded-full ${fill}`} />
      </div>
    </Shell>
  )
}

function WfAvatar() {
  return (
    <Shell>
      <div className="flex items-center gap-1.5">
        <div className={`size-8 rounded-full ${fillBold}`} />
        <div className={`size-6 rounded-full ${fillMid}`} />
        <div className={`size-5 rounded-full ${fill}`} />
      </div>
    </Shell>
  )
}

function WfAccordion() {
  return (
    <Shell className="bg-muted/30">
      <div className={`flex w-full flex-col overflow-hidden ${surface}`}>
        <div className="flex items-center justify-between border-b border-border/60 px-2 py-1">
          <div className={`h-1.5 w-1/2 rounded-sm ${fillBold}`} />
          <div className={`size-2.5 rounded-sm ${fillMid}`} />
        </div>
        <div className="space-y-0.5 px-2 py-1">
          <div className={`h-1 w-full rounded-sm ${fill}`} />
          <div className={`h-1 w-3/4 rounded-sm ${fill}`} />
        </div>
        <div className="flex items-center justify-between border-t border-border/60 px-2 py-1">
          <div className={`h-1.5 w-2/5 rounded-sm ${fillMid}`} />
          <div className={`size-2.5 rounded-sm ${fill}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfAlert() {
  return (
    <Shell>
      <div className="flex w-full items-center gap-2 rounded-md border border-border/70 px-2 py-1.5">
        <div className={`size-3.5 shrink-0 rounded-full ${fillBold}`} />
        <div className="min-w-0 flex-1 space-y-1">
          <div className={`h-1.5 w-1/3 rounded-sm ${fillBold}`} />
          <div className={`h-1 w-full rounded-sm ${fill}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfAlertDialog() {
  return (
    <Shell className="bg-muted/40">
      <div className={`flex w-[85%] flex-col gap-1.5 p-2 ${surface}`}>
        <div className={`h-1.5 w-2/5 rounded-sm ${fillBold}`} />
        <div className={`h-1 w-full rounded-sm ${fill}`} />
        <div className="mt-0.5 flex justify-end gap-1">
          <div className={`h-5 w-10 rounded-sm ${fill}`} />
          <div className={`h-5 w-10 rounded-sm ${fillBold}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfAspectRatio() {
  return (
    <Shell>
      <div className={`aspect-video w-[70%] rounded-md border border-dashed border-muted-foreground/30 ${fillMid}`} />
    </Shell>
  )
}

function WfBreadcrumb() {
  return (
    <Shell>
      <div className="flex items-center gap-1">
        <div className={`h-1.5 w-8 rounded-sm ${fill}`} />
        <div className={`size-1 rounded-full ${fillMid}`} />
        <div className={`h-1.5 w-10 rounded-sm ${fill}`} />
        <div className={`size-1 rounded-full ${fillMid}`} />
        <div className={`h-1.5 w-12 rounded-sm ${fillBold}`} />
      </div>
    </Shell>
  )
}

function WfCalendar() {
  return (
    <Shell className="bg-muted/30">
      <div className={`flex w-[70%] flex-col p-1.5 ${surface}`}>
        <div className={`mb-1 h-1.5 w-1/3 rounded-sm ${fillBold}`} />
        <div className="grid grid-cols-7 gap-0.5">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm ${i === 8 ? fillBold : fill}`}
            />
          ))}
        </div>
      </div>
    </Shell>
  )
}

function WfCard() {
  return (
    <Shell className="bg-muted/30">
      <div className={`flex w-[75%] overflow-hidden ${surface}`}>
        <div className={`w-[38%] shrink-0 ${fillMid}`} />
        <div className="flex flex-1 flex-col justify-center gap-1 p-1.5">
          <div className={`h-1.5 w-2/3 rounded-sm ${fillBold}`} />
          <div className={`h-1 w-full rounded-sm ${fill}`} />
          <div className={`h-1 w-4/5 rounded-sm ${fill}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfCarousel() {
  return (
    <Shell>
      <div className="flex w-full items-center gap-1.5">
        <div className={`size-5 shrink-0 rounded-full ${fillMid}`} />
        <div className={`h-10 flex-1 rounded-md ${fillBold}`} />
        <div className={`size-5 shrink-0 rounded-full ${fillMid}`} />
      </div>
    </Shell>
  )
}

function WfChart() {
  return (
    <Shell>
      <div className="flex h-10 w-full items-end gap-1 px-1">
        {[35, 65, 45, 80, 50, 70, 40].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${i === 3 ? fillBold : fillMid}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </Shell>
  )
}

function WfCheckbox() {
  return (
    <Shell>
      <div className="flex flex-col gap-1.5">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className={`size-3 rounded-sm border border-border/70 ${i === 0 ? fillBold : ""}`}
            />
            <div className={`h-1.5 w-20 rounded-sm ${fillMid}`} />
          </div>
        ))}
      </div>
    </Shell>
  )
}

function WfRadio() {
  return (
    <Shell>
      <div className="flex flex-col gap-1.5">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className={`size-3 rounded-full border-2 ${i === 0 ? "border-muted-foreground/40 bg-muted-foreground/25" : "border-muted-foreground/25"}`}
            />
            <div className={`h-1.5 w-18 rounded-sm ${fillMid}`} />
          </div>
        ))}
      </div>
    </Shell>
  )
}

function WfSwitch() {
  return (
    <Shell>
      <div className="flex items-center gap-3">
        <div className={`relative h-3.5 w-7 rounded-full ${fillBold}`}>
          <div className="absolute inset-e-0.5 top-0.5 size-2.5 rounded-full bg-background" />
        </div>
        <div className={`relative h-3.5 w-7 rounded-full ${fill}`}>
          <div className="absolute inset-s-0.5 top-0.5 size-2.5 rounded-full bg-background" />
        </div>
      </div>
    </Shell>
  )
}

function WfSlider() {
  return (
    <Shell>
      <div className="relative h-1.5 w-full max-w-[85%] rounded-full bg-muted-foreground/10">
        <div className={`absolute inset-s-0 h-full w-3/5 rounded-full ${fillBold}`} />
        <div className={`absolute inset-s-[55%] top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-background ${fillBold}`} />
      </div>
    </Shell>
  )
}

function WfProgress() {
  return (
    <Shell>
      <div className="w-full max-w-[85%] space-y-1.5">
        <div className={`h-1.5 overflow-hidden rounded-full ${fill}`}>
          <div className={`h-full w-2/3 rounded-full ${fillBold}`} />
        </div>
        <div className={`h-1.5 overflow-hidden rounded-full ${fill}`}>
          <div className={`h-full w-2/5 rounded-full ${fillBold}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfInput() {
  return (
    <Shell>
      <div className="w-full max-w-[90%] space-y-1">
        <div className={`h-1 w-1/4 rounded-sm ${fillMid}`} />
        <div className={`h-6 w-full rounded-md border border-border/70 ${fill}`} />
      </div>
    </Shell>
  )
}

function WfTextarea() {
  return (
    <Shell>
      <div className="w-full max-w-[90%] space-y-1">
        <div className={`h-1 w-1/4 rounded-sm ${fillMid}`} />
        <div className={`h-10 w-full rounded-md border border-border/70 ${fill}`} />
      </div>
    </Shell>
  )
}

function WfInputGroup() {
  return (
    <Shell>
      <div className="flex w-full max-w-[90%] overflow-hidden rounded-md border border-border/70">
        <div className={`flex h-6 w-6 items-center justify-center ${fillMid}`}>
          <div className={`size-2.5 rounded-sm ${fillBold}`} />
        </div>
        <div className={`h-6 flex-1 ${fill}`} />
        <div className={`h-6 w-10 ${fillBold}`} />
      </div>
    </Shell>
  )
}

function WfInputOtp() {
  return (
    <Shell>
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`size-6 rounded-md border border-border/70 ${i < 2 ? fillBold : fill}`}
          />
        ))}
      </div>
    </Shell>
  )
}

function WfSelect() {
  return (
    <Shell>
      <div className="flex h-6 w-full max-w-[85%] items-center justify-between rounded-md border border-border/70 px-2">
        <div className={`h-1.5 w-1/3 rounded-sm ${fillMid}`} />
        <div className={`size-2.5 rounded-sm ${fill}`} />
      </div>
    </Shell>
  )
}

function WfCombobox() {
  return (
    <Shell className="bg-muted/20">
      <div className="flex w-full max-w-[85%] flex-col gap-1">
        <div className="flex h-5 items-center justify-between rounded-md border border-border/70 px-1.5">
          <div className={`h-1.5 w-1/3 rounded-sm ${fillMid}`} />
          <div className={`size-2 rounded-sm ${fill}`} />
        </div>
        <div className={`flex gap-1 p-1 ${surface}`}>
          <div className={`h-4 flex-1 rounded-sm ${fillBold}`} />
          <div className={`h-4 flex-1 rounded-sm ${fill}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfNativeSelect() {
  return WfSelect()
}

function WfLabel() {
  return WfInput()
}

function WfField() {
  return (
    <Shell>
      <div className="w-full max-w-[90%] space-y-1">
        <div className={`h-1.5 w-1/4 rounded-sm ${fillBold}`} />
        <div className={`h-6 w-full rounded-md border border-border/70 ${fill}`} />
        <div className={`h-1 w-2/5 rounded-sm ${fill}`} />
      </div>
    </Shell>
  )
}

function WfDialog() {
  return WfAlertDialog()
}

function WfSheet() {
  return (
    <div className="flex size-full bg-muted/40">
      <div className="flex-1" />
      <div className="flex h-full w-[40%] flex-col gap-1 border-s border-border/60 bg-background p-1.5">
        <div className={`h-1.5 w-1/2 rounded-sm ${fillBold}`} />
        <div className={`h-1 w-full rounded-sm ${fill}`} />
        <div className={`mt-auto h-5 w-full rounded-sm ${fillBold}`} />
      </div>
    </div>
  )
}

function WfDrawer() {
  return (
    <div className="flex size-full flex-col bg-muted/40">
      <div className="flex-1" />
      <div className="flex h-[70%] flex-col gap-1 rounded-t-md border-t border-border/60 bg-background p-1.5">
        <div className={`mx-auto h-0.5 w-6 rounded-full ${fillMid}`} />
        <div className={`h-1.5 w-1/3 rounded-sm ${fillBold}`} />
        <div className={`h-1 w-full rounded-sm ${fill}`} />
        <div className={`mt-auto h-5 w-full rounded-sm ${fillBold}`} />
      </div>
    </div>
  )
}

function WfPopover() {
  return (
    <Shell>
      <div className="flex items-start gap-1.5">
        <div className={`h-5 w-12 rounded-md ${fillBold}`} />
        <div className={`w-20 space-y-1 p-1.5 ${surface}`}>
          <div className={`h-1 w-full rounded-sm ${fill}`} />
          <div className={`h-1 w-4/5 rounded-sm ${fill}`} />
          <div className={`h-1 w-3/5 rounded-sm ${fill}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfHoverCard() {
  return WfPopover()
}

function WfTooltip() {
  return (
    <Shell>
      <div className="flex flex-col items-center gap-0.5">
        <div className={`h-4 w-14 rounded-sm ${fillBold}`} />
        <div className={`h-5 w-12 rounded-md ${fillMid}`} />
      </div>
    </Shell>
  )
}

function WfDropdownMenu() {
  return (
    <Shell className="bg-muted/30">
      <div className={`w-28 space-y-0.5 p-1 ${surface}`}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-3.5 rounded-sm ${i === 1 ? fillBold : fill}`}
          />
        ))}
      </div>
    </Shell>
  )
}

function WfContextMenu() {
  return WfDropdownMenu()
}

function WfMenubar() {
  return (
    <div className="flex size-full flex-col bg-background">
      <div className="flex h-6 items-center gap-2 border-b border-border/60 px-2">
        {["w-6", "w-8", "w-7"].map((w, i) => (
          <div key={i} className={`h-1.5 rounded-sm ${fillMid} ${w}`} />
        ))}
      </div>
      <div className="flex flex-1 items-start p-1.5">
        <div className={`w-20 space-y-0.5 p-1 ${surface}`}>
          <div className={`h-3 rounded-sm ${fillBold}`} />
          <div className={`h-3 rounded-sm ${fill}`} />
        </div>
      </div>
    </div>
  )
}

function WfNavigationMenu() {
  return (
    <div className="flex size-full flex-col bg-background">
      <div className="flex h-6 items-center justify-center gap-3 border-b border-border/60">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`h-1.5 w-10 rounded-sm ${i === 1 ? fillBold : fillMid}`} />
        ))}
      </div>
      <div className="grid flex-1 grid-cols-3 gap-1 p-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`rounded-sm ${fill}`} />
        ))}
      </div>
    </div>
  )
}

function WfTabs() {
  return (
    <div className="flex size-full flex-col bg-background p-1.5">
      <div className="mb-1 flex gap-0.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-5 w-11 rounded-sm ${i === 0 ? fillBold : fill}`}
          />
        ))}
      </div>
      <div className={`min-h-0 flex-1 rounded-sm ${fill}`} />
    </div>
  )
}

function WfPagination() {
  return (
    <Shell>
      <div className="flex items-center gap-0.5">
        <div className={`size-5 rounded-sm ${fill}`} />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`size-5 rounded-sm ${i === 2 ? fillBold : fill}`}
          />
        ))}
        <div className={`size-5 rounded-sm ${fill}`} />
      </div>
    </Shell>
  )
}

function WfTable() {
  return (
    <Shell>
      <div className="flex w-full flex-col gap-0.5">
        <div className="flex gap-0.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`h-3 flex-1 rounded-sm ${fillBold}`} />
          ))}
        </div>
        {[0, 1, 2].map((r) => (
          <div key={r} className="flex gap-0.5">
            {[0, 1, 2, 3].map((c) => (
              <div key={c} className={`h-2.5 flex-1 rounded-sm ${fill}`} />
            ))}
          </div>
        ))}
      </div>
    </Shell>
  )
}

function WfDataTable() {
  return (
    <div className="flex size-full flex-col gap-1 bg-background p-1.5">
      <div className="flex gap-1">
        <div className={`h-4 flex-1 rounded-sm ${fill}`} />
        <div className={`h-4 w-10 rounded-sm ${fillBold}`} />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-0.5">
        <div className="flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-2.5 flex-1 rounded-sm ${fillBold}`} />
          ))}
        </div>
        {[0, 1].map((r) => (
          <div key={r} className="flex gap-0.5">
            {[0, 1, 2].map((c) => (
              <div key={c} className={`h-2.5 flex-1 rounded-sm ${fill}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function WfSidebar() {
  return (
    <div className="flex size-full">
      <div className="flex min-w-0 flex-1 flex-col bg-background">
        <div className={`h-4 border-b border-border/60 ${fill}`} />
        <div className={`m-1 min-h-0 flex-1 rounded-sm ${fill}`} />
      </div>
      <aside className="flex w-[30%] flex-col gap-1 bg-muted/50 p-1">
        <div className={`h-1.5 w-3/4 rounded-sm ${fillBold}`} />
        {[0, 1, 2].map((i) => (
          <div key={i} className={`h-1.5 rounded-sm ${fillMid}`} style={{ width: `${80 - i * 15}%` }} />
        ))}
      </aside>
    </div>
  )
}

function WfSkeleton() {
  return (
    <Shell>
      <div className="w-full max-w-[85%] space-y-1">
        <div className={`h-2 w-1/3 rounded-sm ${fillMid}`} />
        <div className={`h-1.5 w-full rounded-sm ${fill}`} />
        <div className={`h-1.5 w-4/5 rounded-sm ${fill}`} />
      </div>
    </Shell>
  )
}

function WfSpinner() {
  return (
    <Shell>
      <div className="size-6 rounded-full border-2 border-muted-foreground/15 border-t-muted-foreground/45" />
    </Shell>
  )
}

function WfEmpty() {
  return (
    <Shell>
      <div className="flex flex-col items-center gap-1">
        <div className={`size-7 rounded-md border border-dashed border-muted-foreground/30 ${fill}`} />
        <div className={`h-1.5 w-16 rounded-sm ${fillBold}`} />
        <div className={`h-4 w-12 rounded-sm ${fillBold}`} />
      </div>
    </Shell>
  )
}

function WfSeparator() {
  return (
    <Shell>
      <div className="flex w-full max-w-[85%] items-center gap-2">
        <div className={`h-1.5 flex-1 rounded-sm ${fill}`} />
        <div className={`h-px w-8 ${fillBold}`} />
        <div className={`h-1.5 flex-1 rounded-sm ${fill}`} />
      </div>
    </Shell>
  )
}

function WfCollapsible() {
  return WfAccordion()
}

function WfCommand() {
  return (
    <Shell className="bg-muted/30">
      <div className={`flex w-full flex-col overflow-hidden ${surface}`}>
        <div className={`h-5 border-b border-border/60 ${fill}`} />
        <div className="flex gap-1 p-1">
          <div className={`h-3.5 flex-1 rounded-sm ${fillBold}`} />
          <div className={`h-3.5 flex-1 rounded-sm ${fill}`} />
          <div className={`h-3.5 flex-1 rounded-sm ${fill}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfScrollArea() {
  return (
    <Shell>
      <div className="relative h-full w-[55%] overflow-hidden rounded-md border border-border/70">
        <div className="space-y-1 p-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`h-1.5 rounded-sm ${fillMid}`} />
          ))}
        </div>
        <div className={`absolute inset-e-0.5 top-1 bottom-1 w-0.5 rounded-full ${fillBold}`} />
      </div>
    </Shell>
  )
}

function WfResizable() {
  return (
    <div className="flex size-full gap-0.5 bg-background p-1.5">
      <div className={`flex-1 rounded-sm ${fill}`} />
      <div className={`w-0.5 rounded-full ${fillBold}`} />
      <div className={`w-[32%] rounded-sm ${fillMid}`} />
    </div>
  )
}

function WfToggle() {
  return (
    <Shell>
      <div className="flex gap-1.5">
        <div className={`size-6 rounded-md ${fillBold}`} />
        <div className={`size-6 rounded-md border border-border/70 ${fill}`} />
      </div>
    </Shell>
  )
}

function WfToggleGroup() {
  return WfButtonGroup()
}

function WfKbd() {
  return (
    <Shell>
      <div className="flex items-center gap-1">
        <div className={`h-5 w-5 rounded border border-border/70 ${fillMid}`} />
        <div className={`h-5 w-5 rounded border border-border/70 ${fillMid}`} />
        <div className={`h-5 w-8 rounded border border-border/70 ${fillMid}`} />
      </div>
    </Shell>
  )
}

function WfToast() {
  return (
    <Shell className="bg-muted/30">
      <div className={`flex w-[90%] items-center gap-1.5 p-1.5 ${surface}`}>
        <div className={`size-3 shrink-0 rounded-full ${fillBold}`} />
        <div className="min-w-0 flex-1 space-y-0.5">
          <div className={`h-1.5 w-1/3 rounded-sm ${fillBold}`} />
          <div className={`h-1 w-full rounded-sm ${fill}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfItem() {
  return (
    <Shell>
      <div className="flex w-full gap-1.5">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex flex-1 items-center gap-1.5 rounded-md border border-border/60 p-1"
          >
            <div className={`size-5 shrink-0 rounded-sm ${fillMid}`} />
            <div className="min-w-0 flex-1 space-y-0.5">
              <div className={`h-1.5 w-2/3 rounded-sm ${fillBold}`} />
              <div className={`h-1 w-full rounded-sm ${fill}`} />
            </div>
          </div>
        ))}
      </div>
    </Shell>
  )
}

function WfDatePicker() {
  return (
    <Shell>
      <div className="flex h-6 w-full max-w-[85%] items-center justify-between rounded-md border border-border/70 px-2">
        <div className={`h-1.5 w-1/2 rounded-sm ${fillMid}`} />
        <div className={`size-3 rounded-sm ${fill}`} />
      </div>
    </Shell>
  )
}

function WfBubble() {
  return (
    <Shell>
      <div className="flex w-full flex-col gap-1">
        <div className={`ms-auto h-5 w-[48%] rounded-xl rounded-se-sm ${fillBold}`} />
        <div className={`h-5 w-[52%] rounded-xl rounded-ss-sm ${fill}`} />
      </div>
    </Shell>
  )
}

function WfMessage() {
  return (
    <Shell>
      <div className="flex w-full flex-col gap-1.5">
        <div className="flex items-end gap-1">
          <div className={`size-3.5 shrink-0 rounded-full ${fillMid}`} />
          <div className={`h-5 w-[50%] rounded-xl ${fill}`} />
        </div>
        <div className="flex flex-row-reverse items-end gap-1">
          <div className={`size-3.5 shrink-0 rounded-full ${fillBold}`} />
          <div className={`h-5 w-[45%] rounded-xl ${fillBold}`} />
        </div>
      </div>
    </Shell>
  )
}

function WfMessageScroller() {
  return (
    <div className="flex size-full flex-col bg-background">
      <div className="flex flex-1 flex-col justify-end gap-1 p-1.5">
        <div className={`ms-auto h-4 w-[40%] rounded-xl ${fillBold}`} />
        <div className={`h-4 w-[45%] rounded-xl ${fill}`} />
        <div className={`ms-auto h-4 w-[35%] rounded-xl ${fillBold}`} />
      </div>
      <div className="border-t border-border/60 p-1">
        <div className={`h-5 w-full rounded-full ${fill}`} />
      </div>
    </div>
  )
}

function WfAttachment() {
  return (
    <Shell>
      <div className="flex w-full gap-1.5">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex flex-1 items-center gap-1 rounded-md border border-border/60 p-1"
          >
            <div className={`size-6 shrink-0 rounded-sm ${fillMid}`} />
            <div className="min-w-0 flex-1 space-y-0.5">
              <div className={`h-1.5 w-full rounded-sm ${fillBold}`} />
              <div className={`h-1 w-1/2 rounded-sm ${fill}`} />
            </div>
          </div>
        ))}
      </div>
    </Shell>
  )
}

function WfMarker() {
  return (
    <Shell>
      <div className="flex w-full max-w-[85%] items-center gap-1.5">
        <div className={`h-px flex-1 ${fillMid}`} />
        <div className={`h-4 w-12 rounded-full ${fillBold}`} />
        <div className={`h-px flex-1 ${fillMid}`} />
      </div>
    </Shell>
  )
}

function WfQuestionnaire() {
  return (
    <Shell className="bg-muted/30">
      <div className={`flex w-full flex-col gap-1 p-1.5 ${surface}`}>
        <div className={`h-1.5 w-2/5 rounded-sm ${fillBold}`} />
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`flex h-5 flex-1 items-center gap-1 rounded-sm border px-1 ${i === 0 ? "border-muted-foreground/30 bg-muted/40" : "border-border/60"}`}
            >
              <div className={`size-2 shrink-0 rounded-full border ${fillMid}`} />
              <div className={`h-1 flex-1 rounded-sm ${fill}`} />
            </div>
          ))}
        </div>
      </div>
    </Shell>
  )
}

function WfTypography() {
  return (
    <Shell>
      <div className="w-full max-w-[85%] space-y-1">
        <div className={`h-2.5 w-2/3 rounded-sm ${fillBold}`} />
        <div className={`h-1.5 w-full rounded-sm ${fill}`} />
        <div className={`h-1.5 w-5/6 rounded-sm ${fill}`} />
      </div>
    </Shell>
  )
}

const WIREFRAMES: Record<string, () => JSX.Element> = {
  accordion: WfAccordion,
  alert: WfAlert,
  "alert-dialog": WfAlertDialog,
  "aspect-ratio": WfAspectRatio,
  attachment: WfAttachment,
  avatar: WfAvatar,
  badge: WfBadge,
  breadcrumb: WfBreadcrumb,
  bubble: WfBubble,
  button: WfButton,
  "button-group": WfButtonGroup,
  calendar: WfCalendar,
  card: WfCard,
  carousel: WfCarousel,
  chart: WfChart,
  checkbox: WfCheckbox,
  collapsible: WfCollapsible,
  combobox: WfCombobox,
  command: WfCommand,
  "context-menu": WfContextMenu,
  "data-table": WfDataTable,
  "date-picker": WfDatePicker,
  dialog: WfDialog,
  drawer: WfDrawer,
  "dropdown-menu": WfDropdownMenu,
  empty: WfEmpty,
  field: WfField,
  "hover-card": WfHoverCard,
  input: WfInput,
  "input-group": WfInputGroup,
  "input-otp": WfInputOtp,
  item: WfItem,
  kbd: WfKbd,
  label: WfLabel,
  marker: WfMarker,
  menubar: WfMenubar,
  message: WfMessage,
  "message-scroller": WfMessageScroller,
  "native-select": WfNativeSelect,
  "navigation-menu": WfNavigationMenu,
  pagination: WfPagination,
  popover: WfPopover,
  progress: WfProgress,
  questionnaire: WfQuestionnaire,
  "radio-group": WfRadio,
  resizable: WfResizable,
  "scroll-area": WfScrollArea,
  select: WfSelect,
  separator: WfSeparator,
  sheet: WfSheet,
  sidebar: WfSidebar,
  skeleton: WfSkeleton,
  slider: WfSlider,
  spinner: WfSpinner,
  switch: WfSwitch,
  table: WfTable,
  tabs: WfTabs,
  textarea: WfTextarea,
  toast: WfToast,
  toggle: WfToggle,
  "toggle-group": WfToggleGroup,
  tooltip: WfTooltip,
  typography: WfTypography,
}

export function ComponentWireframe({ slug }: { slug: string }) {
  const Frame = WIREFRAMES[slug] ?? WfCard
  return (
    <div aria-hidden className="relative aspect-16/5 overflow-hidden">
      <Frame />
    </div>
  )
}
