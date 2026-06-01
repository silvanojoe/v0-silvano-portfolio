'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'
import { 
  BarChart3, 
  TrendingUp, 
  Users,
  DollarSign,
  Target,
  ShoppingCart,
  MousePointerClick,
  Eye,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import { AnimatedCounter } from '@/components/animated-counter'
import { KPICard } from '@/components/kpi-card'

// Simulated dashboard data based on project results
const trafficData = [
  { month: 'Jan', organic: 800, paid: 1200, social: 400, email: 300 },
  { month: 'Feb', organic: 920, paid: 1450, social: 580, email: 420 },
  { month: 'Mar', organic: 1040, paid: 1680, social: 820, email: 540 },
  { month: 'Apr', organic: 1180, paid: 1920, social: 1100, email: 680 },
  { month: 'May', organic: 1350, paid: 2200, social: 1420, email: 850 },
  { month: 'Jun', organic: 1560, paid: 2480, social: 1780, email: 1040 },
]

const roasData = [
  { month: 'Jan', google: 1.8, meta: 2.1, overall: 1.9 },
  { month: 'Feb', google: 2.2, meta: 2.6, overall: 2.4 },
  { month: 'Mar', google: 2.8, meta: 3.2, overall: 3.0 },
  { month: 'Apr', google: 3.4, meta: 3.8, overall: 3.6 },
  { month: 'May', google: 3.8, meta: 4.1, overall: 3.9 },
  { month: 'Jun', google: 4.1, meta: 4.3, overall: 4.2 },
]

const conversionFunnel = [
  { name: 'Impressions', value: 125000 },
  { name: 'Clicks', value: 5625 },
  { name: 'Add to Cart', value: 1125 },
  { name: 'Checkout', value: 675 },
  { name: 'Purchase', value: 450 },
]

const channelDistribution = [
  { name: 'Google Ads', value: 35, color: '#2563EB' },
  { name: 'Meta Ads', value: 28, color: '#EC4899' },
  { name: 'Organic SEO', value: 22, color: '#10B981' },
  { name: 'Email', value: 15, color: '#8B5CF6' },
]

const keywordRankings = [
  { keyword: 'pet supplies online', position: 4, change: +41, volume: 12000 },
  { keyword: 'dog accessories', position: 6, change: +39, volume: 8500 },
  { keyword: 'pet food delivery', position: 3, change: +52, volume: 6200 },
  { keyword: 'eco-friendly pet toys', position: 2, change: +48, volume: 4800 },
  { keyword: 'breed-specific supplies', position: 5, change: +35, volume: 3200 },
]

const emailMetrics = [
  { campaign: 'Welcome Series', sent: 2400, opened: 1080, clicked: 324, converted: 89 },
  { campaign: 'Cart Abandonment', sent: 1850, opened: 925, clicked: 370, converted: 145 },
  { campaign: 'Re-engagement', sent: 2400, opened: 768, clicked: 184, converted: 58 },
  { campaign: 'Promotional', sent: 3200, opened: 1024, clicked: 288, converted: 72 },
]

const leadPipelineData = [
  { stage: 'New Leads', count: 450, value: 45000 },
  { stage: 'Qualified', count: 320, value: 38400 },
  { stage: 'Engaged', count: 180, value: 25200 },
  { stage: 'Opportunity', count: 95, value: 19000 },
  { stage: 'Customer', count: 68, value: 15640 },
]

export function DashboardSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="dashboard" 
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
            <BarChart3 className="w-4 h-4" />
            Performance Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Results & Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time marketing performance metrics and KPIs from campaign execution
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPICard
            title="Total Revenue"
            value={<AnimatedCounter end={36900} prefix="$" suffix="" />}
            change="+23%"
            changeType="positive"
            icon={<DollarSign className="w-5 h-5" />}
            subtitle="Q1 2024"
            delay={0.1}
          />
          <KPICard
            title="ROAS"
            value={<AnimatedCounter end={4.1} decimals={1} suffix="x" />}
            change="+128%"
            changeType="positive"
            icon={<TrendingUp className="w-5 h-5" />}
            subtitle="from 1.8x"
            delay={0.2}
          />
          <KPICard
            title="Conversion Rate"
            value={<AnimatedCounter end={3.8} decimals={1} suffix="%" />}
            change="+81%"
            changeType="positive"
            icon={<Target className="w-5 h-5" />}
            subtitle="from 2.1%"
            delay={0.3}
          />
          <KPICard
            title="Qualified Leads"
            value={<AnimatedCounter end={1250} />}
            change="+30%"
            changeType="positive"
            icon={<Users className="w-5 h-5" />}
            subtitle="Q1 total"
            delay={0.4}
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Traffic Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 bg-card rounded-xl border border-border p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Traffic Growth</h3>
                <p className="text-sm text-muted-foreground">Multi-channel acquisition</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-primary" /> Organic</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-500" /> Paid</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-pink-500" /> Social</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-purple-500" /> Email</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPaid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94A3B8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94A3B8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }} 
                />
                <Area type="monotone" dataKey="organic" stackId="1" stroke="#2563EB" fill="url(#colorOrganic)" />
                <Area type="monotone" dataKey="paid" stackId="1" stroke="#10B981" fill="url(#colorPaid)" />
                <Area type="monotone" dataKey="social" stackId="1" stroke="#EC4899" fill="#EC4899" fillOpacity={0.2} />
                <Area type="monotone" dataKey="email" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Channel Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="font-semibold text-foreground mb-2">Channel Distribution</h3>
            <p className="text-sm text-muted-foreground mb-4">Revenue by source</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={channelDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {channelDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {channelDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-xs">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="font-medium text-foreground ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* ROAS Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">ROAS Performance</h3>
                <p className="text-sm text-muted-foreground">Return on ad spend trend</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                4.1x Current
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={roasData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94A3B8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94A3B8" domain={[0, 5]} />
                <Tooltip 
                  formatter={(value: number) => `${value}x`}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Line type="monotone" dataKey="google" stroke="#2563EB" strokeWidth={2} dot={{ fill: '#2563EB' }} name="Google Ads" />
                <Line type="monotone" dataKey="meta" stroke="#EC4899" strokeWidth={2} dot={{ fill: '#EC4899' }} name="Meta Ads" />
                <Line type="monotone" dataKey="overall" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981' }} name="Overall" />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Conversion Funnel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="font-semibold text-foreground mb-2">Conversion Funnel</h3>
            <p className="text-sm text-muted-foreground mb-6">Customer journey stages</p>
            <div className="space-y-4">
              {conversionFunnel.map((stage, index) => {
                const percentage = index === 0 ? 100 : (stage.value / conversionFunnel[0].value) * 100
                const conversionRate = index > 0 ? ((stage.value / conversionFunnel[index - 1].value) * 100).toFixed(1) : null
                return (
                  <div key={stage.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{stage.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{stage.value.toLocaleString()}</span>
                        {conversionRate && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {conversionRate}%
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Third Row - SEO & Email */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Keyword Rankings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="font-semibold text-foreground mb-2">SEO Keyword Rankings</h3>
            <p className="text-sm text-muted-foreground mb-4">Top performing keywords</p>
            <div className="space-y-3">
              {keywordRankings.map((kw, index) => (
                <div key={kw.keyword} className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 border border-border">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    #{kw.position}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{kw.keyword}</p>
                    <p className="text-xs text-muted-foreground">{kw.volume.toLocaleString()} monthly searches</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                    <ArrowUp className="w-4 h-4" />
                    +{kw.change}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Email Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="font-semibold text-foreground mb-2">Email Campaign Performance</h3>
            <p className="text-sm text-muted-foreground mb-4">Lifecycle marketing metrics</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-medium text-muted-foreground">Campaign</th>
                    <th className="text-right py-2 font-medium text-muted-foreground">Open Rate</th>
                    <th className="text-right py-2 font-medium text-muted-foreground">CTR</th>
                    <th className="text-right py-2 font-medium text-muted-foreground">Conv.</th>
                  </tr>
                </thead>
                <tbody>
                  {emailMetrics.map((metric) => {
                    const openRate = ((metric.opened / metric.sent) * 100).toFixed(1)
                    const ctr = ((metric.clicked / metric.opened) * 100).toFixed(1)
                    const convRate = ((metric.converted / metric.clicked) * 100).toFixed(1)
                    return (
                      <tr key={metric.campaign} className="border-b border-border last:border-0">
                        <td className="py-3 font-medium text-foreground">{metric.campaign}</td>
                        <td className="py-3 text-right text-muted-foreground">{openRate}%</td>
                        <td className="py-3 text-right text-muted-foreground">{ctr}%</td>
                        <td className="py-3 text-right">
                          <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                            {convRate}%
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Lead Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 bg-card rounded-xl border border-border p-6"
        >
          <h3 className="font-semibold text-foreground mb-2">Lead Generation Pipeline</h3>
          <p className="text-sm text-muted-foreground mb-6">Lead-to-customer journey</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={leadPipelineData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis type="number" tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <YAxis type="category" dataKey="stage" tick={{ fontSize: 12 }} stroke="#94A3B8" width={100} />
              <Tooltip 
                formatter={(value: number, name: string) => [value.toLocaleString(), name === 'count' ? 'Leads' : 'Value']}
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="count" fill="#2563EB" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  )
}
