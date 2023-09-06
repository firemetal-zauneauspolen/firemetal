import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { ViewFavoriteImages } from "./viewFavoriteImages";
import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";

const listaZdjec = [
  "zaun_207-1_u6dkw2",
  "zaun_204_tz6s8o",
  "zaun_205-3_k4r9vi",
];

export async function GetImages() {
  const images = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: Images[] };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center px-4">
        <ViewFavoriteImages images={images.resources} />
      </div>
    </div>
  );
}
