import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { ViewGrotten } from "./view-grotten";

type Props = {
    galerieFolder: string;
};

export async function GetGrotten(props: Props) {
    const images = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${props.galerieFolder}`)
        .sort_by("uploaded_at", "desc")
        .with_field("tags")
        .max_results(50)
        .execute()) as { resources: Images[] };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center">
                <ViewGrotten images={images.resources} />
            </div>
        </div>
    );
}
