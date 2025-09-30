import '../styles/globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Travel2Assiut',
  description: 'Explore Assiut with our curated tours and travel guides.',
}
// app/layout.tsx
// export const metadata = {
//   title: "Travel2Assiut - Tours, Transfers & Events",
//   description: "Discover the beauty of Assiut with guided tours, easy transfers, cultural events, and more.",
//   keywords: ["Assiut tours", "Assiut transfers", "Assiut travel", "Upper Egypt tourism", "Assiut tours packages"],
//   openGraph: {
//     title: "Travel2Assiut - Tours, Transfers & Events",
//     description: "Explore Assiut: guided tours, safe transfers, and unforgettable cultural experiences.",
//     url: "https://toursassiut.netlify.app", // replace with your final URL
//     siteName: "Travel2Assiut",
//     images: [
//       {
//         url: "/images/og-image.jpg", // upload a good preview image
//         width: 1200,
//         height: 630,
//         alt: "Travel2Assiut Tours and Transfers",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}