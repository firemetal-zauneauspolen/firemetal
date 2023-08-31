"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import { HeartIcon } from "lucide-react";
import { setAsFavoriteAction } from "@/lib/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "@/app/(pages)/galerie/page";
import { cn } from "@/lib/utils";

type Props = {
  public_id: string;
};

export function CloudinaryImage(
  props: any & {
    imageData: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnheart } = props;

  const [isFavorite, setIsFavorite] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className="relative rounded-xl">
      <CldImage
        src={imageData.public_id}
        {...props}
        className="rounded-xl transition-all duration-500 hover:rounded-none"
      />
      <HeartIcon
        className={cn(
          "absolute right-3 top-3 cursor-pointer",
          isFavorite
            ? "fill-red-500 hover:fill-white"
            : "fill-white hover:fill-red-500"
        )}
        onClick={() => {
          startTransition(() => {
            isFavorite
              ? (setIsFavorite(false), onUnheart?.(imageData))
              : setIsFavorite(true);
            setAsFavoriteAction(imageData.public_id, isFavorite);
          });
        }}
      />
    </div>
  );
}
