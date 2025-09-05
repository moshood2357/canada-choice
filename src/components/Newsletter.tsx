"use client"

export default function Newsletter() {
  return (
    <section className="bg-card text-card-foreground py-16">
      <div className="container mx-auto px-6 text-center max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter and never miss important updates.
        </p>
        <form className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
