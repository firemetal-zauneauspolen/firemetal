import { metamorphoseData } from "@/lib/const-data/metamorphose/metamorphose-data";
import Image from "next/image";

export function Metamorphose() {
  return (
    <>
      {metamorphoseData.map((metamorphose) => (
        <>
          <h2 className="mb-5 mt-8 text-xl font-bold sm:text-2xl lg:text-4xl">
            <span className="text-ring">#</span>Projekte {metamorphose.id}
          </h2>
          <div className="flex flex-col gap-5 px-8 xl:flex-row">
            <div>
              <h3 className="flex justify-center text-lg font-bold sm:text-xl lg:text-2xl xl:justify-start xl:p-2">
                <span className="text-ring">#</span>Vor
              </h3>
              <Image
                src={metamorphose.pathToVorImage}
                alt={`vor und nach ${metamorphose.category} metamorphose`}
                width={555}
                height={312}
                className="rounded-xl transition-all duration-500 hover:rounded-none"
              />
            </div>
            <div>
              <h3 className="flex justify-center text-lg font-bold sm:text-xl lg:text-2xl xl:justify-end xl:p-2">
                <span className="text-ring">#</span>Nach
              </h3>
              <Image
                src={metamorphose.pathToNachImage}
                alt={`vor und nach ${metamorphose.category} metamorphose`}
                width={555}
                height={312}
                className="rounded-xl transition-all duration-500 hover:rounded-none"
              />
            </div>
          </div>
        </>
      ))}
    </>
  );
}
