import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { Folder } from "@/lib/types";
import cloudinary from "cloudinary";

export async function GET(request: Request) {
  const resFolders = (await cloudinary.v2.api.sub_folders("galerie")) as {
    folders: Folder[];
  };

  const fields: ISitemapField[] = resFolders.folders.map((folder) => ({
    loc: `${process.env.SITE_URL}/galerie/${folder.name}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(fields);
}
