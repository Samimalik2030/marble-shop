import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rajput Marble's & Granite - Premium Stone Collections",
  description:
    "Discover premium marble, granite, and natural stone products for luxury interiors and exteriors. Serving Pakistan with excellence since 2005.",
    generator: 'v0.dev'
}

import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}



import './globals.css'