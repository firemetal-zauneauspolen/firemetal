"use client";

import type { Images } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { ViewHeartIcon } from "../shared/view-heart-icon";

import LightGalleryComponent from "lightgallery/react";
import { LightGallery } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useRef } from "react";

export function ViewMetamorphose({
  vorMetamorphose,
  nachMetamorphose,
}: {
  vorMetamorphose: Images[];
  nachMetamorphose: Images[];
}) {
  const NUMBER_OF_IMAGES_TO_SKIP = 2;
  const NUMBER_OF_LETTERS_TO_REMOVE = -2;
  const NUMBER_OF_IMAGE_SHIFT = 1;

  const lightboxRef = useRef<LightGallery | null>(null);

  function mergeArraysMetamorphoses(
    vorMetamorphose: Images[],
    nachMetamorphose: Images[],
  ) {
    const mergeMetamorphoses = [];
    const maxLength = Math.max(vorMetamorphose.length, nachMetamorphose.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < vorMetamorphose.length) {
        mergeMetamorphoses.push(vorMetamorphose[i]);
      }
      if (i < nachMetamorphose.length) {
        mergeMetamorphoses.push(nachMetamorphose[i]);
      }
    }

    return mergeMetamorphoses;
  }

  const mergeMetamorphoses = mergeArraysMetamorphoses(
    vorMetamorphose,
    nachMetamorphose,
  );

  return (
    <div className="flex flex-col items-center">
      <div className="space-y-4 px-4 py-8">
        {mergeMetamorphoses.map((image, idx) =>
          idx % NUMBER_OF_IMAGES_TO_SKIP === 0 ? (
            <div key={idx} className="flex flex-col items-center">
              <h2 className="mb-5 mt-8 text-xl font-bold sm:text-2xl lg:text-4xl">
                <span className="text-ring">#</span>Projekte{" "}
                {image.filename.slice(NUMBER_OF_LETTERS_TO_REMOVE)}
              </h2>
              <div className="gap-4 space-y-4 lg:flex lg:space-y-0">
                <div className="relative">
                  <p className="flex justify-center text-lg font-bold sm:text-xl lg:justify-start lg:p-2 lg:text-2xl">
                    <span className="text-ring">#</span>Vor
                  </p>
                  <CldImage
                    src={image.public_id}
                    width={500}
                    height={100}
                    alt="photo"
                    className="rounded-xl transition-all duration-500 hover:rounded-none"
                  />
                  <ViewHeartIcon
                    image={image}
                    className="right-3 top-10 lg:top-14"
                  />
                  <div
                    className="absolute inset-0 h-full w-full cursor-pointer bg-transparent hover:bg-stone-900 hover:bg-opacity-10"
                    onClick={() => {
                      lightboxRef.current?.openGallery(idx);
                      console.log(idx);
                    }}
                  ></div>
                </div>
                <div className="relative">
                  <p className="flex justify-center text-lg font-bold sm:text-xl lg:justify-end lg:p-2 lg:text-2xl">
                    <span className="text-ring">#</span>Nach
                  </p>
                  <CldImage
                    src={
                      mergeMetamorphoses.at(idx + NUMBER_OF_IMAGE_SHIFT)
                        ?.public_id || ""
                    }
                    width={500}
                    height={100}
                    alt="photo"
                    className="rounded-xl transition-all duration-500 hover:rounded-none"
                  />
                  <ViewHeartIcon
                    image={mergeMetamorphoses.at(idx + NUMBER_OF_IMAGE_SHIFT)}
                    className="right-3 top-10 lg:top-14"
                  />
                  <div
                    className="absolute inset-0 h-full w-full cursor-pointer bg-transparent hover:bg-stone-900 hover:bg-opacity-10"
                    onClick={() => {
                      lightboxRef.current?.openGallery(
                        idx + NUMBER_OF_IMAGE_SHIFT,
                      );
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ) : null,
        )}
        <LightGalleryComponent
          onInit={(ref) => {
            if (ref) {
              lightboxRef.current = ref.instance;
            }
          }}
          licenseKey={process.env.NEXT_PUBLIC_LIGHT_GALLERY_LICENSE}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          addClass="lg-thumb-outer"
          dynamic
          dynamicEl={mergeMetamorphoses.map((image) => ({
            src: image.secure_url,
            thumb: image.secure_url,
            subHtml: image.filename,
          }))}
        />
      </div>
      {/*<div className="space-y-4 px-4 py-8">
        {mergeMetamorphoses.map((image, idx) => (
          <div key={idx} className="flex flex-col items-center ">
            <h2 className="mb-5 mt-8 text-xl font-bold sm:text-2xl lg:text-4xl">
              <span className="text-ring">#</span>Projekte{" "}
              {image.filename.slice(-2)}
            </h2>
            <div className="gap-4 space-y-4 lg:flex lg:space-y-0">
              <div className="relative">
                <p className="flex justify-center text-lg font-bold sm:text-xl lg:justify-start lg:p-2 lg:text-2xl">
                  <span className="text-ring">#</span>Vor
                </p>
                <CldImage
                  src={image.public_id}
                  width={500}
                  height={100}
                  alt="photo"
                  className="rounded-xl transition-all duration-500 hover:rounded-none"
                />
                <ViewHeartIcon
                  image={image}
                  className="right-3 top-10 lg:top-14"
                />
                <div
                  className="absolute inset-0 h-full w-full cursor-pointer bg-transparent hover:bg-stone-900 hover:bg-opacity-10"
                  onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                    console.log(idx);
                  }}
                ></div>
              </div>
              <div className="relative">
                <p className="flex justify-center text-lg font-bold sm:text-xl lg:justify-end lg:p-2 lg:text-2xl">
                  <span className="text-ring">#</span>Nach
                </p>
                <CldImage
                  src={mergeMetamorphoses.at(idx + 1)?.public_id || ""}
                  width={500}
                  height={100}
                  alt="photo"
                  className="rounded-xl transition-all duration-500 hover:rounded-none"
                />
                <ViewHeartIcon
                  image={mergeMetamorphoses.at(idx + 1)}
                  className="right-3 top-10 lg:top-14"
                />
                <div
                  className="absolute inset-0 h-full w-full cursor-pointer bg-transparent hover:bg-stone-900 hover:bg-opacity-10"
                  onClick={() => {
                    lightboxRef.current?.openGallery(idx + 1);
                    console.log(idx + 1);
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
        <LightGalleryComponent
          onInit={(ref) => {
            if (ref) {
              lightboxRef.current = ref.instance;
            }
          }}
          licenseKey={process.env.NEXT_PUBLIC_LIGHT_GALLERY_LICENSE}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          addClass="lg-thumb-outer"
          dynamic
          dynamicEl={mergeMetamorphoses.map((image) => ({
            src: image.secure_url,
            thumb: image.secure_url,
            subHtml: image.filename,
          }))}
        />
        </div> */}
    </div>
  );
}
