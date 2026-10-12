import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetMuster } from "@/components/islets/pages/muster/get-muster";
import Balancer from "react-wrap-balancer";

export default function MusterBetonPage() {
  const musterFolder = "muster/beton";

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
          <Balancer>
            Entdecken Sie unsere <span className="text-ring">Beton-Muster</span>
            mit ihrer klaren Formensprache und robusten Ausstrahlung. Die
            ausgewählten Designs verbinden eine moderne Optik mit langlebiger
            Qualität und setzen besondere Akzente in Ihrem Außenbereich.
          </Balancer>
        </h1>
        <div className="flex justify-center py-8">
          <Suspense
            fallback={<Spinner label="Loading..." aria-label="Loding..." />}
          >
            <GetMuster galerieFolder={musterFolder} columns="double" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}