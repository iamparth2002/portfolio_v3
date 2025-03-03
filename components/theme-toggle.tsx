"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // In a real implementation, this would toggle a dark class on the html element
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}

