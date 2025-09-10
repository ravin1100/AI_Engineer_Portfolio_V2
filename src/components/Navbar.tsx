'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { cn } from '@/lib/utils'
import { useActiveSection } from '@/hooks/useActiveSection'

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    const navbarHeight = 64 

    const elementTop = element.getBoundingClientRect().top + window.scrollY
    const offsetTop = elementTop - navbarHeight

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }
}


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              onClick={() => scrollToSection('#home')}
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ravin Kumar
            </motion.button>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-4"
          >
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800 transition-colors relative px-3 py-2',
                      activeSection === item.href.slice(1) && 'text-gray-900 dark:text-white'
                    )}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>
            <ThemeToggle />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="md:hidden flex items-center space-x-2"
          >
            <ThemeToggle />
            <MobileMenu navItems={navItems} scrollToSection={scrollToSection} />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

function MobileMenu({ 
  navItems, 
  scrollToSection 
}: { 
  navItems: NavItem[]
  scrollToSection: (href: string) => void 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800"
      >
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.div>
      </Button>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={
          isOpen
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.95, y: -10 }
        }
        transition={{ duration: 0.2 }}
        className={cn(
          'absolute right-0 top-full mt-2 w-48 bg-white dark:bg-black rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              scrollToSection(item.href)
              setIsOpen(false)
            }}
            className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {item.name}
          </button>
        ))}
      </motion.div>
    </div>
  )
}
