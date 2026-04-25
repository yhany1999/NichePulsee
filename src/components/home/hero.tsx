'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, ArrowRight, TrendingUp, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const platforms = ['TikTok', 'YouTube', 'Instagram', 'Facebook'];
const trendingKeywords = ['AI Tools', 'Fitness', 'Dropshipping', 'Skincare', 'Crypto', 'Cooking'];

export function Hero() {
  const [keyword, setKeyword] = useState('');
  const [platform, setPlatform] = useState('tiktok');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    router.push(`/dashboard/results?keyword=${encodeURIComponent(keyword)}&platform=${platform}`);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/5 text-sm text-violet-400 mb-8"
        >
          <Zap className="w-3.5 h-3.5" />
          <span className="font-medium">Introducing AI-powered trend analysis</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Discover{' '}
          <span className="gradient-text">Viral Content</span>
          <br />
          in Any Niche
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Stop wasting hours searching. Instantly find the top 10 best-performing content
          for any keyword across TikTok, YouTube, Instagram, and Facebook.
        </motion.p>

        {/* Search form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-6"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter a keyword or niche..."
              className="w-full h-14 pl-12 pr-4 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent text-base shadow-lg"
            />
          </div>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="h-14 px-4 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-base shadow-lg min-w-[140px] cursor-pointer"
          >
            {platforms.map((p) => (
              <option key={p} value={p.toLowerCase()}>{p}</option>
            ))}
          </select>
          <Button type="submit" size="lg" className="h-14 px-8 rounded-2xl text-base shadow-xl shadow-violet-500/30 shrink-0">
            <Search className="w-5 h-5" />
            Search
          </Button>
        </motion.form>

        {/* Trending keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-16"
        >
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> Trending:
          </span>
          {trendingKeywords.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => setKeyword(kw)}
              className="px-3 py-1.5 rounded-full text-sm border border-border bg-card text-muted-foreground hover:text-foreground hover:border-violet-500/50 hover:bg-violet-500/5 transition-all cursor-pointer"
            >
              {kw}
            </button>
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
                <div
                  key={letter}
                  className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: ['#7c3aed', '#4f46e5', '#06b6d4', '#8b5cf6', '#a78bfa'][i] }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">12,000+</strong> creators using NichePulse
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm text-muted-foreground ml-1">
              <strong className="text-foreground">4.9/5</strong> from 800+ reviews
            </span>
          </div>
        </motion.div>

        {/* Hero screenshot/mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
          <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-violet-500/10 overflow-hidden glow">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-lg px-3 py-1 text-xs text-muted-foreground">
                  app.nichepulse.io/dashboard/results
                </div>
              </div>
            </div>
            {/* Dashboard preview */}
            <div className="p-6 bg-background min-h-[320px]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="h-6 w-48 rounded-lg bg-muted animate-pulse" />
                  <div className="h-4 w-32 rounded-lg bg-muted animate-pulse mt-2" />
                </div>
                <div className="h-9 w-24 rounded-xl bg-violet-500/20 animate-pulse" />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-4">
                    <div className="h-4 w-20 rounded bg-muted animate-pulse mb-2" />
                    <div className="h-7 w-28 rounded bg-muted animate-pulse" />
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-border bg-card">
                    <div className="w-10 h-10 rounded-xl shrink-0" style={{ background: `hsl(${i * 60 + 220}, 70%, 60%)` }} />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
                      <div className="h-3 w-1/2 rounded bg-muted animate-pulse" />
                    </div>
                    <div className="h-8 w-20 rounded-xl bg-violet-500/10 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
