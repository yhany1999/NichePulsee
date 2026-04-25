import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CtaSection } from '@/components/home/cta-section';
import { Users, Target, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about NichePulse — our mission to help creators and marketers discover viral content faster.',
};

const stats = [
  { label: 'Active Users', value: '12,000+' },
  { label: 'Searches Daily', value: '50,000+' },
  { label: 'Platforms Supported', value: '4' },
  { label: 'Avg. Time Saved', value: '3 hrs/week' },
];

const values = [
  {
    icon: Target,
    title: 'Precision Over Noise',
    description: 'We cut through the clutter and deliver exactly what matters: the content that is actually working right now in your niche.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Speed is Everything',
    description: 'Trends move fast. Our platform is built for speed so you can act on opportunities before they peak.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Users,
    title: 'Built for Creators',
    description: 'Every feature is designed with content creators, marketers, and brands in mind — no fluff, only tools that drive results.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Globe,
    title: 'Multi-Platform Vision',
    description: 'The internet is not one platform. We give you a unified view across TikTok, YouTube, Instagram, and Facebook.',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              We&apos;re building the{' '}
              <span className="gradient-text">intelligence layer</span>
              {' '}for creators
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              NichePulse was born from a simple frustration: finding what content actually works
              in your niche was taking too long. We built the tool we wished existed.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-y border-border bg-card">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We believe that every creator, marketer, and brand deserves access to the intelligence that
                top agencies spend thousands of dollars to gather manually. NichePulse democratizes content
                research — making it instant, affordable, and accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <Card key={value.title} hover>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
