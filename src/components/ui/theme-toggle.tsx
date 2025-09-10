'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative h-9 w-9 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : 180,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-4 w-4 text-yellow-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : -180,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-4 w-4 text-blue-500" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
