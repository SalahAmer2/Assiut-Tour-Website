export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Travel2Assiut</div>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about-assiut" className="hover:text-blue-600">About Assiut</a>
          <a href="/who-we-are" className="hover:text-blue-600">Who We Are</a>
          <a href="/tours" className="hover:text-blue-600">Tours</a>
          <a href="/transfers" className="hover:text-blue-600">Transfers</a>
          <a href="/events-page" className="hover:text-blue-600">Events</a>
          <a href="/contact-us" className="hover:text-blue-600">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}