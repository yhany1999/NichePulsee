'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 rounded-3xl animated-gradient opacity-10 blur-3xl -z-10 scale-110" />

          <div className="rounded-3xl border border-violet-500/20 bg-card p-12 sm:p-16 glow">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/5 text-sm text-violet-400 mb-8">
              <Zap className="w-3.5 h-3.5" />
              Free forever plan available
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Start discovering{' '}
              <span className="gradient-text">viral content</span>
              <br />
              today
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Join 12,000+ creators who use NichePulse to find winning content ideas and outperform their competition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button size="xl" variant="gradient" className="group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="xl" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required · Free plan includes 5 searches/month
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
