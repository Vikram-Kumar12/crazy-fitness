import { motion, useScroll, useSpring } from "framer-motion";

// Slim gradient progress bar pinned to the top of the viewport.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9998] h-[3px] w-full origin-left bg-gradient-to-r from-brand via-orange-400 to-accent"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
