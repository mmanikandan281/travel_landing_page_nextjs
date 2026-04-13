'use client';

import Image from 'next/image';
import { Play, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-[1160px] px-4 md:px-6">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center gap-14 md:flex-row md:items-center md:gap-10">
          <div className="z-10 flex max-w-[545px] flex-col items-start gap-6 py-4">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#DF6951]">
              Best Destinations around the world
            </p>

            <h1 className="font-['Georgia'] text-[3.35rem] font-bold leading-[0.95] tracking-[-0.04em] text-[#181E4B] sm:text-[4.2rem] lg:text-[5.25rem]">
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

            <p className="max-w-[430px] text-[16px] leading-8 text-[#5E6282]">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate
              sell they west hard for the.
            </p>

            <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-9">
              <a
                href="#"
                className="rounded-2xl bg-[#F1A501] px-8 py-5 text-[18px] font-medium text-white shadow-[0_20px_35px_rgba(241,165,1,0.28)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#d99100]"
              >
                Find out more
              </a>

              <button className="group flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DF6951] shadow-[0_16px_30px_rgba(223,105,81,0.3)] transition-transform duration-200 group-hover:scale-110">
                  <Play size={16} fill="white" className="ml-0.5 text-white" />
                </div>
                <span className="text-[17px] font-medium text-[#686D77]">Play Demo</span>
              </button>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center md:justify-end">
            <div className="absolute right-[-6%] top-[-8%] -z-10 h-[520px] w-[360px] rounded-bl-[180px] rounded-tl-[120px] rounded-tr-[28px] bg-[#FFF1DA] sm:h-[600px] sm:w-[430px] lg:h-[680px] lg:w-[520px]" />

            <div className="absolute left-[6%] top-[15%] z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                <path d="M10 20 L70 8 L60 20 L70 32 Z" fill="#38BDF8" opacity="0.9" />
                <path d="M10 20 L70 8" stroke="#0EA5E9" strokeWidth="1" />
                <rect x="40" y="16" width="20" height="8" rx="2" fill="#7DD3FC" />
                <circle cx="75" cy="20" r="3" fill="#38BDF8" />
              </svg>
            </div>

            <div className="absolute right-[4%] top-[18%] z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                <path d="M5 15 L55 5 L47 15 L55 25 Z" fill="#38BDF8" opacity="0.8" />
                <rect x="28" y="12" width="18" height="6" rx="1.5" fill="#7DD3FC" />
              </svg>
            </div>

            <div className="relative z-10 h-[430px] w-full max-w-[420px] sm:h-[520px] md:h-[580px] md:max-w-[500px] lg:translate-x-8">
              <Image
                src="/travler.png"
                alt="Traveler with backpack"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            <div className="absolute bottom-[8%] left-0 z-20 flex items-center gap-3 rounded-[18px] bg-white p-4 shadow-[0_18px_40px_rgba(24,30,75,0.14)] sm:left-[3%]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1A501] text-white">
                <Check size={18} strokeWidth={3} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#181E4B]">500+ Happy Travelers</p>
                <p className="text-xs text-[#5E6282]">Live your dream</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
