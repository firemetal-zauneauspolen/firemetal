import { ViewImages } from "@/components/islets/pages/galerie2/viewImages";
import cloudinary from "cloudinary";
import type { Images } from "@/lib/types";
import { GetImages } from "@/components/islets/pages/galerie2/getImages";
import { GetFavoriteImages } from "@/components/islets/pages/galerie2/getFavoriteImages";

const listaZdjec = [
  "zaun_207-1_u6dkw2",
  "zaun_204_tz6s8o",
  "zaun_205-3_k4r9vi",
];

const queryZdjecia = listaZdjec.join(" OR filename=");

{
  /*const queryFavoriteImages = GetFavoriteImages();*/
}

export default function Galerie2FavoritePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center px-4">Tutaj są Twoje ulubione.</div>
      <div></div>
      <GetImages></GetImages>
    </div>
  );
}
