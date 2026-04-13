'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';

const testimonials = [
  {
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
  },
  {
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'Travel is the only thing you buy that makes you richer. Every destination has a story to tell and a lesson to teach.',
    name: 'Sarah Johnson',
    location: 'New York, USA',
  },
  {
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'Jadoo made my dream vacation a reality. The booking process was seamless and the trip was absolutely wonderful.',
    name: 'James Wilson',
    location: 'London, UK',
  },
];

const partnerLogos = [
  { name: 'Axon Airlines', src: '/logos/OIP.jpeg', width: 60, height: 16 },
  { name: 'Jetstar', src: '/logos/jetstar1.jpeg', width: 64, height: 16 },
  { name: 'Expedia', src: '/logos/expedia.jpeg', width: 80, height: 20, featured: true },
  { name: 'Qantas', src: '/logos/qantas.jpeg', width: 60, height: 16 },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-20 grid items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-[18px] font-semibold text-[#5E6282]">
              Testimonials
            </p>
            <h2
              className="mb-10 text-[38px] font-bold leading-[1] text-[#14183E] md:text-[50px]"
              style={{ fontFamily: 'var(--font-volkhov), serif' }}
            >
              What People Say
              <br />
              About Us.
            </h2>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'h-3 w-6 bg-[#39425D]' : 'h-3 w-3 bg-[#E5E5E5]'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="mb-4 rounded-[18px] bg-white p-7 shadow-[0_20px_45px_rgba(24,30,75,0.1)]">
              <div className="mb-4 flex items-start gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#DF6951]">
                  <Image
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="mb-4 text-[16px] leading-8 text-[#5E6282]">
                    {testimonials[active].quote}
                  </p>
                  <h4 className="text-[18px] font-semibold text-[#14183E]">{testimonials[active].name}</h4>
                  <p className="text-[14px] text-[#5E6282]">{testimonials[active].location}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setActive((prev) => Math.max(0, prev - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] transition-colors hover:border-[#DF6951] hover:text-[#DF6951]"
                  >
                    <ChevronUp size={14} />
                  </button>
                  <button
                    onClick={() => setActive((prev) => Math.min(testimonials.length - 1, prev + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] transition-colors hover:border-[#DF6951] hover:text-[#DF6951]"
                  >
                    <ChevronDown size={14} />
                  </button>
                </div>
              </div>
            </div>

            {active < testimonials.length - 1 && (
              <div
                className="flex cursor-pointer items-center gap-3 rounded-[18px] bg-[#F7F7F7] p-4 transition-colors hover:bg-[#F1F1F1]"
                onClick={() => setActive(active + 1)}
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[active + 1].avatar}
                    alt={testimonials[active + 1].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#14183E]">{testimonials[active + 1].name}</p>
                  <p className="text-[12px] text-[#5E6282]">{testimonials[active + 1].location}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-[#EAEAEA] pt-12">
          <div className="flex w-full flex-nowrap items-center justify-center gap-6 px-2 py-4">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className={`flex min-w-[60px] items-center justify-center opacity-60 transition duration-300 hover:scale-105 hover:opacity-100 ${
                  logo.featured ? 'rounded-[10px] bg-white px-3 py-3 shadow-[0_6px_14px_rgba(24,30,75,0.05)]' : ''
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-auto max-w-full object-contain grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
