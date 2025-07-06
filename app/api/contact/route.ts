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
    
    const subject = `New Contact Inquiry - Ganesh Enterprises`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px; text-align: center;">New Contact Inquiry</h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #666; margin-bottom: 10px;">Customer Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #666; margin-bottom: 10px;">Message:</h3>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">This inquiry was submitted from the Ganesh Enterprises website.</p>
            <p style="color: #666; font-size: 14px;">Please respond to the customer within 24 hours.</p>
          </div>
        </div>
      </div>
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
