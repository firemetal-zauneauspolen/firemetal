import { GetImages } from "@/components/islets/pages/galerie/get-images";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";

export default function GaleriePage() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <Suspense
            fallback={<Spinner label="Loading..." aria-label="Loding..." />}
          >
            <GetImages />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
