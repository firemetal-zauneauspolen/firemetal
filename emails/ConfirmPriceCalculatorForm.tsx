import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Props {
  items: [];
  zauneLength?: string;
  zauneHeight?: string;
  toreLength?: string;
  toreHeight?: string;
  pforteLength?: string;
  pforteHeight?: string;
  gelanderLength?: string;
  gelanderHeight?: string;
  uberdachungenLength?: string;
  uberdachungenHeight?: string;
  carportsLength?: string;
  carportsHeight?: string;
  doppelstabmattenLength?: string;
  doppelstabmattenHeight?: string;
  gitterLength?: string;
  gitterHeight?: string;
  material: string;
  briefkasten: string;
  klingel: string;
  username: string;
  address: string;
  ort: string;
  postleitzahl: string;
  phone: string;
  email: string;
  message: string;
  updatedDate?: Date;
}

const baseUrl = process.env.SITE_URL ? `${process.env.SITE_URL}` : "";

export const ConfirmPriceCalculatorForm = ({
  items,
  zauneLength,
  zauneHeight,
  toreLength,
  toreHeight,
  pforteLength,
  pforteHeight,
  gelanderLength,
  gelanderHeight,
  uberdachungenLength,
  uberdachungenHeight,
  carportsLength,
  carportsHeight,
  doppelstabmattenLength,
  doppelstabmattenHeight,
  gitterLength,
  gitterHeight,
  material,
  briefkasten,
  klingel,
  username,
  address,
  ort,
  postleitzahl,
  phone,
  email,
  message,
  updatedDate = new Date(),
}: Props) => {
  const formattedDate = new Intl.DateTimeFormat("de", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(updatedDate);

  return (
    <Html>
      <Head />
      <Preview> Nowa wiadomość z formularza wyceny... </Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-neutral-100 font-sans">
          <Container className="mx-auto my-[20px] w-[465px] rounded border border-solid border-[#eaeaea] bg-white p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/img/logo/firemetal-email-logo.png`}
                alt="Logo firemetal"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[15px] p-0 text-center  text-[18px] font-normal text-black">
              Wiadomość z formularza wyceny:
            </Heading>

            <Text className="mx-auto text-center text-[14px] leading-[24px] text-black">
              <strong>Dane osoby wysyłającej:</strong>
              <br />
              Imie: <strong>{username}</strong>
              <br />
              Adres: <strong>{address}</strong>
              <br />
              Miejscowość: <strong>{ort}</strong>
              <br />
              Kod pocztowy: <strong>{postleitzahl}</strong>
              <br />
              Telefon: <strong>{phone}</strong>
              <br />
              Email: <strong>{email}</strong>
            </Text>
            <Text className="mx-auto bg-neutral-100 px-12 py-4 text-left">
              Co potrzebuje: {items?.map((item) => item + " ")} <br />
              {zauneLength ? (
                <>
                  Długość płotu: {zauneLength} Wysokość płotu: {zauneHeight}
                  <br />
                </>
              ) : null}
              {toreLength ? (
                <>
                  Długość bramy: {toreLength} Wysokość bramy: {toreHeight}
                  <br />
                </>
              ) : null}
              {pforteLength ? (
                <>
                  Długość furtki: {pforteLength} Wysokość furtki: {pforteHeight}
                  <br />
                </>
              ) : null}
              {gelanderLength ? (
                <>
                  Długość balustrady: {gelanderLength} Wysokość balustrady:{" "}
                  {gelanderHeight}
                  <br />
                </>
              ) : null}
              {uberdachungenLength ? (
                <>
                  Długość zadaszenia: {uberdachungenLength} Wysokość zadaszenia:{" "}
                  {uberdachungenHeight}
                  <br />
                </>
              ) : null}
              {carportsLength ? (
                <>
                  Długość carportu: {carportsLength} Wysokość carportu:{" "}
                  {carportsHeight}
                  <br />
                </>
              ) : null}
              {doppelstabmattenLength ? (
                <>
                  Długość maty systemowej: {doppelstabmattenLength} Wysokość
                  maty systemowej: {doppelstabmattenHeight}
                  <br />
                </>
              ) : null}
              {gitterLength ? (
                <>
                  Długość kraty okiennej: {gitterLength} Wysokość kraty
                  okiennej: {gitterHeight}
                  <br />
                </>
              ) : null}
              Materiał: {material}
              <br />
              Skrzynka: {briefkasten}
              <br />
              Dzwonek: {klingel}
              <br />
              Wiadomość:
              <br />
              &quot;{message}&quot;
            </Text>
            <Text className="mx-auto text-center text-[14px] leading-[24px] text-black">
              Wiadomość została wysłana 🕓: {formattedDate}.
            </Text>
            <Heading className="mx-0 my-[15px] p-0 text-center text-[18px] font-normal text-black">
              Odpowiedz najszybciej jak to możliwe.
            </Heading>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmPriceCalculatorForm;
