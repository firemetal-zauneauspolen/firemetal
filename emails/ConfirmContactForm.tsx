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
  username: string;
  message: string;
  email: string;
  updatedDate?: Date;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ConfirmContactForm = ({
  username,
  message,
  email,
  updatedDate = new Date(),
}: Props) => {
  const formattedDate = new Intl.DateTimeFormat("de", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(updatedDate);

  return (
    <Html>
      <Head />
      <Preview> Nowa wiadomość z formularza kontaktowego... </Preview>
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
            <Heading className="mx-0 my-[30px] p-0 text-center text-[18px] font-normal text-black">
              Wiadomość od: <strong>{username}</strong>
            </Heading>
            <Text className="mx-auto bg-neutral-100 px-12 py-4 text-center">
              {" "}
              &quot;{message}&quot;{" "}
            </Text>

            <Text className="mx-auto text-center text-[14px] leading-[24px] text-black">
              Wiadomość została wysłana 🕓: {formattedDate}.
            </Text>

            <Text className="mx-auto text-center text-[14px] leading-[24px] text-black">
              Dane osoby wysyłającej: <br />
              Imie: <strong>{username}</strong> <br />
              Email: <strong>{email}</strong>
            </Text>

            <Heading className="mx-0 my-[30px] p-0 text-center text-[18px] font-normal text-black">
              Odpowiedz najszybciej jak to możliwe.
            </Heading>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmContactForm;
