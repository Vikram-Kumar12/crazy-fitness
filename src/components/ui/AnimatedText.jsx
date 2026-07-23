import { motion } from "framer-motion";
import { wordContainer, wordChild } from "../../lib/motion";
import { cn } from "../../utils/cn";

// Word-by-word masked reveal. Each word rises from behind a clip mask.
// Works for headings; keeps text selectable + accessible (real characters).
export default function AnimatedText({
  text,
  as = "h2",
  className,
  wordClassName,
  once = true,
  amount = 0.5,
}) {
  const Tag = motion[as] ?? motion.h2;
  const words = text.split(" ");

  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      variants={wordContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="mr-[0.25em] inline-flex overflow-hidden pb-[0.12em]"
          aria-hidden
        >
          <motion.span variants={wordChild} className={cn("inline-block", wordClassName)}>
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
