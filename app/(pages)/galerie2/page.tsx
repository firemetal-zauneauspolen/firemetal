import { ViewImages } from "@/components/islets/pages/galerie2/viewImages";
import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";

const listaZdjec = [
  "zaun_207-1_u6dkw2",
  "zaun_204_tz6s8o",
  "zaun_205-3_k4r9vi",
];

const queryZdjecia = listaZdjec.join(" OR filename=");

export default async function Galerie2Page() {
  const images = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: Images[] };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center px-4">
        <ViewImages images={images.resources} />
      </div>
    </div>
  );
}
