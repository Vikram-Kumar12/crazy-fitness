import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, homeSections } from "../data/navigation";
import { business, telLink } from "../data/business";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../utils/cn";
import Logo from "../components/ui/Logo";
import Button from "../components/ui/Button";
import ThemeToggle from "../components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const active = useActiveSection(homeSections);
  const onHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (link) => {
    if (link.href.startsWith("/#")) return onHome && active === link.section;
    if (link.href === "/") return onHome && (active === "home" || active === "");
    return pathname === link.href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[100] flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-[1440px] items-center justify-between rounded-2xl px-4 transition-all duration-500 ease-out sm:px-6",
            scrolled
              ? "glass py-2.5 shadow-[0_10px_40px_-16px_rgba(0,0,0,0.4)]"
              : "border-transparent bg-transparent py-4"
          )}
        >
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive(link)
                      ? "text-content"
                      : "text-muted hover:text-content"
                  )}
                >
                  {isActive(link) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-content/8"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle className="hidden sm:grid" />
            <Button
              href={telLink}
              variant="primary"
              size="sm"
              icon={Phone}
              className="hidden md:inline-flex"
              magnetic
            >
              Join Now
            </Button>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full border border-line text-content lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-line"
                  >
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span className="font-display text-4xl tracking-wide text-content">
                        {link.label}
                      </span>
                      <span className="font-heading text-xs text-faint">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-faint">Call us</p>
                  <a href={telLink} className="font-heading text-lg text-content">
                    {business.phoneDisplay}
                  </a>
                </div>
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
