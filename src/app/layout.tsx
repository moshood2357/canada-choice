import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Load Inter font with multiple weights
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Canadian Choice Award",
  description: "Nominate your favorite Canadian business for the 2026 awards.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className = "dark" suppressHydrationWarning>
      <body  suppressHydrationWarning className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
