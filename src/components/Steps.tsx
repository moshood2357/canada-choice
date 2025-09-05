"use client"

const steps = [
  { title: "Submit Nomination", desc: "Enter the details of the nominee." },
  { title: "Review Process", desc: "Our panel carefully evaluates submissions." },
  { title: "Winners Announced", desc: "Celebrate the excellence of your choice!" },
]

export default function Steps() {
  return (
    <section className="bg-background text-foreground py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 border border-border rounded-lg bg-card shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
