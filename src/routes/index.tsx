import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Star, Phone, Clock, MapPin, Sparkles, Shield, Droplets, Car, ArrowRight, Check } from "lucide-react";
import hero from "@/assets/hero-car.jpg";
import ceramic from "@/assets/ceramic.jpg";
import interior from "@/assets/interior.jpg";
import exterior from "@/assets/exterior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FG Car Wash Mobile Detailing — Premium Miami Detailing" },
      { name: "description", content: "5-star rated mobile car detailing in Miami-Dade. Interior detailing, exterior wash, paint correction & ceramic coating — at your home or office. Open 24/7." },
      { property: "og:title", content: "FG Car Wash Mobile Detailing — Miami" },
      { property: "og:description", content: "Showroom-quality detailing brought to your driveway. Book at (786) 258-2326." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Droplets, title: "Exterior Wash", desc: "Hand wash, foam bath, wheels and tires — leaving your finish spotless.", img: exterior },
  { icon: Car, title: "Interior Detailing", desc: "Deep vacuum, leather conditioning, stain removal and steam refresh.", img: interior },
  { icon: Shield, title: "Ceramic Coating", desc: "Long-lasting hydrophobic protection with a deep, glassy gloss.", img: ceramic },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Mobile car detailing in Miami" className="h-full w-full object-cover opacity-50" width={1600} height={1100} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 md:pt-32 md:pb-44">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs">
            <span className="flex items-center gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
            </span>
            <span className="text-muted-foreground">5.0 · 131 Google reviews</span>
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Miami's premium <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">mobile detailing</span> — at your door.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Interior detailing, exterior wash, paint correction and ceramic coating.
            We bring the showroom finish to your home or office, 24/7.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
              Book a Detail <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:7862582326" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-card">
              <Phone className="h-4 w-4 text-primary" /> (786) 258-2326
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { icon: Star, label: "5.0 rating" },
              { icon: Clock, label: "Open 24/7" },
              { icon: MapPin, label: "Miami-Dade" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 rounded-xl border border-border bg-card/40 backdrop-blur px-3 py-2.5 text-xs">
                <s.icon className="h-4 w-4 text-primary" /> {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Services</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">From spotless to showroom.</h2>
          </div>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={1200} height={900} />
              </div>
              <div className="p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary mb-3">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Why FG</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Detailing that respects your time and your ride.</h2>
            <p className="mt-5 text-muted-foreground">
              We're a Miami-grown team obsessed with finish quality and customer experience.
              Pro-grade products, careful hands, transparent pricing — and we come to you.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Fully mobile — we bring water, power and supplies",
                "Premium products: ceramic-grade sealants and pH-balanced soaps",
                "Quick response & easy scheduling, 24/7",
                "LGBTQ+ friendly, family-owned, Miami-Dade local",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-[image:var(--gradient-primary)]">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
            <img src={ceramic} alt="Ceramic coating gloss" className="relative rounded-2xl border border-border shadow-[var(--shadow-card)]" loading="lazy" width={1200} height={900} />
          </div>
        </div>
      </section>

      {/* REVIEW HIGHLIGHT */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Sparkles className="mx-auto h-8 w-8 text-accent" />
        <p className="mt-6 text-2xl md:text-3xl font-medium leading-snug">
          "My car is super clean! Frank responded quickly and Andy did an amazing job —
          even got out stains on the passenger seat. Truly happy with the service."
        </p>
        <div className="mt-6 text-sm text-muted-foreground">— Candy, Google Review</div>
        <Link to="/reviews" className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline">
          Read all 131 reviews <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-hero)] p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready for a showroom finish?</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">Book online or call us anytime. We'll detail your car right where it's parked.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:7862582326" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold">
                <Phone className="h-4 w-4 text-primary" /> Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
