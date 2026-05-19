import { Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)]">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold">FG Car Wash</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mobile Detailing</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Premium mobile car detailing in Miami-Dade. We bring the showroom finish to your home or office —
            interior detailing, exterior wash, paint correction & ceramic coating.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-accent" /> 5.0 ★ · 131 Google Reviews
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Book Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:7862582326" className="hover:text-foreground">(786) 258-2326</a></li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Open 24 hours</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Miami-Dade, FL</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FG Car Wash Mobile Detailing. All rights reserved. · LGBTQ+ friendly.
      </div>
    </footer>
  );
}
