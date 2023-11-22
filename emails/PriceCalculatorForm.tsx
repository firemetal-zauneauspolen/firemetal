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

interface Props {
  username: string;
  updatedDate?: Date;
}

const baseUrl = process.env.SITE_URL ? `${process.env.SITE_URL}` : "";

export const PriceCalculatorForm = ({
  username,
  updatedDate = new Date(),
}: Props) => {
  const formattedDate = new Intl.DateTimeFormat("de", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(updatedDate);

  return (
    <Html>
      <Head />
      <Preview> Vielen Dank für Ihre Kontaktaufnahme... </Preview>
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
                Vielen Dank für Ihre Kontaktaufnahme. Dies ist nur eine E-Mail
                zur Bestätigung, dass wir Ihre Nachricht erhalten haben. Sie
                müssen nicht darauf antworten.
              </Text>
              <Text style={paragraph}>
                Ihre Nachricht wurde gesendet 🕓: {formattedDate}
              </Text>
              <Text style={paragraph}>
                Wir werden alles tun, um so schnell wie möglich zu antworten 💪.
              </Text>

              <Text style={paragraph}>
                Wenn Sie weitere Fragen oder Bedenken haben, kontaktieren Sie
                uns bitte auf dem von Ihnen gewählten Weg{" "}
                <Link href="firemetal.eu/kontakt" target="_blank" style={link}>
                  Kontakt
                </Link>
                .
              </Text>
              <Text style={paragraph}>
                Vielen Dank für Ihre Aufmerksamkeit, Wir möchten Sie darüber
                informieren, dass wir eine E-Mail erhalten haben. Sie müssen
                nicht auf diese Nachricht antworte.
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

export default PriceCalculatorForm;

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
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
