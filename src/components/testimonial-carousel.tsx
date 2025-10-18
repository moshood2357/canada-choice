"use client"

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Arriving in a new country with two children was overwhelming. We didn't know where to start. The 'Settlement Support Program' provided the personalized services we desperately needed. They helped us find safe, affordable housing and guided us through the rental application process. The team also assisted us with enrolling our kids in school and navigating the provincial healthcare plan. Immigrant at Large Canada didn't just give us resources; they gave us a sense of stability and community from day one.",
    author: "The Garcia family",
  },
  {
    id: 2,
    content:
      "As an engineer, I struggled for months to have my international credentials recognized. I felt stuck. The 'Career & Entrepreneurship Program' was a game-changer. The guidance on credential assessment was invaluable , and the one-on-one mentorship with a professional in my field gave me the confidence and specific job search strategies I needed. The workshops on Canadian-style resume writing and workplace culture were incredibly practical. Thanks to their support, I am now working in my field and can finally build my future in Canada.",
    author: "Fatima - Program Participant",
  },
  // {
  //   id: 3,
  //   content:
  //     "The support I received from Immigrant at Large Canada did not just get me a career; they gave me a sense of purpose and community from day one.",
  //   author: "Settlement Support Program Client",
  // },
];

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
