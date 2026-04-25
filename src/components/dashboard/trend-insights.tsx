'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Hash, Zap, Users, TrendingUp, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { TrendInsight } from '@/types';

interface TrendInsightsProps {
  insights: TrendInsight;
  keyword: string;
}

const sections = [
  {
    key: 'hooks' as keyof TrendInsight,
    title: 'Winning Hooks',
    icon: Zap,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
    tag: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  },
  {
    key: 'formats' as keyof TrendInsight,
    title: 'Popular Formats',
    icon: TrendingUp,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    tag: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    key: 'keywords' as keyof TrendInsight,
    title: 'Keywords Used',
    icon: Hash,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    key: 'painPoints' as keyof TrendInsight,
    title: 'Audience Pain Points',
    icon: Users,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    tag: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    key: 'patterns' as keyof TrendInsight,
    title: 'Viral Patterns',
    icon: MessageSquare,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
];

export function TrendInsights({ insights, keyword }: TrendInsightsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="w-5 h-5 text-amber-400" />
        <h2 className="text-lg font-bold text-foreground">AI Trend Insights</h2>
        <span className="text-sm text-muted-foreground">for "{keyword}"</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {sections.map((section, i) => (
          <motion.div
            key={section.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <div className={`w-7 h-7 rounded-lg ${section.bg} border flex items-center justify-center`}>
                    <section.icon className={`w-3.5 h-3.5 ${section.color}`} />
                  </div>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {insights[section.key].map((item) => (
                    <span
                      key={item}
                      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${section.tag}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
