import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { plans } from "../data/content";
import { telLink } from "../data/business";
import { formatINR, cn } from "../utils/cn";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { fadeUp } from "../lib/motion";

export default function Membership() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="membership" className="section-y relative overflow-hidden bg-bg">
      {/* Radial brand glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Membership"
          title="Pick your level of crazy"
          lead="Simple, transparent pricing. Cancel anytime. Every plan includes a free assessment and mobile tracking."
          align="center"
        />

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className={cn("text-sm font-medium", !yearly ? "text-content" : "text-muted")}>
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setYearly((y) => !y)}
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            className="relative h-8 w-16 rounded-full border border-line bg-bg-soft p-1"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
              className={cn(
                "block size-6 rounded-full bg-brand shadow",
                yearly ? "ml-8" : "ml-0"
              )}
            />
          </button>
          <span className={cn("text-sm font-medium", yearly ? "text-content" : "text-muted")}>
            Yearly
          </span>
          <span className="rounded-full bg-success/15 px-2.5 py-1 text-xs font-semibold text-success">
            Save 17%
          </span>
        </div>

        {/* Plans */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center"
        >
          {plans.map((plan) => {
            const price = yearly ? Math.round(plan.yearly / 12) : plan.monthly;
            return (
              <motion.article
                key={plan.name}
                variants={fadeUp}
                className={cn(
                  "group relative flex flex-col rounded-3xl border p-8 transition-all duration-500",
                  plan.highlight
                    ? "border-brand/40 bg-secondary text-white shadow-[0_30px_80px_-30px_rgba(255,77,0,0.55)] lg:scale-105"
                    : "border-line bg-bg-soft hover:-translate-y-1 hover:border-brand/40"
                )}
              >
                {plan.highlight && (
                  <>
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-brand/20 to-transparent" />
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                      <Sparkles className="size-3.5" /> Most Popular
                    </span>
                  </>
                )}

                <div className="mb-6">
                  <h3 className={cn("font-display text-4xl tracking-wide", plan.highlight ? "text-white" : "text-content")}>
                    {plan.name}
                  </h3>
                  <p className={cn("mt-1 text-sm", plan.highlight ? "text-white/60" : "text-muted")}>
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-6 flex items-end gap-1">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className={cn("font-heading text-5xl font-bold", plan.highlight ? "text-white" : "text-content")}
                    >
                      {formatINR(price)}
                    </motion.span>
                  </AnimatePresence>
                  <span className={cn("mb-1.5 text-sm", plan.highlight ? "text-white/60" : "text-muted")}>
                    /mo
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          plan.highlight ? "bg-brand text-white" : "bg-brand/10 text-brand"
                        )}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className={cn("text-sm", plan.highlight ? "text-white/85" : "text-muted")}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={telLink}
                  variant={plan.highlight ? "accent" : "outline"}
                  className="w-full"
                  magnetic={false}
                >
                  {plan.cta}
                </Button>
              </motion.article>
            );
          })}
        </motion.div>

        <p className="mt-8 text-center text-sm text-muted">
          Corporate & family plans available.{" "}
          <a href={telLink} className="font-medium text-brand hover:underline">
            Talk to our team →
          </a>
        </p>
      </div>
    </section>
  );
}
