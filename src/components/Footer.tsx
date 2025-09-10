'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ravinkumar1',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/ravinkumarjangir',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: 'mailto:ravinkumarjangir@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/ravinkumarjangir',
      icon: Twitter,
      color: 'hover:text-blue-400'
    }
  ]

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand & Description */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Ravin Kumar Jangir
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  AI Engineer passionate about building intelligent systems that solve real-world problems.
                  Specializing in machine learning, LLMs, and full-stack development.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.name}>
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Feel free to reach out for collaborations or just a friendly chat about AI and technology.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-500 dark:text-gray-400 ${social.color} transition-colors duration-200`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.name}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left"
            >
              © {new Date().getFullYear()} Ravin Kumar Jangir. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="group border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700"
              >
                <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-200" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
