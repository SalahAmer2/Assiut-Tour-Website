'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function NationalMuseumPage() {
  const detailsRef = useRef<HTMLElement | null>(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/Assiut National Museum.jpeg"
          alt="Assiut National Museum"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Assiut National Museum</h1>
          <p className="text-lg max-w-2xl mb-6">
            Explore Assiut’s rich historical heritage through ancient artifacts, art, and rare treasures.
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
          A Gateway to Assiut’s History
        </h2>
        <p>
          The Assiut National Museum is a cultural gem showcasing the legacy of Upper Egypt. It houses a remarkable collection of ancient relics, manuscripts, and artwork dating back to Pharaonic, Greco-Roman, Coptic, and Islamic periods.
        </p>
        <p>
          As you wander through its carefully curated halls, you'll encounter pottery, tools, jewelry, statues, and preserved mummies that narrate the stories of Assiut’s past civilizations. Interactive displays and informative panels bring history to life for visitors of all ages.
        </p>
        <p>
          The museum not only preserves the region’s deep historical roots but also inspires curiosity and appreciation for Egypt’s diverse cultural tapestry. Whether you're a student, traveler, or history enthusiast, this museum is an unforgettable stop on your tour.
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
