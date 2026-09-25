import { NextResponse } from "next/server";
import { z } from "zod";
import { getProductBySlug, createOrder } from "@/lib/db/mongodb";
import { initializePayment } from "@/lib/payments";

const checkoutSchema = z.object({
  customerName: z.string().min(2, "Name is required"),
  customerEmail: z.string().email("Valid email is required"),
  productSlug: z.string(),
  paymentProvider: z.enum(["Stripe", "Razorpay", "Test"]),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = checkoutSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const { customerName, customerEmail, productSlug, paymentProvider } = result.data;

    // Verify product price server-side (prevent client tampering)
    const product = await getProductBySlug(productSlug);
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    // Create Order with pending status
    const order = await createOrder({
      customerName,
      customerEmail,
      items: [
        {
          productId: product.id,
          productTitle: product.title,
          price: product.price,
          downloadToken: product.downloadToken,
        },
      ],
      totalAmount: product.price,
      paymentProvider,
    });

    // Initialize Gateway Session
    const paymentSession = await initializePayment({
      provider: paymentProvider,
      amount: product.price,
      currency: "INR",
      orderNumber: order.orderNumber,
      customerEmail,
      customerName,
      itemNames: [product.title],
    });

    return NextResponse.json({
      success: true,
      orderNumber: order.orderNumber,
      amount: product.price,
      paymentSession,
      redirectUrl: paymentSession.redirectUrl || `/checkout/success?order=${order.orderNumber}&provider=${paymentProvider}`,
    });
  } catch (error) {
    console.error("Checkout initialization error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to initialize order" },
      { status: 500 }
    );
  }
}
