import { motion } from "framer-motion";

// Subtle, persistent build credit. Bottom-left so it never overlaps the
// bottom-right floating actions. Muted by default, brightens on hover.
export default function Watermark() {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-4 left-4 z-[80] hidden items-center gap-2 rounded-full border border-line bg-bg/70 px-3 py-1.5 text-[11px] font-medium text-muted backdrop-blur-md transition-colors hover:text-content sm:inline-flex"
      aria-label="Built by Vikram Kumar"
    >
      <span className="size-1.5 rounded-full bg-brand transition-transform group-hover:scale-125" />
      Built by <span className="text-content">Vikram Kumar</span>
    </motion.a>
  );
}
