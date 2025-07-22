export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Travel2Egypt</div>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/tours" className="hover:text-blue-600">Tours</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  )
}