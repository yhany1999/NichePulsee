'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const plans = [
  {
    id: 'free',
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for trying out NichePulse',
    badge: null,
    highlighted: false,
    features: [
      { label: '5 searches per month', included: true },
      { label: 'Top 10 results per search', included: true },
      { label: 'Basic engagement metrics', included: true },
      { label: 'TikTok & YouTube only', included: true },
      { label: 'Advanced analytics', included: false },
      { label: 'Trend insights', included: false },
      { label: 'Export (PDF/CSV)', included: false },
      { label: 'Saved reports', included: false },
      { label: 'Priority support', included: false },
    ],
    cta: 'Get Started Free',
    href: '/signup',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 19,
    description: 'For creators and marketers who need more',
    badge: 'Most Popular',
    highlighted: true,
    features: [
      { label: 'Unlimited searches', included: true },
      { label: 'Top 10 results per search', included: true },
      { label: 'Full engagement analytics', included: true },
      { label: 'All 4 platforms', included: true },
      { label: 'AI trend insights', included: true },
      { label: 'Trend velocity tracking', included: true },
      { label: 'Export (PDF/CSV)', included: true },
      { label: 'Unlimited saved reports', included: true },
      { label: 'Priority email support', included: true },
    ],
    cta: 'Start Pro Trial',
    href: '/signup?plan=pro',
  },
  {
    id: 'team',
    name: 'Team',
    monthlyPrice: 79,
    yearlyPrice: 59,
    description: 'For agencies and growing teams',
    badge: null,
    highlighted: false,
    features: [
      { label: 'Everything in Pro', included: true },
      { label: 'Up to 5 team members', included: true },
      { label: 'Shared workspaces', included: true },
      { label: 'Collaborative reports', included: true },
      { label: 'White-label exports', included: true },
      { label: 'API access', included: true },
      { label: 'Custom integrations', included: true },
      { label: 'Dedicated account manager', included: true },
      { label: '24/7 priority support', included: true },
    ],
    cta: 'Start Team Trial',
    href: '/signup?plan=team',
  },
];

const faqItems = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, you can cancel your subscription at any time. You\'ll retain access until the end of your billing period.',
  },
  {
    q: 'Is there a free trial?',
    a: 'The Free plan gives you 5 searches per month at no cost. Pro and Team plans come with a 7-day free trial.',
  },
  {
    q: 'How accurate is the data?',
    a: 'NichePulse analyzes real public content and engagement data. Results are updated regularly to reflect current trends.',
  },
  {
    q: 'What platforms are supported?',
    a: 'Currently TikTok, YouTube, Instagram, and Facebook. More platforms are coming soon.',
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Start free. Upgrade when you need more power.
            </p>

            {/* Billing toggle */}
            <div className="inline-flex items-center gap-3 p-1 rounded-2xl border border-border bg-card">
              <button
                onClick={() => setYearly(false)}
                className={cn(
                  'px-5 py-2 rounded-xl text-sm font-medium transition-all',
                  !yearly ? 'bg-violet-600 text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={cn(
                  'px-5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2',
                  yearly ? 'bg-violet-600 text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                Yearly
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Save 35%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={cn(plan.highlighted && 'relative')}
                >
                  {plan.highlighted && (
                    <div className="absolute -inset-px rounded-3xl animated-gradient opacity-30 -z-10" />
                  )}
                  <Card
                    className={cn(
                      'h-full',
                      plan.highlighted && 'border-violet-500/40 glow'
                    )}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                        </div>
                        {plan.badge && (
                          <Badge variant="purple">{plan.badge}</Badge>
                        )}
                      </div>

                      <div className="mb-8">
                        <div className="flex items-end gap-2">
                          <span className="text-5xl font-bold text-foreground">
                            ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          {plan.monthlyPrice > 0 && (
                            <span className="text-muted-foreground mb-2">/month</span>
                          )}
                        </div>
                        {yearly && plan.yearlyPrice > 0 && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Billed annually (${plan.yearlyPrice * 12}/year)
                          </p>
                        )}
                      </div>

                      <Link href={plan.href}>
                        <Button
                          size="lg"
                          variant={plan.highlighted ? 'gradient' : 'outline'}
                          className="w-full mb-8"
                        >
                          {plan.cta}
                        </Button>
                      </Link>

                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature.label} className="flex items-center gap-3 text-sm">
                            {feature.included ? (
                              <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-emerald-400" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                                <X className="w-3 h-3 text-muted-foreground" />
                              </div>
                            )}
                            <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                              {feature.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <Card key={item.q}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
