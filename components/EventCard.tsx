import Image from 'next/image';

type EventCardProps = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export default function EventCard({ title, description, date, image }: EventCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative w-full md:w-1/2 h-64 md:h-56">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6 md:w-1/2">
        <h3 className="text-2xl font-semibold text-nile-blue mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="text-nile-blue font-semibold underline hover:text-blue-900 transition">
          Learn More →
        </button>
      </div>
    </div>
  );
}
