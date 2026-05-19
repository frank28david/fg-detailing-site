import { Link } from "@tanstack/react-router";
import { Phone, Sparkles } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Book Now" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] transition-transform group-hover:scale-110">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight">FG Car Wash</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Mobile Detailing</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm text-foreground bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:7862582326"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4" /> (786) 258-2326
        </a>
        <button
          className="md:hidden rounded-md border border-border p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-2 text-sm hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:7862582326" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground text-center">
              Call (786) 258-2326
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
