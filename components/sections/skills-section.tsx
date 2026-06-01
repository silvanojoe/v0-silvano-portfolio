'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Award, 
  BadgeCheck,
  ExternalLink,
  GraduationCap,
  Star
} from 'lucide-react'

const certifications = [
  {
    title: "Google Digital Marketing & E-commerce",
    issuer: "Google",
    type: "Professional Certificate",
    icon: "🎓"
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    type: "Certification",
    icon: "📊"
  },
  {
    title: "Google Ads Certification",
    issuer: "Google",
    type: "Certification",
    icon: "📈"
  },
  {
    title: "SEO Fundamentals",
    issuer: "SEMrush Academy",
    type: "Certification",
    icon: "🔍"
  },
  {
    title: "Meta Blueprint",
    issuer: "Meta",
    type: "Certification",
    icon: "📱"
  }
]

const skillCategories = [
  {
    title: "Paid Media",
    skills: [
      { name: "Google Ads", level: 90 },
      { name: "Meta Ads", level: 88 },
      { name: "Campaign Optimization", level: 85 },
      { name: "ROAS Management", level: 92 }
    ]
  },
  {
    title: "SEO & Content",
    skills: [
      { name: "Technical SEO", level: 88 },
      { name: "Keyword Research", level: 92 },
      { name: "Content Strategy", level: 85 },
      { name: "AI GEO", level: 80 }
    ]
  },
  {
    title: "Analytics & Data",
    skills: [
      { name: "Google Analytics 4", level: 90 },
      { name: "Google Tag Manager", level: 88 },
      { name: "Data Analysis", level: 85 },
      { name: "Attribution Modeling", level: 82 }
    ]
  },
  {
    title: "Email & Automation",
    skills: [
      { name: "Klaviyo", level: 88 },
      { name: "Email Marketing", level: 90 },
      { name: "Marketing Automation", level: 85 },
      { name: "CRM Management", level: 82 }
    ]
  }
]

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-20 lg:py-32 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Certifications & Skills
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Professional Credentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications and continuously developed skills in digital marketing
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                <div className="flex items-center gap-1 text-xs text-primary">
                  <BadgeCheck className="w-3 h-3" />
                  {cert.type}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: 0.5 + catIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
