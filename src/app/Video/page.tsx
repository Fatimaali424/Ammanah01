'use client';
import React from 'react';

const CinematicVideo: React.FC = () => {
    return (
      <section className="bg-black text-red-600 py-16 px-4 relative" style={{ backgroundImage: 'url(header.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-4xl font-bold text-center mb-8">🎬 Eid Drive Moments</h2>
        
        <div className="w-full sm:w-55 md:w-60 lg:w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-red-700">
          {/* Letterbox Wrapper */}
          <div className="bg-black p-2">
            <video
              src="/eid-drive.mp4"
              autoPlay
              loop
              muted
              controls
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
  
        <p className="text-center text-red-400 mt-6 italic text-lg">
          “Spreading smiles — one gift, one heart, one Eid at a time.”
        </p>
      </section>
    );
};

export default CinematicVideo;
