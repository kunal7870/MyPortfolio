import React, { useState } from 'react';
import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art4.jpg';
import art5 from '../assets/art5.jpg';
import art6 from '../assets/art6.jpg';

const artworks = [art1, art2, art3, art4, art5, art6];

const Extra = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const hobbies = [
    'Drawing',
    'Listening to Music',
    'Photography',
    'Travel Journaling',
  ];

  const loopingArtworks = [...artworks, ...artworks];

  return (
    <section id="extra" className="text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-300">Hobbies & Artworks</h2>

        {/* Hobbies */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-white">My Hobbies</h3>
          <ul className="list-disc list-inside text-gray-300">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>

        {/* Auto Scroll */}
        <div className="relative overflow-hidden">
          <div className="scroll-track flex gap-6 items-center whitespace-nowrap animate-scroll">
            {loopingArtworks.map((art, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden size-fit shadow-md border border-gray-700 bg-white/10 min-w-[250px] max-w-[250px] cursor-pointer"
                onClick={() => setEnlargedImage(art)}
              >
                <img
                  src={art}
                  alt={`artwork-${index + 1}`}
                  className="object-contain max-h-[350px] w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image zoom*/}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setEnlargedImage(null)}
        >
          <img
            src={enlargedImage}
            alt="Enlarged artwork"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Animation style */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .scroll-track {
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default Extra;
