"use client";

import React from "react";
import { useState } from "react";

export default function BookTour({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params); // 👈 unwrap

  const [formData, setFormData] = useState({
    fullName: "",
    nationality: "",
    passport: "",
    telephone: "",
    arrivalDate: "",
    customerEmail: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tour: slug, // which tour they’re booking
        formData,
      }),
    });

    if (res.ok) {
      alert("Booking submitted!");
    } else {
      alert("Something went wrong. Please try again.");
    }

    const data = await res.json();
    window.location.href = data.url; // redirect to Stripe Checkout
  };

  return (
    <main className="flex flex-col items-center py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 mt-4">Book {slug.replace("-", " ")}</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 space-y-6"
      >
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required className="w-full p-3 border rounded-md" />
        <input type="text" name="nationality" placeholder="Nationality" onChange={handleChange} required className="w-full p-3 border rounded-md" />
        <input type="text" name="passport" placeholder="Passport Number" onChange={handleChange} required className="w-full p-3 border rounded-md" />
        <input type="tel" name="telephone" placeholder="Telephone Number" onChange={handleChange} required className="w-full p-3 border rounded-md" />
        <input type="date" name="arrivalDate" onChange={handleChange} required className="w-full p-3 border rounded-md" />
        <input type="email" name="customerEmail" placeholder="Email Address" onChange={handleChange} required className="border p-2 w-full"/>

        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md">
          Proceed to Payment
        </button>
      </form>
    </main>
  );
}
