"use client"

import { useEffect, useState } from "react"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date("2025-12-31T23:59:59").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        clearInterval(timer) // stop countdown when expired
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-background text-foreground py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Time Left to Nominate</h2>
        <div className="flex justify-center space-x-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-card border border-border rounded-lg px-6 py-4 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <p className="text-4xl font-bold text-primary">{value}</p>
              <p className="text-sm text-muted-foreground uppercase">{unit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
