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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////THIS WORKS BUT DOESN"T HAVE TRANSFERS
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
//     const {
//       tour,
//       fullName,
//       nationality,
//       passport,
//       telephone,
//       arrivalDate,
//       customerEmail,
//       bookingRef,
//     } = session.metadata!;

//     // Nodemailer Gmail transport
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     // --- Email to BUSINESS (full details) ---
//     const businessMail = {
//       from: `"Tour Booking" <${process.env.EMAIL_USER}>`,
//       to: process.env.NOTIFY_EMAIL,
//       subject: `New Booking - ${tour} (${bookingRef})`,
//       html: `
//         <h2>New Booking Received</h2>
//         <p><b>Reference:</b> ${bookingRef}</p>
//         <p><b>Tour:</b> ${tour}</p>
//         <p><b>Full Name:</b> ${fullName}</p>
//         <p><b>Nationality:</b> ${nationality}</p>
//         <p><b>Passport Number:</b> ${passport}</p>
//         <p><b>Telephone:</b> ${telephone}</p>
//         <p><b>Arrival Date:</b> ${arrivalDate}</p>
//         <h2>Payment Details</h2>
//         <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//         <p><b>Payment ID:</b> ${session.payment_intent}</p>
//       `,
//     };

//     // --- Email to CUSTOMER (clean confirmation) ---
//     const customerMail = {
//       from: `"Tour Booking" <${process.env.EMAIL_USER}>`,
//       to: customerEmail,
//       subject: `Booking Confirmation - ${tour} (${bookingRef})`,
//       html: `
//         <h2>Booking Confirmation</h2>
//         <p><b>Reference:</b> ${bookingRef}</p>
//         <p><b>Tour:</b> ${tour}</p>
//         <p><b>Full Name:</b> ${fullName}</p>
//         <p><b>Nationality:</b> ${nationality}</p>
//         <p><b>Arrival Date:</b> ${arrivalDate}</p>
//         <p><b>Telephone:</b> ${telephone}</p>
//         <h2>Payment</h2>
//         <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//         <hr/>
//         <p>Thank you for booking with us! We look forward to welcoming you.</p>
//       `,
//     };

//     // Send both emails
//     await transporter.sendMail(businessMail);
//     await transporter.sendMail(customerMail);
//   }

//   return NextResponse.json({ received: true });
// }
///////THIS WORKS BUT DOESN"T HAVE TRANSFERS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//     const metadata = session.metadata || {};
//     console.log("Webhook received type:", metadata.type);
//     console.log("Webhook metadata:", metadata);

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: { rejectUnauthorized: false },
//     });

//     // Check if this is a Transfer or a Tour booking
//     if (metadata.type === "transfer") {
//       const { from, to, date, time, fullName, email, phone, bookingRef } = metadata;

//       // --- Email to BUSINESS ---
//       const businessMail = {
//         from: `"Transfer Booking" <${process.env.EMAIL_USER}>`,
//         to: process.env.NOTIFY_EMAIL,
//         subject: `New Transfer Booking (${bookingRef})`,
//         html: `
//           <h2>New Transfer Request</h2>
//           <p><b>Reference:</b> ${bookingRef}</p>
//           <p><b>From:</b> ${from}</p>
//           <p><b>To:</b> ${to}</p>
//           <p><b>Date:</b> ${date}</p>
//           <p><b>Time:</b> ${time}</p>
//           <p><b>Customer Name:</b> ${fullName}</p>
//           <p><b>Phone:</b> ${phone}</p>
//           <h2>Payment Details</h2>
//           <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//           <p><b>Payment ID:</b> ${session.payment_intent}</p>
//         `,
//       };

//       // --- Email to CUSTOMER ---
//       const customerMail = {
//         from: `"Transfer Booking" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: `Transfer Confirmation (${bookingRef})`,
//         html: `
//           <h2>Transfer Confirmation</h2>
//           <p><b>Reference:</b> ${bookingRef}</p>
//           <p><b>From:</b> ${from}</p>
//           <p><b>To:</b> ${to}</p>
//           <p><b>Date:</b> ${date}</p>
//           <p><b>Time:</b> ${time}</p>
//           <p><b>Passenger:</b> ${fullName}</p>
//           <h2>Payment</h2>
//           <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//           <hr/>
//           <p>Thank you for choosing our transfer service! Safe travels.</p>
//         `,
//       };

//       await transporter.sendMail(businessMail);
//       await transporter.sendMail(customerMail);
//     } else {
//       // Default: Tour booking
//       const {
//         tour,
//         fullName,
//         nationality,
//         passport,
//         telephone,
//         arrivalDate,
//         customerEmail,
//         bookingRef,
//       } = metadata;

