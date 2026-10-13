import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { ViewMuster } from "./view-muster";

type Props = {
  galerieFolder: string;
  columns?: "single" | "double";
  maxResults?: number;
};

export async function GetMuster(props: Props) {
  const images = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${props.galerieFolder}`)
    .sort_by("uploaded_at", "desc")
    .with_field("tags")
    .max_results(props.maxResults ?? 50)
    .execute()) as { resources: Images[] };

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full justify-center">
        <ViewMuster images={images.resources} columns={props.columns} />
      </div>
    </div>
  );
}
