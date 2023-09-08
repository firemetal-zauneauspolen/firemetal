"use client";

import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import { HeartIcon } from "lucide-react";

type Props = {
  favoriteImage: string;
};

export function ViewHeartIconFavorite(props: Props) {
  const { removeImageFromFavorites } = useFavoriteImagesStore();

  return (
    <HeartIcon
      onClick={() => {
        removeImageFromFavorites(props.favoriteImage);
      }}
      className={
        "absolute right-3 top-3 z-50 h-7 w-7 cursor-pointer fill-primary stroke-none sm:hover:stroke-neutral-800"
      }
    />
  );
}
