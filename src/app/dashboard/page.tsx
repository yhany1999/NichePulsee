'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Zap, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Platform } from '@/types';

const platforms: { id: Platform; name: string; icon: string; color: string; bg: string; desc: string }[] = [
  { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20 hover:border-pink-500/50', desc: 'Short-form videos' },
  { id: 'youtube', name: 'YouTube', icon: '▶', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20 hover:border-red-500/50', desc: 'Long & short videos' },
  { id: 'instagram', name: 'Instagram', icon: '📸', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20 hover:border-purple-500/50', desc: 'Reels & posts' },
  { id: 'facebook', name: 'Facebook', icon: '👥', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20 hover:border-blue-500/50', desc: 'Videos & posts' },
];

const trending = ['Fitness', 'AI Tools', 'Skincare', 'Dropshipping', 'Crypto', 'Cooking', 'Motivation', 'Gaming', 'Finance', 'Travel'];

const recentSearches = [
  { keyword: 'fitness', platform: 'tiktok', time: '2h ago' },
  { keyword: 'AI tools', platform: 'youtube', time: '1d ago' },
  { keyword: 'skincare', platform: 'instagram', time: '3d ago' },
];

const stats = [
  { label: 'Searches Used', value: '3', max: '5', color: 'text-violet-400' },
  { label: 'Saved Reports', value: '3', color: 'text-blue-400' },
  { label: 'Plan', value: 'Free', color: 'text-amber-400' },
];

export default function DashboardPage() {
  const [keyword, setKeyword] = useState('');
  const [platform, setPlatform] = useState<Platform>('tiktok');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    router.push(`/dashboard/results?keyword=${encodeURIComponent(keyword.trim())}&platform=${platform}`);
  };

  return (
    <div className="max-w-4xl mx-auto pb-20 lg:pb-0">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-foreground mb-1">
          Content Research
        </h1>
        <p className="text-muted-foreground">Find the top-performing content in any niche, instantly.</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                {stat.max && <span className="text-sm text-muted-foreground">/ {stat.max}</span>}
              </div>
              {stat.max && (
                <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-violet-500"
                    style={{ width: `${(parseInt(stat.value) / parseInt(stat.max)) * 100}%` }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Search form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="mb-6 border-violet-500/20 glow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-violet-400" />
              <h2 className="font-semibold text-foreground">New Search</h2>
            </div>

            <form onSubmit={handleSearch} className="space-y-5">
              {/* Keyword input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Keyword or Niche
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="e.g. fitness, skincare, dropshipping, AI tools..."
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Platform selector */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Platform</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {platforms.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlatform(p.id)}
                      className={`
                        relative flex flex-col items-center gap-2 p-4 rounded-xl border transition-all cursor-pointer
                        ${platform === p.id
                          ? `${p.bg} border-2 shadow-sm`
                          : 'border-border bg-card hover:bg-accent'
                        }
                      `}
                    >
                      {platform === p.id && (
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-violet-400" />
                      )}
                      <span className="text-2xl">{p.icon}</span>
                      <div>
                        <p className={`text-sm font-semibold ${platform === p.id ? p.color : 'text-foreground'}`}>
                          {p.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{p.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                loading={loading}
                className="w-full shadow-lg shadow-violet-500/25"
                disabled={!keyword.trim()}
              >
                <Zap className="w-5 h-5" />
                Find Top 10 Content
                <ArrowRight className="w-4 h-4 ml-auto" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Trending keywords */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-violet-400" />
          <h3 className="text-sm font-semibold text-foreground">Trending Keywords</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trending.map((kw) => (
            <button
              key={kw}
              onClick={() => setKeyword(kw)}
              className="px-3 py-1.5 rounded-full text-sm border border-border bg-card text-muted-foreground hover:text-foreground hover:border-violet-500/50 hover:bg-violet-500/5 transition-all cursor-pointer"
            >
              {kw}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Recent searches */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold text-foreground">Recent Searches</h3>
        </div>
        <div className="space-y-2">
          {recentSearches.map((s) => (
            <button
              key={s.keyword}
              onClick={() => router.push(`/dashboard/results?keyword=${encodeURIComponent(s.keyword)}&platform=${s.platform}`)}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-border bg-card hover:bg-accent transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-muted-foreground group-hover:text-violet-400 transition-colors" />
                <div>
                  <span className="text-sm font-medium text-foreground capitalize">{s.keyword}</span>
                  <span className="text-xs text-muted-foreground ml-2">on {s.platform}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{s.time}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
