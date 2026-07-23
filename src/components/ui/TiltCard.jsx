import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useHasFinePointer } from "../../hooks/useMediaQuery";
import { cn } from "../../utils/cn";

// 3D tilt-on-hover card with a moving glare. Glassmorphism + gradient border
// come from className. Falls back to a static card on touch.
export default function TiltCard({ children, className, max = 8, glare = true }) {
  const ref = useRef(null);
  const fine = useHasFinePointer();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });

  // Glare gradient — computed unconditionally to respect rules of hooks.
  const glareBg = useTransform(
    [mx, my],
    ([gx, gy]) =>
      `radial-gradient(340px circle at ${gx * 100}% ${gy * 100}%, rgba(255,255,255,0.18), transparent 60%)`
  );

  const onMove = (e) => {
    if (!fine || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={fine ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      className={cn("relative [transform-style:preserve-3d]", className)}
    >
      {children}
      {glare && fine && (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [transform:translateZ(1px)] group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}
