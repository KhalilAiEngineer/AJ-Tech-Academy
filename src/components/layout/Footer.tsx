import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const footerLinks = {
  Platform: [
    { label: "Courses", href: "/courses" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "WhatsApp Us", href: SITE.phoneLink },
    { label: "Call Us", href: `tel:${SITE.phone}` },
    { label: "Email Us", href: `mailto:${SITE.email}` },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.svg"
                alt="AJ Tech Academy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-heading text-lg font-bold text-navy">
                {SITE.name}
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {SITE.tagline}
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-light mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-navy transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-light">
            Built by <span className="text-copper font-semibold">Khalil Ahmad</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
