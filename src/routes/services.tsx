import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Droplets, Car, Shield, Sparkles, Wrench, SprayCan, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — FG Car Wash Mobile Detailing Miami" },
      { name: "description", content: "Mobile detailing services in Miami: interior detailing, exterior hand wash, clay & wax, paint correction, and long-lasting ceramic coating." },
      { property: "og:title", content: "Services — FG Car Wash Mobile Detailing" },
      { property: "og:description", content: "Interior, exterior, paint correction & ceramic coating — all done at your home or office." },
    ],
  }),
  component: Services,
});

const tiers = [
  {
    icon: Droplets, name: "Express Wash", price: "From $45",
    desc: "Quick refresh: hand wash, tires, windows, microfiber dry.",
    includes: ["Foam hand wash", "Wheels & tires", "Windows in & out", "Microfiber dry"],
  },
  {
    icon: Car, name: "Full Interior Detail", price: "From $129",
    desc: "Complete interior reset — perfect for daily drivers and family cars.",
    includes: ["Deep vacuum", "Leather/upholstery clean", "Steam sanitization", "Dashboard & trim dressing"],
    featured: true,
  },
  {
    icon: Sparkles, name: "Showroom Package", price: "From $199",
    desc: "Full interior + exterior detail with clay bar and carnauba wax.",
    includes: ["Everything in interior", "Clay bar treatment", "Premium wax", "Tire shine"],
  },
  {
    icon: Wrench, name: "Paint Correction", price: "From $349",
    desc: "Machine polish to remove swirls, scratches and oxidation.",
    includes: ["Paint inspection", "1–2 stage polish", "Swirl removal", "Gloss enhancement"],
  },
  {
    icon: Shield, name: "Ceramic Coating", price: "From $599",
    desc: "Long-lasting hydrophobic protection with deep glass-like gloss.",
    includes: ["Decontamination", "Prep polish", "Ceramic application", "Up to 3-year protection"],
  },
  {
    icon: SprayCan, name: "Engine Bay Detail", price: "From $79",
    desc: "Safe degrease and dressing for a clean, like-new engine bay.",
    includes: ["Safe degreasing", "Detail brushing", "Rinse & dry", "Plastic & rubber dressing"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Services & Pricing</div>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">Detailing packages built for every ride.</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Transparent pricing. Final quote depends on vehicle size and condition — call us for an exact estimate.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border p-6 transition-all hover:-translate-y-1 ${t.featured ? "border-primary bg-card shadow-[var(--shadow-glow)]" : "border-border bg-card shadow-[var(--shadow-card)]"}`}>
              {t.featured && (
                <div className="absolute -top-3 left-6 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">Most Popular</div>
              )}
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary">
                <t.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{t.name}</h3>
              <div className="mt-1 text-2xl font-bold bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">{t.price}</div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-5 space-y-2">
                {t.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Book this package <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
