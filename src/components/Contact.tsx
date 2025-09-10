'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, ExternalLink, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface ContactInfo {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'ravinjangir.rj1100@gmail.com',
    href: 'mailto:ravinjangir.rj1100@gmail.com'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 8503008796',
    href: 'tel:+918503008796'
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ravinjangir',
    href: 'https://linkedin.com/in/ravinjangir'
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/ravinjangir',
    href: 'https://github.com/ravinjangir'
  },
  {
    icon: <ExternalLink className="w-5 h-5" />,
    label: 'Portfolio',
    value: 'ravinjangir.dev',
    href: 'https://ravinjangir.dev'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Mock submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    setShowSuccess(true)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 }
    }
  }

  return (
    <section id="contact" className="py-10 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Let's discuss opportunities, collaborate on projects, or just connect. 
              I'm always open to interesting conversations and new challenges.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
                  >
                    <div className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.label}
                      </div>
                      <div className="text-gray-900 dark:text-white font-medium">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={formVariants}
              className="relative"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how we can work together..."
                    rows={5}
                    required
                    className="w-full resize-none border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-0 left-0 right-0 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6"
                >
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                      <div className="w-2 h-1 bg-white rotate-45 transform origin-left" />
                      <div className="w-1 h-2 bg-white -ml-0.5" />
                    </div>
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-300 mt-1">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
