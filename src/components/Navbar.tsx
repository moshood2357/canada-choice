"use client"

import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-background border-b border-border shadow-sm">
      <div className="flex items-center space-x-2">
        <Image src="/globe.svg" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl">Canadian Choice Award</span>
      </div>
      <ul className="hidden md:flex space-x-6 font-medium text-muted-foreground">
        <li><a href="#">Home</a></li>
        <li><a href="#">Our Process</a></li>
        <li><a href="#">Advantages</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold hover:bg-primary/90">
        Nominate Now
      </button>
    </nav>
  )
}
