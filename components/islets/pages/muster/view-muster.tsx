"use client";

import type { Images } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { ViewHeartIcon } from "../shared/view-heart-icon";
import { ViewMusterName } from "./view-muster-name-";

type Props = {
  images: Images[];
};

export function ViewMuster(props: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="columns-1 space-y-4">
        {props.images.map((image, idx) => (
          <div
            className="relative cursor-pointer rounded-xl bg-white p-6 transition-all duration-500 hover:rounded-none"
            key={idx}
          >
            <CldImage
              src={image.public_id}
              width={800}
              height={300}
              alt="photo"
            />
            <ViewHeartIcon image={image} />
            <ViewMusterName fileName={image.filename} />
          </div>
        ))}
      </div>
    </div>
  );
}
