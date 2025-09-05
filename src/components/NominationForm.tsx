"use client"

export default function NominationForm() {
  return (
    <section className="bg-card text-card-foreground py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Nominate Someone</h2>
        <form className="space-y-4 bg-background p-6 rounded-xl shadow border border-border">
          <div>
            <label className="block text-sm font-medium mb-1">Nominee Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>Business Excellence</option>
              <option>Innovation</option>
              <option>Community Impact</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Why are you nominating them?</label>
            <textarea
              rows={4}
              placeholder="Write your reason..."
              className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Submit Nomination
          </button>
        </form>
      </div>
    </section>
  )
}
