"use client";
import type React from "react"
// import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/ui/sidebar"
import "./globals.css"
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Interview Prep App",
//   description: "Prepare for your next coding interview",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
                  <Sidebar />
                </aside>
                <main className="flex w-full flex-col overflow-hidden">{children}</main>
              </div>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

