import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://kawsarahmad.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kawsar Ahmad — WordPress & Shopify Developer, SEO Expert",
  description:
    "Kawsar Ahmad is a professional WordPress developer, Shopify developer, and Website & YouTube SEO expert. Explore an interactive portfolio of premium web projects.",
  keywords: [
    "Kawsar Ahmad",
    "WordPress Developer",
    "Shopify Developer",
    "Website SEO Expert",
    "YouTube SEO Expert",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Kawsar Ahmad" }],
  openGraph: {
    title: "Kawsar Ahmad — WordPress & Shopify Developer, SEO Expert",
    description:
      "Interactive portfolio of Kawsar Ahmad — WordPress, Shopify, and SEO specialist.",
    url: siteUrl,
    siteName: "Kawsar Ahmad",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kawsar Ahmad — WordPress & Shopify Developer, SEO Expert",
    description:
      "Interactive portfolio of Kawsar Ahmad — WordPress, Shopify, and SEO specialist.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kawsar Ahmad",
  jobTitle: [
    "WordPress Developer",
    "Shopify Developer",
    "Website SEO Expert",
    "YouTube SEO Expert",
  ],
  url: siteUrl,
  email: "kahmad9966@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/kawser-miah-91928234b/",
    "https://www.facebook.com/mhmdkwthr.ahmd.177996",
    "https://t.me/kawsar_ahmad_999",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-black text-ink">
        {children}
      </body>
    </html>
  );
}
