import Link from "next/link";
import { navLinks, socials, site } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {site.shortName}
            </h3>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
              {site.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-foreground text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Follow
            </h4>
            <ul className="space-y-2.5">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted hover:text-foreground text-sm transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-foreground-muted text-xs text-center">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
