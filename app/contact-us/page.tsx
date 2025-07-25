'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function ContactUsPage() {
  const detailsRef = useRef<HTMLElement | null>(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/contact-hero.jpg" // Replace with your actual image path
          alt="Contact Us Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Let’s Get in Touch</h1>
          <p className="text-lg max-w-xl mb-6">
            We’re here to help you plan your journey, answer questions, or just say hello.
          </p>
          <button
            onClick={scrollToDetails}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Read Details
          </button>
        </div>
      </section>

      {/* Contact Information */}
      <section
        ref={detailsRef}
        id="contact-details"
        className="w-full max-w-4xl px-6 py-16 text-gray-800 space-y-8"
      >
        <h2 className="text-3xl font-bold text-nile-blue text-center mb-8">Contact Information</h2>
        <div className="space-y-6 text-lg">
          <p><strong>📍 Address:</strong> 123 Nile Street, Assiut, Egypt</p>
          <p><strong>📞 Phone:</strong> +20 123 456 7890</p>
          <p><strong>✉️ Email:</strong> contact@travel2egypt.org</p>
          <p><strong>🕒 Working Hours:</strong> Daily from 9:00 AM – 7:00 PM</p>
          <p><strong>📱 Social Media:</strong></p>
          <ul className="ml-4 list-disc">
            <li><Link href="#" className="text-nile-blue underline hover:text-blue-900">Facebook</Link></li>
            <li><Link href="#" className="text-nile-blue underline hover:text-blue-900">Instagram</Link></li>
            <li><Link href="#" className="text-nile-blue underline hover:text-blue-900">WhatsApp</Link></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
