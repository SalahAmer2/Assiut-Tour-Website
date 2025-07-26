'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function WadiElNatrunPage() {
  const detailsRef = useRef<HTMLElement | null>(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/Wadi El-Natrun.jpeg"
          alt="Wadi El-Natrun"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Wadi El-Natrun</h1>
          <p className="text-lg max-w-2xl mb-6">
            Discover Egypt’s spiritual desert oasis, where ancient monasteries and serene landscapes meet.
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
          A Sacred Sanctuary in the Heart of the Desert
        </h2>
        <p>
          Wadi El-Natrun is one of Egypt's most significant Christian heritage sites, known for its ancient monasteries dating back to the 4th century. This tranquil valley was once the cradle of Coptic monasticism and played a pivotal role in the spiritual history of Egypt.
        </p>
        <p>
          Visitors are captivated by its timeless beauty and the remarkable preservation of its historic churches, manuscripts, and artifacts. The monasteries—such as the Monastery of Saint Bishoy—still function today and welcome pilgrims and tourists alike.
        </p>
        <p>
          Beyond its religious importance, Wadi El-Natrun offers a peaceful desert escape with palm groves, salt lakes, and a quiet that speaks to the soul. It’s a perfect blend of history, faith, and nature—a must-visit for anyone exploring Assiut and its surroundings.
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
