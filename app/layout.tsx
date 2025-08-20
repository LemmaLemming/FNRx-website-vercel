import type { Metadata } from 'next'
import '../styles/globals.css' // This imports your @font-face rules

export const metadata: Metadata = {
  title: "Codehack FNRx",
  description: "Dismantling barriers, creating pathways",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-sans">
      <body>{children}</body>
    </html>
  )
}