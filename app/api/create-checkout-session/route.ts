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

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const TOUR_PRICES: Record<string, number> = {
  "wadi-el-natrun": 100, // USD price
  "al-muqattam": 120,
  "national-museum": 130,
  "sayyidna-omar": 110,
};

export async function POST(req: Request) {
  const { tour, formData } = await req.json();

  // Generate booking reference here so it’s consistent across payment + email
  const bookingRef = `BOOK-${Date.now()}`;

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
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?ref=${bookingRef}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    metadata: {
      ...formData, // includes customerEmail
      tour,
      bookingRef,
    },
  });

  return NextResponse.json({ url: session.url });
}
