import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FeaturesSection } from '@/components/home/features-section';
import { CtaSection } from '@/components/home/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore all NichePulse features: smart search, performance ranking, trend insights, multi-platform analysis, and export tools.',
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/5 text-sm text-violet-400 mb-6">
              Built for serious creators
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Every tool you need to{' '}
              <span className="gradient-text">dominate your niche</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              NichePulse combines powerful analytics, AI-driven insights, and multi-platform research
              into one clean, fast dashboard.
            </p>
          </div>
        </section>
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
