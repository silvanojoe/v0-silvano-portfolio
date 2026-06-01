'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Search, 
  Mail, 
  Target,
  Share2,
  Users,
  Brain,
  ChevronRight,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Award,
  TrendingUp,
  ArrowUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  title: string
  category: string
  icon: React.ReactNode
  color: string
  situation: string
  task: string
  actions: string[]
  results: { metric: string; value: string; change?: string }[]
  lessons: string[]
  tools: string[]
  skills: string[]
}

const projects: Project[] = [
  {
    id: 'seo',
    title: 'SEO Optimization & Organic Visibility Growth',
    category: 'SEO',
    icon: <Search className="w-5 h-5" />,
    color: 'bg-emerald-500',
    situation: 'NestPet ranked #45-60 for primary keywords like "pet supplies online" and "dog accessories." Monthly organic traffic was 800 visitors with minimal conversion attribution.',
    task: 'Develop and execute a comprehensive SEO strategy to increase organic visibility by 30% and organic traffic by 40% within 6 months.',
    actions: [
      'Conducted keyword research using SEMrush and Ahrefs, identifying 120+ long-tail keywords',
      'Optimized 45 product listings: improved meta descriptions, URL, ALT text, title tags, and added schema markup',
      'Created 24 blog articles targeting informational, transactional, and investigational queries',
      'Built an internal linking strategy connecting 35+ product pages to relevant blog content',
      'Secured 5 high-authority backlinks from guest posting and industry publications',
      'Configured Google Search Console to monitor 150+ target keywords'
    ],
    results: [
      { metric: 'Organic Traffic Growth', value: '+30%', change: 'MoM' },
      { metric: 'Page 1 Rankings', value: '34', change: 'keywords' },
      { metric: 'Organic CVR', value: '+158%', change: '1.2% → 3.1%' },
      { metric: 'Session Duration', value: '+86%', change: '1:42 → 3:15' },
      { metric: 'Organic Revenue', value: '$15,400', change: 'Q1' }
    ],
    lessons: [
      'Focusing on high-intent keywords helps with indexing and increases quality score',
      'Schema markup significantly improves CTR through rich snippets',
      'Content cluster strategy drives topical authority'
    ],
    tools: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Google Analytics 4'],
    skills: ['Keyword Research', 'On-Page SEO', 'Content Strategy', 'Link Building', 'Technical SEO']
  },
  {
    id: 'email',
    title: 'Lifecycle Email Marketing',
    category: 'Email Marketing',
    icon: <Mail className="w-5 h-5" />,
    color: 'bg-purple-500',
    situation: 'NestPet achieved $8,000 revenue in the second month but lacked systematic email marketing. 62% of the email list was inactive; no segmentation strategy existed.',
    task: 'Design and deploy a lifecycle email marketing program to increase customer retention by 10%, repeat purchase rate by 12%, and generate $5,000+ by end of Q1.',
    actions: [
      'Segmented customer database into 6 groups: New Customers, VIP Repeat, At-Risk, Browse-No-Buy, Seasonal Buyers, Cart Abandoners',
      'Created 8 email sequences: Welcome series (45% open rate), Post-Purchase nurture, Re-engagement campaigns',
      'Designed 7 promotional email templates in Canva for seasonal campaigns',
      'Implemented Klaviyo automation: triggered emails on purchase, cart abandonment, browsing behavior',
      'A/B tested 18 email variations: optimal send time identified as Tuesday 10 am (32% vs 18% open rate)'
    ],
    results: [
      { metric: 'Re-engagement CVR', value: '24%', change: 'click to purchase' },
      { metric: 'Customers Reactivated', value: '576', change: 'subscribers' },
      { metric: 'Email Revenue', value: '$4,800', change: 'M2' },
      { metric: 'Repeat Purchase Rate', value: '+12%', change: 'increase' },
      { metric: 'Cart Recovery', value: '245', change: 'carts in Q1' }
    ],
    lessons: [
      'A/B testing works at precise levels of results',
      'Segmentation is key - right persona, right time, right tone',
      'Developing creative reward types enhances engagement'
    ],
    tools: ['Klaviyo', 'Mailchimp', 'Canva', 'Google Analytics 4'],
    skills: ['Email Automation', 'Segmentation', 'A/B Testing', 'Customer Journey Mapping', 'CRM Management']
  },
  {
    id: 'google-ads',
    title: 'Google Ads Campaign Management',
    category: 'Paid Media',
    icon: <Target className="w-5 h-5" />,
    color: 'bg-blue-500',
    situation: 'NestPet\'s Google Ads campaigns spent $4,200/month with 2.1% conversion rate. No audience segmentation; keyword quality score averaged 5/10. Monthly ROI: 1.8x.',
    task: 'Restructure paid advertising strategy to increase sales by 20%, conversion rate by 15%, and achieve 3.2x+ ROAS benchmark by end of Q1.',
    actions: [
      'Audited 240 active keywords; consolidated into 10 high-intent keyword groups with optimized match types',
      'Improved Quality Score from 5/10 → 8.2/10 by refining ad copy, landing pages, and expected CTR',
      'Created 17 new ad variations testing angles, hooks, product benefits, pain points, and seasonal angles',
      'Built 8 custom audiences: product interests, cart abandoners, past visitors, lookalike audiences',
      'Implemented conversion tracking across 9 product categories with ROAS-based bidding',
      'Set up advanced tracking using GTM and GA4 including funnel analysis and attribution modeling'
    ],
    results: [
      { metric: 'Sales Growth', value: '+23%', change: '$3.8K → $16.7K' },
      { metric: 'Conversion Rate', value: '+81%', change: '2.1% → 3.8%' },
      { metric: 'ROAS', value: '4.1x', change: 'from 1.8x' },
      { metric: 'CPA Reduction', value: '-42%', change: '$48 → $28' },
      { metric: 'CTR Improvement', value: '+64%', change: '2.8% → 4.6%' }
    ],
    lessons: [
      'Well-organized, structured, and optimized site increases conversion rate',
      'Right selection of bidding strategy highly impacts ROAS and ROI',
      'Documenting micro KPIs enhances achieving macro objectives'
    ],
    tools: ['Google Ads', 'Google Analytics 4', 'Google Tag Manager', 'Looker Studio'],
    skills: ['PPC Management', 'Bid Strategy', 'Audience Targeting', 'Conversion Tracking', 'A/B Testing']
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    category: 'Social Media',
    icon: <Share2 className="w-5 h-5" />,
    color: 'bg-pink-500',
    situation: 'NestPet relied heavily on organic traffic and Google Ads. Social media advertising was underutilized, resulting in limited audience reach and missed opportunities.',
    task: 'Develop and execute a Meta Ads strategy to increase website traffic by 25%, generate qualified purchases, and achieve minimum ROAS of 3.5x.',
    actions: [
      'Installed Meta Pixel and Conversion API (CAPI) to improve tracking accuracy',
      'Created full-funnel campaign structure: Awareness, Traffic, Conversion, Retargeting campaigns',
      'Developed 12 creative variations: UGC-style videos, product demos, before-and-after content, carousels',
      'Built audience segments: pet owners, online shoppers, lookalike audiences (1%-5%), cart abandoners',
      'Conducted A/B testing on headlines, CTAs, creative formats, and placements',
      'Integrated Meta Ads with Shopify, GA4, and GTM for attribution tracking'
    ],
    results: [
      { metric: 'Traffic Growth', value: '+42%', change: 'from social' },
      { metric: 'Conversion Rate', value: '+94%', change: '1.8% → 3.5%' },
      { metric: 'ROAS Achieved', value: '4.3x', change: 'target: 3.5x' },
      { metric: 'Cost Per Purchase', value: '-38%', change: 'reduction' },
      { metric: 'CTR Improvement', value: '+171%', change: '1.4% → 3.8%' }
    ],
    lessons: [
      'Creative quality impacts performance more than audience targeting alone',
      'Retargeting audiences deliver the highest ROAS',
      'UGC-style content consistently outperforms branded content'
    ],
    tools: ['Meta Ads Manager', 'Meta Pixel', 'Conversion API', 'Shopify', 'Canva'],
    skills: ['Media Buying', 'Audience Segmentation', 'Creative Testing', 'Retargeting', 'Attribution Analysis']
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation & Marketing Automation',
    category: 'Automation',
    icon: <Users className="w-5 h-5" />,
    color: 'bg-orange-500',
    situation: 'NestPet had growing website traffic but lacked a structured lead generation system. Potential customers frequently left without purchasing, resulting in lost revenue.',
    task: 'Build a lead generation funnel to increase qualified leads by 30%, reduce acquisition costs, and improve lead-to-customer conversion rates.',
    actions: [
      'Designed lead magnets: Pet Care Guide, Puppy Nutrition Checklist, New Pet Owner Starter Kit',
      'Created dedicated landing pages optimized for conversions',
      'Developed multi-step lead capture forms with progressive profiling',
      'Implemented CRM automation workflows for lead nurturing',
      'Created automated sequences: Welcome emails, Educational content, Product recommendations',
      'Established lead scoring criteria and connected forms to CRM for pipeline management'
    ],
    results: [
      { metric: 'Qualified Leads', value: '1,250', change: 'Q1 total' },
      { metric: 'Landing Page CVR', value: '28%', change: 'conversion rate' },
      { metric: 'Lead-to-Customer', value: '+18%', change: 'improvement' },
      { metric: 'CAC Reduction', value: '-22%', change: 'cost savings' },
      { metric: 'Time Saved', value: '15hrs', change: 'per week' }
    ],
    lessons: [
      'Lead quality matters more than lead volume',
      'Educational content builds trust faster than promotional content',
      'Automation improves consistency and scalability'
    ],
    tools: ['GoHighLevel', 'Mailchimp', 'Klaviyo', 'Google Analytics 4', 'Google Forms'],
    skills: ['Funnel Design', 'Lead Generation', 'CRM Management', 'Marketing Automation', 'Lead Scoring']
  },
  {
    id: 'ai-geo',
    title: 'AI GEO (Generative Engine Optimization)',
    category: 'AI & Innovation',
    icon: <Brain className="w-5 h-5" />,
    color: 'bg-cyan-500',
    situation: 'The emergence of AI-powered search engines changed how users discover information. NestPet\'s content was optimized for traditional SEO but lacked visibility in AI-generated responses.',
    task: 'Develop an AI GEO strategy to increase visibility in AI-generated search results, improve topical authority, and future-proof organic acquisition.',
    actions: [
      'Conducted GEO audits to identify content gaps for AI search visibility',
      'Re-structured content using Q&A frameworks, entity-based optimization, semantic keyword clusters',
      'Developed comprehensive topic clusters around pet nutrition, wellness, training, breed care',
      'Enhanced E-E-A-T signals through expert citations, data-backed content, industry references',
      'Optimized content for AI Overviews, ChatGPT retrieval, Gemini search, Perplexity results',
      'Implemented schema markup: FAQ Schema, Product Schema, Article Schema'
    ],
    results: [
      { metric: 'AI Referral Traffic', value: '+35%', change: 'increase' },
      { metric: 'Organic Impressions', value: '+28%', change: 'growth' },
      { metric: 'Content Engagement', value: '+22%', change: 'improvement' },
      { metric: 'Session Duration', value: '+19%', change: 'increase' },
      { metric: 'AI Features', value: 'Multiple', change: 'appearances' }
    ],
    lessons: [
      'AI search prioritizes topical authority over keyword density',
      'Structured data significantly improves AI discoverability',
      'Content depth and credibility are becoming stronger ranking factors'
    ],
    tools: ['ChatGPT', 'Gemini', 'Perplexity', 'SEMrush', 'Ahrefs', 'Schema Validator'],
    skills: ['AI GEO Strategy', 'Entity SEO', 'Topic Clustering', 'Structured Data', 'Semantic SEO']
  }
]

