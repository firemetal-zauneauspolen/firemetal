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
import { Button } from "@/components/ui/button";

export function ViewFavoriteImages() {
  const lightboxRef = useRef<LightGallery | null>(null);

  const favoriteImages = useStore(
    useFavoriteImagesStore,
    (state) => state.favoriteImages,
  );
  const { clearFavoriteImages } = useFavoriteImagesStore();

  return (
    <div className="flex flex-col items-center">
      <Button
        onClick={clearFavoriteImages}
        className="rounded-full text-base font-semibold"
      >
        Liste Löschen
      </Button>
      <div className="space-y-4 pt-8 sm:columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
        {favoriteImages?.map((favoriteImage, idx) => (
          <div className="relative" key={idx}>
            <CldImage
              src={favoriteImage.public_id}
              width={400}
              height={300}
              quality={60}
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
          dynamicEl={favoriteImages?.map((favoriteImage) => ({
            src: favoriteImage.secure_url,
            thumb: favoriteImage.secure_url,
            subHtml: favoriteImage.filename,
          }))}
        />
      </div>
    </div>
  );
}
