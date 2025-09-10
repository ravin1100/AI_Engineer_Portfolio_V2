'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const downloadResume = () => {
    // Create a link to download the resume from the assets folder
    const link = document.createElement('a')
    link.href = '/assets/Ravin_Kumar_Jangir_Resume.pdf'
    link.download = 'Ravin_Kumar_Jangir_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section 
      id="home" 
      className="py-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black"
    >
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Profile Picture
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl"
            >
              <img
                src="/assets/profile_picture.png"
                alt="Ravin Kumar Jangir"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div> */}
            {/* Subtle glow effect */}
            {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </div>
        </motion.div> */}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight"
        >
          Ravin Kumar
          <br />
          <span className="text-blue-600 dark:text-blue-400">Jangir</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-10"
        >
          <span className="inline-block px-6 py-3 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-full text-lg md:text-xl font-medium border border-blue-200 dark:border-blue-800">
            AI Engineer
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Building AI-powered systems, intelligent agents, and scalable solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={downloadResume}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-10 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white px-10 py-4 text-lg font-medium rounded-lg transition-all duration-300 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >

        </motion.div>
      </motion.div>

      {/* Subtle decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.02, scale: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  )
}
