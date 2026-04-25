'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import {
  Search, BarChart2, Bookmark, Settings, CreditCard,
  Zap, Sun, Moon, LogOut, ChevronLeft, ChevronRight,
  Bell, HelpCircle, TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const navItems = [
  { href: '/dashboard', label: 'Search', icon: Search, badge: null },
  { href: '/dashboard/results', label: 'Results', icon: TrendingUp, badge: null },
  { href: '/dashboard/saved', label: 'Saved Reports', icon: Bookmark, badge: '3' },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings, badge: null },
  { href: '/dashboard/billing', label: 'Billing', icon: CreditCard, badge: null },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <aside
      className={cn(
        'hidden lg:flex flex-col h-screen sticky top-0 border-r border-border bg-card transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-border">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 shrink-0 rounded-xl animated-gradient flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Zap className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <span className="font-bold text-lg truncate">
              <span className="gradient-text">Niche</span>
              <span className="text-foreground">Pulse</span>
            </span>
          )}
        </Link>
      </div>

      {/* Plan badge */}
      {!collapsed && (
        <div className="mx-3 mt-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
            <div>
              <p className="text-xs font-semibold text-violet-400">Free Plan</p>
              <p className="text-xs text-muted-foreground mt-0.5">3 / 5 searches</p>
            </div>
            <Link href="/dashboard/billing">
              <button className="text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors">
                Upgrade →
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Nav items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group',
                active
                  ? 'bg-violet-500/15 text-violet-400 border border-violet-500/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              )}
            >
              <item.icon className={cn('w-5 h-5 shrink-0', active && 'text-violet-400')} />
              {!collapsed && (
                <>
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.badge && (
                    <Badge variant="purple" className="text-xs">{item.badge}</Badge>
                  )}
                </>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-3 py-4 border-t border-border space-y-1">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />}
          {!collapsed && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </Link>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all shadow-sm"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
    </aside>
  );
}
