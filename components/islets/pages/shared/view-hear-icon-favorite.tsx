"use client";

import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import { HeartIcon } from "lucide-react";
import type { Images } from "@/lib/types";

type Props = {
  favoriteImage: Images;
};

export function ViewHeartIconFavorite(props: Props) {
  const { removeImageFromFavorites } = useFavoriteImagesStore();

  return (
    <HeartIcon
      onClick={() => {
        removeImageFromFavorites(props.favoriteImage);
      }}
      className={
        "absolute right-3 top-3 z-50 h-7 w-7 cursor-pointer fill-primary stroke-neutral-800 sm:hover:fill-white"
      }
    />
  );
}
