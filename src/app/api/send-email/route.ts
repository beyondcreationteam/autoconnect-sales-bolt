import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/types/contact";

export const runtime = "nodejs";

const FIELD_LABELS: Record<keyof ContactFormValues, string> = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  jobTitle: "Job Title",
  businessType: "Business Type",
  dealerships: "Dealerships",
  challenges: "Challenges",
  timeline: "Timeline",
  message: "Message",
};

function buildEmailHtml(values: ContactFormValues): string {
  const rows = (Object.keys(FIELD_LABELS) as (keyof ContactFormValues)[])
    .map(
      (key) =>
        `<tr><th style="text-align:left; background:#f5f5f5; padding:8px;">${FIELD_LABELS[key]}</th><td style="padding:8px;">${values[key]}</td></tr>`,
    )
    .join("");

  return `
    <h2>New Demo Request</h2>
    <p>You have received a new demo request from the AutoConnect website.</p>
    <table cellpadding="5" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%;">
      ${rows}
    </table>
    <p style="margin-top:20px; color:#777; font-size:12px;">Sent via AutoConnect Next.js website</p>
  `;
}

function isContactFormValues(value: unknown): value is ContactFormValues {
  if (typeof value !== "object" || value === null) return false;
  return (Object.keys(FIELD_LABELS) as (keyof ContactFormValues)[]).every(
    (key) => typeof (value as Record<string, unknown>)[key] === "string",
  );
}

export async function POST(request: Request) {
  const body: unknown = await request.json();

  if (!isContactFormValues(body)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New Demo Request from ${body.firstName} ${body.lastName}`,
    html: buildEmailHtml(body),
  });

  return NextResponse.json({ success: true });
}
