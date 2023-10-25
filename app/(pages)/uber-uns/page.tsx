import { FireBlobGradient } from "@/components/islets/blobs/fire-blob-gradient";
import { FindUsUberUns } from "@/components/islets/pages/uber-uns/find-us";
import { HeroUberUns } from "@/components/islets/pages/uber-uns/hero";
import { KontaktUberUns } from "@/components/islets/pages/uber-uns/kontakt";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function UberUnsPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-2 xl:pt-20">
        <HeroUberUns />
        <FindUsUberUns />
        <KontaktUberUns />
      </section>

      <FireBlobGradient
        paddingTopSM="sm:-top-[110rem]"
        paddingTop="-top-[123rem]"
      />
    </>
  );
}
