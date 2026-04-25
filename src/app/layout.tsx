import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NichePulse — Discover Viral Content',
  description: 'Find the top-performing content in any niche across TikTok, YouTube, Instagram, and Facebook.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 antialiased">{children}</body>
    </html>
  );
}
