import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Star, Phone, Clock, MapPin, Sparkles, Shield, Droplets, Car, ArrowRight, Check } from "lucide-react";
import poster from "@/assets/gallery-aston-exterior.jpg";
import astonInt from "@/assets/gallery-aston-interior.jpg";
import ferrari from "@/assets/gallery-ferrari-f8.jpg";
import lineup from "@/assets/gallery-shop-lineup.jpg";
import lambo from "@/assets/gallery-lambo.jpg";
import porsche from "@/assets/gallery-porsche.jpg";
import sf90 from "@/assets/gallery-sf90.jpg";
import bmw from "@/assets/gallery-bmw.jpg";

const SITE_URL = "https://www.fgcarwash.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FG Car Wash Mobile Detailing — 24/7 Miami, Broward & Keys" },
      { name: "description", content: "5-star mobile car detailing serving Miami-Dade, Broward & Monroe County. Interior $120, exterior $120, full detail $200, ceramic coating from $699. At your door, 24/7." },
      { property: "og:title", content: "FG Car Wash Mobile Detailing — 24/7 South Florida" },
      { property: "og:description", content: "Showroom-quality detailing brought to your driveway across Miami-Dade, Broward & the Keys. Book at (786) 258-2326." },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: SITE_URL + poster },
      { name: "twitter:image", content: SITE_URL + poster },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
  }),
  component: Index,
});

const services = [
  { icon: Car, title: "Full Interior Detail", price: "$120", desc: "Deep vacuum, leather conditioning, stain removal and steam refresh.", img: astonInt },
  { icon: Droplets, title: "Full Exterior Detail", price: "$120", desc: "Hand wash, clay bar, wax, wheels and tires — showroom-slick finish.", img: poster },
  { icon: Shield, title: "Ceramic Coating", price: "From $699", desc: "Long-lasting hydrophobic protection with a deep, glassy gloss.", img: ferrari },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            className="h-full w-full object-cover opacity-60"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 md:pt-32 md:pb-44">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs">
            <span className="flex items-center gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
            </span>
            <span className="text-muted-foreground">5.0 · 140 Google reviews</span>
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Miami's premium <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">mobile detailing</span> — at your door.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Interior detailing, exterior wash, paint correction and ceramic coating.
            We bring the showroom finish to your home or office, 24/7.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground/80">
            Serving Miami-Dade · Broward · Monroe County (Florida Keys) — 24/7 mobile service.
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
            View all services & pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm font-bold bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">{s.price}</div>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
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
            <img src={lineup} alt="FG Car Wash Miami shop with exotic car lineup" className="relative rounded-2xl border border-border shadow-[var(--shadow-card)]" loading="lazy" />
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Recent Work</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">From daily drivers to exotics.</h2>
          </div>
          <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            View full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[lambo, porsche, sf90, bmw].map((src, i) => (
            <Link key={i} to="/gallery" className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
              <img src={src} alt="Recent FG Car Wash detail" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </Link>
          ))}
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
          Read all 140 reviews <ArrowRight className="h-4 w-4" />
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
