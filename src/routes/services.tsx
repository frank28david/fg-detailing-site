import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Droplets, Car, Shield, Sparkles, Wrench, SprayCan, Check, ArrowRight, Phone } from "lucide-react";

const SITE_URL = "https://www.fgcarwash.com";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mobile Detailing Prices Miami, Broward & Keys | FG Car Wash" },
      { name: "description", content: "Mobile detailing prices in South Florida: full interior $120, full exterior $120, full detail $200, paint correction from $699, ceramic coating from $699, engine bay $120." },
      { property: "og:title", content: "Services & Pricing — FG Car Wash Mobile Detailing" },
      { property: "og:description", content: "Transparent mobile detailing pricing across Miami-Dade, Broward and Monroe County. At your door, 24/7." },
      { property: "og:url", content: SITE_URL + "/services" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            { "@type": "Service", name: "Full Interior Detailing", provider: { "@type": "LocalBusiness", name: "FG Car Wash Mobile Detailing" }, offers: { "@type": "Offer", price: "120", priceCurrency: "USD" } },
            { "@type": "Service", name: "Full Exterior Detailing", provider: { "@type": "LocalBusiness", name: "FG Car Wash Mobile Detailing" }, offers: { "@type": "Offer", price: "120", priceCurrency: "USD" } },
            { "@type": "Service", name: "Full Detailing (Interior + Exterior)", provider: { "@type": "LocalBusiness", name: "FG Car Wash Mobile Detailing" }, offers: { "@type": "Offer", price: "200", priceCurrency: "USD" } },
            { "@type": "Service", name: "Paint Correction", provider: { "@type": "LocalBusiness", name: "FG Car Wash Mobile Detailing" }, offers: { "@type": "Offer", price: "699", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", minPrice: "699" } } },
            { "@type": "Service", name: "Ceramic Coating", provider: { "@type": "LocalBusiness", name: "FG Car Wash Mobile Detailing" }, offers: { "@type": "Offer", price: "699", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", minPrice: "699" } } },
            { "@type": "Service", name: "Engine Bay Detail", provider: { "@type": "LocalBusiness", name: "FG Car Wash Mobile Detailing" }, offers: { "@type": "Offer", price: "120", priceCurrency: "USD" } },
          ],
        }),
      },
    ],
  }),
  component: Services,
});

const tiers = [
  {
    icon: Car, name: "Full Interior Detailing", price: "$120",
    desc: "Deep interior reset — perfect for daily drivers, family cars and rideshares.",
    includes: ["Deep vacuum & blow-out", "Leather & upholstery clean", "Steam sanitization", "Dashboard, trim & door dressing", "Windows in & out"],
  },
  {
    icon: Droplets, name: "Full Exterior Detailing", price: "$120",
    desc: "Hand-washed, clayed and waxed — a glossy, slick finish that lasts.",
    includes: ["Foam hand wash", "Wheels, tires & wells", "Clay bar decontamination", "Premium wax & tire shine", "Windows polished"],
  },
  {
    icon: Sparkles, name: "Full Detailing (Inside + Out)", price: "$200",
    desc: "Our most popular package — full interior + full exterior in one visit.",
    includes: ["Everything in Interior", "Everything in Exterior", "Steam-cleaned interior", "Clay & wax exterior", "Showroom-ready finish"],
    featured: true,
  },
  {
    icon: Wrench, name: "Paint Correction", price: "From $699",
    desc: "Machine polish to remove swirls, scratches, water spots and oxidation.",
    includes: ["Paint inspection", "Iron & tar decontamination", "1–2 stage machine polish", "Swirl & scratch removal", "Deep gloss enhancement"],
  },
  {
    icon: Shield, name: "Ceramic Coating", price: "From $699",
    desc: "Long-lasting hydrophobic protection with a deep, glass-like gloss.",
    includes: ["Full paint decontamination", "Prep polish", "Pro ceramic application", "Hydrophobic water beading", "Up to 5-year protection"],
  },
  {
    icon: SprayCan, name: "Engine Bay Detail", price: "$120",
    desc: "Safe degrease and dressing for a clean, like-new engine bay.",
    includes: ["Safe degreasing", "Detail brushing", "Rinse & dry", "Plastic & rubber dressing"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Services & Pricing</div>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">Transparent pricing. Showroom results.</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Honest, flat-rate mobile detailing in Miami-Dade. Prices below cover sedans and standard SUVs —
          oversized SUVs, trucks and exotics may vary. Call for an exact estimate.
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

        <div className="mt-12 rounded-2xl border border-border bg-card/40 p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Need a quote for an oversized vehicle or exotic?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Trucks, oversized SUVs, exotics and special requests — call or text us for a custom estimate.</p>
          </div>
          <a href="tel:7862582326" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
            <Phone className="h-4 w-4" /> (786) 258-2326
          </a>
        </div>

        {/* Pricing table — AI-extractable */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Pricing at a glance</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-secondary/40 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold">Package</th>
                  <th className="px-5 py-3 font-semibold">Price</th>
                  <th className="px-5 py-3 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-5 py-3">Full Interior Detailing</td><td className="px-5 py-3 font-semibold">$120</td><td className="px-5 py-3 text-muted-foreground">Daily drivers, family cars, rideshare</td></tr>
                <tr><td className="px-5 py-3">Full Exterior Detailing</td><td className="px-5 py-3 font-semibold">$120</td><td className="px-5 py-3 text-muted-foreground">Wash, clay, wax — glossy finish</td></tr>
                <tr><td className="px-5 py-3">Full Detail (Interior + Exterior)</td><td className="px-5 py-3 font-semibold">$200</td><td className="px-5 py-3 text-muted-foreground">Most popular — full reset</td></tr>
                <tr><td className="px-5 py-3">Paint Correction</td><td className="px-5 py-3 font-semibold">From $699</td><td className="px-5 py-3 text-muted-foreground">Swirls, scratches, oxidation</td></tr>
                <tr><td className="px-5 py-3">Ceramic Coating</td><td className="px-5 py-3 font-semibold">From $699</td><td className="px-5 py-3 text-muted-foreground">1–5 year hydrophobic protection</td></tr>
                <tr><td className="px-5 py-3">Engine Bay Detail</td><td className="px-5 py-3 font-semibold">$120</td><td className="px-5 py-3 text-muted-foreground">Safe degrease + dressing</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Prices for sedans and standard SUVs. Trucks, oversized SUVs and exotics may vary — call (786) 258-2326 for an exact quote.</p>
        </div>

        {/* Service Areas */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Service areas across South Florida</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We're 100% mobile and serve all of Miami-Dade, Broward and Monroe County (the Florida Keys) — 24/7.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold">Miami-Dade County</h3>
              <p className="mt-2 text-sm text-muted-foreground">Miami, Pinecrest, Coral Gables, Brickell, Coconut Grove, Doral, Kendall, Aventura, Miami Beach, Key Biscayne, South Miami, Homestead.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold">Broward County</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Plantation, Davie, Pompano Beach, Sunrise, Weston, Hallandale Beach.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold">Monroe County (Keys)</h3>
              <p className="mt-2 text-sm text-muted-foreground">Key Largo, Tavernier, Islamorada, Marathon, Big Pine Key, Key West. Small travel fee may apply.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
