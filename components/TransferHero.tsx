import Link from 'next/link';
import Image from 'next/image';

export default function TransferHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* High-res image using width/height instead of fill */}
      {/* <Image
        src="/images/transfer-hero.jpeg"
        alt="Car driving to Assiut"
        width={1920}
        height={500}
        className="w-full h-full object-cover z-0"
        priority // ensures it's loaded early
        quality={100} // force max quality
      /> */}
      <Image
        src="/images/transfer-hero.jpeg"
        alt="Car driving to Assiut"
        fill
        className="object-cover"
        priority
        quality={100}
        sizes="100vw" //THIS LETS IT WORK ON SCREENS WIDER THAN 1920px and IS IMPORTANT FOR RESPONSIVE IMAGES
        />


      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Text content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Easy Transfers, Every Step of the Way
        </h2>
        <p className="text-lg max-w-2xl mb-6">
          Sit back, relax, and enjoy the ride. We make getting to and around Assiut smooth, safe, and stress-free.
        </p>
        <Link
          href="/transfers"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Book a Transfer
        </Link>
      </div>
    </section>
  );
}


// import Link from 'next/link';
// import Image from 'next/image';

// export default function TransferHero() {
//   return (
//     <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/images/transfer-hero.jpeg" // Replace with your highway image
//         alt="Car driving to Assiut"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//       />
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

//       {/* Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
//           Easy Transfers, Every Step of the Way
//         </h2>
//         <p className="text-lg max-w-2xl mb-6">
//           Sit back, relax, and enjoy the ride. We make getting to and around Assiut smooth, safe, and stress-free.
//         </p>
//         <Link
//           href="/transfers"
//           className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//         >
//           Book a Transfer
//         </Link>
//       </div>
//     </section>
//   );
// }


// // components/TransferHero.tsx
// import Link from 'next/link';

// export default function TransferHero() {
//   return (
//     <section className="bg-gradient-to-r from-yellow-100 to-yellow-300 py-12 px-6">
//       <div className="container mx-auto text-center max-w-3xl">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
//           Smooth, Safe & Stress-Free Transfers
//         </h2>
//         <p className="text-lg text-gray-700 mb-6">
//           Whether you're arriving in Assiut or heading to your next destination, we make your journey
//           comfortable and convenient. Relax and let us handle the road.
//         </p>
//         <Link
//           href="/transfers"
//           className="inline-block bg-nile-blue hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
//         >
//           Book a Transfer
//         </Link>
//       </div>
//     </section>
//   );
// }