//       const businessMail = {
//         from: `"Tour Booking" <${process.env.EMAIL_USER}>`,
//         to: process.env.NOTIFY_EMAIL,
//         subject: `New Booking - ${tour} (${bookingRef})`,
//         html: `
//           <h2>New Booking Received</h2>
//           <p><b>Reference:</b> ${bookingRef}</p>
//           <p><b>Tour:</b> ${tour}</p>
//           <p><b>Full Name:</b> ${fullName}</p>
//           <p><b>Nationality:</b> ${nationality}</p>
//           <p><b>Passport Number:</b> ${passport}</p>
//           <p><b>Telephone:</b> ${telephone}</p>
//           <p><b>Arrival Date:</b> ${arrivalDate}</p>
//           <h2>Payment Details</h2>
//           <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//           <p><b>Payment ID:</b> ${session.payment_intent}</p>
//         `,
//       };

//       const customerMail = {
//         from: `"Tour Booking" <${process.env.EMAIL_USER}>`,
//         to: customerEmail,
//         subject: `Booking Confirmation - ${tour} (${bookingRef})`,
//         html: `
//           <h2>Booking Confirmation</h2>
//           <p><b>Reference:</b> ${bookingRef}</p>
//           <p><b>Tour:</b> ${tour}</p>
//           <p><b>Full Name:</b> ${fullName}</p>
//           <p><b>Nationality:</b> ${nationality}</p>
//           <p><b>Arrival Date:</b> ${arrivalDate}</p>
//           <p><b>Telephone:</b> ${telephone}</p>
//           <h2>Payment</h2>
//           <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//           <hr/>
//           <p>Thank you for booking with us! We look forward to welcoming you.</p>
//         `,
//       };

//       await transporter.sendMail(businessMail);
//       await transporter.sendMail(customerMail);
//     }
//   }

//   return NextResponse.json({ received: true });
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//     console.error("⚠️ Webhook signature verification failed:", err.message);
//     return new NextResponse(`Webhook error: ${err.message}`, { status: 400 });
//   }

//   // ✅ Only handle completed checkouts
//   if (event.type !== "checkout.session.completed") {
//     return NextResponse.json({ received: true });
//   }

//   const session = event.data.object as Stripe.Checkout.Session;
//   const metadata = session.metadata || {};

//   console.log("✅ Webhook received type:", metadata.type);
//   console.log("✅ Webhook metadata:", metadata);

//   // Configure mail transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     tls: { rejectUnauthorized: false },
//   });

//   // Build the email content dynamically based on type
//   let businessMail, customerMail;

//   if (metadata.type === "transfer") {
//     businessMail = {
//       from: `"Transfer Booking" <${process.env.EMAIL_USER}>`,
//       to: process.env.NOTIFY_EMAIL,
//       subject: `New Transfer Booking (${metadata.bookingRef})`,
//       html: `
//         <h2>New Transfer Booking Received</h2>
//         <p><b>Reference:</b> ${metadata.bookingRef}</p>
//         <p><b>From:</b> ${metadata.from}</p>
//         <p><b>To:</b> ${metadata.to}</p>
//         <p><b>Date:</b> ${metadata.date}</p>
//         <p><b>Time:</b> ${metadata.time}</p>
//         <p><b>Customer Name:</b> ${metadata.fullName}</p>
//         <p><b>Phone:</b> ${metadata.phone}</p>
//         <hr/>
//         <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//       `,
//     };

//     customerMail = {
//       from: `"Assiut Transfers" <${process.env.EMAIL_USER}>`,
//       to: metadata.email,
//       subject: `Transfer Confirmation (${metadata.bookingRef})`,
//       html: `
//         <h2>Transfer Booking Confirmed</h2>
//         <p>Dear ${metadata.fullName},</p>
//         <p>Your transfer from <b>${metadata.from}</b> to <b>${metadata.to}</b> has been confirmed.</p>
//         <p><b>Date:</b> ${metadata.date} | <b>Time:</b> ${metadata.time}</p>
//         <p><b>Booking Reference:</b> ${metadata.bookingRef}</p>
//         <hr/>
//         <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//         <p>Thank you for choosing Assiut Transfers!</p>
//       `,
//     };
//   }

//   if (metadata.type === "tour") {
//     businessMail = {
//       from: `"Tour Booking" <${process.env.EMAIL_USER}>`,
//       to: process.env.NOTIFY_EMAIL,
//       subject: `New Tour Booking (${metadata.bookingRef})`,
//       html: `
//         <h2>New Tour Booking Received</h2>
//         <p><b>Reference:</b> ${metadata.bookingRef}</p>
//         <p><b>Tour:</b> ${metadata.item}</p>
//         <p><b>Full Name:</b> ${metadata.fullName}</p>
//         <p><b>Nationality:</b> ${metadata.nationality}</p>
//         <p><b>Passport:</b> ${metadata.passport}</p>
//         <p><b>Telephone:</b> ${metadata.telephone}</p>
//         <p><b>Arrival Date:</b> ${metadata.arrivalDate}</p>
//         <p><b>Email:</b> ${metadata.customerEmail}</p>
//         <hr/>
//         <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//       `,
//     };

