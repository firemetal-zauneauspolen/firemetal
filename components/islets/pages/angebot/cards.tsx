import NextImage from "next/image";
import Link from "next/link";

import { Card, CardHeader, Image } from "@nextui-org/react";

export function CardsAngebot() {
  return (
    <section className="z-30 mt-8">
      <div className="grid max-w-[1100px] grid-cols-1 place-items-center gap-4 px-2 sm:grid-cols-2 md:grid-cols-3">
        <Card isPressable className="flex h-[350px] w-full">
          <Link href="/angebot/zaune" className="flex h-[350px] w-full">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                Zäune
              </h3>
            </CardHeader>
            <Image
              as={NextImage}
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/img/angebot/angebot-zaune.jpg"
              width={650}
              height={650}
            />
          </Link>
        </Card>
        <Card isPressable className="flex h-[350px] w-full">
          <Link
            href="/angebot/doppelstabmatten"
            className="flex h-[350px] w-full"
          >
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                Doppelstabmatten
              </h3>
            </CardHeader>
            <Image
              as={NextImage}
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/img/angebot/angebot-doppelstabmatten.jpg"
              width={650}
              height={650}
            />
          </Link>
        </Card>
        <Card isPressable className="flex h-[350px] w-full">
          <Link href="/angebot/gelander" className="flex h-[350px] w-full">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                Geländer
              </h3>
            </CardHeader>
            <Image
              as={NextImage}
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/img/angebot/angebot-gelander.jpg"
              width={650}
              height={650}
            />
          </Link>
        </Card>
        <Card isPressable className="flex h-[350px] w-full">
          <Link href="/angebot/carports" className="flex h-[350px] w-full">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                Carports
              </h3>
            </CardHeader>
            <Image
              as={NextImage}
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/img/angebot/angebot-carport.jpg"
              width={650}
              height={650}
            />
          </Link>
        </Card>
        <Card isPressable className="flex h-[350px] w-full">
          <Link href="/angebot/gitter" className="flex h-[350px] w-full">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                Gitter
              </h3>
            </CardHeader>
            <Image
              as={NextImage}
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/img/angebot/angebot-gitter.jpg"
              width={650}
              height={650}
            />
          </Link>
        </Card>
        <Card isPressable className="flex h-[350px] w-full">
          <Link href="/angebot/other" className="flex h-[350px] w-full">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                Other
              </h3>
            </CardHeader>
            <Image
              as={NextImage}
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/img/angebot/angebot-other.jpg"
              width={650}
              height={650}
            />
          </Link>
        </Card>
      </div>
    </section>
  );
}
