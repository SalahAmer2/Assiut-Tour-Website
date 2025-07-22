import Hero from '../components/Hero'
import DestinationCard from '../components/DestinationCard'
import TourCard from '../components/TourCard'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-800">Tailwind is working!</h1>
      </div> */}
      <Hero />
      <section className="py-12 px-6 bg-gray-100">
        {/* <div className="w-[500px] h-[500px] bg-black"/>
        <div style={{ width: '500px', height: '500px', backgroundColor: 'black' }} /> */}
        <section className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Key Attractions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Al-Muqattam Mountain */}
          <div className="flex flex-col border-2 border-gray-500 rounded-xl shadow bg-white overflow-hidden hover:shadow-lg transition">
            <Image
              src="/images/Salah pic.jpg"
              //src="/images/muqattam.jpg"
              alt="Al-Muqattam Mountain"
              width={400}
              height={300}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2">Al-Muqattam Mountain</h3>
              <p className="text-sm text-gray-700">Ancient site with scenic views.</p>
            </div>
          </div>
          {/* Shrine of Sayyidna Omar ibn Al-Khattab */}
          <div className="flex flex-col border-2 border-gray-500 rounded-xl shadow bg-white overflow-hidden hover:shadow-lg transition">
            <Image
              src="/images/Salah pic.jpg"
              //src="/images/shrine.jpg"
              alt="Shrine of Sayyidna Omar ibn Al-Khattab"
              width={400}
              height={300}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2">Shrine of Sayyidna Omar ibn Al-Khattab</h3>
              <p className="text-sm text-gray-700">Spiritual and cultural significance.</p>
            </div>
          </div>
          {/* Assiut National Museum */}
          <div className="flex flex-col border-2 border-gray-500 rounded-xl shadow bg-white overflow-hidden hover:shadow-lg transition">
            <Image
              src="/images/Salah pic.jpg"
              //src="/images/museum.jpg"
              alt="Assiut National Museum"
              width={400}
              height={300}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2">Assiut National Museum</h3>
              <p className="text-sm text-gray-700">Artifacts and history.</p>
            </div>
          </div>
          {/* Wadi El-Natrun */}
          <div className="flex flex-col border-2 border-gray-500 rounded-xl shadow bg-white overflow-hidden hover:shadow-lg transition">
            <Image
              src="/images/Salah pic.jpg"
              //src="/images/wadi.jpg"
              alt="Wadi El-Natrun"
              width={400}
              height={300}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2">Wadi El-Natrun</h3>
              <p className="text-sm text-gray-700">Nature and desert exploration.</p>
            </div>
          </div>
        </div>
      </section>
        <h2 className="text-3xl font-bold text-center mb-8">Top Destinations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <DestinationCard title="Cairo" />
          <DestinationCard title="Luxor" />
          <DestinationCard title="Aswan" />
        </div>
      </section>
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Tours</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <TourCard title="Nile River Cruise" />
          <TourCard title="Pyramids Day Tour" />
        </div>
      </section>
    </div>
  )
}