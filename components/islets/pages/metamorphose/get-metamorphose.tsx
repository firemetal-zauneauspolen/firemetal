import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { ViewMetamorphose } from "./view-metamorphose";

export async function GetMetamorphose() {
  const vorFolder = "metamorphose/vor";
  const nachFolder = "metamorphose/nach";

  const vorMetamorphose = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${vorFolder}`)
    .sort_by("created_at", "desc")
    .max_results(50)
    .execute()) as { resources: Images[] };

  const nachMetamorphose = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${nachFolder}`)
    .sort_by("created_at", "desc")
    .max_results(50)
    .execute()) as { resources: Images[] };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <ViewMetamorphose
          vorMetamorphose={vorMetamorphose.resources}
          nachMetamorphose={nachMetamorphose.resources}
        />
      </div>
    </div>
  );
}
