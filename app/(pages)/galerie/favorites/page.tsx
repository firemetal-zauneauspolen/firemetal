import cloudinary from "cloudinary";
import { SearchResult } from "../page";
import { ForceRefresh } from "@/lib/force-refresh";
import FavoritesList from "@/components/islets/pages/galerie/favorite-list";
import { GalerieMenu } from "@/components/islets/pages/galerie/galerie-menu";

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section className="flex flex-col items-center justify-center">
      <ForceRefresh />
      <div className="flex justify-center px-4">
        <FavoritesList initialResources={results.resources} />
      </div>
    </section>
  );
}
