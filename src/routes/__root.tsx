import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logoCrane from "@/assets/logo-crane.png";

const SITE_URL = "https://www.fgcarwash.com";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoDetailing"],
  "@id": `${SITE_URL}#business`,
  name: "FG Car Wash Mobile Detailing",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}${logoCrane}`,
  url: SITE_URL,
  telephone: "+1-786-258-2326",
  email: "fgcarwash28@gmail.com",
  priceRange: "$$",
  description:
    "Premium 24/7 mobile car detailing serving Miami-Dade, Broward and Monroe counties. Interior, exterior, paint correction and ceramic coating at your home or office.",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
    { "@type": "AdministrativeArea", name: "Broward County, FL" },
    { "@type": "AdministrativeArea", name: "Monroe County, FL" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://www.instagram.com/fg_car_wash_mobile_detailing",
    "https://www.yelp.com/biz/fg-car-wash-south-miami",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "131",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FG Car Wash Mobile Detailing — 24/7 Miami, Broward & Keys" },
      {
        name: "description",
        content:
          "Premium mobile car detailing serving Miami-Dade, Broward & Monroe County 24/7. Interior, exterior, paint correction & ceramic coating brought to your driveway.",
      },
      { name: "author", content: "FG Car Wash Mobile Detailing" },
      { name: "keywords", content: "mobile detailing Miami, ceramic coating Miami, paint correction Miami, car wash Broward, mobile detailing Fort Lauderdale, mobile detailing Key Largo, FG Car Wash" },
      { property: "og:site_name", content: "FG Car Wash Mobile Detailing" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "geo.region", content: "US-FL" },
      { name: "geo.placename", content: "Miami" },
    ],
    links: [
      { rel: "icon", href: logoCrane, type: "image/png" },
      { rel: "apple-touch-icon", href: logoCrane },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
