import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Now — FG Car Wash Mobile Detailing Miami" },
      { name: "description", content: "Schedule mobile car detailing in Miami-Dade. Call (786) 258-2326 or send us a message — we'll respond fast." },
      { property: "og:title", content: "Book FG Car Wash Mobile Detailing" },
      { property: "og:description", content: "Mobile detailing booked in minutes. Open 24/7." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", service: "Full Interior Detail", notes: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi FG Car Wash! I'd like to book a detail.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AVehicle: ${form.vehicle}%0AService: ${form.service}%0ANotes: ${form.notes}`;
    window.location.href = `sms:7862582326?body=${body}`;
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Book Now</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">Let's get your car looking new.</h1>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us about your ride. We typically respond within minutes — and we can usually schedule for the same week.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a href="tel:7862582326" className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                <div className="font-semibold">(786) 258-2326</div>
              </div>
            </a>
            <a href="sms:7862582326" className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Text</div>
                <div className="font-semibold">Fastest reply</div>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="font-semibold">Open 24 hours</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Service area</div>
                <div className="font-semibold">Miami-Dade County</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl font-bold">Request an appointment</h2>
          <p className="mt-1 text-sm text-muted-foreground">We'll text you to confirm.</p>
          <div className="mt-6 space-y-4">
            {[
              { k: "name", label: "Your name", type: "text", required: true },
              { k: "phone", label: "Phone", type: "tel", required: true },
              { k: "vehicle", label: "Vehicle (year / make / model)", type: "text", required: true },
            ].map((f) => (
              <div key={f.k}>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</label>
                <input
                  required={f.required}
                  type={f.type}
                  value={form[f.k as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                />
              </div>
            ))}
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Service</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
              >
                <option>Express Wash</option>
                <option>Full Interior Detail</option>
                <option>Showroom Package</option>
                <option>Paint Correction</option>
                <option>Ceramic Coating</option>
                <option>Engine Bay Detail</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Notes</label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={3}
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                placeholder="Pet hair, stains, preferred date…"
              />
            </div>
          </div>
          <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
            {sent ? "Opening messages…" : "Send Request"} <Send className="h-4 w-4" />
          </button>
          <p className="mt-3 text-xs text-muted-foreground text-center">
            By submitting you'll open a pre-filled text to (786) 258-2326.
          </p>
        </form>
      </section>
    </SiteLayout>
  );
}
