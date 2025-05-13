"use client"

import { useState } from "react"
import { Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    // In a real implementation, you would use next-themes to toggle the theme
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
      <Moon className="h-5 w-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
