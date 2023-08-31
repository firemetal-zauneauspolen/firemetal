import GalerieGrid from "@/components/islets/pages/galerie/galerie-grid";
import cloudinary from "cloudinary";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GalerieFolderPage({
  params: { galerieFolder },
}: {
  params: {
    galerieFolder: string;
  };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${galerieFolder}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(50)
    .execute()) as { resources: SearchResult[] };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex justify-center px-4">
        <GalerieGrid images={results.resources} />
      </div>
    </section>
  );
}
