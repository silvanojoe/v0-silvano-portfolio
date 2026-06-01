'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Award,
  ArrowRight,
  Download,
  Sparkles
} from 'lucide-react'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)' 
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6"
            >
              <Award className="w-4 h-4 text-primary" />
              <span>Google Certified Professional</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Silvano Awino
              <span className="block text-primary mt-2">Joseph</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl sm:text-2xl text-slate-300 mb-6"
            >
              Digital Marketing & E-Commerce Specialist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-slate-400 text-lg max-w-xl mb-8"
            >
              Driving business growth through data-driven strategies in SEO, Paid Media, 
              Email Marketing, and Conversion Rate Optimization.
            </motion.p>

            {/* Location & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-primary" />
                <span>+971 58 6355941</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#portfolio"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
              <Link
                href="https://www.linkedin.com/in/silvano-a-b596a5a2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <a
                href="/cv/Silvano-Awino-CV.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10"
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-white">4.1x</p>
                <p className="text-sm text-slate-400">ROAS Achieved</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-white">158%</p>
                <p className="text-sm text-slate-400">CVR Improvement</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-white">42%</p>
                <p className="text-sm text-slate-400">Traffic Growth</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-0 -m-8 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-C8F8jonSJn2kgFqCZP6E7Q57C5cTm5.jpg"
                  alt="Silvano Awino Joseph - Digital Marketing Specialist"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white shadow-lg"
              >
                <p className="text-sm font-semibold text-navy">Google Ads</p>
                <p className="text-xs text-muted-foreground">Certified</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-white shadow-lg"
              >
                <p className="text-sm font-semibold text-navy">Meta Ads</p>
                <p className="text-xs text-muted-foreground">Specialist</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-xl bg-primary text-white shadow-lg"
              >
                <p className="text-sm font-semibold">SEO Expert</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
