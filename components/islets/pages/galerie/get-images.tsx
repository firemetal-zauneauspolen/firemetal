import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { ViewImages } from "./view-images";

export async function GetImages() {
  const images = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(550)
    .execute()) as { resources: Images[] };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <ViewImages images={images.resources} />
      </div>
    </div>
  );
}
