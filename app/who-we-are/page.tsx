'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function WhoWeArePage() {
  const detailsRef = useRef<HTMLDivElement>(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/who-we-are-hero.jpeg" 
          alt="Team showcasing Assiut"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            Meet the Heart Behind the Journey
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Discover the people and passion driving unforgettable experiences in Assiut.
          </p>
          <button
            onClick={scrollToDetails}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Read Details
          </button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        ref={detailsRef}
        className="py-16 px-6 bg-white text-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg mb-6 leading-relaxed">
            We are a passionate team of local guides, historians, and tourism experts committed to showcasing the beauty and history of Assiut. Our mission is to provide visitors with an authentic and unforgettable experience—whether you're exploring ancient sites, tasting traditional Upper Egyptian cuisine, or diving deep into our rich cultural heritage.
          </p>
          <p className="text-lg leading-relaxed">
            With deep local roots and a love for storytelling, we strive to connect you with the soul of Assiut through personalized tours, immersive encounters, and seamless hospitality. Come as a visitor, leave as a friend.
          </p>
        </div>
      </section>
    </div>
  );
}
