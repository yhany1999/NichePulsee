import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">
                <span className="text-violet-400">Niche</span>
                <span className="text-white">Pulse</span>
              </span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link>
              <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link>
              <Link href="/login" className="text-sm text-gray-400 hover:text-white transition-colors">Login</Link>
              <Link
                href="/signup"
                className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 transition-colors"
              >
                Get Started Free
              </Link>
            </div>
            <Link
              href="/login"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 transition-colors md:hidden"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
            ⚡ Trusted by 12,000+ creators &amp; marketers
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Find viral content{' '}
            <span className="text-violet-400">in any niche</span>
            <br />instantly
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Type a keyword, pick a platform. NichePulse surfaces the top 10 best-performing
            videos and posts so you know exactly what your audience loves — before you create.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="rounded-xl bg-violet-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-violet-500 transition-colors shadow-lg shadow-violet-500/25"
            >
              Start for free — no card needed
            </Link>
            <Link
              href="/dashboard"
              className="rounded-xl border border-white/10 px-8 py-3.5 text-base font-medium text-gray-300 hover:border-white/30 hover:text-white transition-colors"
            >
              View demo dashboard →
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">5 free searches every month · No credit card required</p>

          {/* Mock UI preview */}
          <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-white/10 bg-gray-900 p-6 text-left shadow-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-500">nichepulse.app/dashboard</span>
            </div>
            <div className="space-y-3">
              {[
                'Budget travel tips 🌍 — 4.2M views',
                'Solo female travel safety — 2.8M views',
                'Hidden gems Europe 2025 — 1.9M views',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-gray-800 px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need to win</h2>
            <p className="mt-4 text-gray-400">Stop guessing. Start researching.</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '🎯', title: 'Top 10 Results', desc: 'Instantly see the best-performing content for any keyword on TikTok, YouTube, Instagram, or Facebook.' },
              { icon: '📈', title: 'Trend Score', desc: 'Each result comes with an AI-powered trend score so you know what is rising and what is fading.' },
              { icon: '💡', title: 'Insight Engine', desc: 'Understand WHY content went viral — hooks, formats, audience pain points, and viral patterns.' },
              { icon: '🔖', title: 'Save Reports', desc: 'Bookmark searches and export data as CSV or PDF to share with your team.' },
              { icon: '⚡', title: 'Instant Results', desc: 'Results in under 3 seconds. No waiting, no loading screens that test your patience.' },
              { icon: '🌐', title: 'Multi-Platform', desc: 'TikTok, YouTube, Instagram, and Facebook — all in one place with a single search.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-gray-900 p-6 hover:border-violet-500/30 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-semibold text-white">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-900/50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple, honest pricing</h2>
            <p className="mt-4 text-gray-400">Start free. Upgrade when you are ready.</p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-gray-900 p-8">
              <h3 className="text-lg font-semibold text-white">Free</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">Perfect to get started</p>
              <ul className="mt-6 space-y-3">
                {['5 searches / month', 'Top 10 results', 'TikTok & YouTube', 'Basic trend score'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-emerald-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="mt-8 block rounded-xl border border-white/20 py-3 text-center text-sm font-medium text-white hover:border-white/40 transition-colors">
                Get started free
              </Link>
            </div>

            <div className="relative rounded-2xl border-2 border-violet-500 bg-gray-900 p-8 shadow-lg shadow-violet-500/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-3 py-1 text-xs font-bold text-white">
                MOST POPULAR
              </div>
              <h3 className="text-lg font-semibold text-white">Pro</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">For serious creators</p>
              <ul className="mt-6 space-y-3">
                {['Unlimited searches', 'All 4 platforms', 'AI trend insights', 'Export CSV & PDF', 'Saved reports', 'Priority support'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-emerald-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup?plan=pro" className="mt-8 block rounded-xl bg-violet-600 py-3 text-center text-sm font-semibold text-white hover:bg-violet-500 transition-colors">
                Start 7-day free trial
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gray-900 p-8">
              <h3 className="text-lg font-semibold text-white">Team</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$49</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">For agencies &amp; teams</p>
              <ul className="mt-6 space-y-3">
                {['Everything in Pro', 'Up to 5 seats', 'Team collaboration', 'API access', 'Custom reports', 'Dedicated support'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-emerald-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup?plan=team" className="mt-8 block rounded-xl border border-white/20 py-3 text-center text-sm font-medium text-white hover:border-white/40 transition-colors">
                Start 7-day free trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm text-gray-500">
            © 2025 NichePulse. Built for creators who want to move fast.
          </p>
        </div>
      </footer>
    </div>
  );
}
