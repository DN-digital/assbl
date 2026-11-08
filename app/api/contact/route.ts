import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { contactCourses } from "@/lib/site";

type Payload = {
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  course?: string;
  message?: string;
  consent?: boolean;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { message: "Le formulaire est incomplet ou illisible." },
      { status: 400 },
    );
  }

  const lastName = String(body.lastName || "").trim();
  const firstName = String(body.firstName || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const course = String(body.course || "").trim();
  const message = String(body.message || "").trim();

  const allowedCourses = new Set<string>(contactCourses);

  if (
    !lastName ||
    !firstName ||
    !email ||
    !course ||
    !allowedCourses.has(course) ||
    !message ||
    !body.consent
  ) {
    return NextResponse.json(
      { message: "Merci de renseigner les champs obligatoires et d’accepter l’utilisation de vos données." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { message: "L’adresse e-mail n’est pas valide." },
      { status: 400 },
    );
  }

  const successMessage =
    "Votre formulaire a bien été envoyé. Nous vous recontacterons rapidement.";

  const destination = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (destination && apiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "assbl <onboarding@resend.dev>",
        to: [destination],
        reply_to: email,
        subject: `Demande de contact — ${course}`,
        text: [
          `Nom : ${lastName}`,
          `Prénom : ${firstName}`,
          `E-mail : ${email}`,
          `Téléphone : ${phone || "non renseigné"}`,
          `Formation : ${course}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ message: successMessage });
    }
  }

  return NextResponse.json({ message: successMessage });
}
