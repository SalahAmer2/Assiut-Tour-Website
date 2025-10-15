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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// // ✅ Log if env vars are missing (will appear in Netlify logs)
// if (!process.env.STRIPE_SECRET_KEY) {
//   console.error("❌ STRIPE_SECRET_KEY is missing in environment variables");
// }
// if (!process.env.NEXT_PUBLIC_BASE_URL) {
//   console.error("❌ NEXT_PUBLIC_BASE_URL is missing in environment variables");
// }

// // ✅ Initialize Stripe only if key is present
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || ""
// //   , {
// //   apiVersion: "2025-04-30", // or latest available
// // }
// );

// const TOUR_PRICES: Record<string, number> = {
//   "wadi-el-natrun": 100,
//   "al-muqattam": 120,
//   "national-museum": 130,
//   "sayyidna-omar": 110,
// };

// export async function POST(req: Request) {
//   try {
//     const { tour, formData } = await req.json();

//     if (!tour || !formData) {
//       throw new Error("Missing tour or form data");
//     }

//     if (!TOUR_PRICES[tour]) {
//       throw new Error(`Invalid tour: ${tour}`);
//     }

//     const bookingRef = `BOOK-${Date.now()}`;

//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, ""); // removes extra or duplicate slashes if there's one in the Url because success below also has a slash before it as you can see /success

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: `Tour Booking: ${tour}`,
//             },
//             unit_amount: TOUR_PRICES[tour] * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${baseUrl}/success?ref=${bookingRef}`,
//       cancel_url: `${baseUrl}/cancel`,
//       metadata: {
//         ...formData,
//         tour,
//         bookingRef,
//         type: "tour"
//       },
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (err: any) {
//     console.error("❌ Stripe API error:", err.message);
//     console.error(err.stack);

//     // Return a structured error to the client
//     return NextResponse.json(
//       { error: err.message || "Stripe session creation failed" },
//       { status: 500 }
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// // --- Environment validation ---
// if (!process.env.STRIPE_SECRET_KEY) {
//   console.error("❌ STRIPE_SECRET_KEY is missing in environment variables");
// }
// if (!process.env.NEXT_PUBLIC_BASE_URL) {
//   console.error("❌ NEXT_PUBLIC_BASE_URL is missing in environment variables");
// }

// // --- Initialize Stripe ---
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// // --- Price Maps ---
// const TOUR_PRICES: Record<string, number> = {
//   "wadi-el-natrun": 100,
//   "al-muqattam": 120,
//   "national-museum": 130,
//   "sayyidna-omar": 110,
// };

// const TRANSFER_BASE_PRICE = 80; // Example default price in USD

// export async function POST(req: Request) {
//   try {
//     const { type, item, formData } = await req.json();
//     // type = "tour" or "transfer"
//     // item = tour slug or transfer info

//     if (!type || !formData) throw new Error("Missing booking type or form data");

//     const bookingRef = `${type.toUpperCase()}-${Date.now()}`;
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");

//     let lineItem;

//     if (type === "tour") {
//       if (!TOUR_PRICES[item]) throw new Error(`Invalid tour: ${item}`);
//       lineItem = {
//         price_data: {
//           currency: "usd",
//           product_data: { name: `Tour Booking: ${item}` },
//           unit_amount: TOUR_PRICES[item] * 100,
//         },
//         quantity: 1,
//       };
//     } else if (type === "transfer") {
//       // You can extend pricing logic later (distance-based, etc.)
//       lineItem = {
//         price_data: {
//           currency: "usd",
//           product_data: { name: `Transfer Booking: ${formData.from} → ${formData.to}` },
//           unit_amount: TRANSFER_BASE_PRICE * 100,
//         },
//         quantity: 1,
//       };
//     } else {
//       throw new Error(`Invalid booking type: ${type}`);
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [lineItem],
//       mode: "payment",
//       success_url: `${baseUrl}/success?ref=${bookingRef}&type=${type}`,
//       cancel_url: `${baseUrl}/cancel?type=${type}`,
//       metadata: {
//         ...formData,
//         bookingRef,
//         type,
//         item,
//       },
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (err: any) {
//     console.error("❌ Stripe API error:", err.message);
//     console.error(err.stack);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { NextResponse } from "next/server";
import Stripe from "stripe";

// --- Environment validation ---
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("❌ STRIPE_SECRET_KEY is missing in environment variables");
}
if (!process.env.NEXT_PUBLIC_BASE_URL) {
  console.error("❌ NEXT_PUBLIC_BASE_URL is missing in environment variables");
}

// --- Initialize Stripe ---
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// --- Price Maps ---
const TOUR_PRICES: Record<string, number> = {
  "wadi-el-natrun": 100,
  "al-muqattam": 120,
  "national-museum": 130,
  "sayyidna-omar": 110,
};

const TRANSFER_BASE_PRICE = 80; // Example default price in USD

export async function POST(req: Request) {
  try {
    const { type, tour, formData } = await req.json();
    // type = "tour" or "transfer"
    // item = tour slug or transfer info

    if (!type || !formData) {
      throw new Error("Missing booking type or form data");
    }

    const bookingRef = `${type.toUpperCase()}-${Date.now()}`;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");

    let lineItem;

    // --- Handle Tour ---
    if (type === "tour") {
      if (!TOUR_PRICES[tour]) throw new Error(`Invalid tour: ${tour}`);

      lineItem = {
        price_data: {
          currency: "usd",
          product_data: { name: `Tour Booking: ${tour}` },
          unit_amount: TOUR_PRICES[tour] * 100,
        },
        quantity: 1,
      };
    }

    // --- Handle Transfer ---
    else if (type === "transfer") {
      // You can extend this later (e.g., distance-based pricing)
      const from = formData.from || "Unknown";
      const to = formData.to || "Unknown";

      lineItem = {
        price_data: {
          currency: "usd",
          product_data: { name: `Transfer Booking: ${from} → ${to}` },
          unit_amount: TRANSFER_BASE_PRICE * 100,
        },
        quantity: 1,
      };
    }

    // --- Invalid type ---
    else {
      throw new Error(`Invalid booking type: ${type}`);
    }

    // --- Create Checkout Session ---
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [lineItem],
      mode: "payment",
      success_url: `${baseUrl}/success?ref=${bookingRef}&type=${type}`,
      cancel_url: `${baseUrl}/cancel?type=${type}`,
      metadata: {
        ...formData,
        bookingRef,
        type,
        tour,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("❌ Stripe API error:", err.message);
    console.error(err.stack);
    return NextResponse.json(
      { error: err.message || "Stripe session creation failed" },
      { status: 500 }
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////THIS WORKS BUT DOESN"T HAVE TRANSFERS

// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// // ✅ Log if env vars are missing (will appear in Netlify logs)
// if (!process.env.STRIPE_SECRET_KEY) {
//   console.error("❌ STRIPE_SECRET_KEY is missing in environment variables");
// }
// if (!process.env.NEXT_PUBLIC_BASE_URL) {
//   console.error("❌ NEXT_PUBLIC_BASE_URL is missing in environment variables");
// }

// // ✅ Initialize Stripe only if key is present
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || ""
//   //   , {
//   //   apiVersion: "2025-04-30", // or latest available
//   // }
// );

// const TOUR_PRICES: Record<string, number> = {
//   "wadi-el-natrun": 100,
//   "al-muqattam": 120,
//   "national-museum": 130,
//   "sayyidna-omar": 110,
// };

// export async function POST(req: Request) {
//   try {
//     const { tour, formData } = await req.json();

//     if (!tour || !formData) {
//       throw new Error("Missing tour or form data");
//     }

//     if (!TOUR_PRICES[tour]) {
//       throw new Error(`Invalid tour: ${tour}`);
//     }

//     const bookingRef = `BOOK-${Date.now()}`;

//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, ""); // removes extra or duplicate slashes if there's one in the Url because success below also has a slash before it as you can see /success

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: `Tour Booking: ${tour}`,
//             },
//             unit_amount: TOUR_PRICES[tour] * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${baseUrl}/success?ref=${bookingRef}`,
//       cancel_url: `${baseUrl}/cancel`,
//       metadata: {
//         ...formData,
//         tour,
//         bookingRef,
//       },
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (err: any) {
//     console.error("❌ Stripe API error:", err.message);
//     console.error(err.stack);

//     // Return a structured error to the client
//     return NextResponse.json(
//       { error: err.message || "Stripe session creation failed" },
//       { status: 500 }
//     );
//   }
// }
//THIS WORKS BUT DOESN"T HAVE TRANSFERS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////