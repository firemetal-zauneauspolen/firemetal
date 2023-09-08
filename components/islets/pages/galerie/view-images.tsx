"use client";

import type { Images } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { ViewHeartIcon } from "./view-heart-icon";

type Props = {
  images: Images[];
};

export function ViewImages(props: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-4 sm:columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
        {props.images.map((image, idx) => (
          <div className="relative" key={idx}>
            <CldImage
              src={image.public_id}
              width={400}
              height={300}
              alt="photo"
              className="rounded-xl transition-all duration-500 hover:rounded-none"
            />
            <ViewHeartIcon image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
