'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Zap, Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  'No credit card required',
  '5 free searches every month',
  'Instant results in under 3 seconds',
  'Cancel anytime',
];

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'free';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    router.push('/dashboard');
  };

  return (
    <Card className="glow-sm">
      <CardContent className="p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">Create your account</h2>
          {plan !== 'free' && (
            <p className="text-sm text-violet-400 mt-1">Starting {plan} plan — 7-day free trial</p>
          )}
        </div>

        {/* Social login */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button variant="outline" size="md" className="w-full gap-2" type="button">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </Button>
          <Button variant="outline" size="md" className="w-full gap-2" type="button">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </Button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-card px-3 text-muted-foreground">or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <Input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              icon={<User className="w-4 h-4" />}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <Input
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              icon={<Mail className="w-4 h-4" />}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <Input
              type={showPassword ? 'text' : 'password'}
              required
              minLength={8}
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              icon={<Lock className="w-4 h-4" />}
              suffix={
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
            />
          </div>

          <Button type="submit" size="lg" variant="gradient" loading={loading} className="w-full mt-2">
            Create Account
            <ArrowRight className="w-4 h-4" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By signing up you agree to our{' '}
            <Link href="#" className="text-violet-400 hover:underline">Terms</Link> and{' '}
            <Link href="#" className="text-violet-400 hover:underline">Privacy Policy</Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background p-4">
      <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/5 blur-3xl" />

      <div className="relative w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: benefits */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl animated-gradient flex items-center justify-center shadow-lg shadow-violet-500/30">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-2xl">
              <span className="gradient-text">Niche</span>
              <span className="text-foreground">Pulse</span>
            </span>
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-4">
            Start discovering viral content{' '}
            <span className="gradient-text">for free</span>
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Join 12,000+ creators and marketers who use NichePulse to find winning content in seconds.
          </p>

          <ul className="space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5">
            <p className="text-sm text-muted-foreground italic">
              &ldquo;NichePulse cut my research time from 3 hours to 10 minutes. My views have tripled!&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 rounded-lg bg-violet-500 flex items-center justify-center text-white text-xs font-bold">J</div>
              <div>
                <p className="text-xs font-semibold text-foreground">Jessica M.</p>
                <p className="text-xs text-muted-foreground">Content Creator, 2.3M followers</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-6 lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl animated-gradient flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl">
                <span className="gradient-text">Niche</span>
                <span className="text-foreground">Pulse</span>
              </span>
            </Link>
          </div>

          <Suspense fallback={<div className="h-96 rounded-2xl bg-card border border-border animate-pulse" />}>
            <SignupForm />
          </Suspense>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-violet-400 hover:text-violet-300 font-medium">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
