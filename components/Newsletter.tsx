'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="relative overflow-visible rounded-[28px] bg-[#F4F3F9] px-5 py-12 text-center md:rounded-[40px] md:px-10 md:py-20">
          <div className="pointer-events-none absolute -right-3 -top-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#747DEF] to-[#5E3BE1] shadow-[0_12px_22px_rgba(98,70,229,0.35)] md:-right-4 md:-top-4 md:h-16 md:w-16">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:h-6 md:w-6">
              <path d="M4 12L20 4L14 20L11 13L4 12Z" fill="white" />
            </svg>
          </div>

          <div className="pointer-events-none absolute -left-10 bottom-0 h-52 w-52 rounded-full border border-[#E8E6F2] opacity-70 md:h-72 md:w-72" />
          <div className="pointer-events-none absolute -left-4 bottom-10 h-44 w-44 rounded-full border border-[#EBE9F4] opacity-70 md:h-60 md:w-60" />
          <div className="pointer-events-none absolute right-8 top-4 h-36 w-36 rounded-full border border-[#EAE8F4] opacity-65 md:h-52 md:w-52" />
          <div className="pointer-events-none absolute right-4 top-14 h-28 w-28 rounded-full border border-[#ECEAF5] opacity-65 md:h-44 md:w-44" />

          <h2 className="mx-auto mb-8 max-w-[860px] text-[26px] font-semibold leading-[1.45] text-[#5E6282] md:mb-12 md:text-[34px]">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h2>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <label className="relative w-full sm:max-w-[420px]">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#39425D]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="3" stroke="#39425D" strokeWidth="1.5" />
                  <path d="M5 8L12 13L19 8" stroke="#39425D" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full rounded-[10px] border border-[#EEEEEE] bg-white py-4 pl-12 pr-4 text-[14px] text-[#39425D] transition-all focus:border-[#DF6951] focus:outline-none focus:ring-2 focus:ring-[#DF6951]/20"
              />
            </label>
            <button
              type="submit"
              className="w-full whitespace-nowrap rounded-[10px] bg-gradient-to-r from-[#FF946D] to-[#FF7D68] px-9 py-4 text-[15px] font-semibold text-white shadow-[0_16px_28px_rgba(255,125,104,0.26)] transition-all duration-200 hover:from-[#ff8b60] hover:to-[#f8715f] sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
