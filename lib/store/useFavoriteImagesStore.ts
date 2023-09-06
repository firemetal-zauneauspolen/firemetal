import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteImagesStore = {
  favoriteImages: string[];
  addImageToFavorites: (fileName: string) => void;
  removeImageFromFavorites: (fileName: string) => void;
  clearFavoriteImages: () => void;
};

export const useFavoriteImagesStore = create<FavoriteImagesStore>()(
  persist(
    (set, get) => ({
      favoriteImages: [],
      addImageToFavorites: (fileName: string) =>
        set({ favoriteImages: [...get().favoriteImages, fileName] }),
      removeImageFromFavorites: (fileName: string) =>
        set({
          favoriteImages: get().favoriteImages.filter(
            (favoriteImage) => favoriteImage !== fileName
          ),
        }),
      clearFavoriteImages: () => set({ favoriteImages: [] }),
    }),
    {
      name: "favoriteImages-storage", // name of item in the storage (must be unique)
    }
  )
);
