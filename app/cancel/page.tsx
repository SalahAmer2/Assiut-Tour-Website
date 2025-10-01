"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-50 px-6">
      <div className="max-w-lg text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Canceled</h1>
        <p className="text-gray-700 mb-6">
          Your payment was not completed. Don’t worry—you can try again to secure your booking.
        </p>

        <div className="flex gap-4 justify-center">
          {/* Retry goes back to homepage or tours page */}
          <Link
            href="/tours"
            className="px-6 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            Retry Booking
          </Link>

          {/* Optional: link to homepage */}
          <Link
            href="/"
            className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
