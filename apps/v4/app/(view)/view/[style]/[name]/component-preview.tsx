import { cn } from "cn"

export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* In iframes, svh tracks the parent window — pin to the frame instead. */}
      <style>{`html,body{height:100%;margin:0}.min-h-svh{min-height:100%!important}`}</style>
      <div
        className={cn(
          "min-h-full bg-background *:data-[slot=card]:has-[[data-slot=chart]]:shadow-none"
        )}
      >
        {children}
      </div>
    </>
  )
}
