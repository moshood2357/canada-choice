"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-background text-foreground py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Celebrate Excellence with the <span className="text-primary">Canadian Choice Award</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Recognizing outstanding businesses and individuals who make a difference.
        </p>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Nominate Now
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <Image src="/globe.svg" alt="Hero Background" width={144} height={200} />
      </div>
    </section>
  )
}
