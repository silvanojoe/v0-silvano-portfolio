'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Trophy, 
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  Zap,
  Users,
  BarChart3,
  RefreshCw
} from 'lucide-react'

const competencies = [
  {
    category: 'Paid Media',
    items: [
      'Meta Ads Campaign Management',
      'Google Ads Management',
      'Campaign Optimization',
      'Media Buying'
    ]
  },
  {
    category: 'SEO & Content',
    items: [
      'Search Engine Optimization (SEO)',
      'Generative Engine Optimization (GEO)',
      'Conversion Rate Optimization (CRO)',
      'Content Strategy'
    ]
  },
  {
    category: 'Analytics & Data',
    items: [
      'Google Analytics 4 (GA4)',
      'Google Tag Manager (GTM)',
      'Attribution Modeling',
      'Performance Reporting'
    ]
  },
  {
    category: 'Automation & CRM',
    items: [
      'Lead Generation Funnel Design',
      'CRM & Marketing Automation',
      'Lifecycle Email Marketing',
      'A/B Testing & Experimentation'
    ]
  }
]

const achievements = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: '4.1x ROAS',
    description: 'Achieved 128% improvement in return on ad spend through strategic campaign optimization'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: '158% CVR Increase',
    description: 'Dramatically improved conversion rates through funnel optimization and targeting refinement'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: '1,250 Leads',
    description: 'Generated qualified leads through strategic lead magnets and nurture sequences'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: '42% Traffic Growth',
    description: 'Increased organic and paid traffic through multi-channel acquisition strategies'
  }
]

export function CompetenciesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="competencies" 
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
            <Trophy className="w-4 h-4" />
            Competencies & Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Marketing Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core competencies and measurable achievements in digital marketing
          </p>
        </motion.div>

        {/* Achievements Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Competencies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {competencies.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4 pb-3 border-b border-border">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Conclusion Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-2xl overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)' 
          }}
        >
          <div className="p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                <RefreshCw className="w-8 h-8" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Embracing Change, Driving Results
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Curiosity and resilience to change are what drive a performance marketer. Changes are inevitable - 
                customer tastes, behavior, preferences, and spending all evolve, and so must marketing strategies. 
                As a Performance Marketer and Digital Marketing Specialist, developing a curiosity and resilience 
                mindset helps in understanding customer pain points at each funnel stage, implementing and optimizing 
                strategies that react to changes and yield positive results.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                  Curiosity-Driven
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  Data-Driven
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  <Target className="w-4 h-4 text-emerald-400" />
                  Results-Oriented
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
