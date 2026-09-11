"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.svg"
              alt="AJ Tech Academy"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="font-heading text-lg font-bold text-navy">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Nav - Pill style */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-sm rounded-full px-2 py-1 border border-border">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-navy text-white"
                    : "text-text-muted hover:text-navy hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-text-muted hover:text-navy transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-navy p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-muted hover:text-navy transition-colors py-3 px-4 rounded-xl text-sm font-medium hover:bg-surface-alt"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-text-muted hover:text-navy transition-colors py-3 px-4 text-sm"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <div className="mt-4 pt-4 border-t border-border">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-6 py-3 bg-navy text-white rounded-full text-sm font-semibold"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
