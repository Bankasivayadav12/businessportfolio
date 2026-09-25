import { NextResponse } from "next/server";
import { updateLeadStatus } from "@/lib/db/mongodb";
import { LeadStatus } from "@/types";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, notes } = body as { status: LeadStatus; notes?: string };

    const updated = await updateLeadStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ success: false, message: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch (error) {
    console.error("Error updating lead status:", error);
    return NextResponse.json({ success: false, message: "Failed to update lead" }, { status: 500 });
  }
}
