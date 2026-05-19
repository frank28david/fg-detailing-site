import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Award, Heart, MapPin, Sparkles } from "lucide-react";
import hero from "@/assets/hero-car.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FG Car Wash Mobile Detailing Miami" },
      { name: "description", content: "Family-owned mobile detailing serving Miami-Dade. Meet the team behind FG Car Wash and the values that earned 131 five-star reviews." },
      { property: "og:title", content: "About FG Car Wash Mobile Detailing" },
      { property: "og:description", content: "Miami-grown, customer-obsessed mobile detailing." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About FG</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">Detailers who treat every car like their own.</h1>
          <p className="mt-6 text-muted-foreground text-lg">
            FG Car Wash started in Miami with a simple idea: bring real detailing quality to people's driveways —
            no skipped corners, no sketchy pricing, no rush. Today our team is trusted by hundreds of locals,
            from daily commuters to luxury collectors across Miami-Dade.
          </p>
          <p className="mt-4 text-muted-foreground">
            We're proudly LGBTQ+ friendly, family-owned, and obsessed with leaving every vehicle better than we found it.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
          <img src={hero} alt="FG team detailing a car" className="relative rounded-2xl border border-border" loading="lazy" width={1600} height={1100} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-3">
        {[
          { icon: Award, title: "5.0 ★ rated", desc: "131 verified Google reviews from Miami clients who keep coming back." },
          { icon: MapPin, title: "Fully mobile", desc: "We come to your home or office anywhere in Miami-Dade, 24/7." },
          { icon: Heart, title: "People first", desc: "LGBTQ+ friendly, transparent, and respectful of your time and property." },
        ].map((v) => (
          <div key={v.title} className="rounded-2xl border border-border bg-card p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary mb-4">
              <v.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <Sparkles className="mx-auto h-8 w-8 text-accent" />
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Our promise</h2>
        <p className="mt-4 text-muted-foreground text-lg">
          If you're not thrilled with the result, we'll make it right. That's how we've built a reputation
          one driveway at a time — and we'd love to earn yours next.
        </p>
      </section>
    </SiteLayout>
  );
}
