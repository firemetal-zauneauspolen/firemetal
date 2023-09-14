"use client";

import type { Images } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { ViewHeartIcon } from "../shared/view-heart-icon";

type Props = {
  vorMetamorphose: Images[];
  nachMetamorphose: Images[];
};

export function ViewMetamorphose(props: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-4 px-4 py-8">
        {props.vorMetamorphose.map((image, idx) => (
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
              </div>
              <div className="relative">
                <p className="flex justify-center text-lg font-bold sm:text-xl lg:justify-end lg:p-2 lg:text-2xl">
                  <span className="text-ring">#</span>Nach
                </p>
                <CldImage
                  src={props.nachMetamorphose.at(idx)?.public_id || ""}
                  width={500}
                  height={100}
                  alt="photo"
                  className="rounded-xl transition-all duration-500 hover:rounded-none"
                />
                <ViewHeartIcon
                  image={props.nachMetamorphose.at(idx)}
                  className="right-3 top-10 lg:top-14"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
