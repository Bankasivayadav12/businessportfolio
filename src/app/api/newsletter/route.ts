import { NextResponse } from "next/server";
import { z } from "zod";
import { subscribeNewsletter } from "@/lib/db/mongodb";
import { sendEmail, emailTemplates } from "@/lib/email";

const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  source: z.string().optional().default("website"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { email, source } = result.data;
    const subResult = await subscribeNewsletter(email, source);

    if (subResult.success) {
      // Dispatch confirmation email
      await sendEmail({
        to: email,
        ...emailTemplates.newsletterConfirmation(email),
      });
    }

    return NextResponse.json(subResult, {
      status: subResult.success ? 200 : 409,
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred while subscribing" },
      { status: 500 }
    );
  }
}
