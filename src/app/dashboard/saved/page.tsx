'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bookmark, Search, Download, Trash2, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { platformConfig } from '@/lib/mock-data';
import type { Platform } from '@/types';

const mockSaved = [
  {
    id: '1',
    keyword: 'fitness',
    platform: 'tiktok' as Platform,
    resultCount: 10,
    savedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    topViews: '48.2M',
  },
  {
    id: '2',
    keyword: 'AI tools',
    platform: 'youtube' as Platform,
    resultCount: 10,
    savedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    topViews: '31.7M',
  },
  {
    id: '3',
    keyword: 'skincare',
    platform: 'instagram' as Platform,
    resultCount: 10,
    savedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    topViews: '22.4M',
  },
];

export default function SavedPage() {
  const [reports, setReports] = useState(mockSaved);
  const [query, setQuery] = useState('');

  const filtered = reports.filter(
    (r) =>
      r.keyword.toLowerCase().includes(query.toLowerCase()) ||
      r.platform.toLowerCase().includes(query.toLowerCase())
  );

  const deleteReport = (id: string) => {
    setReports((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto pb-20 lg:pb-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Saved Reports</h1>
            <p className="text-muted-foreground text-sm">Your bookmarked content research</p>
          </div>
          <Link href="/dashboard">
            <Button size="sm">
              <Search className="w-4 h-4" />
              New Search
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search saved reports..."
            className="w-full h-10 pl-9 pr-4 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </motion.div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <Bookmark className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">No saved reports yet</h3>
          <p className="text-sm text-muted-foreground mb-6">Run a search and save the results to access them here.</p>
          <Link href="/dashboard">
            <Button>Start Searching</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((report, i) => {
            const pc = platformConfig[report.platform];
            return (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Card hover>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-11 h-11 rounded-xl ${pc.bg} border border-border flex items-center justify-center text-xl shrink-0`}>
                          {pc.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-semibold text-foreground capitalize">{report.keyword}</h3>
                            <Badge variant="secondary" className={`text-xs ${pc.color}`}>{pc.name}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              {report.resultCount} results
                            </span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3 text-violet-400" />
                              Top: {report.topViews} views
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(report.savedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => deleteReport(report.id)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Link href={`/dashboard/results?keyword=${encodeURIComponent(report.keyword)}&platform=${report.platform}`}>
                          <Button size="sm">
                            View
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
