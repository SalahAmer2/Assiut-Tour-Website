import Hero from '../../components/Hero'

export default function AboutAssiut() {
  return (
    <main className="text-gray-800">
      <Hero
        title="Discover Assiut"
        subtitle="A journey through Egypt's cultural, historical, and geographical heart."
        image="/images/assiut-hero.jpg"
        buttonType="scroll"
      />

      {/* 👇 ID target for scroll */}
      <div id="details" className="max-w-4xl mx-auto px-6 py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">City Overview</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Assiut is located in Upper Egypt, historically significant for its ancient monuments and as a center of Islamic learning.</li>
            <li>Brief history of Assiut from ancient Egypt to modern times.</li>
            <li>Mention the city’s importance in trade, culture, and education.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Historical Significance</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Discuss famous landmarks, temples, or events associated with the city.</li>
            <li>Mention Assiut’s role as a gateway to the Nile Valley.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Geography</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Geographical details (location along the Nile River, climate, surrounding regions).</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">About Assiut</h3>
          <p className="text-lg leading-relaxed">
            Assiut, the capital of Assiut Governorate in Upper Egypt, is a city steeped in ancient history and Islamic tradition. Located along the Nile River, Assiut has long been a crossroads for travelers, traders, and explorers. Its strategic position has made it a center of learning and culture for centuries. Visitors to Assiut can explore its historical landmarks, experience local traditions, and enjoy the unique atmosphere of one of Egypt's lesser-known gems.
          </p>
        </section>
      </div>
    </main>
  )
}
