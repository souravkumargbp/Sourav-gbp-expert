import Image from 'next/image';

export default function SouravGBPExpertSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 font-sans">
      <header className="bg-black text-white py-10 text-center shadow-md">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden relative">
          <Image
            src="/logo.png"
            alt="Sourav Kumar Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-5xl font-bold tracking-wide">Sourav Kumar</h1>
        <p className="text-xl mt-3">SEO & Google Business Profile Optimization Expert</p>
      </header>

      <main className="px-6 md:px-24 py-16 space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-black">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            I help small businesses in the US rank higher on Google Maps with my Local SEO & GBP optimization expertise. From profile setup to local keyword targeting — I handle it all.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-center mb-8 text-black">Services I Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ServiceItem title="GBP Profile Setup & Optimization" />
            <ServiceItem title="Google Maps Ranking Strategy" />
            <ServiceItem title="Weekly GBP Posts & Updates" />
            <ServiceItem title="Review Management & Response" />
            <ServiceItem title="Local Keyword Research" />
            <ServiceItem title="Performance Reporting & Audit" />
          </div>
        </section>

        <section className="text-center bg-white p-10 rounded-xl shadow-md max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-black">Let’s Work Together</h2>
          <p className="text-lg text-gray-700 mb-4">
            Want to improve your Google Business Profile visibility? Let's connect!
          </p>
          <p className="text-lg text-gray-800 font-medium">
            📧 <a href="mailto:souravipl2374@gmail.com" className="text-blue-600 underline">souravipl2374@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className="bg-black text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Sourav Kumar — All Rights Reserved.
      </footer>
    </div>
  );
}

function ServiceItem({ title }: { title: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}
