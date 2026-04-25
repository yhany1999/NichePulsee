import { NextResponse } from 'next/server';
import { platformConfig } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    platforms: Object.entries(platformConfig).map(([id, config]) => ({
      id,
      ...config,
    })),
  });
}
