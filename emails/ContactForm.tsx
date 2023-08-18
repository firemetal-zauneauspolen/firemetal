import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  username: string;
  message: string;
  updatedDate?: Date;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ContactForm = ({
  username,
  message,
  updatedDate = new Date(),
}: WelcomeEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat("de", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(updatedDate);

  return (
    <Html>
      <Head />
      <Preview> Dziękujemy za kontakt... </Preview>
      <Tailwind>
        <Body className="mx-auto bg-neutral-100 font-sans">
          <Container className="rounded-lg bg-white text-center shadow-lg">
            <Img
              src={`${baseUrl}/img/logo/firemetal-email-logo.png`}
              className="mx-auto w-24 py-4"
            />
            <Section className="flex w-full">
              <Row>
                <Column style={sectionBorder} />
                <Column style={sectionCenter} />
                <Column style={sectionBorder} />
              </Row>
            </Section>
            <Section style={content}>
              <Text style={paragraph}>Hallo {username} 🔥,</Text>
              <Text style={paragraph}>
                Dziękujemy za kontakt z nami. Jest to tylko email potwierdzający
                otrzymanie przez nas Twojej wiadomości. Nie musisz na niego
                odpowiadać.
              </Text>
              <Text style={paragraph}>
                Zrobimy wszystko co w naszej mocy aby odpowiedzieć najszybciej
                jak to tylko możliwe 💪.
              </Text>
              <Text style={paragraph}>
                Twoja wiadomość:{" "}
                <Text style={review}> &quot;{message}&quot; </Text>
                <Text style={paragraph}> wysłana 🕓: {formattedDate}. </Text>
              </Text>

              <Text style={paragraph}>
                Jeżeli masz jeszcze jakieś pytania lub wątpliwości prosimy o
                kontakt w wybrany przez Ciebie sposób{" "}
                <Link href="firemetal.eu/kontakt" target="_blank" style={link}>
                  Kontakt
                </Link>
                .
              </Text>
              <Text style={paragraph}>
                Dziękuję za uwagę,
                <br />
                Przemysław Dereziński, owner of FireMetal.
              </Text>
            </Section>
          </Container>

          <Section style={footer}>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2023 FireMetal, All Rights Reserved <br />
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactForm;

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f5f5f5",
  borderRadius: "4px",
};

const footer = {
  width: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 40px 10px 40px",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid #FF0000",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};
