'use client';

import { motion } from 'framer-motion';
import { Search, BarChart2, Lightbulb, Download, Globe, Zap, Eye, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Search,
    title: 'Smart Search Engine',
    description: 'Type any keyword and instantly surface the top 10 best-performing pieces of content across any platform.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
  },
  {
    icon: BarChart2,
    title: 'Performance Ranking',
    description: 'Content ranked by views, likes, shares, comments, engagement rate, and trend velocity score.',
    gradient: 'from-blue-500 to-cyan-600',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Eye,
    title: 'Detailed Analytics',
    description: 'See every metric that matters — thumbnail, engagement rate, publish date, creator info, and why it went viral.',
    gradient: 'from-indigo-500 to-blue-600',
    glow: 'shadow-indigo-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Trend Insights',
    description: 'AI-generated insights on hooks, formats, keywords, audience pain points, and viral patterns in your niche.',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: Download,
    title: 'Save & Export',
    description: 'Bookmark winning content, save searches, and export complete reports as PDF or CSV for your team.',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
  },
  {
    icon: Globe,
    title: 'Multi-Platform',
    description: 'TikTok, YouTube, Instagram, and Facebook — all in one place with a unified analytics dashboard.',
    gradient: 'from-pink-500 to-rose-600',
    glow: 'shadow-pink-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Trend Velocity',
    description: 'Track how fast content is growing. Identify breakout content before it reaches peak viral status.',
    gradient: 'from-fuchsia-500 to-purple-600',
    glow: 'shadow-fuchsia-500/20',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'No waiting. Get comprehensive results in under 3 seconds so you can make decisions at the speed of trends.',
    gradient: 'from-yellow-500 to-amber-600',
    glow: 'shadow-yellow-500/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/5 text-sm text-violet-400 mb-6">
            <Zap className="w-3.5 h-3.5" />
            Everything you need
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Powerful features for{' '}
            <span className="gradient-text">serious creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From discovery to insights to export — NichePulse gives you every tool
            you need to win in your niche.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card hover className={`h-full group shadow-lg ${feature.glow}`}>
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
