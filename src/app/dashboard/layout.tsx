import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { DashboardMobileNav } from '@/components/layout/dashboard-mobile-nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | NichePulse Dashboard',
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardMobileNav />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
