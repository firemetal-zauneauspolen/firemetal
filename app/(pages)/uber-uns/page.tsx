import { FireBlobGradient } from "@/components/islets/blobs/fire-blob-gradient";
import { CompaniesUberUns } from "@/components/islets/pages/uber-uns/companies";
import { ExperienceUberUns } from "@/components/islets/pages/uber-uns/experience";
import { FindUsUberUns } from "@/components/islets/pages/uber-uns/find-us";
import { HeroUberUns } from "@/components/islets/pages/uber-uns/hero";
import { KontaktUberUns } from "@/components/islets/pages/uber-uns/kontakt";
import { ProductsUberUns } from "@/components/islets/pages/uber-uns/products";

export default function UberUnsPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-2 xl:pt-20">
        <HeroUberUns />
        <ExperienceUberUns />
        <ProductsUberUns />
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
