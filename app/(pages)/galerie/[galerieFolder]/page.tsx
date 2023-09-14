import { GetImagesFromFolder } from "@/components/islets/pages/galerie/get-images-from-folder";

export default function GalerieFolderPage({
  params: { galerieFolder },
}: {
  params: {
    galerieFolder: string;
  };
}) {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <GetImagesFromFolder galerieFolder={galerieFolder} />
        </div>
      </div>
    </section>
  );
}
