"use client";

import type { Images } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { HeartIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import useStore from "@/lib/store/useStore";

type Props = {
  images: Images[];
};

export function ViewImages(props: Props) {
  const favoriteImages = useStore(
    useFavoriteImagesStore,
    (state) => state.favoriteImages
  );

  const { addImageToFavorites, removeImageFromFavorites } =
    useFavoriteImagesStore();

  function isFavorite(
    image_public_id: string,
    favoriteImages: Images[]
  ): boolean {
    let imageIsInFavorite = false;
    favoriteImages.map((favoriteImage) => {
      if (favoriteImage.public_id === image_public_id) {
        imageIsInFavorite = true;
      }
    });
    return imageIsInFavorite;
  }

  if (favoriteImages === undefined) {
    return null;
  }

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
            <HeartIcon
              onClick={() => {
                favoriteImages?.includes(image)
                  ? removeImageFromFavorites(image)
                  : addImageToFavorites(image);
              }}
              className={cn(
                "absolute right-3 top-3 z-50 h-7 w-7 cursor-pointer stroke-none",
                isFavorite(image.public_id, favoriteImages)
                  ? "fill-red-500 sm:hover:stroke-neutral-800"
                  : "fill-white sm:hover:stroke-neutral-800"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
