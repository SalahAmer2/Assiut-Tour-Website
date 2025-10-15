// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: Request) {
//   try {
//     const form = await req.json();
//     const bookingRef = `BOOK-${Date.now()}`;

//     const session = await stripe.checkout.sessions.create({
//       mode: "payment",
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             unit_amount: 5000, // $50 transfer fee (adjust as needed)
//             product_data: {
//               name: `Transfer: ${form.from} → ${form.to}`,
//             },
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?ref=${bookingRef}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//       metadata: {
//         ...form,
//         bookingRef,
//         type: "transfer",
//       },
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (err: any) {
//     console.error("❌ Stripe session creation failed:", err.message);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const form = await req.json();
    const bookingRef = `TRANSFER-${Date.now()}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 5000, // $50 transfer fee (adjust as needed)
            product_data: {
              name: `Transfer: ${form.from} → ${form.to}`,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?ref=${bookingRef}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata: {
        ...Object.fromEntries(
          Object.entries(form).map(([k, v]) => [k, String(v ?? "")])
        ),
        bookingRef,
        type: "transfer",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("❌ Stripe session creation failed:", err.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
