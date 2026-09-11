"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

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
          ? "bg-bg/90 backdrop-blur-md border-b border-cream-faint"
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
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="font-heading text-xl font-bold text-cream">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream-muted hover:text-cream transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-cream-muted hover:text-copper transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <a
              href={SITE.phoneLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer px-4 py-2 text-sm bg-copper text-bg hover:bg-copper-dark shadow-[0_0_20px_rgba(227,140,53,0.3)] hover:shadow-[0_0_30px_rgba(227,140,53,0.5)]"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-cream-faint">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-cream-muted hover:text-cream transition-colors py-2 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-cream-muted hover:text-copper transition-colors py-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-cream-faint">
              <a
                href={SITE.phoneLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer px-4 py-2 text-sm bg-copper text-bg hover:bg-copper-dark w-full"
              >
                Enroll Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
