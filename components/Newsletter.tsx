'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-[28px] md:text-[36px] font-black text-[#181E4B] leading-snug mb-8 max-w-2xl mx-auto">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="flex-1 px-6 py-4 rounded-xl border border-gray-200 text-[#7B8593] text-[15px] focus:outline-none focus:border-[#DF6951] focus:ring-2 focus:ring-[#DF6951]/20 transition-all bg-[#F5F5F5]"
          />
          <button
            type="submit"
            className="bg-[#DF6951] text-white font-semibold text-[15px] px-8 py-4 rounded-xl hover:bg-[#c85840] transition-all duration-200 shadow-lg shadow-[#DF6951]/30 hover:shadow-[#DF6951]/50 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
