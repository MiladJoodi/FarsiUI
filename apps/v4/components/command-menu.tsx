"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { cn } from "cn"
import { useDocsSearch } from "fumadocs-core/search/client"
import { CornerDownLeftIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { type ColorPalette } from "@/lib/colors"
import { trackEvent } from "@/lib/events"
import { type source } from "@/lib/source"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york-v4/ui/command"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

export function CommandMenu({
  ...props
}: React.ComponentProps<typeof Dialog> & {
  /** Kept for call-site compatibility; unused — search-only menu. */
  tree?: typeof source.pageTree
  colors?: ColorPalette[]
  blocks?: { name: string; description: string; categories: string[] }[]
  navItems?: { href: string; label: string }[]
}) {
  const [open, setOpen] = React.useState(false)

  const { search, setSearch, query } = useDocsSearch({
    type: "fetch",
  })

  const searchTimeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)
  const lastTrackedQueryRef = React.useRef<string>("")

  const trackSearchQuery = React.useCallback((queryValue: string) => {
    const trimmedQuery = queryValue.trim()

    if (trimmedQuery && trimmedQuery !== lastTrackedQueryRef.current) {
      lastTrackedQueryRef.current = trimmedQuery
      trackEvent({
        name: "search_query",
        properties: {
          query: trimmedQuery,
          query_length: trimmedQuery.length,
        },
      })
    }
  }, [])

  const handleSearchChange = React.useCallback(
    (value: string) => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }

      searchTimeoutRef.current = setTimeout(() => {
        React.startTransition(() => {
          setSearch(value)
          trackSearchQuery(value)
        })
      }, 500)
    },
    [setSearch, trackSearchQuery]
  )

  React.useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((current) => !current)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const hasQuery = search.trim().length > 0

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "relative h-8 w-full justify-start rounded-lg border-none bg-muted ps-3 text-foreground shadow-none transition-colors hover:bg-muted/50 md:w-48 lg:w-40 xl:w-64 dark:bg-card"
          )}
          onClick={() => setOpen(true)}
          {...props}
        >
          <span className="hidden xl:inline-flex">جستجو در مستندات...</span>
          <span className="inline-flex xl:hidden">جستجو...</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-border/80 dark:bg-background dark:ring-border">
        <DialogHeader className="sr-only">
          <DialogTitle>جستجو در مستندات...</DialogTitle>
          <DialogDescription>جستجو در مستندات فارسیUI</DialogDescription>
        </DialogHeader>
        <Command
          dir="rtl"
          shouldFilter={false}
          className="rounded-none bg-transparent text-start **:data-[slot=command-input]:h-9! **:data-[slot=command-input]:py-0 **:data-[slot=command-input-wrapper]:mb-0 **:data-[slot=command-input-wrapper]:h-9! **:data-[slot=command-input-wrapper]:rounded-md **:data-[slot=command-input-wrapper]:border **:data-[slot=command-input-wrapper]:border-input **:data-[slot=command-input-wrapper]:bg-input/50"
        >
          <div className="relative">
            <CommandInput
              placeholder="جستجو در مستندات..."
              onValueChange={handleSearchChange}
            />
            {query.isLoading && (
              <div className="pointer-events-none absolute top-1/2 start-auto end-3 z-10 flex -translate-y-1/2 items-center justify-center">
                <Spinner className="size-4 text-muted-foreground" />
              </div>
            )}
          </div>
          <CommandList className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5">
            <CommandEmpty className="py-12 text-center text-sm text-muted-foreground">
              {query.isLoading
                ? "در حال جستجو..."
                : hasQuery
                  ? "نتیجه‌ای پیدا نشد."
                  : "برای جستجو تایپ کنید…"}
            </CommandEmpty>
            <SearchResults setOpen={setOpen} query={query} search={search} />
          </CommandList>
        </Command>
        <div className="absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t border-border bg-muted px-4 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-2">
            <CommandMenuKbd>
              <CornerDownLeftIcon />
            </CommandMenuKbd>
            انتخاب نتیجه
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 items-center justify-center gap-1 rounded border bg-background px-1 font-sans text-[0.7rem] font-medium text-muted-foreground select-none [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  )
}

type Query = Awaited<ReturnType<typeof useDocsSearch>>["query"]

function SearchResults({
  setOpen,
  query,
  search,
}: {
  setOpen: (open: boolean) => void
  query: Query
  search: string
}) {
  const router = useRouter()

  const uniqueResults = React.useMemo(() => {
    if (!query.data || !Array.isArray(query.data)) {
      return []
    }

    return query.data.filter(
      (item, index, self) =>
        !(
          item.type === "text" && item.content.trim().split(/\s+/).length <= 1
        ) && index === self.findIndex((t) => t.content === item.content)
    )
  }, [query.data])

  if (!search.trim()) {
    return null
  }

  if (!query.data || query.data === "empty") {
    return null
  }

  if (uniqueResults.length === 0) {
    return null
  }

  return (
    <CommandGroup
      className="px-0! **:[[cmdk-group-heading]]:scroll-mt-16 **:[[cmdk-group-heading]]:p-3! **:[[cmdk-group-heading]]:pb-1!"
      heading="نتایج جستجو"
    >
      {uniqueResults.map((item) => {
        return (
          <CommandItem
            key={item.id}
            data-type={item.type}
            onSelect={() => {
              router.push(item.url)
              setOpen(false)
            }}
            className="h-9 rounded-md border border-transparent px-3! font-normal data-[selected=true]:border-input data-[selected=true]:bg-input/50"
            keywords={[item.content]}
            value={`${item.content} ${item.type}`}
          >
            <div className="line-clamp-1 text-sm">{item.content}</div>
          </CommandItem>
        )
      })}
    </CommandGroup>
  )
}

function DialogContent({
  className,
  children,
  dir = "rtl",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogPrimitive.Content
        data-slot="dialog-content"
        dir={dir}
        lang="fa"
        className={cn(
          "fixed top-[15%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] gap-4 rounded-lg border bg-background p-6 text-start shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}
