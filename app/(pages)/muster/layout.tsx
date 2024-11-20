import { MusterMenu } from "@/components/islets/pages/muster/muster-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zäune aus Polen | Muster für Classic, Moderne und mehr CNC muster.",
  description:
    "Wir stellen klassischen, moderne muster von Zäunen. Wir bieten Muster entsprechend den Bedürfnissen des Kunden anzupassen oder zu erstellen.",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu/muster"),
  alternates: {
    canonical: "/",
  },
  generator: "FireMetal - Metallzäune",
    keywords: [
    "CNC",
    "CNC muster",
    "CNC zäune",
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
    title: "Zäune aus Polen | Muster für Classic, Moderne und mehr.",
    description:
      "Wir stellen klassischen, moderne muster von Zäune aus polen. Wir bieten Muster entsprechend den Bedürfnissen des Kunden anzupassen oder zu erstellen.",
    locale: "de_DE",
    type: "website",
    url: "https://firemetal.eu/muster",
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
      <MusterMenu />
      {children}
    </section>
  );
}