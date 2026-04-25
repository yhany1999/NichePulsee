'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Bookmark, Filter, SortAsc, RefreshCw, Share2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContentCard } from '@/components/dashboard/content-card';
import { TrendInsights } from '@/components/dashboard/trend-insights';
import { generateSearchResult, platformConfig } from '@/lib/mock-data';
import { formatNumber } from '@/lib/utils';
import type { SearchResult, Platform } from '@/types';

type SortKey = 'rank' | 'views' | 'engagement' | 'trending';

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const keyword = searchParams.get('keyword') || '';
  const platform = (searchParams.get('platform') || 'tiktok') as Platform;

  const [data, setData] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'results' | 'insights'>('results');
  const [sort, setSort] = useState<SortKey>('rank');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!keyword) { router.push('/dashboard'); return; }
    setLoading(true);
    const timer = setTimeout(() => {
      setData(generateSearchResult(keyword, platform));
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [keyword, platform, router]);

  const sortedResults = data?.results
    ? [...data.results].sort((a, b) => {
        if (sort === 'views') return b.views - a.views;
        if (sort === 'engagement') return b.engagementRate - a.engagementRate;
        if (sort === 'trending') return b.trendScore - a.trendScore;
        return a.rank - b.rank;
      })
    : [];

  const pc = platformConfig[platform];

  const totalViews = data?.results.reduce((sum, r) => sum + r.views, 0) || 0;
  const avgEngagement = data?.results.length
    ? data.results.reduce((sum, r) => sum + r.engagementRate, 0) / data.results.length
    : 0;

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto pb-20 lg:pb-0">
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="w-16 h-16 rounded-2xl animated-gradient flex items-center justify-center shadow-xl animate-pulse">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <p className="text-lg font-semibold text-foreground">Analyzing content...</p>
          <p className="text-sm text-muted-foreground">
            Finding the top 10 best-performing <strong className="text-foreground">{keyword}</strong> content on{' '}
            <strong className="text-foreground">{pc.name}</strong>
          </p>
          <div className="flex gap-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-violet-500 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="max-w-5xl mx-auto pb-20 lg:pb-0">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <button
          onClick={() => router.push('/dashboard')}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          New Search
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-bold text-foreground capitalize">{keyword}</h1>
              <Badge className={`${pc.bg} ${pc.color} border`}>
                {pc.icon} {pc.name}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Top 10 best-performing content • Updated just now
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSaved(!saved)}
              className={saved ? 'border-violet-500/50 text-violet-400 bg-violet-500/5' : ''}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-violet-400' : ''}`} />
              {saved ? 'Saved' : 'Save Report'}
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
      >
        {[
          { label: 'Total Views', value: formatNumber(totalViews), icon: Eye, color: 'text-violet-400' },
          { label: 'Avg Engagement', value: `${avgEngagement.toFixed(1)}%`, icon: Share2, color: 'text-blue-400' },
          { label: 'Top Trend Score', value: data.results[0]?.trendScore.toString(), icon: RefreshCw, color: 'text-emerald-400' },
          { label: 'Results Found', value: '10', icon: Filter, color: 'text-amber-400' },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
              <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 p-1 bg-card border border-border rounded-2xl w-fit">
        {(['results', 'insights'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
              activeTab === tab
                ? 'bg-violet-600 text-white shadow-lg'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab === 'results' ? 'Top 10 Results' : 'Trend Insights'}
          </button>
        ))}
      </div>

      {activeTab === 'results' && (
        <>
          {/* Sort bar */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <SortAsc className="w-3.5 h-3.5" /> Sort by:
            </span>
            {([
              { key: 'rank', label: 'Rank' },
              { key: 'views', label: 'Views' },
              { key: 'engagement', label: 'Engagement' },
              { key: 'trending', label: 'Trend Score' },
            ] as { key: SortKey; label: string }[]).map((s) => (
              <button
                key={s.key}
                onClick={() => setSort(s.key)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  sort === s.key
                    ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                    : 'text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {sortedResults.map((result, i) => (
              <ContentCard key={result.id} result={result} index={i} />
            ))}
          </div>
        </>
      )}

      {activeTab === 'insights' && (
        <TrendInsights insights={data.insights} keyword={keyword} />
      )}
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-24">
          <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
