"use client";

import type { Images } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { HeartIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import useStore from "@/lib/store/useStore";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export function ViewFavoriteImages() {
  const favoriteImages = useStore(
    useFavoriteImagesStore,
    (state) => state.favoriteImages
  );
  const { addImageToFavorites, removeImageFromFavorites, clearFavoriteImages } =
    useFavoriteImagesStore();

  return (
    <div className="flex flex-col items-center">
      <button onClick={clearFavoriteImages}>WYCZYSC LISTE</button>
      <div className="space-y-4 sm:columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
        {favoriteImages?.map((favoriteImage, idx) => (
          <div className="relative" key={idx}>
            <CldImage
              src={favoriteImage.public_id}
              width={400}
              height={300}
              alt="photo"
              className="cursor-pointer rounded-xl transition-all duration-500 hover:rounded-none"
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
          </div>
        ))}
      </div>
    </div>
  );
}
