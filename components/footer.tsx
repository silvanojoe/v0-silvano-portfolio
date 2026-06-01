'use client'

import Link from 'next/link'
import { 
  BarChart3, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Heart
} from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#tools', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary text-white">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">Silvano Awino</p>
                <p className="text-xs text-slate-400">Performance Marketing</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Data-driven Digital Marketing Specialist focused on delivering measurable 
              results through SEO, Paid Media, and Marketing Automation.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com/in/silvano-awino-b596a5a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:silvanoawino@yahoo.com"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Expertise</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>SEO Optimization</li>
              <li>Google Ads Management</li>
              <li>Meta Ads Campaigns</li>
              <li>Email Marketing</li>
              <li>Marketing Automation</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:silvanoawino@yahoo.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  silvanoawino@yahoo.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+971586355941"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +971 58 6355941
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Silvano Awino Joseph. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> for Marketing Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
