export type Platform = 'tiktok' | 'youtube' | 'instagram' | 'facebook';

export interface ContentResult {
  id: string;
  rank: number;
  title: string;
  creator: string;
  creatorHandle: string;
  creatorAvatar: string;
  thumbnail: string;
  platform: Platform;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  publishDate: string;
  contentUrl: string;
  engagementRate: number;
  trendScore: number;
  whyPerformed: string;
  tags: string[];
}

export interface TrendInsight {
  hooks: string[];
  formats: string[];
  keywords: string[];
  painPoints: string[];
  patterns: string[];
}

export interface SearchResult {
  keyword: string;
  platform: Platform;
  results: ContentResult[];
  insights: TrendInsight;
  searchedAt: string;
}

export interface SavedReport {
  id: string;
  keyword: string;
  platform: Platform;
  resultCount: number;
  savedAt: string;
  data: SearchResult;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}
