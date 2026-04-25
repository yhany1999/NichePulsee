'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CreditCard, Check, Zap, ArrowRight, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    yearlyPrice: 0,
    current: true,
    features: ['5 searches/month', 'TikTok & YouTube', 'Basic metrics'],
    cta: 'Current Plan',
    color: 'text-muted-foreground',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    yearlyPrice: 19,
    current: false,
    features: ['Unlimited searches', 'All 4 platforms', 'AI insights', 'Export PDF/CSV', 'Unlimited saved'],
    cta: 'Upgrade to Pro',
    color: 'text-violet-400',
    badge: 'Most Popular',
    highlighted: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: 79,
    yearlyPrice: 59,
    current: false,
    features: ['Everything in Pro', '5 team members', 'API access', 'White-label', 'Dedicated support'],
    cta: 'Upgrade to Team',
    color: 'text-blue-400',
  },
];

const invoices = [
  { id: 'INV-001', date: 'Mar 1, 2024', amount: '$0.00', status: 'Free Plan', plan: 'Free' },
];

export default function BillingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="max-w-4xl mx-auto pb-20 lg:pb-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-1">Billing & Plans</h1>
        <p className="text-muted-foreground text-sm">Manage your subscription and payment details</p>
      </motion.div>

      {/* Current plan card */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <Card className="mb-8 border-violet-500/20">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
                  <Zap className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-foreground text-lg">Free Plan</h3>
                    <Badge variant="secondary">Current</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">3 of 5 searches used this month</p>
                  <div className="mt-2 w-48 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-3/5 rounded-full bg-violet-500" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">Active</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Billing toggle */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Upgrade Your Plan</h2>
        <div className="inline-flex items-center gap-1 p-1 rounded-xl border border-border bg-card">
          <button
            onClick={() => setYearly(false)}
            className={cn('px-4 py-1.5 rounded-lg text-sm font-medium transition-all', !yearly ? 'bg-violet-600 text-white' : 'text-muted-foreground')}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn('px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2', yearly ? 'bg-violet-600 text-white' : 'text-muted-foreground')}
          >
            Yearly
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">-35%</span>
          </button>
        </div>
      </div>

      {/* Plans grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
      >
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={cn(
              plan.highlighted && 'border-violet-500/40 glow-sm',
              plan.current && 'opacity-75'
            )}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-foreground">
                      ${yearly ? plan.yearlyPrice : plan.price}
                    </span>
                    <span className="text-xs text-muted-foreground">/mo</span>
                  </div>
                </div>
                {plan.badge && <Badge variant="purple">{plan.badge}</Badge>}
              </div>

              <ul className="space-y-2 mb-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="sm"
                variant={plan.current ? 'outline' : plan.highlighted ? 'primary' : 'outline'}
                disabled={plan.current}
                className="w-full"
              >
                {plan.current ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    {plan.cta}
                  </>
                ) : (
                  <>
                    <Star className="w-3.5 h-3.5" />
                    {plan.cta}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Payment method */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <CreditCard className="w-4 h-4 text-violet-400" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-7 rounded-md bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">•••• •••• •••• 4242</p>
                  <p className="text-xs text-muted-foreground">Expires 12/27</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Update</Button>
            </div>
            <Button variant="ghost" size="sm" className="mt-3 text-muted-foreground">
              + Add payment method
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Invoice history */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Invoice History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{invoice.id}</p>
                      <p className="text-xs text-muted-foreground">{invoice.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">{invoice.amount}</span>
                    <Badge variant="success">Paid</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
