'use client';

import { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Image from 'next/image';
import Link from 'next/link';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 27.18096,
  lng: 31.18368, // Centered around Assiut
};

export default function TransfersPage() {
  const [selectedLocation, setSelectedLocation] = useState<{
    name: string;
    lat: number;
    lng: number;
  } | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: e.latLng }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        const place = results[0];
        setSelectedLocation({
          name: place.formatted_address || 'Selected Location',
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
      }
    });
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToDetails = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/transfer-hero.jpeg"
          alt="Transfer Hero"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Ride, Just a Click Away
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Reliable, comfortable, and on your schedule — discover hassle-free transfers in Assiut and beyond.
          </p>
          <button
            onClick={scrollToDetails}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Read Details
          </button>
        </div>
      </section>

      {/* Search + Map Section */}
      <section ref={scrollRef} className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Select Your Pick-up Location</h2>
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Search a location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && isLoaded && searchTerm) {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address: searchTerm }, (results, status) => {
                  if (status === 'OK' && results && results[0]) {
                    const location = results[0].geometry.location;
                    mapRef.current?.panTo(location);
                    setSelectedLocation({
                      name: results[0].formatted_address,
                      lat: location.lat(),
                      lng: location.lng(),
                    });
                  }
                });
              }
            }}
          />
          {/* {isLoaded && (
            <GoogleMap
            //   onLoad={(map) => (mapRef.current = map)}
                onLoad={(map) => {
                mapRef.current = map;
                }}
              onClick={handleMapClick}
              mapContainerStyle={containerStyle}
              center={center}
              zoom={8}
            >
              {selectedLocation && (
                <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} />
              )}
            </GoogleMap>
          )} */}
        </div>

        {/* {selectedLocation && (
          <p className="text-lg text-center text-gray-700">
            Book a transfer from →{' '}
            <Link
              href={`/bookings?from=${encodeURIComponent(selectedLocation.name)}`}
              className="text-yellow-600 underline font-semibold hover:text-yellow-700"
            >
              {selectedLocation.name}
            </Link>
          </p>
        )} */}
        {/* Placeholder text below till we get the google maps working with a debit or credit card */}
        <p className="text-lg text-center text-gray-700">
            Book a transfer from →    
        </p>
      </section>
    </div>
  );
}
