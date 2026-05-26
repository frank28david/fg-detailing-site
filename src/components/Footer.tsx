import { Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo-crane.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FG Car Wash Mobile Detailing logo" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-bold">FG Car Wash</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mobile Detailing</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Premium 24/7 mobile car detailing serving Miami-Dade, Broward & Monroe County (Florida Keys).
            Interior detailing, exterior wash, paint correction & ceramic coating — at your door.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-accent" /> 5.0 ★ · 140 Google Reviews
            </div>
            <a
              href="https://www.instagram.com/fg_car_wash_mobile_detailing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FG Car Wash on Instagram"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs hover:border-primary"
            >
              <Instagram className="h-3.5 w-3.5 text-primary" /> Instagram
            </a>
            <a
              href="https://www.yelp.com/biz/fg-car-wash-south-miami"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FG Car Wash on Yelp"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs hover:border-primary"
            >
              Yelp
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services & Pricing</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Book Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:7862582326" className="hover:text-foreground">(786) 258-2326</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> <a href="mailto:fgcarwash28@gmail.com" className="hover:text-foreground">fgcarwash28@gmail.com</a></li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Open 24 hours · 7 days</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> <span>Miami-Dade · Broward · Monroe County, FL</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FG Car Wash Mobile Detailing · Serving South Florida 24/7 · LGBTQ+ friendly.
      </div>
    </footer>
  );
}