//     customerMail = {
//       from: `"Assiut Tours" <${process.env.EMAIL_USER}>`,
//       to: metadata.customerEmail,
//       subject: `Tour Booking Confirmation (${metadata.bookingRef})`,
//       html: `
//         <h2>Tour Booking Confirmed</h2>
//         <p>Dear ${metadata.fullName},</p>
//         <p>Your booking for <b>${metadata.item}</b> has been confirmed.</p>
//         <p><b>Reference:</b> ${metadata.bookingRef}</p>
//         <p><b>Arrival Date:</b> ${metadata.arrivalDate}</p>
//         <hr/>
//         <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
//         <p>Thank you for booking with us!</p>
//       `,
//     };
//   }

//   // Send both emails if defined
//   if (businessMail && customerMail) {
//     await transporter.sendMail(businessMail);
//     await transporter.sendMail(customerMail);
//   } else {
//     console.warn("⚠️ No email templates matched this webhook type.");
//   }

//   return NextResponse.json({ received: true });
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    console.error("⚠️ Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook error: ${err.message}`, { status: 400 });
  }

  // ✅ Only handle completed checkout sessions
  if (event.type !== "checkout.session.completed") {
    console.log("ℹ️ Ignored event type:", event.type);
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const metadata = session.metadata || {};

  console.log("✅ Webhook received type:", metadata.type);
  console.log("✅ Webhook metadata:", metadata);

  // Configure mail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  try {
    let businessMail, customerMail;

    // 🚐 TRANSFER EMAILS
    if (metadata.type === "transfer") {
      businessMail = {
        from: `"Transfer Booking" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_EMAIL,
        subject: `New Transfer Booking (${metadata.bookingRef})`,
        html: `
          <h2>New Transfer Booking Received</h2>
          <p><b>Reference:</b> ${metadata.bookingRef}</p>
          <p><b>From:</b> ${metadata.from}</p>
          <p><b>To:</b> ${metadata.to}</p>
          <p><b>Date:</b> ${metadata.date}</p>
          <p><b>Time:</b> ${metadata.time}</p>
          <p><b>Customer Name:</b> ${metadata.fullName}</p>
          <p><b>Phone:</b> ${metadata.phone}</p>
          <hr/>
          <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
        `,
      };

      customerMail = {
        from: `"Assiut Transfers" <${process.env.EMAIL_USER}>`,
        to: metadata.email,
        subject: `Transfer Confirmation (${metadata.bookingRef})`,
        html: `
          <h2>Transfer Booking Confirmed</h2>
          <p>Dear ${metadata.fullName},</p>
          <p>Your transfer from <b>${metadata.from}</b> to <b>${metadata.to}</b> has been confirmed.</p>
          <p><b>Date:</b> ${metadata.date} | <b>Time:</b> ${metadata.time}</p>
          <p><b>Booking Reference:</b> ${metadata.bookingRef}</p>
          <hr/>
          <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
          <p>Thank you for choosing Assiut Transfers!</p>
        `,
      };
    }

    // 🏖️ TOUR EMAILS
    else if (metadata.type === "tour") {
      businessMail = {
        from: `"Tour Booking" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_EMAIL,
        subject: `New Tour Booking (${metadata.bookingRef})`,
        html: `
          <h2>New Tour Booking Received</h2>
          <p><b>Reference:</b> ${metadata.bookingRef}</p>
          <p><b>Tour:</b> ${metadata.tour}</p>
          <p><b>Full Name:</b> ${metadata.fullName}</p>
          <p><b>Nationality:</b> ${metadata.nationality}</p>
          <p><b>Passport:</b> ${metadata.passport}</p>
          <p><b>Telephone:</b> ${metadata.telephone}</p>
          <p><b>Arrival Date:</b> ${metadata.arrivalDate}</p>
          <hr/>
          <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
        `,
      };

      customerMail = {
        from: `"Assiut Tours" <${process.env.EMAIL_USER}>`,
        to: metadata.customerEmail,
        subject: `Tour Booking Confirmation (${metadata.bookingRef})`,
        html: `
          <h2>Tour Booking Confirmed</h2>
          <p>Dear ${metadata.fullName},</p>
          <p>Your booking for <b>${metadata.tour}</b> has been confirmed.</p>
          <p><b>Reference:</b> ${metadata.bookingRef}</p>
          <p><b>Arrival Date:</b> ${metadata.arrivalDate}</p>
          <hr/>
          <p><b>Amount Paid:</b> ${session.amount_total! / 100} ${session.currency.toUpperCase()}</p>
          <p>Thank you for booking with us!</p>
        `,
      };
    } else {
      // Ignore irrelevant events
      console.log("ℹ️ Ignored event type:", event.type);
    }

    // ✅ Send only the correct pair of emails
    if (businessMail && customerMail) {
      await transporter.sendMail(businessMail);
      await transporter.sendMail(customerMail);
      console.log(`📧 Emails sent for ${metadata.type} booking`);
    } else {
      console.warn("⚠️ Unknown or missing metadata type:", metadata.type);
    }
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }

  return NextResponse.json({ received: true });
}
