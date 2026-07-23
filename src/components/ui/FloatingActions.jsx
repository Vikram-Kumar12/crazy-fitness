import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { telLink, whatsappLink } from "../../data/business";
import { getLenis } from "../providers/SmoothScroll";

// Fixed WhatsApp + call quick-actions, plus a back-to-top button that appears
// after scrolling. Positioned to avoid overlapping the footer content.
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-center gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            onClick={toTop}
            aria-label="Back to top"
            className="grid size-11 place-items-center rounded-full border border-line bg-bg/80 text-content backdrop-blur-md transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={telLink}
        aria-label="Call us"
        className="grid size-12 place-items-center rounded-full border border-line bg-bg/80 text-content backdrop-blur-md transition-transform hover:scale-105 sm:hidden"
      >
        <Phone className="size-5" />
      </a>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="group relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <FaWhatsapp className="relative size-7" />
      </a>
    </div>
  );
}
