import { GetImages } from "@/components/islets/pages/galerie/get-images";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";

export default function Galerie2Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center px-4">
        <Suspense
          fallback={<Spinner label="Loading..." aria-label="Loding..." />}
        >
          <GetImages />
        </Suspense>
      </div>
    </div>
  );
}
