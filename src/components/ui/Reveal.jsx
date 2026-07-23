import { motion } from "framer-motion";
import { fadeUp, viewport } from "../../lib/motion";

// Scroll-triggered reveal wrapper. Pass a variants object or use the default
// fade-up. `delay` staggers manually; `as` swaps the element.
export default function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  as = "div",
  amount = 0.25,
  ...props
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ ...viewport, amount }}
      custom={delay}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
