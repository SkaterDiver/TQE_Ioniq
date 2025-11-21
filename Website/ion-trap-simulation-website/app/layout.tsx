import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "HardHaq 2025 - Ion Trap Simulation | Tings Quantum Engineers",
    template: "%s | Tings Quantum Engineers",
  },
  description:
    "A full-stack physics platform simulating both 3D RF Paul Traps and 2D Surface Ion Traps. Designed to analyze and optimize electrode geometry, RF/DC voltages, trap depth, and ion stability for next-generation quantum hardware.",
  keywords: [
    "ion trap",
    "quantum computing",
    "Paul trap",
    "surface ion trap",
    "quantum simulation",
    "quantum physics",
    "electrode optimization",
    "RF trap",
    "quantum hardware",
    "HardHaq 2025",
  ],
  authors: [{ name: "Tings Quantum Engineers" }],
  creator: "Tings Quantum Engineers",
  publisher: "Tings Quantum Engineers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "HardHaq 2025 - Ion Trap Simulation",
    description:
      "A comprehensive study simulating and optimizing 3D RF Paul Traps and 2D Surface Ion Traps for quantum computing applications.",
    siteName: "Ion Trap Simulation",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Ion Trap Simulation - Tings Quantum Engineers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HardHaq 2025 - Ion Trap Simulation",
    description:
      "A comprehensive study simulating and optimizing 3D RF Paul Traps and 2D Surface Ion Traps for quantum computing applications.",
    images: ["/placeholder-logo.png"],
    creator: "@tingsquantum",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
