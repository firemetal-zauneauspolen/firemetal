"use client";

import type { Images } from "@/lib/types";
import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import useStore from "@/lib/store/useStore";
import { HeartIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  image?: Images;
  className?: string;
};

export function ViewHeartIcon(props: Props) {
  const favoriteImages = useStore(
    useFavoriteImagesStore,
    (state) => state.favoriteImages
  );

  const { addImageToFavorites, removeImageFromFavorites } =
    useFavoriteImagesStore();

  return (
    <HeartIcon
      onClick={() => {
        favoriteImages?.some(
          (favoriteImage) => favoriteImage.public_id === props.image?.public_id
        )
          ? removeImageFromFavorites(props.image!)
          : addImageToFavorites(props.image!);
      }}
      className={cn(
        `absolute z-50 h-7 w-7 cursor-pointer stroke-none ${props.className}`,
        favoriteImages?.some(
          (favoriteImage) => favoriteImage.public_id === props.image?.public_id
        )
          ? "fill-primary stroke-neutral-800"
          : "fill-white stroke-neutral-800"
      )}
    />
  );
}
