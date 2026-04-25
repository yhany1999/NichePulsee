'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, TrendingUp, Bookmark, Settings, CreditCard, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { href: '/dashboard', label: 'Search', icon: Search },
  { href: '/dashboard/results', label: 'Results', icon: TrendingUp },
  { href: '/dashboard/saved', label: 'Saved', icon: Bookmark },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  { href: '/dashboard/billing', label: 'Billing', icon: CreditCard },
];

export function DashboardMobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar - mobile only */}
      <header className="lg:hidden flex items-center justify-between h-14 px-4 border-b border-border bg-card">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg animated-gradient flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-base">
            <span className="gradient-text">Niche</span>
            <span className="text-foreground">Pulse</span>
          </span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-card border-b border-border px-4 pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mt-1 transition-all',
                  pathname === item.href
                    ? 'bg-violet-500/15 text-violet-400'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom tab bar - mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border">
        <div className="flex items-center justify-around h-16 max-w-sm mx-auto px-4">
          {navItems.slice(0, 4).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center gap-1 p-2 rounded-xl transition-all',
                  active ? 'text-violet-400' : 'text-muted-foreground'
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
