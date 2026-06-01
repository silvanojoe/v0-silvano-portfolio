'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  Search,
  BarChart3,
  ShoppingCart,
  Brain
} from 'lucide-react'

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "SEO & GEO AI",
      description: "Advanced organic visibility optimization"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Paid Media",
      description: "Google Ads & Meta Ads management"
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "E-Commerce",
      description: "Conversion rate optimization"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Analytics",
      description: "Data-driven decision making"
    }
  ]

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Transforming Data Into
              <span className="text-primary block mt-2">Growth Strategies</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I am a Digital Marketing Specialist with Professional Certificates in Digital Marketing 
                and E-commerce, focused on helping brands improve performance through data-driven strategies.
              </p>
              <p>
                With a strong foundation in SEO, GEO AI, paid media, and conversion rate optimization, 
                I specialize in scaling e-commerce growth through optimized funnels, improved product 
                listings, and strategic user journey analysis.
              </p>
              <p>
                My expertise spans lifecycle email marketing with Klaviyo and Mailchimp, comprehensive 
                analytics using GA4, GTM, and Search Console, and platform proficiency in Shopify and 
                WooCommerce.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border"
            >
              <div>
                <p className="text-3xl font-bold text-primary">6+</p>
                <p className="text-sm text-muted-foreground">Campaign Strategies</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Marketing Tools</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="col-span-2 p-6 rounded-2xl bg-navy text-white"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-medium mb-2">
                    &ldquo;Curiosity and resilience to change are what drive a performance marketer.&rdquo;
                  </p>
                  <p className="text-white/70 text-sm">
                    Developing a curiosity and resilience mindset helps in understanding customer pain points 
                    and implementing strategies that yield positive results.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
