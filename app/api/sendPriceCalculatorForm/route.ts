import PriceCalculatorForm from "@/emails/PriceCalculatorForm";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { username, email } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "Firemetal.eu <" + process.env.EMAIL_SEND_ADDRESS + ">",
      to: email,
      subject: `Hallo ${username} 🌹,`,
      react: PriceCalculatorForm({ username }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
