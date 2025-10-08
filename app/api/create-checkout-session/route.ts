// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// const TOUR_PRICES: Record<string, number> = {
//   "wadi-el-natrun": 100, // USD price
//   "al-muqattam": 120,
//   "national-museum": 130,
//   "sayyidna-omar": 110
// };

// export async function POST(req: Request) {
//   const { tour, formData } = await req.json();

//   // Save formData temporarily (in DB or cache) with tour reference
//   // For demo: just pass via metadata to Stripe Checkout
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: `Tour Booking: ${tour}`,
//           },
//           unit_amount: TOUR_PRICES[tour] * 100, // in cents
//         },
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//     metadata: {
//       ...formData,
//       tour,
//     },
//   });

//   return NextResponse.json({ url: session.url });
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// const TOUR_PRICES: Record<string, number> = {
//   "wadi-el-natrun": 100, // USD price
//   "al-muqattam": 120,
//   "national-museum": 130,
//   "sayyidna-omar": 110,
// };

// export async function POST(req: Request) {
//   const { tour, formData } = await req.json();

//   // Generate booking reference here so it’s consistent across payment + email
//   const bookingRef = `BOOK-${Date.now()}`;

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: `Tour Booking: ${tour}`,
//           },
//           unit_amount: TOUR_PRICES[tour] * 100,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?ref=${bookingRef}`,
//     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//     metadata: {
//       ...formData, // includes customerEmail
//       tour,
//       bookingRef,
//     },
//   });

//   return NextResponse.json({ url: session.url });
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ Log if env vars are missing (will appear in Netlify logs)
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("❌ STRIPE_SECRET_KEY is missing in environment variables");
}
if (!process.env.NEXT_PUBLIC_BASE_URL) {
  console.error("❌ NEXT_PUBLIC_BASE_URL is missing in environment variables");
}

// ✅ Initialize Stripe only if key is present
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || ""
//   , {
//   apiVersion: "2025-04-30", // or latest available
// }
);

const TOUR_PRICES: Record<string, number> = {
  "wadi-el-natrun": 100,
  "al-muqattam": 120,
  "national-museum": 130,
  "sayyidna-omar": 110,
};

export async function POST(req: Request) {
  try {
    const { tour, formData } = await req.json();

    if (!tour || !formData) {
      throw new Error("Missing tour or form data");
    }

    if (!TOUR_PRICES[tour]) {
      throw new Error(`Invalid tour: ${tour}`);
    }

    const bookingRef = `BOOK-${Date.now()}`;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, ""); // removes extra or duplicate slashes if there's one in the Url because success below also has a slash before it as you can see /success

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Tour Booking: ${tour}`,
            },
            unit_amount: TOUR_PRICES[tour] * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?ref=${bookingRef}`,
      cancel_url: `${baseUrl}/cancel`,
      metadata: {
        ...formData,
        tour,
        bookingRef,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("❌ Stripe API error:", err.message);
    console.error(err.stack);

    // Return a structured error to the client
    return NextResponse.json(
      { error: err.message || "Stripe session creation failed" },
      { status: 500 }
    );
  }
}
