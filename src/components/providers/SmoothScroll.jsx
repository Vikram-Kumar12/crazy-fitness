import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

// Global Lenis smooth scroll, synced to GSAP ScrollTrigger. Exposes the
// instance on window for anchor navigation. Disabled under reduced motion.
let lenisInstance = null;
export const getLenis = () => lenisInstance;

export default function SmoothScroll({ children }) {
  const reduced = usePrefersReducedMotion();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [reduced]);

  // Handle route changes + in-page hash anchors.
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => {
          if (lenisInstance) lenisInstance.scrollTo(el, { offset: -80 });
          else el.scrollIntoView({ behavior: "smooth" });
        });
        return;
      }
    }
    // Scroll to top on route change.
    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return children;
}
