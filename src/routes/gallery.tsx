import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import aston from "@/assets/gallery-aston-exterior.jpg";
import astonInt from "@/assets/gallery-aston-interior.jpg";
import lambo from "@/assets/gallery-lambo.jpg";
import porsche from "@/assets/gallery-porsche.jpg";
import ferrari from "@/assets/gallery-ferrari-f8.jpg";
import sf90 from "@/assets/gallery-sf90.jpg";
import lineup from "@/assets/gallery-shop-lineup.jpg";
import bmw from "@/assets/gallery-bmw.jpg";
import alfa from "@/assets/gallery-alfa-romeo-giulia-quadrifoglio.jpg";
import escalade from "@/assets/gallery-cadillac-escalade-black.jpg";
import cadillac59 from "@/assets/gallery-cadillac-1959-classic.jpg";
import corvette from "@/assets/gallery-corvette-c8-white.jpg";
import rangeRover from "@/assets/gallery-range-rover-sport.jpg";
import golfGti from "@/assets/gallery-vw-golf-gti.jpg";
import urus from "@/assets/gallery-lamborghini-urus-blue.jpg";
import tesla from "@/assets/gallery-tesla-model3-interior.jpg";
import murakami from "@/assets/gallery-lamborghini-murakami-wrap.jpg";

const SITE_URL = "https://www.fgcarwash.com";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ceramic Coating & Detailing Work in Miami | FG Car Wash" },
      { name: "description", content: "Recent mobile detailing work from FG Car Wash across Miami — Aston Martin, Lamborghini, Porsche GT3, Ferrari F8 & SF90, BMW and daily drivers." },
      { property: "og:title", content: "FG Car Wash Detailing Gallery — Miami" },
      { property: "og:description", content: "Real cars, real results. Recent ceramic coatings, paint corrections and full details." },
      { property: "og:url", content: SITE_URL + "/gallery" },
      { property: "og:image", content: SITE_URL + aston },
      { name: "twitter:image", content: SITE_URL + aston },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/gallery" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "FG Car Wash Mobile Detailing — Recent Work",
          url: SITE_URL + "/gallery",
        }),
      },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: aston, alt: "Aston Martin DB11 mobile detailing and ceramic coating Miami", tall: true },
  { src: lambo, alt: "Lamborghini Huracán EVO Spyder paint correction Miami-Dade" },
  { src: porsche, alt: "Porsche 911 GT3 ceramic coating Coral Gables Miami" },
  { src: astonInt, alt: "Aston Martin DB11 tan leather interior detailing Miami", tall: true },
  { src: ferrari, alt: "Ferrari F8 Spider full detail and ceramic coating Miami Beach" },
  { src: sf90, alt: "Ferrari SF90 Stradale exotic car detailing Miami" },
  { src: lineup, alt: "Exotic car lineup at FG Car Wash mobile detailing shop Miami", tall: true },
  { src: bmw, alt: "BMW 3 Series black exterior mobile detail Pinecrest Miami" },
  { src: alfa, alt: "Alfa Romeo Giulia Quadrifoglio green ceramic coating Miami detailing studio", tall: true },
  { src: escalade, alt: "Cadillac Escalade black SUV mobile detailing and paint protection Miami" },
  { src: cadillac59, alt: "1959 Cadillac classic car detailing and paint restoration Miami" },
  { src: corvette, alt: "Chevrolet Corvette C8 white exterior detail and ceramic coating Florida Keys" },
  { src: rangeRover, alt: "Range Rover Sport mobile detailing and hydrophobic protection Miami", tall: true },
  { src: golfGti, alt: "Volkswagen Golf GTI exterior detail Brickell Miami" },
  { src: urus, alt: "Lamborghini Urus blue SUV ceramic coating Miami exotic detailing" },
  { src: tesla, alt: "Tesla Model 3 white interior deep cleaning and detailing Miami", tall: true },
  { src: murakami, alt: "Lamborghini Huracán Murakami art wrap detailing Miami" },
];

function Gallery() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Work</div>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">Real cars. Real results.</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          From daily drivers to seven-figure exotics — a look at recent ceramic coatings,
          paint corrections and full details across Miami-Dade.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${p.tall ? "row-span-2" : ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-[image:var(--gradient-hero)] p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Want your car in the next photo?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Book a detail and we'll bring the showroom finish to your driveway.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
            Book a Detail <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
