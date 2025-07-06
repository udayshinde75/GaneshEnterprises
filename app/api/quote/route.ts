import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_EMAIL || "ganeshenterprises@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, service, description } = await request.json();

    // Validate required fields
    if (!name || !phone || !service || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate phone number format
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number" },
        { status: 400 }
      );
    }

    if (!toEmail) {
      return NextResponse.json(
        { error: "Contact email not configured." },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Ganesh Enterprises <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Quote Request - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center;">New Quote Request</h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; margin-bottom: 10px;">Customer Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Service Required:</strong> ${service}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; margin-bottom: 10px;">Project Description:</h3>
              <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">${description.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px;">This quote request was submitted from the Ganesh Enterprises website.</p>
              <p style="color: #666; font-size: 14px;">Please respond to the customer within 24 hours.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
} 