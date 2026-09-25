export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(payload: EmailPayload) {
  // If Resend API Key is set, send via Resend
  if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_placeholder_key") {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "Siva <notifications@siva.dev>",
          to: payload.to,
          subject: payload.subject,
          html: payload.html,
        }),
      });
      return await res.json();
    } catch (err) {
      console.error("Resend dispatch error:", err);
    }
  }

  // Fallback logger for development & demonstration
  console.log(`[Email Simulation] To: ${payload.to} | Subject: "${payload.subject}"`);
  return { simulated: true, to: payload.to };
}

export const emailTemplates = {
  welcome: (name: string) => ({
    subject: "Welcome to Siva's Developer & Product Community",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1e293b; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0;">
        <h2 style="color: #2563eb; margin-top: 0;">Welcome, ${name}!</h2>
        <p>Thanks for creating an account on the Siva platform. You now have immediate access to your purchased digital products, course learning dashboard, and developer templates.</p>
        <p>If you have any questions or need project consultation, feel free to reply directly to this email.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 12px; color: #64748b;">Siva • Full-Stack Developer & Digital Product Builder</p>
      </div>
    `,
  }),

  leadNotification: (lead: { name: string; email: string; projectType: string; budget: string; description: string }) => ({
    subject: `[New Lead Alert] ${lead.name} interested in ${lead.projectType}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2563eb;">New Project Inquiry</h2>
        <p><strong>Client:</strong> ${lead.name} (${lead.email})</p>
        <p><strong>Project Type:</strong> ${lead.projectType}</p>
        <p><strong>Budget:</strong> ${lead.budget}</p>
        <p><strong>Description:</strong></p>
        <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border-left: 4px solid #3b82f6;">${lead.description}</div>
      </div>
    `,
  }),

  contactNotification: (contact: { name: string; email: string; subject: string; message: string }) => ({
    subject: `[Contact Form] ${contact.subject} from ${contact.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0;">
        <h3>New Contact Message</h3>
        <p><strong>From:</strong> ${contact.name} (${contact.email})</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f1f5f9; padding: 12px; border-radius: 6px;">${contact.message}</p>
      </div>
    `,
  }),

  orderConfirmation: (order: { orderNumber: string; customerName: string; totalAmount: number; downloadLink: string; items: string[] }) => ({
    subject: `Order Confirmed: #${order.orderNumber} — Your Digital Downloads Are Ready`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #10b981;">Payment Confirmed!</h2>
        <p>Hello ${order.customerName},</p>
        <p>Thank you for purchasing! Your order <strong>#${order.orderNumber}</strong> has been successfully processed for ₹${order.totalAmount}.</p>
        <p>Items purchased:</p>
        <ul>${order.items.map((it) => `<li>${it}</li>`).join("")}</ul>
        <p style="margin: 24px 0;">
          <a href="${order.downloadLink}" style="background: #2563eb; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Access Downloads</a>
        </p>
      </div>
    `,
  }),

  courseEnrollment: (courseTitle: string, studentName: string) => ({
    subject: `Enrolled: You're now in ${courseTitle}!`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2563eb;">Ready to Learn?</h2>
        <p>Hi ${studentName},</p>
        <p>You have successfully enrolled in <strong>${courseTitle}</strong>. Your modules and interactive lessons are unlocked in your learning dashboard.</p>
        <p><a href="/dashboard" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none;">Start Learning Now</a></p>
      </div>
    `,
  }),

  newsletterConfirmation: (email: string) => ({
    subject: "Confirmed: You're on the Siva TechVibes Newsletter",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h3 style="color: #2563eb;">Subscription Confirmed!</h3>
        <p>You'll receive exclusive technical writeups, source code starters, and early-bird discounts on upcoming courses and digital templates.</p>
      </div>
    `,
  }),
};
