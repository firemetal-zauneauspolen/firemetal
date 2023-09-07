import { ViewFavoriteImages } from "@/components/islets/pages/galerie2/viewFavoriteImages";

export default function Galerie2FavoritePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center px-4">Tutaj są Twoje ulubione.</div>
      <ViewFavoriteImages />
    </div>
  );
}
