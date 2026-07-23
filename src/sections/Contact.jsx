import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Loader2, CheckCircle2, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { business, telLink, whatsappLink } from "../data/business";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { cn } from "../utils/cn";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\s-]+$/, "Only digits and + - allowed"),
  email: z.string().email("Enter a valid email"),
  goal: z.string().min(1, "Select a goal"),
  message: z.string().max(500).optional(),
});

const goals = ["Weight Loss", "Muscle Gain", "General Fitness", "Personal Training", "Just exploring"];

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-content">{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 block text-xs text-danger"
          >
            {error.message}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-content outline-none transition-colors placeholder:text-faint focus:border-brand";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), defaultValues: { goal: "" } });

  const onSubmit = async () => {
    setStatus("loading");
    // Simulated submit — wire to your backend / WhatsApp API / email service.
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  const { address } = business;

  return (
    <section id="contact" className="section-y relative overflow-hidden bg-bg-soft">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in touch"
          title="Start your transformation"
          lead="Book a free trial, ask a question, or just drop by. We'd love to show you around."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: info + map */}
          <Reveal className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={telLink}
                className="group flex flex-col justify-between rounded-3xl border border-line bg-bg p-6 transition-all hover:-translate-y-1 hover:border-brand/40"
              >
                <Phone className="size-6 text-brand" />
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-widest text-faint">Call us</p>
                  <p className="font-heading text-lg font-semibold text-content">
                    {business.phoneDisplay}
                  </p>
                </div>
              </a>
              <a
                href={whatsappLink()}
                className="group flex flex-col justify-between rounded-3xl border border-line bg-bg p-6 transition-all hover:-translate-y-1 hover:border-success/40"
              >
                <FaWhatsapp className="size-6 text-success" />
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-widest text-faint">WhatsApp</p>
                  <p className="font-heading text-lg font-semibold text-content">
                    Chat instantly
                  </p>
                </div>
              </a>
            </div>

            <div className="rounded-3xl border border-line bg-bg p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <div>
                  <p className="font-heading font-semibold text-content">Visit the gym</p>
                  <p className="mt-1 text-sm text-muted">
                    {address.line1}, {address.line2}, {address.city}, {address.state} {address.zip}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand" />
                <div className="text-sm text-muted">
                  {business.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-6">
                      <span>{h.day}</span>
                      <span className="text-content">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-line">
              <iframe
                title="Crazy Fitness Gym location"
                src={business.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={1} className="relative">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative overflow-hidden rounded-3xl border border-line bg-bg p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" error={errors.name}>
                  <input {...register("name")} className={inputCls} placeholder="Rohan Verma" />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input {...register("phone")} className={inputCls} placeholder="+91 98765 43210" />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Email" error={errors.email}>
                  <input {...register("email")} type="email" className={inputCls} placeholder="you@email.com" />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Your goal" error={errors.goal}>
                  <select {...register("goal")} className={cn(inputCls, "appearance-none")}>
                    <option value="" disabled>
                      Select a goal
                    </option>
                    {goals.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message (optional)" error={errors.message}>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={cn(inputCls, "resize-none")}
                    placeholder="Tell us a bit about what you're looking for…"
                  />
                </Field>
              </div>

              <div className="mt-7">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  magnetic={false}
                  disabled={status === "loading"}
                  icon={status === "loading" ? Loader2 : Send}
                >
                  {status === "loading" ? "Sending…" : "Book my free trial"}
                </Button>
              </div>

              {/* Success overlay */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-bg/95 p-8 text-center backdrop-blur-sm"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="grid size-16 place-items-center rounded-full bg-success/15 text-success"
                    >
                      <CheckCircle2 className="size-8" />
                    </motion.span>
                    <div>
                      <p className="font-heading text-xl font-bold text-content">
                        You're in! 🎉
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        We'll reach out within a few hours to schedule your visit.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
