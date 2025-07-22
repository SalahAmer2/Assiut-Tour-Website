'use client'
import React from 'react'
import Image from 'next/image'

type HeroProps = {
  title: string
  subtitle: string
  image: string
  buttonType?: 'link' | 'scroll'
  buttonHref?: string // only used when buttonType === 'link'
}

export default function Hero({
  title,
  subtitle,
  image,
  buttonType = 'link',
  buttonHref = '/attractions'
}: HeroProps) {
  const handleScroll = () => {
    const target = document.getElementById('details')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="z-0"
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg text-white mb-6">{subtitle}</p>

        {buttonType === 'link' ? (
          <a
            href={buttonHref}
            className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
          >
            Start Your Journey
          </a>
        ) : (
          <button
            onClick={handleScroll}
            className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
          >
            Read Details
          </button>
        )}
      </div>
    </section>
  )
}


// import React from 'react';
// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <div>
//       {/* <div className="bg-[url('/images/hero.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center text-white">
//         <h1 className="text-4xl md:text-6xl font-bold bg-black/50 px-6 py-4">Discover Egypt</h1>
//       </div> */}
//       <section className="relative w-full h-[600px] overflow-hidden">
//         <Image
//           src="/images/assiut-hero.jpg"
//           alt="Assiut at sunset"
//           fill
//           priority
//           className="z-0"
//           style={{ objectFit: 'cover' }}
//         />
//         {/* <Image
//           src="/images/assiut-hero.jpg"
//           alt="Assiut at sunset"
//           width={100%}
//           height={600}
//           priority
//           className="z-0"
//           style={{ objectFit: 'cover', width: '100%', height: '600px' }}
//         /> */}
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center z-10">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
//             Discover the Heart of Upper Egypt
//           </h1>
//           <p className="text-lg text-white mb-6 text-center">
//             Explore the Ancient Wonders of Assiut.
//           </p>
//           <a
//             href="/attractions"
//             className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
//           >
//             Start Your Journey
//           </a>
//         </div>
//       </section>
//     </div>
 
//   )
// }