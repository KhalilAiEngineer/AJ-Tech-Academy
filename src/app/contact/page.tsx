"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

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
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">Get in Touch</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-4">
            Contact <span className="italic">Us</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Have questions? We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {[
              { icon: Phone, title: "Phone", content: SITE.phone, href: `tel:${SITE.phone}` },
              { icon: Mail, title: "Email", content: SITE.email, href: `mailto:${SITE.email}` },
              { icon: MapPin, title: "Location", content: "Pakistan (Remote-First)", href: "#" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-1">{item.title}</h3>
                    <a href={item.href} className="text-text-muted hover:text-copper transition-colors text-sm">{item.content}</a>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-copper/5 rounded-2xl p-6 border border-copper/20">
              <h3 className="font-heading font-bold text-navy mb-2">Quick Contact</h3>
              <p className="text-text-muted text-sm mb-4">Need immediate help? Chat with us on WhatsApp.</p>
              <a href={SITE.phoneLink} target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-xl text-center font-medium text-sm transition-colors">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-copper mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-navy mb-2">Message Sent!</h2>
                  <p className="text-text-muted mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }} className="px-6 py-2.5 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Full Name</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-navy placeholder:text-text-light focus:outline-none focus:border-copper/50" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-navy placeholder:text-text-light focus:outline-none focus:border-copper/50" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Phone (Optional)</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-navy placeholder:text-text-light focus:outline-none focus:border-copper/50" placeholder="+92 300 1234567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Subject</label>
                      <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-navy focus:outline-none focus:border-copper/50">
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
                    <label className="block text-sm font-medium text-navy mb-2">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-navy placeholder:text-text-light focus:outline-none focus:border-copper/50 resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white rounded-full font-semibold hover:bg-navy-light transition-colors group">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
