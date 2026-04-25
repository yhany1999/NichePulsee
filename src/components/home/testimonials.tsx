'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Jessica M.',
    role: 'Content Creator, 2.3M followers',
    avatar: 'J',
    color: '#7c3aed',
    stars: 5,
    text: 'NichePulse cut my research time from 3 hours to 10 minutes. I find viral formats before they peak and my views have tripled in 2 months.',
  },
  {
    name: 'David R.',
    role: 'Social Media Manager',
    avatar: 'D',
    color: '#4f46e5',
    stars: 5,
    text: 'This is hands down the best content research tool I\'ve ever used. The trend insights alone are worth 10x the subscription price.',
  },
  {
    name: 'Maria L.',
    role: 'E-commerce Brand Owner',
    avatar: 'M',
    color: '#06b6d4',
    stars: 5,
    text: 'We use NichePulse to find what content drives sales in our niche. Our ad spend went down 40% because our organic content actually works now.',
  },
  {
    name: 'James T.',
    role: 'Digital Marketing Agency',
    avatar: 'J',
    color: '#8b5cf6',
    stars: 5,
    text: 'I manage 12 client accounts and NichePulse saves my team hours every week. The export feature makes client reporting effortless.',
  },
  {
    name: 'Sophia K.',
    role: 'YouTube Creator, 800K subs',
    avatar: 'S',
    color: '#ec4899',
    stars: 5,
    text: 'Found my last 3 viral video ideas using NichePulse. The "why it performed" feature gives me the exact insight I need to replicate success.',
  },
  {
    name: 'Ryan P.',
    role: 'Dropshipping Entrepreneur',
    avatar: 'R',
    color: '#f59e0b',
    stars: 5,
    text: 'Game changer for product research. I find winning content in competitor niches and reverse-engineer their strategy. Already 5x my revenue.',
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Loved by{' '}
            <span className="gradient-text">12,000+ creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators, marketers, and brands who use NichePulse to dominate their niches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-violet-500/30 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ background: testimonial.color }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
