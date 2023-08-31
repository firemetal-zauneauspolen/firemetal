"use client";

import { SearchResult } from "@/app/(pages)/galerie/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;

export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <div className="space-y-4 sm:columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
      {images.map(getImage)}
    </div>
  );
}
