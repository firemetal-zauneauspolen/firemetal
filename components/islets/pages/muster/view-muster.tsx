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

type Props = {
  images: Images[];
  columns?: "single" | "double";
};

export function ViewMuster(props: Props) {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="grid w-full max-w-4xl grid-cols-1 gap-4">
      {props.images.map((image, idx) => (
        <div
          className="min-w-0 overflow-hidden rounded-xl bg-white transition-all duration-500 hover:rounded-none"
          key={idx}
        >
          <div className="relative">
            <CldImage
              src={image.public_id}
              width={props.columns === "double" ? 350 : 800}
              height={props.columns === "double" ? 236 : 300}
              alt="photo"
              className="block h-auto w-full"
            />
            <ViewHeartIcon image={image} className="right-2.5 top-1" />
            <div
              className="absolute inset-0 cursor-pointer bg-transparent hover:bg-stone-900 hover:bg-opacity-10"
              onClick={() => {
                lightboxRef.current?.openGallery(idx);
              }}
            ></div>
          </div>
          <ViewMusterName fileName={image.filename} />
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
          src: image.secure_url,
          thumb: image.secure_url,
          subHtml: image.filename,
        }))}
      />
    </div>
  );
}
