import { NextRequest, NextResponse } from 'next/server';
import { generateSearchResult } from '@/lib/mock-data';
import type { Platform } from '@/types';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');
  const platform = searchParams.get('platform') as Platform | null;

  if (!keyword || !keyword.trim()) {
    return NextResponse.json({ error: 'keyword is required' }, { status: 400 });
  }

  const validPlatforms: Platform[] = ['tiktok', 'youtube', 'instagram', 'facebook'];
  const resolvedPlatform: Platform = validPlatforms.includes(platform as Platform)
    ? (platform as Platform)
    : 'tiktok';

  await new Promise((r) => setTimeout(r, 200));

  const data = generateSearchResult(keyword.trim(), resolvedPlatform);

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}
