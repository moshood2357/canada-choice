"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: Parameters<typeof useEmblaCarousel>[0]
  autoplay?: boolean
  delay?: number
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, opts, autoplay = true, delay = 3000, children, ...props }, ref) => {
    const autoplayPlugin = React.useMemo(
      () => (autoplay ? Autoplay({ delay }) : undefined),
      [autoplay, delay]
    )

    const [emblaRef] = useEmblaCarousel(
      { loop: true, ...opts },
      autoplayPlugin ? [autoplayPlugin] : []
    )

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">{children}</div>
        </div>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex -ml-4", className)} {...props} />
))
CarouselContent.displayName = "CarouselContent"

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"
