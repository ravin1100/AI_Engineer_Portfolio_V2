'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const educationData = [
  {
    id: 1,
    degree: "AI Engineering Bootcamp",
    institution: "MisogiAI By Masai",
    location: "Bengaluru",
    duration: "Jun 2025 – Present",
    description: "Intensive bootcamp focused on cutting-edge AI technologies and practical applications",
    coursework: [
      "Generative AI & Large Language Models",
      "Machine Learning & Deep Learning",
      "FastAPI & Backend Development",
      "RAG (Retrieval-Augmented Generation)",
      "AI Agents & MCP Server Development",
      "Prompt Engineering & Fine-tuning"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Technology",
    institution: "Poornima University",
    location: "Jaipur",
    duration: "Jun 2016 – Jul 2020",
    description: "Mechanical Engineering with focus on analytical thinking and problem-solving",
    coursework: [
      "Engineering Mathematics & Physics",
      "Thermodynamics & Heat Transfer",
      "Manufacturing Processes",
      "Computer-Aided Design (CAD)",
      "Project Management",
      "Research Methodology"
    ]
  }
]

const certificationsData = [
  {
    id: 1,
    title: "AI Engineering Specialization",
    issuer: "MisogiAI By Masai",
    date: "2025",
    status: "In Progress",
    description: "Comprehensive certification covering modern AI engineering practices"
  },
  {
    id: 2,
    title: "Full-Stack Development",
    issuer: "Self-Directed Learning",
    date: "2024",
    status: "Completed",
    description: "Hands-on experience with modern web technologies and frameworks"
  },
  {
    id: 3,
    title: "Cloud & DevOps Practices",
    issuer: "Professional Experience",
    date: "2024",
    status: "Completed",
    description: "Practical knowledge gained through enterprise project implementations"
  }
]

const contentVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
}

export default function Education() {
  return (
    <section id="education" className="min-h-screen bg-white dark:bg-black flex items-center py-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic background and professional certifications driving continuous learning and growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-sm rounded-lg p-1 mb-8">
              <TabsTrigger 
                value="education" 
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-gray-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm border-0 font-medium transition-all duration-200 text-gray-600 dark:text-gray-400"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Education
              </TabsTrigger>
              <TabsTrigger 
                value="certifications"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-gray-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm border-0 font-medium transition-all duration-200 text-gray-600 dark:text-gray-400"
              >
                <Award className="w-4 h-4 mr-2" />
                Certifications
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="education" key={"education"} className="mt-0">
                <motion.div
                  key="education"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {educationData.map((item, index) => (
                    <motion.div key={item.id} variants={itemVariants}>
                      <Card className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                {item.degree}
                              </CardTitle>
                              <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                                {item.institution}
                              </CardDescription>
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Coursework</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {item.coursework.map((course, courseIndex) => (
                                <motion.div
                                  key={courseIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: index * 0.1 + courseIndex * 0.05 
                                  }}
                                  className="flex items-center space-x-2"
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700 dark:text-gray-300">{course}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="certifications" key="certifications" className="mt-0">
                <motion.div
                  key="certifications"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {certificationsData.map((cert, index) => (
                    <motion.div key={cert.id} variants={itemVariants}>
                      <Card className="h-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {cert.title}
                              </CardTitle>
                              <CardDescription className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                                {cert.issuer}
                              </CardDescription>
                            </div>
                            <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{cert.date}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              cert.status === 'Completed' 
                                ? 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
                                : 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                            }`}>
                              {cert.status}
                            </span>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {cert.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
