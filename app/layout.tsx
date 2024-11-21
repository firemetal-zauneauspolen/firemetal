import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layouts/header/header";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layouts/footer/footer";
import { ScrollToTopButton } from "@/components/islets/pages/shared/scroll-to-top-button";
import { Analytics } from '@vercel/analytics/next';
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zäune aus Polen - Faire preisen, Garantie Hochwertige.",
  description:
    "Wir spezialisieren uns auf: ⭐Zäune aus Polen, ⭐Metallzäune ⭐und vieles mehr. Wir bieten: ✅Kostenlos Aufmaß , ✅Online Preiskalkulation ✅ und Hochwertige.",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu"),
  alternates: {
    canonical: "/",
  },
  generator: "FireMetal - Metallzäune",
  keywords: [
    "Zäune aus Polen",
    "Metallzäune",
    "Gartenzäune",
    "Zäune",
    "Gartenzäunen",
    "Doppelstabmatten",
    "Geländer",
    "Carports",
    "Gitter",
    "Fenstergitte",
    "Metallkonstruktionen",
    "Moderne zäune",
    "Attraktiven Preisen",
    "Günstige Preisen",
  ],
  openGraph: {
    title: "Zäune aus Polen - Faire preisen, Garantie Hochwertige.",
    description:
      "Wir spezialisieren uns auf: ⭐Zäune aus Polen, ⭐Metallzäune ⭐und vieles mehr. Wir bieten: ✅Kostenlos Aufmaß , ✅Online Preiskalkulation ✅ und Hochwertige.",
    locale: "de_DE",
    type: "website",
    url: "https://firemetal.eu",
    siteName: "Firemetal - Zäune aus Polen",
    images: [
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fmetamorphose%2Fhome-vor-metamorphose.webp&w=640&q=25",
        alt: "metamorphose nach zaune",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fmetamorphose%2Fhome-nach-metamorphose.webp&w=640&q=25",
        alt: "metamorphose nach zaune",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fangebot%2Fangebot-zaune.jpg&w=750&q=25",
        alt: "angebot zäune",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fangebot%2Fangebot-doppelstabmatten.jpg&w=750&q=25",
        alt: "angebot doppelstabmatten",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fangebot%2Fangebot-gelander.jpg&w=750&q=25",
        alt: "angebot geländer",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fmuster%2Fhome-muster-1.webp&w=828&q=1",
        alt: "muster classic",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fmuster%2Fhome-muster-2.webp&w=828&q=1",
        alt: "muster moderne",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fmuster%2Fhome-muster-3.webp&w=828&q=1",
        alt: "muster moderne kunststoffpaneele",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={cn("antialiased", montserrat.className)}>
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
          }}
        >
          <Header />
          {children}
           <Analytics />
          <ScrollToTopButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
