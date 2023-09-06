import { GetImages } from "@/components/islets/pages/galerie2/getImages";

export default function Galerie2FavoritePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center px-4">Tutaj są Twoje ulubione.</div>
      <GetImages />
    </div>
  );
}
