import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export function FindUsUberUns() {
  return (
    <>
      <h2 className="z-30 py-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
        Znajdziesz nas na:
      </h2>
      <div className="flex flex-col gap-8 sm:flex-row">
        <Card
          isPressable
          className="flex w-64 items-center justify-center bg-white/5 py-4 shadow-2xl"
        >
          <CardHeader className="flex-col items-center pb-0">
            <h3 className="text-large font-bold">Facebook</h3>
          </CardHeader>
          <Link target="_blank" href={"https://www.facebook.com/firemetaleu/"}>
            <CardBody className="overflow-visible pt-4">
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
          className="flex w-64 items-center justify-center bg-white/5 py-4 shadow-2xl"
          shadow="lg"
        >
          <CardHeader className="flex-col items-center pb-0">
            <h3 className="text-large font-bold">Google Profile</h3>
          </CardHeader>
          <Link target="_blank" href={"https://goo.gl/maps/BrZm7MDpNn8z7d5t9"}>
            <CardBody className="overflow-visible pt-4">
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
    </>
  );
}
