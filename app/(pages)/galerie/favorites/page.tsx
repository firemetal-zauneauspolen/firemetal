import { ViewFavoriteImages } from "@/components/islets/pages/galerie/view-favorite-images";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";

export default function Galerie2FavoritePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center px-4">
        <Suspense
          fallback={
            <Spinner
              label="Loading..."
              aria-label="Loding..."
              className="pt-8"
            />
          }
        >
          <ViewFavoriteImages />
        </Suspense>
      </div>
    </div>
  );
}
