import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Avoid hydration mismatch: only render interactive bits after mount
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved)
      } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(systemPrefersDark ? 'dark' : 'light')
      }
    } catch (e) {
      // default stays 'light'
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = window.document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme, mounted])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  if (!mounted) {
    // Render a placeholder to avoid mismatch; size matches the real button
    return (
  <div className="w-10 h-10 rounded-md bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700" />
    )
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title="Toggle light / dark"
  className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors duration-300"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="transform transition-transform duration-300 ease-out">
        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </span>
    </button>
  )
}

export default ThemeToggle
