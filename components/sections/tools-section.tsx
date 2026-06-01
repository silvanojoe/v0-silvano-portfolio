'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Wrench, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Tool {
  name: string
  category: string
  description: string
  icon: string
  color: string
}

const tools: Tool[] = [
  // Advertising Platforms
  { name: 'Google Ads', category: 'Advertising', description: 'Search, Display & Video campaigns', icon: '🔵', color: 'bg-blue-500' },
  { name: 'Meta Ads Manager', category: 'Advertising', description: 'Facebook & Instagram ads', icon: '📘', color: 'bg-blue-600' },
  
  // Analytics & Tracking
  { name: 'Google Analytics 4', category: 'Analytics', description: 'Web analytics & reporting', icon: '📊', color: 'bg-orange-500' },
  { name: 'Google Tag Manager', category: 'Analytics', description: 'Tag management & tracking', icon: '🏷️', color: 'bg-blue-400' },
  { name: 'Google Search Console', category: 'Analytics', description: 'Search performance data', icon: '🔍', color: 'bg-red-500' },
  { name: 'Looker Studio', category: 'Analytics', description: 'Data visualization', icon: '📈', color: 'bg-green-500' },
  
  // SEO Tools
  { name: 'SEMrush', category: 'SEO', description: 'Keyword & competitor research', icon: '🔎', color: 'bg-orange-600' },
  { name: 'Ahrefs', category: 'SEO', description: 'Backlink analysis & SEO', icon: '🔗', color: 'bg-blue-700' },
  
  // Email & CRM
  { name: 'Klaviyo', category: 'Email', description: 'Email marketing automation', icon: '✉️', color: 'bg-green-600' },
  { name: 'Mailchimp', category: 'Email', description: 'Email campaigns & lists', icon: '🐵', color: 'bg-yellow-500' },
  { name: 'GoHighLevel', category: 'CRM', description: 'CRM & marketing automation', icon: '🚀', color: 'bg-cyan-500' },
  
  // E-commerce
  { name: 'Shopify', category: 'E-commerce', description: 'E-commerce platform', icon: '🛒', color: 'bg-green-500' },
  { name: 'WooCommerce', category: 'E-commerce', description: 'WordPress e-commerce', icon: '🏪', color: 'bg-purple-600' },
  
  // AI & Creative
  { name: 'ChatGPT', category: 'AI', description: 'AI content & research', icon: '🤖', color: 'bg-teal-500' },
  { name: 'Gemini', category: 'AI', description: 'Google AI assistant', icon: '✨', color: 'bg-blue-500' },
  { name: 'Perplexity', category: 'AI', description: 'AI search & research', icon: '🔮', color: 'bg-indigo-500' },
  { name: 'Canva', category: 'Creative', description: 'Design & visuals', icon: '🎨', color: 'bg-cyan-400' },
]

const categories = ['All', 'Advertising', 'Analytics', 'SEO', 'Email', 'CRM', 'E-commerce', 'AI', 'Creative']

export function ToolsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="tools" 
      ref={ref}
      className="py-20 lg:py-32 bg-background"
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
            <Wrench className="w-4 h-4" />
            Tools & Technology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Marketing Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading tools for campaign management, analytics, and optimization
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <span
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{tool.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground truncate">{tool.name}</h3>
                  </div>
                  <p className="text-xs text-primary font-medium mb-1">{tool.category}</p>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Platform Proficiency
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Google Ads Mockup */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-blue-600 p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-white text-lg">G</div>
                <span className="text-white font-semibold">Google Ads</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Impressions</span>
                  <span className="font-semibold">125.4K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Clicks</span>
                  <span className="font-semibold">5,625</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CTR</span>
                  <span className="font-semibold text-emerald-600">4.49%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Conv. Rate</span>
                  <span className="font-semibold text-emerald-600">3.8%</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-sm font-medium">ROAS</span>
                  <span className="font-bold text-primary text-lg">4.1x</span>
                </div>
              </div>
            </div>

            {/* Meta Ads Mockup */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-pink-500 p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-white text-lg">f</div>
                <span className="text-white font-semibold">Meta Ads Manager</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Reach</span>
                  <span className="font-semibold">89.2K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Link Clicks</span>
                  <span className="font-semibold">3,389</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CTR</span>
                  <span className="font-semibold text-emerald-600">3.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Purchases</span>
                  <span className="font-semibold text-emerald-600">119</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-sm font-medium">ROAS</span>
                  <span className="font-bold text-primary text-lg">4.3x</span>
                </div>
              </div>
            </div>

            {/* GA4 Mockup */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-orange-500 p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-white text-lg">📊</div>
                <span className="text-white font-semibold">Google Analytics 4</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Users</span>
                  <span className="font-semibold">12.8K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sessions</span>
                  <span className="font-semibold">18.4K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg. Session</span>
                  <span className="font-semibold text-emerald-600">3:15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Bounce Rate</span>
                  <span className="font-semibold text-emerald-600">38.2%</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-sm font-medium">Conv. Rate</span>
                  <span className="font-bold text-primary text-lg">3.8%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
