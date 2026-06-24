import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 1. High-End SEO & GEO Metadata
export const metadata: Metadata = {
  title: "Business Owners Night | Hartford Yard Goats | Encompass Group",
  description: "Join Encompass Group and trusted partners for an exclusive Business Owners Night at Dunkin' Park in Hartford, CT. Build relationships, share ideas, and enjoy the game.",
  keywords: ["Business Owners Event Hartford", "Encompass Group", "Hartford Yard Goats VIP", "Wealth Management CT", "Exit Planning", "Networking Hartford CT", "Business Succession", "Dunkin Park Private Pavilion"],
  openGraph: {
    title: "Business Owners Night at the Hartford Yard Goats",
    description: "Exclusive networking event for business owners and trusted advisors.",
    siteName: "Encompass Group",
    images: [{ url: "/consult.png", width: 800, height: 600 }],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "geo.region": "US-CT",
    "geo.placename": "Hartford",
    "geo.position": "41.7709;-72.6738", // Dunkin Park Coordinates
    "ICBM": "41.7709, -72.6738",
  }
};

// 2. AI Structured Data (JSON-LD)
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Business Owners Night at the Hartford Yard Goats",
  "description": "An exclusive evening of networking, conversation, and baseball in a private pavilion for business owners.",
  "location": {
    "@type": "Place",
    "name": "Dunkin' Park",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1214 Main St",
      "addressLocality": "Hartford",
      "addressRegion": "CT",
      "postalCode": "06103",
      "addressCountry": "US"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Encompass Group",
    "url": "https://trustencompass.com"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}