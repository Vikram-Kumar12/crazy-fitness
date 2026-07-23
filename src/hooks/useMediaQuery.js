import { useEffect, useState } from "react";

// Subscribe to a media query. SSR-safe (defaults to false on first render).
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

// Convenience wrappers.
export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");
export const usePrefersReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");
// Coarse pointer (touch) — used to disable the custom cursor on mobile/tablet.
export const useHasFinePointer = () =>
  useMediaQuery("(hover: hover) and (pointer: fine)");
