import { NextResponse } from "next/server";
import { z } from "zod";
import { createContactMessage } from "@/lib/db/mongodb";
import { sendEmail, emailTemplates } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const newMsg = await createContactMessage(result.data);

    // Send email notification to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || "siva@example.com",
      ...emailTemplates.contactNotification(result.data),
    });

    return NextResponse.json({
      success: true,
      id: newMsg.id,
      message: "Your message has been sent successfully! Siva will respond shortly.",
    });
  } catch (error) {
    console.error("Contact message error:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred sending message." },
      { status: 500 }
    );
  }
}
