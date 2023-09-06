import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { ViewImages } from "@/components/islets/pages/galerie2/viewImages";

export default async function GalerieFolderPage({
  params: { galerieFolder },
}: {
  params: {
    galerieFolder: string;
  };
}) {
  const images = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${galerieFolder}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(50)
    .execute()) as { resources: Images[] };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center px-4">
        <ViewImages images={images.resources} />
      </div>
    </div>
  );
}
