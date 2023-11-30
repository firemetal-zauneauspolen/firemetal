import { FireBlobGradient } from "@/components/islets/blobs/fire-blob-gradient";
import { Testimonials } from "@/components/islets/pages/home/testimonials";
import { CompaniesUberUns } from "@/components/islets/pages/uber-uns/companies";
import { ExperienceUberUns } from "@/components/islets/pages/uber-uns/experience";
import { FindUsUberUns } from "@/components/islets/pages/uber-uns/find-us";
import { HeroUberUns } from "@/components/islets/pages/uber-uns/hero";
import { KontaktUberUns } from "@/components/islets/pages/uber-uns/kontakt";
import { ProductsUberUns } from "@/components/islets/pages/uber-uns/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firemetal | Zäune aus Polen",
  description:
    "Wir bieten hohe Qualität und die besten Preise an Zäune aus Polen. Wir bieten: ✅Kostenlos Aufmaß , ✅Online Preiskalkulation ✅ und Hochwertige.",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu/uber-uns"),
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
    title: "Firemetal | Zäune aus Polen",
    description:
      "Wir bieten hohe Qualität und die besten Preise an Zäune aus Polen. Wir bieten: ✅Kostenlos Aufmaß , ✅Online Preiskalkulation ✅ und Hochwertige.",
    locale: "de_DE",
    type: "article",
    url: "https://firemetal.eu/uber-uns",
    siteName: "Firemetal - Zäune aus Polen",
    images: [
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Flogo%2Fsommer-logo.png&w=256&q=75",
        alt: "sommer logo",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Flogo%2Fpostal-logo.png&w=256&q=75",
        alt: "postal steel group logo",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Flogo%2Fzinq-logo.png&w=256&q=75",
        alt: "zinq voigt& schweitzer logo",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Flogo%2Fpolswat-logo.png&w=256&q=75",
        alt: "polswat logo",
      },
      {
        url: "https://firemetal.eu/img/logo/firemetal-logo-fb.webp",
        alt: "firemetal facebook logo",
      },
      {
        url: "https://firemetal.eu/img/logo/firemetal-logo-gplus.webp",
        alt: "firemetal google logo",
      },
    ],
  },
};

export default function UberUnsPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-2">
        <HeroUberUns />
        <ExperienceUberUns />
        <ProductsUberUns />
        <Testimonials />
        <CompaniesUberUns />
        <FindUsUberUns />
        <KontaktUberUns />
      </section>

      <FireBlobGradient
        paddingTopSM="sm:-top-[180rem]"
        paddingTop="-top-[280rem]"
      />
    </>
  );
}
