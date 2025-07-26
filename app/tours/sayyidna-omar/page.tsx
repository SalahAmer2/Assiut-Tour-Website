'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function SayyidnaOmarPage() {
  const detailsRef = useRef<HTMLElement | null>(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/Shrine of Sayyidna Omar ibn Al-Khattab.jpeg"
          alt="Shrine of Sayyidna Omar ibn Al-Khattab"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Shrine of Sayyidna Omar ibn Al-Khattab</h1>
          <p className="text-lg max-w-2xl mb-6">
            Discover the spiritual legacy and historical significance of one of Islam’s most revered figures.
          </p>
          <button
            onClick={scrollToDetails}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Read Details
          </button>
        </div>
      </section>

      {/* Description Section */}
      <section
        ref={detailsRef}
        className="max-w-5xl px-6 py-16 space-y-6 text-gray-800 leading-relaxed"
      >
        <h2 className="text-3xl font-bold text-nile-blue mb-4">
          A Timeless Spiritual Destination
        </h2>
        <p>
          The Shrine of Sayyidna Omar ibn Al-Khattab stands as a beacon of faith, justice, and leadership. Nestled in the heart of Assiut, this sacred site draws visitors and pilgrims from around the world seeking to connect with the legacy of the second Caliph of Islam.
        </p>
        <p>
          Revered for his wisdom, strength, and devotion, Sayyidna Omar ibn Al-Khattab played a crucial role in the early expansion of the Islamic state. His shrine not only serves as a place of reflection but also as a cultural landmark showcasing traditional Islamic architecture and deep spiritual roots.
        </p>
        <p>
          Visitors often describe their time at the shrine as peaceful and enlightening. Whether you're exploring the beautifully preserved interiors or standing quietly in prayer, this destination is sure to leave a lasting impression on your journey through Egypt.
        </p>
        <a
          href="/contact-us"
          className="inline-block text-nile-blue font-semibold underline hover:text-blue-800 transition duration-300"
        >
          Book Tour →
        </a>
      </section>
    </main>
  );
}
