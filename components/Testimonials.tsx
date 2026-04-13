'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';

const testimonials = [
  {
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
  },
  {
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      '"Travel is the only thing you buy that makes you richer. Every destination has a story to tell and a lesson to teach."',
    name: 'Sarah Johnson',
    location: 'New York, USA',
  },
  {
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      '"Jadoo made my dream vacation a reality. The booking process was seamless and the trip was absolutely wonderful."',
    name: 'James Wilson',
    location: 'London, UK',
  },
];

const partnerLogos = [
  { name: 'Axon Airlines', src: 'logos/OIP.jpeg', width: 140, height: 44 },
  { name: 'Jetstar', src: 'logos/jetstar1.jpeg', width: 140, height: 44 },
  { name: 'Expedia', src: 'logos/expedia.jpeg', width: 160, height: 48 },
  { name: 'Qantas', src: 'logos/qantas.jpeg', width: 150, height: 44 },
  { name: 'Alitalia', src: 'logos/alitalia.jpeg', width: 130, height: 40 },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left */}
          <div>
            <p className="text-[#7B8593] font-medium text-sm tracking-[3px] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-[42px] md:text-[48px] font-black text-[#181E4B] leading-tight mb-10">
              What People Say
              <br />
              About Us.
            </h2>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 h-3 bg-[#DF6951]' : 'w-3 h-3 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Testimonial Cards */}
          <div className="relative">
            {/* Active testimonial */}
            <div className="bg-white rounded-2xl shadow-lg shadow-[#181E4B]/8 p-6 mb-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#DF6951]">
                  <Image
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#7B8593] text-[14px] leading-relaxed mb-4">
                    {testimonials[active].quote}
                  </p>
                  <h4 className="text-[#181E4B] font-bold text-[15px]">{testimonials[active].name}</h4>
                  <p className="text-[#7B8593] text-[13px]">{testimonials[active].location}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setActive((prev) => Math.max(0, prev - 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#DF6951] hover:text-[#DF6951] transition-colors"
                  >
                    <ChevronUp size={14} />
                  </button>
                  <button
                    onClick={() => setActive((prev) => Math.min(testimonials.length - 1, prev + 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#DF6951] hover:text-[#DF6951] transition-colors"
                  >
                    <ChevronDown size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Next testimonial preview */}
            {active < testimonials.length - 1 && (
              <div className="bg-[#F8F8F8] rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => setActive(active + 1)}>
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonials[active + 1].avatar}
                    alt={testimonials[active + 1].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#181E4B] font-semibold text-[14px]">{testimonials[active + 1].name}</p>
                  <p className="text-[#7B8593] text-[12px]">{testimonials[active + 1].location}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Partner logos */}
        <div className="border-t border-gray-100 pt-12">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-12">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-105 transition duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
