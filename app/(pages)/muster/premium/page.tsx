import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetMuster } from "@/components/islets/pages/muster/get-muster";
import Balancer from "react-wrap-balancer";

export default function MusterPremiumPage() {
  const musterFolder = "muster/premium";

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
          <Balancer>
            Unsere <span className="text-ring">Premium-Muster</span> vereinen
            zeitloses Design mit <span className="text-ring">hochwertiger
            Verarbeitung</span>. Entdecken Sie besondere Zaun- und Paneeldesigns,
            die Ihrem Außenbereich einen individuellen Charakter verleihen.
            Jedes Muster wird mit großer Sorgfalt gefertigt und lässt sich an
            Ihre Wünsche anpassen.
          </Balancer>
        </h1>
        <div className="flex justify-center py-8">
          <Suspense
            fallback={<Spinner label="Loading..." aria-label="Loding..." />}
          >
            <GetMuster galerieFolder={musterFolder} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}