"use client";

import { CldImage } from "next-cloudinary";
import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import useStore from "@/lib/store/useStore";
import { ViewHeartIconFavorite } from "../shared/view-hear-icon-favorite";

export function ViewFavoriteImages() {
  const favoriteImages = useStore(
    useFavoriteImagesStore,
    (state) => state.favoriteImages
  );
  const { clearFavoriteImages } = useFavoriteImagesStore();

  return (
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
              className="cursor-pointer rounded-xl transition-all duration-500 hover:rounded-none"
            />
            <ViewHeartIconFavorite favoriteImage={favoriteImage} />
          </div>
        ))}
      </div>
    </div>
  );
}
