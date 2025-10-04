"use client";

import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const bookingRef = searchParams.get("ref");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ✅ Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for booking your tour with us. Your payment has been confirmed.
        </p>
        {bookingRef ? (
          <p className="text-lg font-semibold text-nile-blue mb-4">
            Your Booking Reference:{" "}
            <span className="text-yellow-600">{bookingRef}</span>
          </p>
        ) : (
          <p className="text-lg font-semibold text-red-500 mb-4">
            Booking reference not found. Please check your email.
          </p>
        )}
        <a
          href="/"
          className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
