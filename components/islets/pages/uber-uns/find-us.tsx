import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export function FindUsUberUns() {
  return (
    <section className="z-30 mt-8 flex flex-col items-center justify-center">
      <h2 className="z-30 py-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
        Sie finden uns unter:
      </h2>
      <div className="flex w-full flex-col items-center gap-8 pt-8 2xl:flex-row">
        <Card
          isPressable
          className="flex w-full items-center justify-center bg-white/5 py-4 shadow-2xl sm:w-96"
        >
          <CardHeader className="flex-col items-center pb-0">
            <h3 className="text-center text-lg font-semibold md:text-xl">
              Facebook
            </h3>
          </CardHeader>

          <Link target="_blank" href={"https://www.facebook.com/firemetaleu/"}>
            <CardBody className="flex items-center overflow-visible pt-4">
              <Image
                isZoomed
                alt="Card background"
                className="rounded-xl object-cover"
                src="/img/logo/firemetal-logo-fb.webp"
                width={85}
              />
            </CardBody>
          </Link>
        </Card>
        <Card
          isPressable
          className="flex w-full items-center justify-center bg-white/5 py-4 shadow-2xl sm:w-96"
          shadow="lg"
        >
          <CardHeader className="flex-col items-center pb-0">
            <h3 className="text-center text-lg font-semibold md:text-xl">
              Google Profile
            </h3>
          </CardHeader>

          <Link target="_blank" href={"https://www.facebook.com/firemetaleu/"}>
            <CardBody className="flex items-center overflow-visible pt-4">
              <Image
                isZoomed
                alt="Card background"
                className="rounded-xl"
                src="/img/logo/firemetal-logo-gplus.webp"
                width={85}
              />
            </CardBody>
          </Link>
        </Card>
      </div>
    </section>
  );
}
