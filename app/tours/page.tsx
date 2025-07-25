'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function ToursPage() {
  const detailsRef = useRef<HTMLDivElement>(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const tours = [
    {
      title: 'Al-Muqattam Mountain',
      description:
        'An ancient mountain offering breathtaking views over Cairo and a place of historical significance. Perfect for those who enjoy scenic panoramas and stories etched into stone.',
      imageSrc: '/images/mokkatom mountain.jpeg',
    },
    {
      title: 'Shrine of Sayyidna Omar ibn Al-Khattab',
      description:
        'This revered shrine is a site of spiritual reflection and cultural heritage, attracting visitors from across Egypt. A peaceful, meaningful stop for anyone exploring Islamic history.',
      imageSrc: '/images/Shrine of Sayyidna Omar ibn Al-Khattab.jpeg',
    },
    {
      title: 'Assiut National Museum',
      description:
        'Dive into the rich tapestry of Assiut’s history, from Pharaonic treasures to local folklore. The museum offers an engaging journey through time, with expertly curated exhibits.',
      imageSrc: '/images/Assiut National Museum.jpeg',
    },
    {
      title: 'Wadi El-Natrun',
      description:
        'An oasis of natural beauty and historical monasticism, Wadi El-Natrun invites you to explore ancient monasteries surrounded by desert landscapes and unique wildlife.',
      imageSrc: '/images/Wadi El-Natrun.jpeg',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/tours-hero.jpeg" // Replace this image
          alt="Tours Hero"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            Discover Assiut’s Wonders
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Handpicked tours and timeless sites that bring history, culture, and nature to life.
          </p>
          <button
            onClick={scrollToDetails}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Read Details
          </button>
        </div>
      </section>

      {/* Tour Details Section */}
      <section
        ref={detailsRef}
        className="bg-white py-16 px-6 space-y-24"
      >
        {tours.map((tour, index) => (
          <div
            key={tour.title}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-10 max-w-6xl mx-auto`}
          >
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
              <Image
                src={tour.imageSrc}
                alt={tour.title}
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{tour.title}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {tour.description}
              </p>
              <Link
                href="/bookings"
                className="inline-block text-yellow-600 font-semibold hover:underline hover:text-yellow-700 transition"
              >
                Book Tour →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
