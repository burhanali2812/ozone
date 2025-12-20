import nodemailer from "nodemailer";

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Email transporter error:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

// Generate order email HTML template
function generateOrderEmailHTML(order) {
  const itemsHTML = order.orderItems
    .map(
      (item, index) => `
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 12px; text-align: left;">${index + 1}</td>
      <td style="padding: 12px; text-align: left;">${item.size}</td>
      <td style="padding: 12px; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px; text-align: right;">Rs.${item.price.toFixed(
        2
      )}</td>
      <td style="padding: 12px; text-align: right; font-weight: 600;">Rs.${(
        item.price * item.quantity
      ).toFixed(2)}</td>
    </tr>
  `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Order Notification</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
            🎉 New Order Received!
          </h1>
          <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 14px;">
            ${process.env.COMPANY_NAME || "OZONE MINER WATER"}
          </p>
        </div>

        <!-- Order Info -->
        <div style="padding: 30px;">
          <div style="background-color: #f0f9ff; border-left: 4px solid #3b82f6; padding: 15px; margin-bottom: 20px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: 600;">ORDER ID</p>
            <p style="margin: 5px 0 0 0; color: #1e3a8a; font-size: 16px; font-weight: bold;">#${
              order._id
            }</p>
          </div>

          <!-- Customer Details -->
          <h2 style="color: #1f2937; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
            📍 Customer Details
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 140px;">Shop Name:</td>
              <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${
                order.shopName
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Address:</td>
              <td style="padding: 8px 0; color: #1f2937;">${
                order.shopAddress
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Contact:</td>
              <td style="padding: 8px 0; color: #1f2937;">${
                order.shopContact
              }</td>
            </tr>
          </table>

          <!-- Order Items -->
          <h2 style="color: #1f2937; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
            🛒 Order Items
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; border: 1px solid #e5e7eb;">
            <thead>
              <tr style="background-color: #f9fafb;">
                <th style="padding: 12px; text-align: left; color: #374151; font-weight: 600; border-bottom: 2px solid #e5e7eb;">#</th>
                <th style="padding: 12px; text-align: left; color: #374151; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Size</th>
                <th style="padding: 12px; text-align: center; color: #374151; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Qty</th>
                <th style="padding: 12px; text-align: right; color: #374151; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Price</th>
                <th style="padding: 12px; text-align: right; color: #374151; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHTML}
            </tbody>
          </table>

          <!-- Payment Summary -->
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Total Amount:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600; text-align: right; font-size: 16px;">Rs.${order.totalPrice.toFixed(
                  2
                )}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Paid Amount:</td>
                <td style="padding: 8px 0; color: #059669; font-weight: 600; text-align: right; font-size: 16px;">Rs.${(
                  order.paidAmount || 0
                ).toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Remaining Amount:</td>
                <td style="padding: 8px 0; color: #dc2626; font-weight: 600; text-align: right; font-size: 16px;">Rs.${(
                  order.remainingAmount || 0
                ).toFixed(2)}</td>
              </tr>
              <tr style="border-top: 2px solid #e5e7eb;">
                <td style="padding: 12px 0 0 0; color: #374151; font-weight: 600; font-size: 14px;">Payment Status:</td>
                <td style="padding: 12px 0 0 0; text-align: right;">
                  <span style="background-color: ${
                    order.paymentStatus === "paid" ? "#d1fae5" : "#fef3c7"
                  }; color: ${
    order.paymentStatus === "paid" ? "#065f46" : "#92400e"
  }; padding: 6px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                    ${order.paymentStatus || "pending"}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600; font-size: 14px;">Order Status:</td>
                <td style="padding: 8px 0; text-align: right;">
                  <span style="background-color: #dbeafe; color: #1e40af; padding: 6px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                    ${order.status || "pending"}
                  </span>
                </td>
              </tr>
            </table>
          </div>

          <!-- Order Date -->
          <p style="color: #6b7280; font-size: 13px; margin: 20px 0 0 0; text-align: center;">
            Order placed on: ${new Date(
              order.createdAt || Date.now()
            ).toLocaleString("en-IN", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px; font-weight: 600;">
            ${process.env.COMPANY_NAME || "OZONE MINER WATER"}
          </p>
          <p style="margin: 0; color: #9ca3af; font-size: 12px;">
            This is an automated notification. Please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Send order notification email to admin
export async function sendOrderNotificationEmail(order) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!adminEmail) {
      console.error("ADMIN_EMAIL is not configured in environment variables");
      return { success: false, error: "Admin email not configured" };
    }

    const mailOptions = {
      from: `"${process.env.COMPANY_NAME || "OZONE MINER WATER"}" <${
        process.env.EMAIL_USER
      }>`,
      to: adminEmail,
      subject: `🔔 New Order from ${order.shopName} - Order #${order._id}`,
      html: generateOrderEmailHTML(order),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Order notification email sent:", info.messageId);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending order notification email:", error);
    return { success: false, error: error.message };
  }
}

export default transporter;
