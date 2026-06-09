'use client'

import { motion, useInView } from 'framer-motion'
import { type FormEvent, useRef, useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { createContact } from '@/lib/supabase'

type ContactFormValues = {
  name: string
  email: string
  phone: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

function getFormValue(formData: FormData, field: keyof ContactFormValues) {
  const value = formData.get(field)
  return typeof value === 'string' ? value.trim() : ''
}

function validateContactForm(values: ContactFormValues) {
  const errors: ContactFormErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.name) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.message) {
    errors.message = 'Please enter a message.'
  }

  return errors
}

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({})
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const values: ContactFormValues = {
      name: getFormValue(formData, 'name'),
      email: getFormValue(formData, 'email'),
      phone: getFormValue(formData, 'phone'),
      message: getFormValue(formData, 'message'),
    }
    const errors = validateContactForm(values)

    setFormErrors(errors)
    setErrorMessage('')

    if (Object.keys(errors).length > 0) {
      setFormState('idle')
      return
    }

    setFormState('submitting')

    try {
      await createContact({
        full_name: values.name,
        email: values.email,
        phone: values.phone || null,
        message: values.message,
        status: 'new',
      })

      setFormState('success')
    } catch (error) {
      setFormState('idle')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your message.'
      )
    }
  }

  return (
    <section 
      id="contact" 
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
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss how I can help drive your marketing performance? Get in touch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-8">
              I&apos;m currently open to new opportunities in Digital Marketing, Performance Marketing, 
              and Growth Marketing roles. Feel free to reach out to discuss potential collaborations.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:silvanoawino@yahoo.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">silvanoawino@yahoo.com</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </a>

              <a 
                href="tel:+971586355941"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+971 58 6355941</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Dubai, UAE</p>
                </div>
              </div>

              <a 
                href="https://linkedin.com/in/silvano-awino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground">linkedin.com/in/silvano-awino</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Send a Message
              </h3>

              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" id="phone" name="phone" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-invalid={Boolean(formErrors.name)}
                        aria-describedby={formErrors.name ? 'name-error' : undefined}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                      {formErrors.name && (
                        <p id="name-error" className="mt-2 text-sm text-destructive">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-invalid={Boolean(formErrors.email)}
                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                      {formErrors.email && (
                        <p id="email-error" className="mt-2 text-sm text-destructive">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="job">Job Opportunity</option>
                      <option value="project">Project Collaboration</option>
                      <option value="consultation">Marketing Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      aria-invalid={Boolean(formErrors.message)}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                    {formErrors.message && (
                      <p id="message-error" className="mt-2 text-sm text-destructive">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {errorMessage && (
                    <p className="text-sm text-destructive" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
