interface Props {
  title: string
}

export default function TourCard({ title }: Props) {
  return (
    <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">Join our {title} for an unforgettable adventure.</p>
    </div>
  )
}