// app/tours/muqattam/page.tsx
'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function MuqattamPage() {
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/mokkatom mountain.jpeg"
          alt="Al-Muqattam Mountain"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Al-Muqattam Mountain</h1>
          <p className="text-lg max-w-2xl mb-6">
            Discover the legendary heights of history and spirituality at Al-Muqattam.
          </p>
          <button
            onClick={scrollToDetails}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Read Details
          </button>
        </div>
      </section>

      {/* In-Depth Description Section */}
      <section ref={detailsRef} className="px-6 py-16 max-w-4xl mx-auto text-gray-800 space-y-6">
        <h2 className="text-3xl font-bold text-nile-blue mb-4">Experience Al-Muqattam</h2>
        <p>
          Al-Muqattam Mountain, a historical ridge overlooking Cairo, is not only a scenic escape from city life but
          also a site rich with cultural and spiritual meaning. Known for its panoramic views of Cairo and connections
          to early Christian legends, Muqattam offers visitors a serene atmosphere for reflection and discovery.
        </p>
        <p>
          Whether you're exploring its caves, marveling at the monastic sites, or simply enjoying the sunset from the
          heights, Al-Muqattam promises a memorable experience deeply rooted in Egypt’s spiritual and historical past.
        </p>
        <a href="/contact-us" className="text-nile-blue underline font-semibold hover:text-blue-900">
          Book Tour →
        </a>
      </section>
    </main>
  );
}
