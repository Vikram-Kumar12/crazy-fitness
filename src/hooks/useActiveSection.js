import { useEffect, useState } from "react";

// Tracks which section id is currently in view using IntersectionObserver.
// Returns the active id string.
export function useActiveSection(ids = [], options = {}) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: options.rootMargin ?? "-45% 0px -50% 0px",
        threshold: options.threshold ?? 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, options.rootMargin, options.threshold]);

  return active;
}
