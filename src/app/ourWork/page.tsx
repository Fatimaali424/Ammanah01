import React from "react";
import Link from "next/link";
const OurWork: React.FC = () => {
  return (
    <section className="bg-black py-2 px-8 relative bg-cover bg-center items-center justify-center text-center"
    style={{ backgroundImage: 'url(header.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className=" font-serif">
      {/* Header */}
      <header className="py-2 text-center text-red-700">
        <h1 className="text-4xl font-bold tracking-wide">🌙 Our Eid Drive 2025</h1>
        <p className="mt-2 text-lg font-medium">"This is the only smile that we can make" <br /> - Ammanah Foundation</p>
      </header>

      {/* Images Side by Side */}
      <section className="max-w-3xl mx-auto px-2 flex flex-col lg:flex-row gap-8 justify-center items-center text-red-700">
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <h2 className="text-xl font-bold text-center font-serif">Eid Smile Moments</h2>
          <img
            src="/eid01.jpg"
            alt="Eid Smile Moments"
            className="w-full h-auto object-cover"
          />
          
        </div>
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <h2 className="text-xl font-bold text-center font-serif">Eid Volunteers Team</h2>
          <img
            src="/eid02.jpg"
            alt="Eid Volunteers Team"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Video Section */}
      <div className="mt-10 max-w-3xl mx-auto px-4 text-center text-pink-700">
      <h2 className="text-xl font-bold text-center font-serif">Eid Moments Video</h2>
      <Link href="/Video" className="hover:text-pink-600 hover:underline transition text-center">Watch Our Eid Drive Moments </Link>
      </div>
    </div>
    </section>
  );
};

export default OurWork;
