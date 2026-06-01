'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface KPICardProps {
  title: string
  value: string | React.ReactNode
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon?: React.ReactNode
  subtitle?: string
  className?: string
  delay?: number
}

export function KPICard({
  title,
  value,
  change,
  changeType = 'positive',
  icon,
  subtitle,
  className,
  delay = 0
}: KPICardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-card rounded-xl p-6 border border-border dashboard-card",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon && (
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-3xl font-bold text-foreground">{value}</p>
        
        {(change || subtitle) && (
          <div className="flex items-center gap-2">
            {change && (
              <span className={cn(
                "text-sm font-medium px-2 py-0.5 rounded-full",
                changeType === 'positive' && "bg-emerald-100 text-emerald-700",
                changeType === 'negative' && "bg-red-100 text-red-700",
                changeType === 'neutral' && "bg-slate-100 text-slate-700"
              )}>
                {changeType === 'positive' && '↑'} 
                {changeType === 'negative' && '↓'} 
                {change}
              </span>
            )}
            {subtitle && (
              <span className="text-xs text-muted-foreground">{subtitle}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
