"use client";

import type { Images } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { ViewHeartIcon } from "../shared/view-heart-icon";
import { ViewMusterName } from "./view-muster-name-";
import { useRef } from "react";

import LightGalleryComponent from "lightgallery/react";
import { LightGallery } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { changeImageUrlToHttps } from "@/lib/functions";

type Props = {
  images: Images[];
};

export function ViewMuster(props: Props) {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="flex flex-col items-center">
      <div className="columns-1 space-y-4">
        {props.images.map((image, idx) => (
          <div
            className="relative rounded-xl bg-white px-4 py-6 transition-all duration-500 hover:rounded-none sm:px-6"
            key={idx}
          >
            <CldImage
              src={image.public_id}
              width={800}
              height={300}
              alt="photo"
            />
            <ViewHeartIcon image={image} className="right-2.5 top-1" />
            <ViewMusterName fileName={image.filename} />
            <div
              className="absolute inset-0 h-full w-full cursor-pointer bg-transparent hover:bg-stone-900 hover:bg-opacity-10"
              onClick={() => {
                lightboxRef.current?.openGallery(idx);
              }}
            ></div>
          </div>
        ))}
        <LightGalleryComponent
          onInit={(ref) => {
            if (ref) {
              lightboxRef.current = ref.instance;
            }
          }}
          licenseKey={process.env.NEXT_PUBLIC_LIGHT_GALLERY_LICENSE}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          addClass="lg-thumb-outer"
          dynamic
          dynamicEl={props.images.map((image) => ({
            src: changeImageUrlToHttps(image.url),
            thumb: changeImageUrlToHttps(image.url),
            subHtml: image.filename,
          }))}
        />
      </div>
    </div>
  );
}
