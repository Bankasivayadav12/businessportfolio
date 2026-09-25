import { NextResponse } from "next/server";
import { z } from "zod";
import { registerUser } from "@/lib/auth";

const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = registerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { name, email, password } = result.data;
    const registerRes = await registerUser(name, email, password);

    if (!registerRes.success) {
      return NextResponse.json(
        { success: false, message: registerRes.error || "Registration failed" },
        { status: 409 }
      );
    }

    return NextResponse.json({
      success: true,
      user: registerRes.user,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred during registration" },
      { status: 500 }
    );
  }
}
