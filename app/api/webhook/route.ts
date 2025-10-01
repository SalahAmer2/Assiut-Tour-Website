// import { NextResponse } from "next/server";
// import Stripe from "stripe";
// import nodemailer from "nodemailer";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: Request) {
//   const body = await req.text();
//   const sig = req.headers.get("stripe-signature")!;
//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
//   } catch (err: any) {
//     return new NextResponse(`Webhook error: ${err.message}`, { status: 400 });
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object as Stripe.Checkout.Session;

//     // Extract booking form info
//     const { tour, fullName, nationality, passport, telephone, arrivalDate } = session.metadata!;

//     // Email setup
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // or SMTP provider
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"Tour Booking" <${process.env.EMAIL_USER}>`,
//       to: process.env.NOTIFY_EMAIL, // your email
//       subject: `New Booking: ${tour}`,
//       html: `
//         <h2>Booking Details</h2>
//         <p><b>Full Name:</b> ${fullName}</p>
//         <p><b>Nationality:</b> ${nationality}</p>
//         <p><b>Passport:</b> ${passport}</p>
//         <p><b>Telephone:</b> ${telephone}</p>
//         <p><b>Arrival Date:</b> ${arrivalDate}</p>
//         <h2>Payment Details</h2>
//         <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//         <p><b>Payment ID:</b> ${session.payment_intent}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//   }

//   return NextResponse.json({ received: true });
// }

import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    return new NextResponse(`Webhook error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Extract booking form info
    const {
      tour,
      fullName,
      nationality,
      passport,
      telephone,
      arrivalDate,
      customerEmail,
      bookingRef,
    } = session.metadata!;

    // Nodemailer Gmail transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlBody = `
      <h2>Booking Confirmation</h2>
      <p><b>Reference:</b> ${bookingRef}</p>
      <p><b>Tour:</b> ${tour}</p>
      <p><b>Full Name:</b> ${fullName}</p>
      <p><b>Nationality:</b> ${nationality}</p>
      <p><b>Passport:</b> ${passport}</p>
      <p><b>Telephone:</b> ${telephone}</p>
      <p><b>Arrival Date:</b> ${arrivalDate}</p>
      <h2>Payment Details</h2>
      <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
      <p><b>Payment ID:</b> ${session.payment_intent}</p>
    `;

    const mailOptions = {
      from: `"Tour Booking" <${process.env.EMAIL_USER}>`,
      to: [process.env.NOTIFY_EMAIL, customerEmail], // send to you & customer
      subject: `Booking Confirmation - ${tour} (${bookingRef})`,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);
  }

  return NextResponse.json({ received: true });
}
