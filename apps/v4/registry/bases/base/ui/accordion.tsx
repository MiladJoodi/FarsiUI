import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "cn"

import { IconPlaceholder } from "@/components/icon-placeholder"

function Accordion({
  className,
  dir = "rtl",
  ...props
}: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      dir={dir}
      className={cn("cn-accordion flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("cn-accordion-item", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "cn-accordion-trigger group/accordion-trigger relative flex w-full flex-1 items-start gap-3 border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className
        )}
        {...props}
      >
        {/* Icon first so RTL keeps the chevron on the inline-start (right). */}
        <span
          className="relative size-4 shrink-0"
          data-slot="accordion-trigger-icons"
          aria-hidden
        >
          <IconPlaceholder
            lucide="ChevronDownIcon"
            tabler="IconChevronDown"
            data-slot="accordion-trigger-icon"
            hugeicons="ArrowDown01Icon"
            phosphor="CaretDownIcon"
            remixicon="RiArrowDownSLine"
            className="cn-accordion-trigger-icon pointer-events-none size-4 shrink-0 group-aria-expanded/accordion-trigger:hidden"
          />
          <IconPlaceholder
            lucide="ChevronUpIcon"
            tabler="IconChevronUp"
            data-slot="accordion-trigger-icon"
            hugeicons="ArrowUp01Icon"
            phosphor="CaretUpIcon"
            remixicon="RiArrowUpSLine"
            className="cn-accordion-trigger-icon pointer-events-none absolute inset-0 size-4 shrink-0 hidden group-aria-expanded/accordion-trigger:block"
          />
        </span>
        <span className="min-w-0 flex-1 text-start">{children}</span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="cn-accordion-content overflow-hidden"
      {...props}
    >
      <div
        className={cn(
          "cn-accordion-content-inner h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
