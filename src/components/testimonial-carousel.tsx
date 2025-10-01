"use client"

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Working in a new country with new children was overwhelming. I was not sure where to start. The Settlement Support Program provided the personalized services we desperately needed. They helped us find safe, affordable housing and guided us through the complex process of enrolling our children in school. The staff was patient and understanding, and they made us feel like we were not alone in this journey.",
    author: "Settlement Support Program Client",
  },
  {
    id: 2,
    content:
       "Working in a new country with new children was overwhelming. I was not sure where to start. The Settlement Support Program provided the personalized services we desperately needed. They helped us find safe, affordable housing and guided us through the complex process of enrolling our children in school. The staff was patient and understanding, and they made us feel like we were not alone in this journey.",
    author: "Immigrant at Large Canada Client",
  },
  {
    id: 3,
    content:
      "The support I received from Immigrant at Large Canada did not just get me a career; they gave me a sense of purpose and community from day one.",
    author: "Settlement Support Program Client",
  },
  
]

export function TestimonialCarousel() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 text-black">
      <Carousel
        opts={{
         align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000, // slide every 4 seconds
            stopOnInteraction: false, // keeps autoplay running even if user interacts
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col space-y-4">
                    <Quote className="h-8 w-8 text-primary opacity-50" />
                    <blockquote className="text-lg leading-relaxed text-muted-foreground italic">
                      {testimonial.content}
                    </blockquote>
                    <footer className="text-sm font-medium text-foreground">
                      — {testimonial.author}
                    </footer>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
