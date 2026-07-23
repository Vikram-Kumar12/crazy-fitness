import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/content";
import { whatsappLink } from "../data/business";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { FaWhatsapp } from "react-icons/fa6";

function FaqItem({ item, isOpen, onToggle, index }) {
  return (
    <div className="border-b border-line">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="flex items-baseline gap-4">
            <span className="font-heading text-sm text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-heading text-lg font-semibold text-content sm:text-xl">
              {item.q}
            </span>
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-content"
          >
            <Plus className="size-4" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pl-9 text-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-y relative overflow-hidden bg-bg">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Left: heading + help card (sticky) */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Questions?"
            title="Everything you need to know"
          />
          <Reveal delay={2} className="mt-8 rounded-3xl border border-line bg-bg-soft p-7">
            <p className="font-heading text-lg font-semibold text-content">
              Still curious?
            </p>
            <p className="mt-2 text-sm text-muted">
              Our team replies within minutes on WhatsApp. Ask us anything about
              plans, timings or a free trial.
            </p>
            <Button
              href={whatsappLink()}
              variant="primary"
              size="sm"
              icon={FaWhatsapp}
              className="mt-5"
            >
              Message us
            </Button>
          </Reveal>
        </div>

        {/* Right: accordion */}
        <Reveal delay={1}>
          <div>
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
