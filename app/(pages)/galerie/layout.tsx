import { GalerieMenu } from "@/components/islets/pages/galerie/galerie-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FireMetal Galerie Zäune aus Polen",
  description:
    "Wir präsentieren die besten Zaunfotos aus Polen. Alle Fotos zeigen Aufträge unserer zufriedenen Kunden.",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu/galerie"),
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
    title: "FireMetal Galerie Zäune aus Polen",
    description:
      "Wir präsentieren die besten Zaunfotos aus Polen. Alle Fotos zeigen Aufträge unserer zufriedenen Kunden.",
    locale: "de_DE",
    type: "article",
    url: "https://firemetal.eu/galerie",
    siteName: "Firemetal - Zäune aus Polen",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      <GalerieMenu />
      {children}
    </section>
  );
}
