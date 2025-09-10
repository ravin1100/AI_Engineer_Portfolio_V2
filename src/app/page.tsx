'use client'

import { motion } from 'framer-motion'
import { User, Mail } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <section id="about" className="min-h-screen  bg-white dark:bg-black flex items-center py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate AI Engineer building intelligent systems that solve real-world problems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-24 items-center"
          >
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end lg:pr-8 ">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-12 flex justify-center"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl"
                    >
                      <img
                        src="/assets/profile_picture.png"
                        alt="Ravin Kumar Jangir - AI Engineer"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </motion.div>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-8 lg:pl-8 col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-sm border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Ravin Kumar Jangir</span>, 
                        an AI Engineer with a passion for creating intelligent systems that make a meaningful impact. 
                        With expertise in machine learning, natural language processing, and full-stack development, 
                        I bridge the gap between cutting-edge AI research and practical applications.
                      </p>
                      
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Currently, I'm focused on building AI-powered solutions that enhance human capabilities, 
                        from intelligent counseling systems to educational tools. I believe in the transformative 
                        power of AI when applied thoughtfully and ethically.
                      </p>

                      <div className="flex flex-wrap gap-3 pt-4">
                        <span className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                          Machine Learning
                        </span>
                        <span className="px-4 py-2 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
                          NLP & Computer Vision
                        </span>
                        <span className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                          Full-Stack Development
                        </span>
                        <span className="px-4 py-2 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
                          AI System Architecture
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}
