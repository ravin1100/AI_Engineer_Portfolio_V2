'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const experienceData = [
  {
    id: 1,
    title: "AI Engineering Bootcamp",
    company: "MisogiAI By Masai",
    location: "Bengaluru",
    duration: "Jun 2025 – Present",
    type: "Education",
    contributions: [
      "Coursework: Gen-AI, Machine Learning, FastAPI, RAG, AI Agents",
      "MCP Server development and Prompt Engineering",
      "Building end-to-end AI applications with modern frameworks"
    ]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Quicktouch Technologies Ltd.",
    location: "Remote",
    duration: "Jan 2024 – Jul 2025",
    type: "Experience",
    contributions: [
      "Enhanced core modules for QuickCampus (EIMS-ERP) serving 3,500+ schools and 100,000+ active users",
      "Built robust Excel import workflows, boosting data accuracy and reducing manual entry by 70%",
      "Architected optimized database schemas achieving up to 40% faster query execution",
      "Delivered key HRMS features including employee hierarchy and attendance tracking",
      "Integrated external APIs including WhatsApp messaging for automated notifications"
    ]
  },
  {
    id: 3,
    title: "Bachelor of Technology",
    company: "Poornima University",
    location: "Jaipur",
    duration: "Jun 2016 – Jul 2020",
    type: "Education",
    contributions: [
      "Mechanical Engineering degree with focus on problem-solving",
      "Foundation in engineering principles and analytical thinking",
      "Developed technical aptitude for systematic approach to complex problems"
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: (direction: string) => ({
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
    y: 30
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
}

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-white dark:bg-black flex items-center py-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional journey in software engineering, AI development, and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-gray-200 via-blue-500 to-gray-200 dark:from-gray-800 dark:via-blue-500 dark:to-gray-800"></div>

          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0
            const direction = isLeft ? 'left' : 'right'
            
            return (
              <motion.div
                key={item.id}
                custom={direction}
                variants={itemVariants}
                className={`relative flex items-center mb-16 ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-white dark:bg-black border-4 border-blue-500 rounded-full shadow-lg"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                            {item.company}
                          </CardDescription>
                        </div>
                        <div className={`flex-shrink-0 p-2 rounded-lg ${
                          item.type === 'Experience' 
                            ? 'bg-blue-50 dark:bg-blue-950/30' 
                            : 'bg-gray-50 dark:bg-gray-950/30'
                        }`}>
                          <Briefcase className={`w-5 h-5 ${
                            item.type === 'Experience' 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : 'text-gray-600 dark:text-gray-400'
                          }`} />
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{item.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <ul className="space-y-3">
                        {item.contributions.map((contribution, contribIndex) => (
                          <motion.li
                            key={contribIndex}
                            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.3 + contribIndex * 0.1 
                            }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              {contribution}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-full flex items-center justify-center shadow-sm">
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
