"use client";

import { Button } from "@/components/ui/button";
import { useFavoriteImagesStore } from "@/lib/store/useFavoriteImagesStore";
import useStore from "@/lib/store/useStore";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

export function FavoritesHeart() {
  const favoriteImages = useStore(
    useFavoriteImagesStore,
    (state) => state.favoriteImages
  );
  return (
    <Link href={"/galerie/favorites"} className="relative flex">
      <HeartIcon className="h-10 w-10 fill-primary stroke-none hover:fill-primary/80" />
      <div className="absolute -right-0.5 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-xs text-white dark:bg-white dark:font-bold dark:text-neutral-900">
        {favoriteImages ? favoriteImages?.length.toString() : "0"}
      </div>
    </Link>
  );
}
