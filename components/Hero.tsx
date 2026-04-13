'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10 py-12 lg:py-0">
            <p className="text-[#DF6951] font-semibold text-sm tracking-[3px] uppercase">
              Best Destinations around the world
            </p>

            <h1 className="text-[52px] md:text-[60px] lg:text-[68px] font-black leading-[1.1] text-[#181E4B]">
              Travel,{' '}
              <span className="relative inline-block text-[#181E4B]">
                enjoy
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C40 3 80 1 120 3C150 5 175 7 198 4"
                    stroke="#DF6951"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              and live a new
              <br />
              and full life
            </h1>

            <p className="text-[#7B8593] text-[15px] leading-relaxed max-w-[380px]">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate
              sell they west hard for the.
            </p>

            <div className="flex items-center gap-8 mt-2">
              <a
                href="#"
                className="bg-[#F1A501] text-white font-semibold text-[15px] px-8 py-4 rounded-md hover:bg-[#d4910a] transition-all duration-200 shadow-lg shadow-[#F1A501]/30 hover:shadow-[#F1A501]/50 hover:scale-105"
              >
                Find out more
              </a>

              <button className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#DF6951] flex items-center justify-center shadow-lg shadow-[#DF6951]/40 group-hover:scale-110 transition-transform duration-200">
                  <Play size={16} fill="white" className="text-white ml-0.5" />
                </div>
                <span className="text-[#686D77] font-medium text-[15px]">Play Demo</span>
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center">
            {/* Beige background blob */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#F5E8D4] rounded-full opacity-60 -z-0" />

            {/* Airplane icons */}
            <div className="absolute top-8 left-8 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                <path d="M10 20 L70 8 L60 20 L70 32 Z" fill="#38BDF8" opacity="0.9"/>
                <path d="M10 20 L70 8" stroke="#0EA5E9" strokeWidth="1"/>
                <rect x="40" y="16" width="20" height="8" rx="2" fill="#7DD3FC"/>
                <circle cx="75" cy="20" r="3" fill="#38BDF8"/>
              </svg>
            </div>

            <div className="absolute top-20 right-4 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                <path d="M5 15 L55 5 L47 15 L55 25 Z" fill="#38BDF8" opacity="0.8"/>
                <rect x="28" y="12" width="18" height="6" rx="1.5" fill="#7DD3FC"/>
              </svg>
            </div>

            {/* Traveler image */}
            {/* <div className="relative z-10 w-[380px] h-[480px] md:w-[420px] md:h-[520px]">
              <Image
                src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy traveler with backpack"
                fill
                className="object-cover object-top rounded-2xl"
                priority
              />
            </div> */}

            <div className="relative z-10 w-[380px] h-[480px] md:w-[420px] md:h-[520px]">
              <Image
                src="/travler.png"
                alt="Traveler with backpack"
                fill
                className="object-cover object-top rounded-2xl"
                priority
              />
            </div>



            {/* Floating stat card */}
            <div className="absolute bottom-12 -left-4 z-20 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F1A501] rounded-full flex items-center justify-center text-white font-bold text-lg">
                ✓
              </div>
              <div>
                <p className="text-[#181E4B] font-bold text-sm">500+ Happy Travelers</p>
                <p className="text-[#7B8593] text-xs">Live your dream</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
