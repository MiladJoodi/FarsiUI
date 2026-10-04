"use client"

import * as React from "react"
import { DirectionProvider } from "@base-ui/react/direction-provider"
import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "cn"

function useCssDirection(hostRef: React.RefObject<HTMLElement | null>) {
  const [direction, setDirection] = React.useState<"ltr" | "rtl">("rtl")

  React.useLayoutEffect(() => {
    const host = hostRef.current
    if (!host) {
      return
    }

    const sync = () => {
      setDirection(getComputedStyle(host).direction === "rtl" ? "rtl" : "ltr")
    }

    sync()

    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    })

    return () => observer.disconnect()
  }, [hostRef])

  return direction
}

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  const hostRef = React.useRef<HTMLDivElement>(null)
  const direction = useCssDirection(hostRef)
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <div ref={hostRef} className="contents">
      <DirectionProvider direction={direction}>
        <SliderPrimitive.Root
          className={cn("data-horizontal:w-full data-vertical:h-full", className)}
          data-slot="slider"
          defaultValue={defaultValue}
          value={value}
          min={min}
          max={max}
          thumbAlignment="edge"
          {...props}
        >
          <SliderPrimitive.Control className="cn-slider relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col">
            <SliderPrimitive.Track
              data-slot="slider-track"
              className="cn-slider-track relative grow overflow-hidden select-none"
            >
              <SliderPrimitive.Indicator
                data-slot="slider-range"
                className="cn-slider-range select-none data-horizontal:h-full data-vertical:w-full"
              />
            </SliderPrimitive.Track>
            {Array.from({ length: _values.length }, (_, index) => (
              <SliderPrimitive.Thumb
                data-slot="slider-thumb"
                key={index}
                className="cn-slider-thumb block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
              />
            ))}
          </SliderPrimitive.Control>
        </SliderPrimitive.Root>
      </DirectionProvider>
    </div>
  )
}

export { Slider }
