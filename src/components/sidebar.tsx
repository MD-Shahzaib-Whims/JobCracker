"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const SidebarToggle = ({ className }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className={cn("px-2 text-base", className)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-2">
          <SidebarItems />
        </nav>
      </SheetContent>
    </Sheet>
  )
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Interview Prep</h2>
          <div className="space-y-1">
            <SidebarItems />
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItems() {
  const pathname = usePathname()

  return (
    <>
      <Button asChild variant={pathname === "/" ? "secondary" : "ghost"} className="w-full justify-start">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
          Dashboard
        </Link>
      </Button>
      <Button asChild variant={pathname === "/questions" ? "secondary" : "ghost"} className="w-full justify-start">
        <Link href="/questions">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
          Questions
        </Link>
      </Button>
      <Button asChild variant={pathname === "/scoreboard" ? "secondary" : "ghost"} className="w-full justify-start">
        <Link href="/scoreboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="M18 20V10" />
            <path d="M12 20V4" />
            <path d="M6 20v-6" />
          </svg>
          Scoreboard
        </Link>
      </Button>
    </>
  )
}

export { SidebarToggle }

