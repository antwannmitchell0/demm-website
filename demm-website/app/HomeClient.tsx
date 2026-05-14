'use client'

// Client Component — owns all the interactive behavior (scroll, animations, CTAs).
// City/region are passed in as props from the server component so we can
// personalize headlines on the first render with NO client-side flicker.

import { useState, useEffect } from 'react'
import { ChevronDown, Check, MapPin } from 'lucide-react'

interface HomeClientProps {
  city: string | null
  region: string | null
  country: string | null
}

export default function HomeClient({ city, region, country }: HomeClientProps) {
  const [scrolled, setScrolled] = useState(false)
  const [showAgentMessage, setShowAgentMessage] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowAgentMessage(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Build display variants. Always have a sensible fallback so the page works
  // even when geo headers are absent (local dev, private network, etc.)
  const hasCity = !!city
  const cityLabel = city ?? 'Local'
  const heroCityPhrase = hasCity ? `Small ${city} businesses` : 'Small businesses'
  const painPointsHeadline = hasCity
    ? `Here's What's Costing ${city} Businesses Money Right Now`
    : `Here's What's Costing You Money Right Now`
  const ctaHeadline = hasCity
    ? `Ready to Stop Leaving Money on the Table${city ? `, ${city}` : ''}?`
    : `Ready to Stop Leaving Money on the Table?`

  // Compact "detected" badge — only show when we actually have geo data.
  const locationLine = [city, region].filter(Boolean).join(', ')

  const painPoints = [
    {
      problem: "You're Losing Calls to Voicemail",
      impact: 'Every missed call = missed revenue',
      solution: 'Instant text-back automation responds in seconds',
    },
    {
      problem: 'Manual Follow-Up is Killing Your Time',
      impact: "You're doing 100+ touches a day manually",
      solution: 'AI handles 30-40 daily follow-ups automatically',
    },
    {
      problem: "You're Invisible Online",
      impact: "Competitors show up, you don't",
      solution: 'Daily AI-generated content posted 24/7',
    },
    {
      problem: "Leads Go Cold Because You Can't Reply Fast",
      impact: 'Someone else gets the appointment',
      solution: '24/7 DM + SMS responses in your voice',
    },
    {
      problem: "You Don't Know What's Actually Working",
      impact: 'Spending on the wrong channels',
      solution: 'AI-scored leads + monthly performance reports',
    },
  ]

  const tiers = [
    {
      id: 'survivor',
      name: 'DEMM OS Survivor',
      price: 99,
      period: '/month',
      trial: '7-Day Free Trial',
      description: 'Stop losing leads. Start booking jobs.',
      features: [
        'Missed call text-back (5 sec response)',
        'Email + SMS sequences',
        'Review request automation',
        'Appointment reminders',
        'Social content posted daily',
        'AXIOM monitoring agent',
        'Monthly performance report',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      id: 'growth',
      name: 'DEMM OS Growth',
      price: 299,
      period: '/month',
      trial: '7-Day Free Trial',
      description: 'Scale with real intelligence.',
      features: [
        'Everything in Survivor',
        'Unlimited automations',
        'AI lead scoring (HOT/WARM/COLD)',
        'AI content in your voice',
        'Re-engagement campaigns',
        'Invoice follow-up',
        '24/7 DM coverage',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      id: 'empire',
      name: 'DEMM OS Empire',
      price: 999,
      period: '/month',
      trial: '7-Day Free Trial',
      description: 'Full operating system. Agents run everything.',
      features: [
        'Everything in Growth',
        'Full AXIOM agents 24/7',
        'Google + Meta ads managed',
        'Dedicated account manager',
        'Weekly strategy sessions',
        'Custom voice training',
        'Multi-location support',
        'White-glove onboarding',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur border-b border-yellow-500/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Editorial Premium wordmark — Playfair Display serif + Inter small caps */}
          <a href="/" className="group flex flex-col leading-none" aria-label="DEMM OS home">
            <span className="font-display text-3xl md:text-4xl font-bold text-yellow-400 tracking-tight leading-none group-hover:opacity-90 transition">
              DEMM <span className="font-light italic">OS</span>
            </span>
            <span className="mt-1 h-px w-12 bg-yellow-400/60" aria-hidden="true"></span>
            <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.25em] text-gray-400">
              DEMM Marketing
            </span>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#why" className="hover:text-yellow-400 transition">
              Why Us
            </a>
            <a href="#pricing" className="hover:text-yellow-400 transition">
              Pricing
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </div>
          <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '700ms' }}
          ></div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          {/* Agent greeting */}
          <div
            className={`mb-8 transition-all duration-700 ${
              showAgentMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="inline-block px-4 py-2 border border-yellow-400/50 rounded-full text-sm text-yellow-300 bg-yellow-400/5">
              ✨ Powered by AXIOM Agent — your 24/7 business operating system
            </div>
          </div>

          {/* Local detection chip — only shows when geo resolved */}
          {hasCity && (
            <div
              className={`mb-4 flex justify-center transition-all duration-700 ${
                showAgentMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-xs text-yellow-200">
                <MapPin className="w-3 h-3" />
                <span>
                  Serving{' '}
                  <strong className="text-yellow-300">
                    {locationLine || cityLabel}
                  </strong>
                </span>
              </div>
            </div>
          )}

          {/* Main headline */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Never Miss <span className="text-yellow-400">A Lead™</span>
          </h1>

          {/* Subheadline — personalized by city */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {heroCityPhrase} are leaving $5,000–$20,000 on the table every month.
            <br />
            <span className="text-yellow-300 font-semibold">
              We show you how to capture it.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition transform hover:scale-105">
              Start 7-Day Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg hover:bg-yellow-400/10 transition">
              See How It Works ↓
            </button>
          </div>

          {/* Trust signals */}
          <p className="text-sm text-gray-400">
            No credit card required. Cancel anytime.{' '}
            <span className="text-yellow-300">
              Guarantee: Save 10 hours/month or get 100% refund.
            </span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-yellow-400" />
        </div>
      </section>

      {/* Pain Points Section */}
      <section
        id="why"
        className="py-20 px-6 bg-gradient-to-b from-black to-gray-950"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              {painPointsHeadline}
            </h2>
            <p className="text-xl text-gray-400">
              We fixed all 5 of these problems. For $99/month.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {painPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-900/50 border border-yellow-400/20 rounded-lg hover:border-yellow-400/50 transition group"
              >
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{point.problem}</h3>
                    <p className="text-gray-400 text-sm mb-4">{point.impact}</p>
                    <div className="flex items-start gap-2 text-yellow-300">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold">{point.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Statement */}
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-8 text-center">
            <p className="text-2xl font-bold mb-4">
              Agencies charge $3,000–$10,000/month for this.
            </p>
            <p className="text-4xl md:text-5xl font-black text-yellow-400 mb-4">
              We charge $99.
            </p>
            <p className="text-gray-300 text-lg">
              That's not a typo. That's the entire point.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Three Ways to Book More Jobs
            </h2>
            <p className="text-xl text-gray-400">
              All start free. All include our 30-day, 100% refund guarantee.
            </p>
          </div>

          {/* Tier Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-lg p-8 transition transform hover:scale-105 ${
                  tier.highlighted
                    ? 'bg-yellow-400/15 border-2 border-yellow-400 ring-2 ring-yellow-400/30'
                    : 'bg-gray-900/50 border border-gray-700 hover:border-yellow-400/50'
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {tier.badge}
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-black text-yellow-400">
                      ${tier.price}
                    </span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-sm text-green-400 font-semibold">{tier.trial}</p>
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                    tier.highlighted
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                      : 'bg-gray-800 text-white border border-gray-700 hover:border-yellow-400'
                  }`}
                >
                  {tier.cta}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">
              What You Get vs. Hiring an Agency
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-bold text-yellow-300 mb-2">Agency Cost</p>
                <p className="text-3xl font-black">$7,200/mo</p>
              </div>
              <div>
                <p className="font-bold text-yellow-300 mb-2">DEMM OS Cost</p>
                <p className="text-3xl font-black text-yellow-400">$99/mo</p>
              </div>
              <div>
                <p className="font-bold text-yellow-300 mb-2">Time Saved</p>
                <p className="text-3xl font-black">10+ hrs/week</p>
              </div>
              <div>
                <p className="font-bold text-yellow-300 mb-2">Guarantee</p>
                <p className="text-lg font-bold text-green-400">100% Money Back</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Questions?</h3>
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-4">
                <p className="font-bold text-yellow-300 mb-2">
                  Can I really cancel anytime?
                </p>
                <p className="text-gray-400">
                  Yes. No cancellation fees. No long-term contracts. We'll even help
                  you set up a competitor if you want.
                </p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <p className="font-bold text-yellow-300 mb-2">
                  What if I don't save 10 hours?
                </p>
                <p className="text-gray-400">
                  We refund 100% of your money, no questions asked. We're confident
                  you will.
                </p>
              </div>
              <div>
                <p className="font-bold text-yellow-300 mb-2">
                  How long does setup take?
                </p>
                <p className="text-gray-400">
                  7 days free trial. No setup required. Connect your business info
                  and start getting results immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-yellow-400/20"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">{ctaHeadline}</h2>
          <p className="text-xl text-gray-400 mb-8">
            Start your free trial today. No credit card. No setup cost. Just results.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <button className="px-10 py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition transform hover:scale-105">
              Start 7-Day Free Trial Now
            </button>
          </div>

          {/* Contact details — A2P 10DLC compliance: business name, phone, email all visible */}
          <div className="mt-12 pt-8 border-t border-gray-800 grid md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Call or Text
              </p>
              <a
                href="tel:+18135608191"
                className="text-yellow-400 hover:underline font-semibold"
              >
                (813) 560-8191
              </a>
              <p className="text-[10px] text-gray-500 mt-1">
                Msg &amp; data rates may apply
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Email
              </p>
              <a
                href="mailto:hello@demmmarketing.com"
                className="text-yellow-400 hover:underline font-semibold"
              >
                hello@demmmarketing.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Company
              </p>
              <p className="text-gray-300 font-semibold">
                DEMM LLC
              </p>
              <p className="text-[10px] text-gray-500 mt-1">
                DBA DEMM Marketing · Atlanta, GA
              </p>
            </div>
          </div>

          {/* SMS opt-in disclosure for A2P 10DLC */}
          <p className="text-xs text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
            By providing your phone number and starting a trial, you agree to receive
            recurring automated marketing and account messages (such as appointment
            reminders, missed-call text-backs, and promotional offers) from DEMM
            Marketing at the number provided. Consent is not a condition of purchase.
            Reply <strong>STOP</strong> to opt out, <strong>HELP</strong> for help.
            Message frequency varies. Msg &amp; data rates may apply. See our{' '}
            <a href="/privacy" className="text-yellow-400 hover:underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="text-yellow-400 hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <div className="text-center md:text-left">
            <p>
              &copy; 2026 DEMM LLC. All rights
              reserved.
            </p>
            <p className="text-xs mt-1">
              DEMM OS™ · AXIOM™ · DEMM Marketing™ are trademarks of DEMM LLC.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-yellow-400 transition">
              Privacy
            </a>
            <a href="/terms" className="hover:text-yellow-400 transition">
              Terms
            </a>
            <a
              href="mailto:hello@demmmarketing.com"
              className="hover:text-yellow-400 transition"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
