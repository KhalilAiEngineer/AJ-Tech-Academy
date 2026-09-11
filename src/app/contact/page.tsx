"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Card } from "@/components/ui";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">
            Contact Us
          </h1>
          <p className="text-cream-muted text-lg max-w-2xl mx-auto">
            Have questions? We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-copper" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-cream mb-1">Phone</h3>
                  <a href={`tel:${SITE.phone}`} className="text-cream-muted hover:text-copper transition-colors text-sm">
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-copper" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-cream mb-1">Email</h3>
                  <a href={`mailto:${SITE.email}`} className="text-cream-muted hover:text-copper transition-colors text-sm">
                    {SITE.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-copper" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-cream mb-1">Location</h3>
                  <p className="text-cream-muted text-sm">Pakistan (Remote-First)</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-copper/5 border-copper/20">
              <h3 className="font-heading font-bold text-cream mb-2">Quick Contact</h3>
              <p className="text-cream-muted text-sm mb-4">
                Need immediate help? Chat with us on WhatsApp.
              </p>
              <a
                href={SITE.phoneLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer px-6 py-3 text-base bg-copper text-bg hover:bg-copper-dark w-full"
              >
                Chat on WhatsApp
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-copper mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-cream mb-2">Message Sent!</h2>
                  <p className="text-cream-muted mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-bg border border-cream-faint rounded-xl text-cream placeholder:text-cream-muted focus:outline-none focus:border-copper/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-bg border border-cream-faint rounded-xl text-cream placeholder:text-cream-muted focus:outline-none focus:border-copper/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-bg border border-cream-faint rounded-xl text-cream placeholder:text-cream-muted focus:outline-none focus:border-copper/50"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Subject</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-bg border border-cream-faint rounded-xl text-cream focus:outline-none focus:border-copper/50"
                      >
                        <option value="">Select a topic</option>
                        <option value="courses">Course Inquiry</option>
                        <option value="enrollment">Enrollment</option>
                        <option value="enterprise">Enterprise / Teams</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cream mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-bg border border-cream-faint rounded-xl text-cream placeholder:text-cream-muted focus:outline-none focus:border-copper/50 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto group">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
