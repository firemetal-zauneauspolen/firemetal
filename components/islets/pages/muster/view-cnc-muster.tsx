"use client";

import type { Images } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { ViewHeartIcon } from "../shared/view-heart-icon";
import { useRef } from "react";

import LightGalleryComponent from "lightgallery/react";
import { LightGallery } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { ViewCNCMusterName } from './view-cnc-muster-name';

type Props = {
  images: Images[];
};

export function ViewCNCMuster(props: Props) {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="flex flex-col items-center">
      <div className="columns-2 space-y-4">
        {props.images.map((image, idx) => (
          <div
            className="relative rounded-xl bg-white transition-all duration-500 hover:rounded-none"
            key={idx}
          >
            <CldImage
              src={image.public_id}
              width={350}
              height={236}
              alt="photo"
            />
            <ViewHeartIcon image={image} className="right-2.5 top-0.5" />
            <ViewCNCMusterName fileName={image.filename} />
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
            src: image.secure_url,
            thumb: image.secure_url,
            subHtml: image.filename,
          }))}
        />
      </div>
    </div>
  );
}
