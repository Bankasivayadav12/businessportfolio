import { NextResponse } from "next/server";
import { z } from "zod";
import { createLead } from "@/lib/db/mongodb";
import { sendEmail, emailTemplates } from "@/lib/email";

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.enum([
    "Website",
    "Mobile App",
    "SaaS",
    "E-commerce",
    "Admin Dashboard",
    "AI",
    "API",
    "Other",
  ]),
  budget: z.enum(["₹25K–₹50K", "₹50K–₹1L", "₹1L–₹3L", "₹3L+"]),
  timeline: z.string().min(1, "Timeline is required"),
  projectDescription: z.string().min(10, "Please provide at least a brief description"),
  referenceWebsite: z.string().optional(),
  requiredFeatures: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const lead = await createLead(result.data);

    // Dispatch email alert to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || "siva@example.com",
      ...emailTemplates.leadNotification({
        name: lead.name,
        email: lead.email,
        projectType: lead.projectType,
        budget: lead.budget,
        description: lead.projectDescription,
      }),
    });

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      message: "Your project inquiry has been received! Siva will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error submitting project inquiry." },
      { status: 500 }
    );
  }
}
