import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Images } from "../types";

type FavoriteImagesStore = {
  favoriteImages: Images[];
  addImageToFavorites: (image: Images) => void;
  removeImageFromFavorites: (image: Images) => void;
  clearFavoriteImages: () => void;
};

export const useFavoriteImagesStore = create<FavoriteImagesStore>()(
  persist(
    (set, get) => ({
      favoriteImages: [],
      addImageToFavorites: (image: Images) =>
        set({ favoriteImages: [...get().favoriteImages, image] }),
      removeImageFromFavorites: (image: Images) =>
        set({
          favoriteImages: get().favoriteImages.filter(
            (favoriteImage) => favoriteImage !== image
          ),
        }),
      clearFavoriteImages: () => set({ favoriteImages: [] }),
    }),
    {
      name: "favoriteImages-storage",
    }
  )
);
