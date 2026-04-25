'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, MessageCircle, Share2, ExternalLink, Bookmark, BookmarkCheck, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatNumber, formatDate } from '@/lib/utils';
import { thumbnailGradients, platformConfig } from '@/lib/mock-data';
import type { ContentResult } from '@/types';

interface ContentCardProps {
  result: ContentResult;
  index: number;
}

export function ContentCard({ result, index }: ContentCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [showInsight, setShowInsight] = useState(false);
  const gradientIndex = index % thumbnailGradients.length;
  const pc = platformConfig[result.platform];

  const rankColors = ['text-amber-400 bg-amber-500/15', 'text-slate-300 bg-slate-500/15', 'text-orange-400 bg-orange-500/15'];
  const rankColor = index < 3 ? rankColors[index] : 'text-muted-foreground bg-muted';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card hover className="group overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row gap-0">
            {/* Thumbnail */}
            <div className={`relative shrink-0 h-40 sm:h-auto sm:w-36 bg-gradient-to-br ${thumbnailGradients[gradientIndex]} flex items-center justify-center`}>
              <span className="text-4xl opacity-50">
                {pc.icon}
              </span>
              {/* Rank badge */}
              <div className={`absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${rankColor}`}>
                #{result.rank}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 mb-1">
                    {result.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-medium ${pc.color}`}>{result.creatorHandle}</span>
                    <span className="text-xs text-muted-foreground">{formatDate(result.publishDate)}</span>
                    <Badge variant="secondary" className="text-xs">{pc.name}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-violet-400 hover:bg-violet-500/10 transition-all"
                  >
                    {bookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-violet-400" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={result.contentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-4 flex-wrap mb-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Eye className="w-3.5 h-3.5" />
                  <span className="font-medium text-foreground">{formatNumber(result.views)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span className="font-medium text-foreground">{formatNumber(result.likes)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-medium text-foreground">{formatNumber(result.comments)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium text-foreground">{formatNumber(result.shares)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
                  <span className="font-medium text-violet-400">{result.engagementRate}% ER</span>
                </div>
              </div>

              {/* Trend score bar */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-muted-foreground shrink-0">Trend Score</span>
                <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.trendScore}%` }}
                    transition={{ duration: 0.8, delay: index * 0.05 + 0.3 }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
                  />
                </div>
                <span className="text-xs font-semibold text-violet-400 shrink-0">{result.trendScore}</span>
              </div>

              {/* Why it performed */}
              <button
                onClick={() => setShowInsight(!showInsight)}
                className="flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                {showInsight ? 'Hide insight' : 'Why it performed'}
              </button>

              {showInsight && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20"
                >
                  <p className="text-xs text-amber-300/90 leading-relaxed">{result.whyPerformed}</p>
                </motion.div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
