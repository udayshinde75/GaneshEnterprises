import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_EMAIL;

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!toEmail) {
      return NextResponse.json({ error: "Contact email not configured." }, { status: 500 });
    }
    const subject = `New Inquiry for Ganesh Enterprises`;
    const html = `
      <h2>New Inquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Message:</b><br/>${message}</p>
    `;
    const data = await resend.emails.send({
      from: `Ganesh Enterprises <onboarding@resend.dev>`,
      to: toEmail,
      subject,
      html,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
