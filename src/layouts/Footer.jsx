import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { MapPin, Phone, Mail, ArrowUpRight, Send } from "lucide-react";
import { business, telLink, mailLink, whatsappLink } from "../data/business";
import { navLinks } from "../data/navigation";
import Logo from "../components/ui/Logo";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";

const socialIcon = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  twitter: FaXTwitter,
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  const { address } = business;

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-soft">
      {/* Giant background wordmark — sized to fit the viewport width */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <span className="translate-y-[22%] whitespace-nowrap font-display text-[clamp(2.5rem,13.5vw,12rem)] leading-none text-content/[0.04]">
          CRAZY FITNESS
        </span>
      </div>

      <div className="container-x relative z-10">
        {/* CTA strip */}
        <Reveal className="flex flex-col items-start justify-between gap-8 border-b border-line py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-display leading-[0.9] text-content">
              Ready to <span className="text-gradient-brand">go crazy?</span>
            </h2>
            <p className="mt-3 max-w-md text-muted">
              Book your free trial today. No pressure, no contracts — just come
              feel the difference.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact" size="lg" icon={ArrowUpRight} iconRight>
              Start Free Trial
            </Button>
            <Button
              href={whatsappLink()}
              variant="glass"
              size="lg"
              icon={FaWhatsapp}
            >
              WhatsApp
            </Button>
          </div>
        </Reveal>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {business.description}
            </p>
            <div className="mt-6 flex gap-3">
              {business.socials.map((s) => {
                const Icon = socialIcon[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-1 hover:border-brand hover:text-brand"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>
                  {address.line1}, {address.line2}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </span>
              </li>
              <li>
                <a href={telLink} className="flex items-center gap-3 hover:text-brand">
                  <Phone className="size-4 shrink-0 text-brand" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailLink} className="flex items-center gap-3 hover:text-brand">
                  <Mail className="size-4 shrink-0 text-brand" />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-muted">
              Training tips & member offers. No spam, ever.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-full border border-line bg-bg p-1.5 pl-4 focus-within:border-brand"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="w-full bg-transparent text-sm text-content outline-none placeholder:text-faint"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform hover:scale-105"
              >
                <Send className="size-4" />
              </button>
            </form>
            <div className="mt-6 rounded-2xl border border-line p-4">
              <p className="text-xs uppercase tracking-widest text-faint">Open Hours</p>
              {business.hours.map((h) => (
                <div
                  key={h.day}
                  className="mt-2 flex justify-between text-xs text-muted"
                >
                  <span>{h.day}</span>
                  <span className="text-content">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-brand">
                {l.label}
              </Link>
            ))}
          </div>
          <p>
            Built with <span className="text-brand">♥</span> by{" "}
            <a
              href="#"
              className="font-medium text-content transition-colors hover:text-brand"
            >
              Vikram Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
