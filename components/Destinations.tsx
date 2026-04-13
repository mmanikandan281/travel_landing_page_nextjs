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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[#7B8593] font-medium text-sm tracking-[3px] uppercase mb-3">
            Top Selling
          </p>
          <h2 className="text-[42px] md:text-[50px] font-black text-[#181E4B] leading-tight">
            Top Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4]">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="px-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[#181E4B] font-bold text-[17px]">{dest.name}</h3>
                  <span className="text-[#181E4B] font-bold text-[17px]">{dest.price}</span>
                </div>
                <div className="flex items-center gap-2 text-[#7B8593] text-[14px]">
                  <Navigation size={14} className="text-[#7B8593]" />
                  <span>{dest.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative spiral */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
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
