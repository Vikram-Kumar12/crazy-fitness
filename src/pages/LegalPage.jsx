import Seo from "../components/Seo";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { business } from "../data/business";

// Shared template for Privacy Policy & Terms. Content is placeholder legal
// copy — replace with text reviewed by your legal team before launch.
const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    intro: `This Privacy Policy explains how ${business.name} collects, uses and protects the personal information you share with us.`,
    sections: [
      {
        h: "Information we collect",
        p: "We collect information you provide directly — such as your name, phone number and email when you enquire, book a trial or sign up for a membership. We also collect limited usage data through cookies to improve your experience.",
      },
      {
        h: "How we use your information",
        p: "Your information is used to respond to enquiries, manage your membership, send relevant offers (only if you opt in), and improve our services. We never sell your personal data to third parties.",
      },
      {
        h: "Data security",
        p: "We apply industry-standard safeguards to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        h: "Your rights",
        p: `You may request access to, correction of, or deletion of your personal data at any time by emailing ${business.email}.`,
      },
      {
        h: "Cookies",
        p: "We use essential cookies to run the site and optional analytics cookies to understand usage. You can control cookies through your browser settings.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: `These Terms & Conditions govern your use of the ${business.name} website and services. By using our website or facilities, you agree to these terms.`,
    sections: [
      {
        h: "Membership",
        p: "Memberships are personal and non-transferable. Access is subject to the plan you select and the gym's operating rules. Pricing may change with prior notice.",
      },
      {
        h: "Health & safety",
        p: "You confirm you are medically fit to exercise. We recommend consulting a physician before beginning any fitness program. Use all equipment as instructed and at your own risk.",
      },
      {
        h: "Cancellations & freezes",
        p: "Cancellation and freeze policies vary by plan and are outlined at the time of sign-up. Please refer to your membership agreement for specifics.",
      },
      {
        h: "Liability",
        p: `${business.name} is not liable for personal injury or loss of property except where caused by our proven negligence, to the extent permitted by law.`,
      },
      {
        h: "Changes to these terms",
        p: "We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.",
      },
    ],
  },
};

export default function LegalPage({ type = "privacy" }) {
  const data = CONTENT[type];
  const path = type === "privacy" ? "/privacy" : "/terms";

  return (
    <>
      <Seo title={data.title} path={path} description={data.intro} />
      <PageHero title={data.title} crumb={data.title} eyebrow="Legal" />

      <section className="section-y bg-bg">
        <div className="container-x max-w-3xl">
          <Reveal className="text-lg leading-relaxed text-muted">
            {data.intro}
          </Reveal>
          <p className="mt-2 text-sm text-faint">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-12 space-y-10">
            {data.sections.map((s, i) => (
              <Reveal key={s.h} delay={i} as="article">
                <h2 className="font-heading text-xl font-semibold text-content">
                  {s.h}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
              </Reveal>
            ))}
          </div>

          <p className="mt-14 rounded-2xl border border-line bg-bg-soft p-6 text-sm text-muted">
            Questions about this policy? Email us at{" "}
            <a href={`mailto:${business.email}`} className="font-medium text-brand hover:underline">
              {business.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
