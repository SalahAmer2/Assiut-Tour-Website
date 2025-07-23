'use client'
import { useState, useEffect, useState as useImageState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoExists, setLogoExists] = useState(true)

  // Check if logo image is available
  useEffect(() => {
    fetch('/logo.png')
      .then(res => {
        if (!res.ok) setLogoExists(false)
      })
      .catch(() => setLogoExists(false))
  }, [])

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or fallback text */}
        <a href="/" className="flex items-center">
          {logoExists ? (
            <Image
              src="/logo.png"
              alt="Travel2Assiut Logo"
              width={160}
              height={50}
              className="h-auto w-auto"
            />
          ) : (
            <span className="text-xl font-bold text-gray-800">Travel2Assiut</span>
          )}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/about-assiut" label="About Assiut" />
          <NavLink href="/who-we-are" label="Who We Are" />
          <NavLink href="/tours" label="Tours" />
          <NavLink href="/transfers" label="Transfers" />
          <NavLink href="/events-page" label="Events" />
          <NavLink href="/contact-us" label="Contact Us" />
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white shadow-md">
          <NavLink href="/" label="Home" />
          <NavLink href="/about-assiut" label="About Assiut" />
          <NavLink href="/who-we-are" label="Who We Are" />
          <NavLink href="/tours" label="Tours" />
          <NavLink href="/transfers" label="Transfers" />
          <NavLink href="/events-page" label="Events" />
          <NavLink href="/contact-us" label="Contact Us" />
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-gray-800 hover:text-blue-600 hover:underline transition block"
    >
      {label}
    </a>
  )
}
