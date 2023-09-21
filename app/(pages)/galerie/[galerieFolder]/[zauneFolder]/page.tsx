import { GetImagesFromFolder } from "@/components/islets/pages/galerie/get-images-from-folder";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { ZauneMenu } from "@/components/islets/pages/shared/zaune-menu";

export default function ZauneFolderPage({
  params: { zauneFolder },
}: {
  params: {
    zauneFolder: string;
  };
}) {
  return (
    <section>
      <ZauneMenu />
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center px-4">
          <Suspense
            fallback={
              <Spinner
                label="Loading..."
                aria-label="Loding..."
                className="pt-8"
              />
            }
          >
            <GetImagesFromFolder galerieFolder={`zaune/${zauneFolder}`} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
