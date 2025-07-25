'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import EventCard from '../../components/EventCard';

export default function EventsPage() {
  const detailsRef = useRef<HTMLDivElement>(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Replace with your real hero image */}
        {/* <Image
          src="/images/events-hero.jpeg"
          alt="Events in Assiut"
          layout="fill"
          objectFit="cover"
          className="z-0"
        /> */}
        <Image
        src="/images/events-hero.jpeg"
        alt="Events in Assiut"
        fill
        className="object-cover"
        priority
        quality={100}
        sizes="100vw" //IT WORKS!! IT FIXES THE BLUR!!!//THIS IS IMPORTANT FOR RESPONSIVE IMAGES and letting it work on screens WIDER than 1920px
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Experience the Spirit of Assiut
          </h1>
          <p className="text-lg max-w-2xl mb-6">
            From cultural festivals to local gatherings, Assiut is full of vibrant events that bring the community together.
          </p>
          <button
            onClick={scrollToDetails}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Read Details
          </button>
        </div>
      </section>

      {/* Event Details Section */}
      <section ref={detailsRef} className="w-full max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-nile-blue">Events in Assiut</h2>
        <div className="space-y-12 text-gray-800 leading-relaxed text-lg">
          <p>
            Assiut hosts a rich variety of cultural, religious, and seasonal events throughout the year. These events reflect the heritage, values, and vibrant lifestyle of the people in Upper Egypt.
          </p>

          <p>
            <strong>Religious Celebrations:</strong> Assiut is well-known for its religious festivals, including the annual celebration of the Virgin Mary at Deir Dronka, attracting thousands of pilgrims from across Egypt.
          </p>

          <p>
            <strong>Cultural Gatherings:</strong> Local poetry readings, folk dance performances, and art exhibitions are regularly held in the city’s cultural centers and open-air venues.
          </p>

          <p>
            <strong>Seasonal Festivals:</strong> Events during Eid, Ramadan, and Sham El-Nessim are celebrated with traditional food, music, and family-friendly entertainment.
          </p>

          <p>
            <strong>University Events:</strong> Assiut University is a hub for youth festivals, science fairs, and public lectures that attract students from across the region.
          </p>

          <p>
            Whether you're a visitor or a local, these events offer a window into the heart of Assiut's culture and hospitality. Don't miss the opportunity to experience them!
          </p>
        </div>
        <section className="w-full max-w-5xl px-6 py-16 space-y-10">
            <h2 className="text-3xl font-bold text-center text-nile-blue mb-8">Upcoming Events</h2>

            <EventCard
                title="Virgin Mary Festival – Deir Dronka"
                description="Join thousands of pilgrims in one of Egypt’s most cherished Christian celebrations at the mountain monastery of Deir Dronka."
                date="August 22 – September 1"
                image="/images/virgin-mary-festival.jpeg"
            />

            <EventCard
                title="Assiut University Youth Week"
                description="A vibrant event with sports competitions, cultural exhibitions, and student-led innovation fairs."
                date="November 10 – 15"
                image="/images/university-youth-week.jpeg" //can't use these pics in real business, change them later, they're just placeholders
            />

            <EventCard
                title="Upper Egypt Folk Dance Show"
                description="Experience the traditional music, colorful costumes, and lively dances passed down for generations in Assiut."
                date="Every Friday Evening"
                image="/images/folk-dance-show.jpg"
            />
        </section>
      </section>
    </main>
  );
}
