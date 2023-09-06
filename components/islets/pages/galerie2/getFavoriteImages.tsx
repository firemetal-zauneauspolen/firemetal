"use client";

import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { ViewFavoriteImages } from "./viewFavoriteImages";
import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import useStore from "@/lib/store/useStore";
import { GetImages } from "./getImages";

type Props = {
  queryImages: string;
};

export function GetFavoriteImages() {
  const favoriteImages = useStore(
    useFavoriteImagesStore,
    (state) => state.favoriteImages
  );

  const queryFavoriteImages = favoriteImages?.join(" OR filename=");

  console.log(queryFavoriteImages);

  return { queryFavoriteImages };
}
