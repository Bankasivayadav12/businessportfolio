import { NextResponse } from "next/server";
import { z } from "zod";
import { loginUser } from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().email("Valid email required"),
  password: z.string().min(4, "Password required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { email, password } = result.data;
    const loginRes = await loginUser(email, password);

    if (!loginRes.success) {
      return NextResponse.json(
        { success: false, message: loginRes.error || "Authentication failed" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: loginRes.user,
      redirectTo: loginRes.user?.role === "ADMIN" ? "/admin" : "/dashboard",
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred during login" },
      { status: 500 }
    );
  }
}
