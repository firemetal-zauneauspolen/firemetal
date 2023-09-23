"use client";

import { CldImage } from "next-cloudinary";
import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import useStore from "@/lib/store/useStore";
import { ViewHeartIconFavorite } from "../shared/view-hear-icon-favorite";
import { useRef } from "react";

import LightGalleryComponent from "lightgallery/react";
import { LightGallery } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export function ViewFavoriteImages() {
  const lightboxRef = useRef<LightGallery | null>(null);

  const favoriteImages = useStore(
    useFavoriteImagesStore,
    (state) => state.favoriteImages
  );
  const { clearFavoriteImages } = useFavoriteImagesStore();

  if (!favoriteImages) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <button onClick={clearFavoriteImages}>WYCZYSC LISTE</button>
      <div className="space-y-4 sm:columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
        {favoriteImages.map((favoriteImage, idx) => (
          <div className="relative" key={idx}>
            <CldImage
              src={favoriteImage}
              width={400}
              height={300}
              alt="photo"
              className="rounded-xl transition-all duration-500 hover:rounded-none"
            />
            <ViewHeartIconFavorite favoriteImage={favoriteImage} />
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
          dynamicEl={favoriteImages.map((image) => ({
            src: image.substring(8),
            thumb: image.substring(8),
            subHtml: image,
          }))}
        />
      </div>
    </div>
  );
}
