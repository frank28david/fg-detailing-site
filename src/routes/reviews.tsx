import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Star, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.fgcarwash.com";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 5.0 ★ from 131 Customers | FG Car Wash Miami" },
      { name: "description", content: "Read real 5-star Google reviews from FG Car Wash Mobile Detailing customers across Miami-Dade, Broward and the Florida Keys." },
      { property: "og:title", content: "FG Car Wash Reviews — 5.0 from 131 customers" },
      { property: "og:description", content: "131 five-star reviews from South Florida drivers. Here's what they say about us." },
      { property: "og:url", content: SITE_URL + "/reviews" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "FG Car Wash Mobile Detailing",
          url: SITE_URL,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "131",
            bestRating: "5",
          },
          review: [
            { "@type": "Review", author: { "@type": "Person", name: "Janaina" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "THE BEST FG CAR WASH MOBILE DETAILING IN PINECREST! Premium results, professional team, worth every penny." },
            { "@type": "Review", author: { "@type": "Person", name: "L C" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Amazing service and prices. Quick response and easy to schedule from home. 10/10 recommend." },
            { "@type": "Review", author: { "@type": "Person", name: "Candy" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "My car is super clean! Frank responded quickly and Andy did an amazing job, even got stains out of the passenger seat." },
          ],
        }),
      },
    ],
  }),
  component: Reviews,
});

const reviews = [
  {
    name: "Janaina",
    when: "5 months ago",
    text: "THE BEST FG CAR WASH MOBILE DETAILING IN PINECREST! I'm a business owner in the cleaning industry in Miami-Dade and these guys deliver. Premium results, professional team, and worth every penny.",
  },
  {
    name: "L C",
    when: "7 months ago",
    text: "Amazing service and prices. They responded quickly to my inquiry and I was able to make an appointment in the convenience of my own home right away. 10/10 recommend.",
  },
  {
    name: "Candy",
    when: "9 months ago",
    text: "My car is super clean!!! Thank you so much, Frank, for the quick response and scheduling. Andy did a great job — got rid of stains on the passenger seat and other parts of the car. I'm very happy with the service!",
  },
];

function Reviews() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs">
          <span className="flex items-center gap-0.5 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
          </span>
          <span className="text-muted-foreground">Google verified</span>
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">5.0</span> from 131 reviews
        </h1>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          A few words from Miami drivers who let us take care of their cars.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-4 text-sm leading-relaxed">"{r.text}"</p>
            <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{r.name}</span>
              <span>{r.when}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Be our next 5-star review.</h2>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
          Book Your Detail <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
