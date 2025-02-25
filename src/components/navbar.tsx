"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Moon, Sun, Search } from "lucide-react"
import { SidebarToggle } from "./sidebar"

export function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <SidebarToggle />
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Interview Prep</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/questions" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Questions
            </Link>
            <Link href="/scoreboard" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Scoreboard
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search questions..." className="pl-8" />
              </div>
            </form>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
          <nav className="flex items-center">
            <Link href="/auth/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

