import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border/40 grain-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + Tagline */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col items-start group mb-3"
            >
              <span className="font-display text-lg font-medium text-foreground group-hover:opacity-70 transition-opacity">
                Café Ikigai
              </span>
              <span className="font-accent text-xs italic text-muted-foreground tracking-widest -mt-0.5">
                Hyderabad
              </span>
            </button>
            <p className="font-accent italic text-sm text-muted-foreground">
              Your reason to pause, sip, and be.
            </p>
          </div>

          {/* Center: Nav */}
          <div className="flex flex-col items-center gap-3">
            {[
              { label: "Story", href: "#about" },
              { label: "Menu", href: "#menu" },
              { label: "Gallery", href: "#gallery" },
              { label: "Visit", href: "#visit" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="font-body text-xs text-muted-foreground/50">
              @cafeikigai
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground/50">
            © 2024 Café Ikigai. All rights reserved.
          </p>
          <p className="font-accent italic text-xs text-muted-foreground/40">
            Crafted with intention · Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
