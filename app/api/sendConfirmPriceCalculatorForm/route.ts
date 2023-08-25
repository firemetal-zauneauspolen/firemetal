import ConfirmPriceCalculatorForm from "@/emails/ConfirmPriceCalculatorForm";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {
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
  } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "firemetal.eu <" + process.env.EMAIL_SEND_ADDRESS + ">",
      to: process.env.EMAIL_TO_ADDRESS || "",
      subject: "[FORMULARZ WYCENY],",
      react: ConfirmPriceCalculatorForm({
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
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
