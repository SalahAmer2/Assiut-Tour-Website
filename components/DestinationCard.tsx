interface Props {
  title: string
}

export default function DestinationCard({ title }: Props) {
  return (
    <div className="bg-white shadow-md rounded p-4 text-center hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">Explore the wonders of {title}</p>
    </div>
  )
}