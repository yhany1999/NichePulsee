'use client';

import { motion } from 'framer-motion';
import { Search, BarChart2, Lightbulb, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Enter Your Keyword',
    description: 'Type any keyword, niche, or topic. Choose your target platform: TikTok, YouTube, Instagram, or Facebook.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
  },
  {
    number: '02',
    icon: BarChart2,
    title: 'Analyze Performance',
    description: 'Our engine scans thousands of posts and ranks them by views, engagement rate, shares, and trend velocity.',
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Get Insights',
    description: 'View detailed results with AI-generated insights: winning hooks, content formats, and viral patterns.',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
  },
  {
    number: '04',
    icon: Download,
    title: 'Save & Act',
    description: 'Bookmark top content, save your research, and export reports to use in your content strategy.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Go from keyword to actionable content insights in under 30 seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-violet-500/30 via-blue-500/30 to-emerald-500/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Step number circle */}
              <div className="relative flex justify-center mb-6">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full ${step.bg} border ${step.border} flex items-center justify-center`}>
                  <span className={`text-xs font-bold ${step.text}`}>{step.number}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
