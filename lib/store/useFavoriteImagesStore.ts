import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteImagesStore = {
  favoriteImages: string[];
  addImageToFavorites: (public_id: string) => void;
  removeImageFromFavorites: (public_id: string) => void;
  clearFavoriteImages: () => void;
};

export const useFavoriteImagesStore = create<FavoriteImagesStore>()(
  persist(
    (set, get) => ({
      favoriteImages: [],
      addImageToFavorites: (public_id: string) =>
        set({ favoriteImages: [...get().favoriteImages, public_id] }),
      removeImageFromFavorites: (public_id: string) =>
        set({
          favoriteImages: get().favoriteImages.filter(
            (favoriteImage) => favoriteImage !== public_id
          ),
        }),
      clearFavoriteImages: () => set({ favoriteImages: [] }),
    }),
    {
      name: "favoriteImages-storage", // name of item in the storage (must be unique)
    }
  )
);
