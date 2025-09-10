'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projectsData = [
  {
    id: 1,
    title: "CounselPro-AI",
    description: "AI-powered system to monitor counseling sessions in real time, evaluating visual standards and conversation quality with instant performance reports for administrators.",
    techStack: ["Python", "FastAPI", "LangChain", "Deepgram AI", "Celery", "Redis", "PostgreSQL"],
    liveDemo: "#",
    github: "#",
    highlights: [
      "95% accurate automated assessments",
      "60% improvement in throughput",
      "40% better query performance"
    ]
  },
  {
    id: 2,
    title: "Duck Teacher",
    description: "AI-powered practice and review tool where learners explain concepts using audio and whiteboard sketches, receiving instant AI feedback from multiple personas.",
    techStack: ["Python", "n8n", "LangChain", "Audio Processing", "NLP", "AI Feedback"],
    liveDemo: "#",
    github: "#",
    highlights: [
      "10x faster gap identification",
      "70% reduction in manual effort",
      "Multi-persona feedback system"
    ]
  },
  {
    id: 3,
    title: "QuickCampus EIMS-ERP",
    description: "Comprehensive ERP platform serving 3,500+ schools and 100,000+ active users with enhanced visitor management and payroll modules.",
    techStack: ["Java", "Spring Boot", "MySQL", "Excel Integration", "REST APIs"],
    liveDemo: "#",
    github: "#",
    highlights: [
      "3,500+ schools served",
      "100,000+ active users",
      "70% reduction in manual entry"
    ]
  },
  {
    id: 4,
    title: "QuickHRMS Solution",
    description: "End-to-end HRMS platform used by 1,000+ employees with optimized database schemas and integrated WhatsApp messaging for automated notifications.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "WhatsApp API", "REST APIs"],
    liveDemo: "#",
    github: "#",
    highlights: [
      "1,000+ employees managed",
      "40% faster query execution",
      "Automated notifications"
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-black flex items-center py-10 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Featured projects showcasing AI engineering, full-stack development, and system architecture expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="h-full"
            >
              <Card className="h-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950/50"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
