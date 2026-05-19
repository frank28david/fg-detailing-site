import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.fgcarwash.com";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Mobile Detailing, Ceramic Coating & Service Areas | FG Car Wash" },
      { name: "description", content: "Answers about our mobile detailing process, duration, water/power, ceramic coating, paint decontamination and service across Miami-Dade, Broward and the Keys." },
      { property: "og:title", content: "FAQ — FG Car Wash Mobile Detailing" },
      { property: "og:description", content: "Process, duration, ceramic coating, paint decontamination and service areas — answered." },
      { property: "og:url", content: SITE_URL + "/faq" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/faq" }],
  }),
  component: FAQ,
});

const faqs = [
  {
    q: "How does your mobile detailing process work?",
    a: "From booking to handover: (1) you book by phone, SMS or our contact form and pick a time window; (2) our team arrives at your home, office or condo in a fully equipped van; (3) we walk around the vehicle with you to confirm the package and call out problem areas; (4) we set up and perform the detail using pro-grade products; (5) we do a final inspection together before payment. No surprises, no upsells.",
  },
  {
    q: "How long does a typical detail take?",
    a: "Express Wash: 45–60 minutes. Full Interior Detail: 2–3 hours. Showroom Package (interior + exterior): 3–4 hours. Paint Correction: 4–8 hours depending on stages. Ceramic Coating: 1–2 days (paint decontamination, polishing, coating application and proper curing time). SUVs, trucks and vehicles in heavier condition can add 30–60 minutes.",
  },
  {
    q: "Do I need to provide water or power?",
    a: "No. We are 100% mobile and self-contained — we bring our own water tank, pressure washer, generator and all supplies. If you'd like us to use your spigot or outlet to save a few minutes of setup we're happy to, but it is never required. We can detail in driveways, condo garages and office parking lots.",
  },
  {
    q: "Where should I park the car before you arrive?",
    a: "Ideally in shade, on a flat surface, with around 6–8 feet of clearance around the vehicle so we can open doors and move freely. Direct sun in Miami heat causes water spots and shortens product working time, so a garage or covered spot is best — especially for ceramic coating and paint correction.",
  },
  {
    q: "What should I do to prep my car before the detail?",
    a: "Remove personal items, car seats if you want them deep-cleaned separately, loose change and anything fragile from the cabin and trunk. You do NOT need to vacuum, rinse or pre-clean — that's our job. Just hand us the keys and we'll handle the rest.",
  },
  {
    q: "What is paint decontamination and do I need it?",
    a: "Paint decontamination is the step that removes bonded contaminants a regular wash can't touch — industrial fallout, brake dust, tree sap, overspray and embedded iron particles. We use an iron remover plus a clay bar treatment to leave the clearcoat glass-smooth. Decontamination is mandatory before any paint correction or ceramic coating, and we recommend it 1–2 times per year for daily-driven cars in Miami.",
  },
  {
    q: "What is ceramic coating and how long does it last?",
    a: "Ceramic coating is a liquid polymer that chemically bonds to your clearcoat, creating a hard, hydrophobic layer that protects against UV, bird droppings, road grime, light scratches and water spots. Our coatings last 1–3 years depending on the package, and the finish stays glossier and easier to wash for the entire life of the coating. We always do full decontamination and a prep polish before applying — coating over dirty or swirled paint locks the defects in.",
  },
  {
    q: "Is ceramic coating safe for a baby seat / family car?",
    a: "Yes. Ceramic coating is applied to exterior paint, wheels and glass — it does not touch the cabin. For family cars we also offer interior ceramic and fabric protection that makes spills bead up so they wipe clean instead of staining, which is great with kids and baby seats. All interior products we use are non-toxic once cured.",
  },
  {
    q: "Can you remove pet hair, stains and odors?",
    a: "Yes. Our Full Interior Detail includes hot-water extraction on fabric seats and carpets, steam sanitization, enzymatic odor treatment and dedicated pet-hair removal. Heavy stains, smoke odor or biohazard cleanup may require an upgraded interior package — send us a photo and we'll quote it before we arrive.",
  },
  {
    q: "Do you service trucks, SUVs, exotics and motorcycles?",
    a: "Yes — from compact sedans to full-size SUVs, lifted trucks, Teslas, exotics and motorcycles. Pricing scales with size and condition. For exotics and coated vehicles we use pH-neutral soaps, two-bucket wash method and soft microfiber to protect the finish.",
  },
  {
    q: "What areas of Miami do you cover?",
    a: "All of Miami-Dade County including Pinecrest, Coral Gables, Brickell, Coconut Grove, Doral, Kendall, Aventura, Miami Beach and Key Biscayne. Travel beyond Miami-Dade is available on request and may include a small travel fee.",
  },
  {
    q: "How do I pay and do you offer memberships?",
    a: "We accept all major credit cards, Apple Pay, Zelle, Venmo and cash — paid on completion. We also offer monthly maintenance plans for recurring exterior or interior refreshes at a discounted rate. Ask us when you book.",
  },
  {
    q: "What happens if it rains?",
    a: "Light rain is usually fine — we work under your carport, garage or our pop-up canopy. For heavy storms or lightning we'll proactively reach out to reschedule at no charge. Miami weather is part of the job; flexibility is built in.",
  },
];

function FAQ() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs">
          <HelpCircle className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground">Frequently Asked Questions</span>
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">Everything you wanted to ask.</h1>
        <p className="mt-5 text-muted-foreground max-w-2xl">
          Process, timing, water and power setup, paint decontamination, ceramic coating and how to prep your car —
          all answered. Still curious? Call or text us anytime.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] p-2 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="px-4">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-hero)] p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Didn't see your question?</h2>
              <p className="mt-2 text-muted-foreground">Text or call us — we usually reply within minutes.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:7862582326" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                <Phone className="h-4 w-4" /> (786) 258-2326
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold">
                Book a Detail <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </SiteLayout>
  );
}
