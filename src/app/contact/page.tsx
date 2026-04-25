'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Twitter, Zap, Send, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-20" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                Get in <span className="gradient-text">touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a question, feedback, or just want to say hi? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact info */}
              <div className="lg:col-span-2 space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    value: 'hello@nichepulse.io',
                    description: 'We reply within 24 hours',
                    color: 'from-violet-500 to-purple-600',
                  },
                  {
                    icon: MessageSquare,
                    title: 'Live Chat',
                    value: 'In-app support',
                    description: 'Available on all paid plans',
                    color: 'from-blue-500 to-cyan-600',
                  },
                  {
                    icon: Twitter,
                    title: 'Twitter / X',
                    value: '@NichePulse',
                    description: 'DMs are open',
                    color: 'from-sky-500 to-blue-600',
                  },
                ].map((contact) => (
                  <Card key={contact.title}>
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center shrink-0`}>
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{contact.title}</p>
                        <p className="text-sm text-violet-400 font-medium">{contact.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{contact.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-violet-400" />
                      <span className="font-semibold text-foreground text-sm">Response Time</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Free plan: &lt;48 hours<br />
                      Pro plan: &lt;24 hours<br />
                      Team plan: &lt;4 hours
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact form */}
              <div className="lg:col-span-3">
                <Card>
                  <CardContent className="p-8">
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                        <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                            <Input
                              required
                              placeholder="Your name"
                              value={form.name}
                              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
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
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                          <Input
                            required
                            placeholder="How can we help?"
                            value={form.subject}
                            onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                          <textarea
                            required
                            rows={5}
                            placeholder="Tell us more..."
                            value={form.message}
                            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                          />
                        </div>
                        <Button type="submit" size="lg" loading={loading} className="w-full">
                          <Send className="w-4 h-4" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
