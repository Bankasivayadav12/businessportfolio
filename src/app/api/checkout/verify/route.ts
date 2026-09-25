import { NextResponse } from "next/server";
import { z } from "zod";
import { getOrders } from "@/lib/db/mongodb";
import { verifyServerPaymentSignature } from "@/lib/payments";
import { sendEmail, emailTemplates } from "@/lib/email";

const verifySchema = z.object({
  orderNumber: z.string(),
  paymentId: z.string().optional().default("tx_verified"),
  signature: z.string().optional(),
  provider: z.enum(["Stripe", "Razorpay", "Test"]).default("Test"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = verifySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ success: false, message: "Invalid verification payload" }, { status: 400 });
    }

    const { orderNumber, paymentId, signature, provider } = result.data;
    const orders = await getOrders();
    const order = orders.find((o) => o.orderNumber === orderNumber);

    if (!order) {
      return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 });
    }

    const isValid = verifyServerPaymentSignature({
      provider,
      orderId: orderNumber,
      paymentId,
      signature,
    });

    if (!isValid) {
      order.paymentStatus = "Failed";
      return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 });
    }

    // Mark as completed
    order.paymentStatus = "Completed";
    order.transactionId = paymentId;

    // Send confirmation email
    await sendEmail({
      to: order.customerEmail,
      ...emailTemplates.orderConfirmation({
        orderNumber: order.orderNumber,
        customerName: order.customerName,
        totalAmount: order.totalAmount,
        downloadLink: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard`,
        items: order.items.map((i) => i.productTitle),
      }),
    });

    return NextResponse.json({
      success: true,
      orderNumber: order.orderNumber,
      status: "Completed",
      items: order.items,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json({ success: false, message: "Verification processing error" }, { status: 500 });
  }
}
