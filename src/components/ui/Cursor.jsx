import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useHasFinePointer } from "../../hooks/useMediaQuery";
import { useCursor } from "../../context/CursorContext";

// Premium blend-mode cursor: a small dot + a lagging ring that expands over
// interactive elements. Auto-detects links/buttons via a global listener so
// most elements need no wiring. Desktop (fine pointer) only.
export default function Cursor() {
  const fine = useHasFinePointer();
  const { cursor } = useCursor();
  const [autoHover, setAutoHover] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    if (!fine) return;
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const el = e.target;
      const interactive =
        el.closest?.("a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']");
      setAutoHover(Boolean(interactive));
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [fine, x, y]);

  if (!fine) return null;

  const variant = cursor.variant;
  const isHover = autoHover || variant === "hover" || variant === "view" || variant === "drag";
  const label = cursor.label;
  const showLabel = Boolean(label) && (variant === "view" || variant === "drag");

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block" aria-hidden>
      {/* Lagging ring */}
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border-solid border-white mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: showLabel ? 96 : isHover ? 56 : 38,
          height: showLabel ? 96 : isHover ? 56 : 38,
          opacity: hidden ? 0 : 1,
          backgroundColor: showLabel ? "#ff4d00" : "rgba(255,255,255,0)",
          borderWidth: showLabel ? 0 : 1.5,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <AnimatePresence>
          {showLabel && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="text-[10px] font-semibold uppercase tracking-widest text-white"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Instant dot */}
      <motion.div
        className="absolute left-0 top-0 size-2 rounded-full bg-white mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hidden || showLabel ? 0 : 1, scale: isHover ? 0.4 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
