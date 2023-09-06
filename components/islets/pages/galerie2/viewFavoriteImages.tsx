"use client";

import { useRef } from "react";
import type { Images } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { HeartIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import useStore from "@/lib/store/useStore";

import LightGalleryComponent from "lightgallery/react";
import { LightGallery } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

type Props = {
  images: Images[];
};

export function ViewFavoriteImages(props: Props) {
  const lightboxRef = useRef<LightGallery | null>(null);
  const favoriteImages = useStore(
    useFavoriteImagesStore,
    (state) => state.favoriteImages
  );
  const { addImageToFavorites, removeImageFromFavorites, clearFavoriteImages } =
    useFavoriteImagesStore();

  return (
    <>
      <div className="flex flex-col items-center">
        <button onClick={clearFavoriteImages}>WYCZYSC LISTE</button>
        <div className="space-y-4 sm:columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
          {favoriteImages?.map((favoriteImage, idx) => (
            <div className="relative" key={idx}>
              <CldImage
                src={favoriteImage}
                width={400}
                height={300}
                alt="photo"
                className="rounded-xl transition-all duration-500 hover:rounded-none"
              />
              <HeartIcon
                onClick={() => {
                  favoriteImages?.includes(favoriteImage)
                    ? removeImageFromFavorites(favoriteImage)
                    : addImageToFavorites(favoriteImage);
                }}
                className={cn(
                  "absolute right-3 top-3 z-50 h-7 w-7 cursor-pointer stroke-none",
                  favoriteImages?.includes(favoriteImage)
                    ? "fill-red-500 sm:hover:stroke-neutral-800"
                    : "fill-white sm:hover:stroke-neutral-800"
                )}
              />
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
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            addClass="lg-thumb-outer"
            dynamic
            dynamicEl={favoriteImages?.map((favoriteImage) => ({
              src: favoriteImage,
              thumb: favoriteImage,
              subHtml: favoriteImage,
            }))}
          />
        </div>
      </div>
    </>
  );
}
