import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { ViewRosetten } from './view-rosetten';

type Props = {
    galerieFolder: string;
};

export async function GetRosetten(props: Props) {
    const images = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${props.galerieFolder}`)
        .sort_by("uploaded_at", "desc")
        .with_field("tags")
        .max_results(50)
        .execute()) as { resources: Images[] };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center">
                <ViewRosetten images={images.resources} />
            </div>
        </div>
    );
}
