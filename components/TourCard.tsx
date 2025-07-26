'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TourCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function TourCard({ title, description, imageSrc, link }: TourCardProps) {
  return (
    <div className="group flex flex-col border-2 border-gray-300 rounded-xl shadow bg-white overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-[220px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2 text-nile-blue">{title}</h3>
          <p className="text-sm text-gray-700 mb-4">{description}</p>
        </div>
        <Link
          href={link}
          className="mt-auto inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold py-2 px-4 rounded-md shadow transition duration-300 ease-in-out self-start"
        >
          Book a Tour
        </Link>
      </div>
    </div>
  );
}



// // components/TourCard.tsx
// import Image from 'next/image';

// interface TourCardProps {
//   title: string;
//   description: string;
//   imageSrc: string;
// }

// export default function TourCard({ title, description, imageSrc }: TourCardProps) {
//   return (
//     <div className="group flex flex-col border-2 border-gray-500 rounded-xl shadow bg-white overflow-hidden hover:shadow-lg transition duration-300">
//       <div className="overflow-hidden">
//         <Image
//           src={imageSrc}
//           alt={title}
//           width={400}
//           height={300}
//           className="w-full h-[220px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
//         />
//       </div>
//       <div className="p-4 flex flex-col flex-1 justify-between">
//         <div>
//           <h3 className="font-bold text-lg mb-2">{title}</h3>
//           <p className="text-sm text-gray-700 mb-4">{description}</p>
//         </div>
//         <a
//           href="/tours"
//           className="mt-auto inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold py-2 px-4 rounded-md shadow transition duration-300 ease-in-out self-start"
//         >
//           Book a Tour
//         </a>
//       </div>
//     </div>
//   );
// }
