import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavbarProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
  activeSection: string;
}

const navLinks = [
  { label: "Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar({ theme, onThemeToggle, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const next = window.scrollY > 40;
        setScrolled((prev) => (prev === next ? prev : next));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const overHero = !scrolled;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md",
        // Avoid transition-all: animating backdrop-filter causes scroll jank.
        "transition-[padding,box-shadow] duration-200 ease-out motion-reduce:transition-none",
        overHero
          ? "border-b border-white/20 bg-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-black/40"
          : "border-b border-border/40 bg-background/85 py-3 shadow-sm dark:bg-background/80"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10",
          overHero ? "py-4 sm:py-5" : ""
        )}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-start group text-left"
        >
          <span
            className={cn(
              "font-display text-xl font-medium tracking-tight transition-opacity group-hover:opacity-90",
              overHero ? "text-white" : "text-foreground"
            )}
          >
            Café Ikigai
          </span>
          <span
            className={cn(
              "font-accent text-xs italic tracking-widest -mt-0.5",
              overHero ? "text-white/60" : "text-muted-foreground"
            )}
          >
            Hyderabad
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "nav-link font-body text-sm font-medium tracking-[0.12em] transition-colors duration-150",
                overHero
                  ? activeSection === link.href.slice(1)
                    ? "text-white active"
                    : "text-white/75 hover:text-white"
                  : activeSection === link.href.slice(1)
                    ? "text-foreground active"
                    : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Theme Toggle + Mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onThemeToggle}
            className={cn(
              "relative flex h-10 w-10 items-center justify-center rounded-full border transition-[background-color,border-color] duration-200",
              overHero
                ? "border-white/35 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                : "border-border/60 bg-background/50 backdrop-blur-sm hover:bg-muted/60"
            )}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.span
                  key="moon"
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon size={15} className={overHero ? "text-white/90" : "text-foreground/80"} />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun size={15} className={overHero ? "text-white/90" : "text-foreground/80"} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile menu button */}
          <button
            className={cn(
              "md:hidden flex h-10 w-10 items-center justify-center",
              overHero ? "text-white/90" : "text-foreground/80"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden backdrop-blur-md bg-background/90 border-t border-border/30"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-body text-sm font-medium text-foreground/80 hover:text-foreground py-2 border-b border-border/20 last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
