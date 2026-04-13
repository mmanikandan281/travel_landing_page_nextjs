import Image from 'next/image';
import { Navigation } from 'lucide-react';

const destinations = [
  {
    image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Rome, Italy',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'London, UK',
    price: '$4.2k',
    duration: '12 Days Trip',
  },
  {
    image: 'https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Full Europe',
    price: '$15k',
    duration: '28 Days Trip',
  },
];

export default function Destinations() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#5E6282]">
            Top Selling
          </p>
          <h2 className="font-volkhov text-[2.2rem] md:text-[3.1rem] font-bold leading-tight text-[#14183E]">
            Top Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md shadow-[#181E4B]/8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="space-y-3 px-5 py-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[18px] font-semibold text-[#14183E]">{dest.name}</h3>
                  <span className="text-[18px] font-semibold text-[#14183E]">{dest.price}</span>
                </div>
                <div className="flex items-center gap-2 text-[16px] text-[#5E6282]">
                  <Navigation size={16} className="text-[#5E6282]" />
                  <span>{dest.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block">
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={i}
              cx="30"
              cy={20 + i * 20}
              r={8 + i * 2}
              stroke="#181E4B"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
