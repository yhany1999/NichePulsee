import type { ContentResult, TrendInsight, SearchResult, Platform } from '@/types';

const tiktokCreators = [
  { name: 'Alex Rivera', handle: '@alexrivera', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex' },
  { name: 'Sarah Kim', handle: '@sarahkim_', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah' },
  { name: 'Marcus Chen', handle: '@marcuschen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcus' },
  { name: 'Zoe Williams', handle: '@zoewill', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zoe' },
  { name: 'Jake Thompson', handle: '@jakethompson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jake' },
  { name: 'Mia Johnson', handle: '@miajohnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mia' },
  { name: 'Tyler Brooks', handle: '@tylerbrooks', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tyler' },
  { name: 'Emma Davis', handle: '@emmadavis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma' },
  { name: 'Chris Park', handle: '@chrispark', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chris' },
  { name: 'Luna Martinez', handle: '@lunamartinez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=luna' },
];

const thumbnailColors = [
  'from-violet-500 to-purple-700',
  'from-blue-500 to-cyan-600',
  'from-rose-500 to-pink-700',
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-indigo-500 to-blue-700',
  'from-fuchsia-500 to-pink-600',
  'from-sky-500 to-blue-600',
  'from-red-500 to-rose-600',
  'from-green-500 to-emerald-600',
];

function generateWhyPerformed(keyword: string, rank: number): string {
  const reasons = [
    `Strong emotional hook in the first 2 seconds drives ${rank === 1 ? '95%' : '87%'} retention rate`,
    `Uses trending audio that amplifies organic reach by 3x in the ${keyword} niche`,
    `Clear problem-solution format resonates deeply with ${keyword} enthusiasts`,
    `Authentic storytelling with relatable pain points creates high share rate`,
    `Capitalizes on trending ${keyword} format with a unique perspective`,
    `Perfect 60-second format optimized for platform algorithm`,
    `High-value educational content with actionable tips drives saves`,
    `Controversial hook generates massive comment engagement`,
    `Before/after format delivers instant visual proof of results`,
    `Leverages trending sound + ${keyword} niche for maximum discoverability`,
  ];
  return reasons[rank - 1] || reasons[0];
}

function generateResults(keyword: string, platform: Platform): ContentResult[] {
  const titles: Record<string, string[]> = {
    fitness: [
      'I tried working out for 30 days straight. Here\'s what happened...',
      'This 5-minute morning routine changed my life completely',
      'Why 99% of people fail at building muscle (the truth)',
      'I lost 20 pounds in 60 days using THIS simple method',
      'The workout routine that got me shredded in 12 weeks',
      'Stop wasting time at the gym. Do THIS instead',
      'The $0 home workout that beats any gym membership',
      'My honest review after 90 days of daily exercise',
      'The fitness mistake that held me back for 2 years',
      '3 exercises that will transform your body in 30 days',
    ],
    skincare: [
      'I used this $5 drugstore serum for 60 days (shocking results)',
      'The skincare routine dermatologists don\'t want you to know',
      'Stop using these 3 ingredients if you have acne',
      'How I cleared my skin in 2 weeks with one ingredient',
      'Rating viral TikTok skincare hacks: what actually works',
      'The morning skincare routine for glass skin',
      'Why I quit expensive skincare (and what I use now)',
      'Dermatologist reacts to your skincare routines',
      'The ingredient that transformed my skin overnight',
      '10-step Korean skincare routine for beginners',
    ],
    default: [
      `This ${keyword} strategy changed everything for me`,
      `The truth about ${keyword} nobody talks about`,
      `I spent 30 days mastering ${keyword} - here's what I learned`,
      `Why most people fail at ${keyword} (and how to succeed)`,
      `The ${keyword} hack that went viral for a reason`,
      `Beginner's guide to ${keyword} that actually works`,
      `I tested 10 ${keyword} methods so you don't have to`,
      `The ${keyword} mistake costing you time and money`,
      `${keyword} transformation: 0 to expert in 30 days`,
      `The only ${keyword} tutorial you'll ever need`,
    ],
  };

  const titleList = titles[keyword.toLowerCase()] || titles.default;

  return Array.from({ length: 10 }, (_, i) => {
    const creator = tiktokCreators[i];
    const views = Math.floor(Math.random() * 45_000_000) + 1_000_000 * (10 - i);
    const likes = Math.floor(views * (0.05 + Math.random() * 0.1));
    const comments = Math.floor(likes * (0.1 + Math.random() * 0.15));
    const shares = Math.floor(likes * (0.05 + Math.random() * 0.1));
    const engagementRate = parseFloat((((likes + comments + shares) / views) * 100).toFixed(2));
    const trendScore = Math.floor(95 - i * 4 + Math.random() * 5);

    const daysAgo = Math.floor(Math.random() * 30) + 1;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);

    return {
      id: `result-${i + 1}`,
      rank: i + 1,
      title: titleList[i],
      creator: creator.name,
      creatorHandle: creator.handle,
      creatorAvatar: creator.avatar,
      thumbnail: `gradient-${i}`,
      platform,
      views,
      likes,
      comments,
      shares,
      publishDate: date.toISOString(),
      contentUrl: '#',
      engagementRate,
      trendScore,
      whyPerformed: generateWhyPerformed(keyword, i + 1),
      tags: [keyword, platform, 'trending', 'viral'].slice(0, 2 + Math.floor(Math.random() * 2)),
    };
  });
}

function generateInsights(keyword: string): TrendInsight {
  return {
    hooks: [
      `"I tried ${keyword} for 30 days and..."`,
      `"The ${keyword} secret nobody tells you"`,
      `"Stop making these ${keyword} mistakes"`,
      `"This ${keyword} hack changed everything"`,
      `"Why I quit ${keyword} (and what I do instead)"`,
    ],
    formats: [
      'Before/After transformation',
      'Day-in-my-life style',
      'Top 5 tips list format',
      'Reaction/duet format',
      'Tutorial with on-screen text',
    ],
    keywords: [
      keyword,
      `${keyword} tips`,
      `${keyword} for beginners`,
      `${keyword} 2024`,
      `best ${keyword}`,
      `${keyword} hack`,
    ],
    painPoints: [
      `Not knowing where to start with ${keyword}`,
      `Overwhelmed by conflicting ${keyword} advice`,
      `Wasting money on wrong ${keyword} products/methods`,
      `Not seeing results despite consistent effort`,
      `Lack of time to properly research ${keyword}`,
    ],
    patterns: [
      'Emotional hook in first 2-3 seconds',
      'High-contrast thumbnails with bold text',
      'Personal story + actionable advice combo',
      'Trending audio paired with original content',
      'Cliffhanger endings driving comment engagement',
    ],
  };
}

export function generateSearchResult(keyword: string, platform: Platform): SearchResult {
  return {
    keyword,
    platform,
    results: generateResults(keyword, platform),
    insights: generateInsights(keyword),
    searchedAt: new Date().toISOString(),
  };
}

export const thumbnailGradients = thumbnailColors;

export const platformConfig: Record<Platform, { name: string; color: string; bg: string; icon: string }> = {
  tiktok: { name: 'TikTok', color: 'text-pink-400', bg: 'bg-pink-500/10', icon: '🎵' },
  youtube: { name: 'YouTube', color: 'text-red-400', bg: 'bg-red-500/10', icon: '▶️' },
  instagram: { name: 'Instagram', color: 'text-purple-400', bg: 'bg-purple-500/10', icon: '📸' },
  facebook: { name: 'Facebook', color: 'text-blue-400', bg: 'bg-blue-500/10', icon: '👥' },
};