export function PortfolioSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<string>('seo')

  const currentProject = projects.find(p => p.id === selectedProject) || projects[0]

  return (
    <section 
      id="portfolio" 
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
            <Award className="w-4 h-4" />
            Project Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Campaign Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed analysis of digital marketing campaigns using the STAR methodology
          </p>
        </motion.div>

        {/* Project Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                selectedProject === project.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              {project.icon}
              <span className="hidden sm:inline">{project.category}</span>
            </button>
          ))}
        </motion.div>

        {/* Project Detail */}
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl border border-border overflow-hidden"
        >
          {/* Project Header */}
          <div className={cn("p-6 lg:p-8", currentProject.color)}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/20 text-white">
                {currentProject.icon}
              </div>
              <div className="flex-1">
                <span className="text-white/80 text-sm font-medium">{currentProject.category}</span>
                <h3 className="text-xl lg:text-2xl font-bold text-white mt-1">
                  {currentProject.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-8 space-y-8">
            {/* STAR Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Situation */}
              <div className="p-5 rounded-xl bg-slate-50 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">S</div>
                  <h4 className="font-semibold text-foreground">Situation</h4>
                </div>
                <p className="text-sm text-muted-foreground">{currentProject.situation}</p>
              </div>

              {/* Task */}
              <div className="p-5 rounded-xl bg-slate-50 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">T</div>
                  <h4 className="font-semibold text-foreground">Task</h4>
                </div>
                <p className="text-sm text-muted-foreground">{currentProject.task}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 rounded-xl bg-slate-50 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">A</div>
                <h4 className="font-semibold text-foreground">Actions</h4>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {currentProject.actions.map((action, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">R</div>
                <h4 className="font-semibold text-foreground">Results</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {currentProject.results.map((result, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-white border border-border">
                    <p className="text-2xl font-bold text-primary">{result.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{result.metric}</p>
                    {result.change && (
                      <p className="text-xs text-emerald-600 mt-1 flex items-center justify-center gap-1">
                        <ArrowUp className="w-3 h-3" />
                        {result.change}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons, Tools, Skills */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Lessons Learned */}
              <div className="p-5 rounded-xl bg-slate-50 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <h4 className="font-semibold text-foreground">Lessons Learned</h4>
                </div>
                <ul className="space-y-2">
                  {currentProject.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div className="p-5 rounded-xl bg-slate-50 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold text-foreground">Tools Used</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Acquired */}
              <div className="p-5 rounded-xl bg-slate-50 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                  <h4 className="font-semibold text-foreground">Skills Acquired</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentProject.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
