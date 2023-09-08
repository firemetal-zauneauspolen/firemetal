import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { ViewImages } from "./view-images";

type Props = {
  galerieFolder: string;
};

export async function GetImagesFromFolder(props: Props) {
  const images = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${props.galerieFolder}`)
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
